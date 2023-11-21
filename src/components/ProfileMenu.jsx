import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { saveUserToLocalStorage } from "../service/userService";
import { logout } from "../service/userService";
import { getUser } from "../service/userService";
import { useState, useEffect, cloneElement } from "react";
const ProfileMenu = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };
  const [userInfor, setUserInfor] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const info = await getUser();
        // setUser(userInfo);
        if (info && info.data && info.data.user && info.data.user._json) {
          console.log("user test", info.data.user._json);
          setUserInfor(info.data.user._json);
          saveUserToLocalStorage(info.data.user);
          //dispatch(setUser(info.data.user));
        }

        // console.log("user infor", userInfor);
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Menu>
      <MenuHandler>
        <Avatar
          variant="circular"
          className="cursor-pointer"
          src={userInfor.picture}
        />
      </MenuHandler>
      <MenuList>
        <MenuItem className="flex items-center gap-2">
          <UserCircleIcon className="w-5" />

          <Typography variant="small" className="font-medium">
            Tài khoản
          </Typography>
        </MenuItem>
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem className="flex items-center gap-2" onClick={handleLogout}>
          <ArrowLeftOnRectangleIcon className="w-5" />
          <Typography variant="small" className="font-medium">
            Đăng xuất
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
