import avatar from "../../assets/images/avatar.jpg";
import useAuth from "../../hooks/useAuth";

const NavProfile = () => {
  const { user } = useAuth();

  return (
    <img
      className="rounded-full w-12 cursor-pointer"
      src={user && user.photoURL ? user.photoURL : avatar}
      alt="profile"
    />
  );
};

export default NavProfile;
