import Lottie from "lottie-react";
import loginAnimation from '../../../public/animations/login-anim.json'

const LoginAnim = () => {
  return (
    <>
      <div className="w-full lg:w-1/2">
        <Lottie animationData={loginAnimation} loop />
      </div>
    </>
  );
};
export default LoginAnim;
