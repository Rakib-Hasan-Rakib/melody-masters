import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import SuccessAlert from "../../Components/Alerts/SuccessAlert";
import ErrorAlert from "../../Components/Alerts/ErrorAlert";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin";
import LoginAnim from "../../Components/animations/LoginAnim";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserInfo } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setPasswordError(true);
      return;
    }
    createUser(data.email, data.password)
      .then(() => {
        updateUserInfo(data.name, data.photoUrl)
          .then(() => {
            const registerdUser = {
              name: data.name,
              email: data.email,
              photo: data.photoUrl,
            };
            fetch("https://melody-masters-server.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(registerdUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  SuccessAlert("Your Account Created Successfully");
                  navigate(from, { replace: true });
                }
              });
          })
          .catch((error) => {
            ErrorAlert(error.message);
          });
      })
      .catch(() => {});
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
            <h2 className="section-title mb-6">Complete Your Registration</h2>
            <div className="w-full shadow-2xl bg-base-100">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body pb-0 px-4 space-y-2"
              >
                <div className="form-part">
                  <label className="">Name</label>
                  <input
                    type="text"
                    placeholder="Name Here"
                    {...register("name", { required: true })}
                    className="form-input"
                  />
                  {errors.name && (
                    <span className="text-red-500">Name is required</span>
                  )}
                </div>
                <div className="form-part">
                  <label className="">Email</label>
                  <input
                    type="email"
                    placeholder="Email Here"
                    {...register("email", { required: true })}
                    className="form-input"
                  />
                  {errors.email && (
                    <span className="text-red-500">Email is required</span>
                  )}
                </div>
                <div className="form-part relative">
                  <label className="">Password</label>
                  <div
                    className={`absolute ${
                      Object.keys(errors).length === 0
                        ? "bottom-2 right-4"
                        : "bottom-9 right-4"
                    }  cursor-pointer`}
                  >
                    <p onClick={() => setShowPassword(true)}>
                      {showPassword || (
                        <EyeIcon className="h-5 w-5 text-orange-500"></EyeIcon>
                      )}
                    </p>
                    <p onClick={() => setShowPassword(false)}>
                      {showPassword && (
                        <EyeSlashIcon className="h-5 w-5 text-orange-500"></EyeSlashIcon>
                      )}
                    </p>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password Here"
                    {...register("password", {
                      required: true,
                      maxLength: 20,
                      minLength: 6,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    className="form-input"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-500">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-500">
                      Password must be 6 characters long
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-500">
                      Password can not contain more than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-500">
                      Password must have one Uppercase, one lower case, one
                      number and one special character.
                    </p>
                  )}
                </div>
                <div className="form-part relative">
                  <label className="">Confirm Password</label>
                  <div
                    className={`absolute ${
                      Object.keys(errors).length === 0
                        ? "bottom-2 right-4"
                        : "bottom-9 right-4"
                    }  cursor-pointer`}
                  >
                    <p onClick={() => setShowConfirmPassword(true)}>
                      {showConfirmPassword || (
                        <EyeIcon className="h-5 w-5 text-orange-500"></EyeIcon>
                      )}
                    </p>
                    <p onClick={() => setShowConfirmPassword(false)}>
                      {showConfirmPassword && (
                        <EyeSlashIcon className="h-5 w-5 text-orange-500"></EyeSlashIcon>
                      )}
                    </p>
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="ReEnter Password"
                    {...register("confirmPassword", { required: true })}
                    className="form-input"
                  />

                  {errors.confirmPassword?.type === "required" && (
                    <span className="text-red-500">
                      You must confirm your password
                    </span>
                  )}
                  {passwordError && (
                    <span className="text-red-500">
                      Your password does not match
                    </span>
                  )}
                </div>
                <div className="form-part">
                  <label className="">Photo URL</label>
                  <input
                    type="text"
                    placeholder="Drop Your Photo URL Here"
                    {...register("photoUrl", { required: true })}
                    className="form-input"
                  />
                  {errors.photoUrl && (
                    <span className="text-red-500">Photo URL is required</span>
                  )}
                </div>
                <div className="mt-6 flex justify-center">
                  <input
                    className="custom-btn"
                    type="submit"
                    value="Register"
                  />
                </div>
              </form>
              <div className="text-center">
                <div className="divider px-8">or register with</div>
                <SocialLogin />
              </div>
              <p className="text-center my-2 pb-2">
                Already have an account?&nbsp;
                <Link to="/login" className="text-blue-500">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
