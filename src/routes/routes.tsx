import { CalendarCheck2, type LucideIcon } from "lucide-react";
import { lazy } from "react";

interface IPages {
  type: "create" | "edit" | "show";
  pathName: string;
  component?: React.ComponentType;
  isVisible: boolean;
}

interface IRoutes {
  name: string;
  desc: string;
  icon: LucideIcon;
  pages: IPages[];
}
[];

// const TaskContainer = lazy(() => import("@/pages/"));

export const routeList: IRoutes[] = [
  {
    name: "Task Manager",
    desc: "Create amd Mange Task",
    icon: CalendarCheck2,
    pages: [
      {
        type: "create",
        isVisible: false,
        pathName: "/taskManager/create",
        // component: TaskContainer,
      },
    ],
  },
];
