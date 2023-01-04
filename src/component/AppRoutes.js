import {lazy, Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';

import Loading from '../component/fallback/Loading';
import Login from './form/Login';
const Signup = lazy(() => import('./form/Signup'));

export default function AppRoutes() {
  return (
    <>
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='signup' element={<Signup />} />
            </Routes>
        </Suspense>
    </>
  )
}
