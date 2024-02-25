import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import SuccessAlert from "../../Components/Alerts/SuccessAlert";
import ErrorAlert from "../../Components/Alerts/ErrorAlert";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../Shared/SocialLogin";
import LoginAnim from "../../Components/animations/LoginAnim";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    console.log(data);
    loginUser(data.email, data.password)
      .then(() => {
        SuccessAlert("You Logged In Successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        ErrorAlert(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Melody Masters | Register</title>
      </Helmet>
      <div className="flex flex-col lg:flex-row items-center gap-4 mb-6 lg:mb-10">
        <LoginAnim />

        <div className="lg:basis-1/2 w-4/5">
          <div className="w-full lg:w-4/5 mx-auto">
            <h2 className="section-title dark:text-yellow-500">Login Now</h2>
            <div className="w-full shadow-2xl bg-base-100">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body pb-0 px-4 space-y-2"
              >
                <div className="form-part">
                  <label className="">Email</label>
                  <input
                    type="email"
                    placeholder="Email Here"
                    {...register("email", { required: true })}
                    className="form-input"
                  />
                  {errors.email && (
                    <span className="text-red-400">Email is required</span>
                  )}
                </div>
                <div className="form-part relative">
                  <label className="">Password</label>
                  <div
                    className={`absolute ${
                      Object.keys(errors).length === 0
                        ? "-bottom-1 right-4"
                        : "bottom-7 right-4"
                    }  cursor-pointer`}
                  >
                    <button onClick={() => setShowPassword(true)}>
                      {showPassword || (
                        <EyeIcon className="h-5 w-5 text-orange-500"></EyeIcon>
                      )}
                    </button>
                    <button onClick={() => setShowPassword(false)}>
                      {showPassword && (
                        <EyeSlashIcon className="h-5 w-5 text-orange-500"></EyeSlashIcon>
                      )}
                    </button>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="******"
                    {...register("password", { required: true })}
                    className="form-input"
                  />
                  {errors.password && (
                    <span className="text-red-400">Password is required</span>
                  )}
                </div>
                <div className="mt-6 flex justify-center">
                  <input className="custom-btn" type="submit" value="Login" />
                </div>
              </form>
              <div className="text-center">
                <div className="divider px-8">or login with</div>
                <SocialLogin />
              </div>
              <p className="text-center my-2">
                Do not have account yet?{" "}
                <Link to="/register" className="text-blue-500">
                  Regiter
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
