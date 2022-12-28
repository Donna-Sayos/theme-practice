import { useRef } from "react";
import { IoLogoFacebook, IoLogoGoogle } from "react-icons/io5";
import DIAMOND from "../../component/assets/diamond.png";

export default function Form() {
  const btnRef = useRef(null);

  return (
    <section>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="form-container card shadow-lg p-3 mb-5">
              <div className="card-body p-5 text-center">
                <img src={DIAMOND} width={80} height={60} alt="diamond" />
                <h3 className="mb-5">Sign in</h3>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    ref={btnRef}
                  />
                  <label className="form-label" htmlFor="typeEmailX-2">
                    Email
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="typePasswordX-2">
                    Password
                  </label>
                </div>
                <div className="form-check d-flex justify-content-start mb-4">
                  <input className="form-check-input" type="checkbox" />
                  <label
                    className="form-check-label mx-1"
                    htmlFor="form1Example3"
                  >
                    {" "}
                    Remember password{" "}
                  </label>
                </div>
                <button
                  className="login btn btn-warning btn-lg"
                  type="submit"
                  onClick={() => btnRef.current.focus()}
                >
                  Login
                </button>
                <hr className="my-4" />{" "}
                {/* This creates a line divider between the buttons */}
                <button
                  className="btn btn-lg btn-block btn-success mb-2 m-1"
                  type="submit"
                >
                  <IoLogoGoogle size={25} />
                </button>
                <button
                  className="facebook btn btn-lg btn-block btn-primary mb-2 m-1"
                  type="submit"
                >
                  <IoLogoFacebook size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
