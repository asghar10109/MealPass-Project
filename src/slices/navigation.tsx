import {createSlice} from "@reduxjs/toolkit";
import {
  FiToggleLeft,
  FiList,
  FiActivity,
  FiCalendar,
  FiStar,
  FiDroplet,
  FiGrid,
  FiClock,
  FiCopy,
  FiUser,
  FiPieChart,
  FiCompass,
  FiHelpCircle,
  FiShoppingCart,
  FiHome,
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
        title: "Resturants",
        items: [
          {
            url: "/social-feed",
            title: "New Resturant",
            items: [],
          },
          {
            url: "/tasks",
            title: "List All Resturant",
            items: [],
          },
          
        ],
      },
      {
        url: "/",
        icon: <FiActivity size={20} />,
        title: "Products",
        items: [
          {
            url: "/products",
            title: "Add New Products",
            items: [],
          },
          {
            url: "/list-products",
            title: "List All Products",
            items: [],
          },
          
        ],
      },
      {
        url: "/",
        icon: <FiStar size={20} />,
        title: "Demos",
        badge: {
          color: "bg-indigo-500 text-white",
          text: 6,
        },
        items: [
          {
            url: "/demo-1",
            title: "Light background",
            items: [],
          },
          {
            url: "/demo-2",
            title: "Dark background",
            items: [],
          },
          {
            url: "/demo-3",
            title: "Small sidebar",
            items: [],
          },
        ],
      },
      
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
