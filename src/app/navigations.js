import ConstantList from "./appConfig";
export const navigations = [
  {
    name: "Dashboard.dashboard",
    icon: "home",
    path: ConstantList.ROOT_PATH + "dashboard/analytics",
    isVisible: true,
  }
  , {
    name: "Dashboard.manage",
    isVisible: true,
    icon: "person",
    children: [
      {
        name: "manage.employee",
        isVisible: true,
        path: ConstantList.ROOT_PATH + "staff_manager/staff",
      },
    ]
  },

  {
    name: "Dashboard.leader",
    icon: "receipt",
    path: "",
    isVisible: true,
    children: [

      {
        name: "Dashboard.category",
        path: ConstantList.ROOT_PATH + "directory/category",
        isVisible: true,
      },
      {
        name: "Dashboard.timeshet",
        path: ConstantList.ROOT_PATH + "directory/timesheet",
        isVisible: true,
      }
    ]
  }

];
