import { BiSolidDashboard } from "react-icons/bi";
import { IoBagAdd } from "react-icons/io5";
import { FaUserCog } from "react-icons/fa";

const user = {
  role: "admin",
};

const SideData = () => {
  let sideData = [];

  if (user.role === "admin") {
    sideData = [
      {
        path: "/dashboard",
        title: <BiSolidDashboard />,
      },
      {
        path: "/dashboard/addProduct",
        title: <IoBagAdd />,
      },
      {
        path: "/dashboard/userListing",
        title: <FaUserCog />,
      },
    ];
  } else if (user.role === "user") {
    sideData = [
      {
        path: "/dashboard/myOrder",
        title: "My Order",
      },
      {
        path: "/dashboard/myWishList",
        title: "My WishList",
      },
    ];
  }

  return sideData;
};

export default SideData;