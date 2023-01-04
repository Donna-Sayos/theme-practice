import {lazy, Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';

import Loading from '../component/fallback/Loading';
import Form from './form/Form';
const Signup = lazy(() => import('./form/Signup'));

export default function AppRoutes() {
  return (
    <>
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path='/' element={<Form />} />
                <Route path='signup' element={<Signup />} />
            </Routes>
        </Suspense>
    </>
  )
}
