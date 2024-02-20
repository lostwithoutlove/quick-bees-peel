import { IResourceItem } from "@refinedev/core";
import {
  DashboardOutlined,
  ProjectOutlined,
  ShopOutlined,
} from "@ant-design/icons";

export const resources: IResourceItem[] = [
  {
    /*
Resource in refine performs following actions 
1. List -> get all records (Read)
2. Show -> get a single record (Read)
3. Create -> create a new record (Create)
4. Edit -> update a record (Update)
5. Delete -> delete a record (Delete)
 */

    name: "Dashboard",
    list: "/",
    meta: {
      label: "Dashboard",
      icon: <DashboardOutlined />,
    },
  },

  {
    name: "companies",
    list: "/companies",
    show: "/companies/:id",
    create: "/companies/new",
    edit: "/companies/edit/:id",
    meta: {
      label: "Companies",
      icon: <ShopOutlined />,
    },
  },
  {
    name: "tasks",
    list: "/tasks",
    create: "/tasks/new",
    edit: "/tasks/edit/:id",
    meta: {
      label: "Tasks",
      icon: <ProjectOutlined />,
    },
  },
];
