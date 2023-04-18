import {createSlice} from "@reduxjs/toolkit";
import {
  // FiToggleLeft,
  // FiList,
  FiActivity,
  // FiCalendar,
  // FiStar,
  // FiDroplet,
  // FiGrid,
  // FiClock,
  // FiCopy,
  // FiUser,
  // FiPieChart,
  FiFileText,
  FiCompass,
  FiUsers,
  // FiHelpCircle,
  // FiShoppingCart,
  // FiHome,
} from "react-icons/fi";

export type NavigationState = {
  title: string;
  url?: string | undefined;
  items: NavigationState[];
  icon?: React.ReactNode;
  badge?: {
    color: string;
    text: string | number;
  };
};

const initialState: NavigationState[] = [
  {
    title: "Applications",
    items: [
      {
        url: "/",
        icon: <FiCompass size={20} />,
        title: "Dashboard",
        items: [],
      },
      {
        url: "/",
        icon: <FiActivity size={20} />,
        title: "Restaurants",
        items: [
          {
            url: "/admin/restaurants/create",
            title: "New Restaurant",
            items: [],
          },
          {
            url: "/admin/restaurants",
            title: "List All Restaurants",
            items: [],
          },
          
        ],
      },
      {
        url: "/",
        icon: <FiActivity size={20} />,
        title: "Items",
        items: [
          {
            url: "/restaurant/items/create",
            title: "Add New Item",
            items: [],
          },
          {
            url: "/restaurant/items",
            title: "List All Items",
            items: [],
          },
          
        ],
      },
      {
        url: "/",
        icon: <FiUsers size={20} />,
        title: "Users",
        items: [
          {
            url: "/admin/users",
            title: "List All Users",
            items: [],
          },
          
        ],
      },
      {
        url: "/",
        icon: <FiFileText size={20} />,
        title: "Policy",
        items: [
          {
            url: "/admin/terms",
            title: "Terms & Conditions",
            items: [],
          },
          {
            url: "/admin/policy",
            title: "Privacy Policy",
            items: [],
          },
          
        ],
      }
    ],
  },
  

];

// Define the initial state using that type

export const navigationSlice = createSlice({
  name: "navigation",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

export default navigationSlice.reducer;
