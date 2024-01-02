import { ENDPOINTS } from "../shared/constant/endpoints";
import { instanceAxios } from "../shared/helper/instanceAxious";

export const getUsers = () =>
  instanceAxios({ method: "Get", url: ENDPOINTS.USER });
export const getUsersID = (id) =>
  instanceAxios({ method: "Get", url: ENDPOINTS.USER_ID(id) });

export const addUser = (form) =>
  instanceAxios({ method: "Post", url: ENDPOINTS.USER, data: "form" });

export const uptUser = (id, form) =>
  instanceAxios({ method: "Put", url: ENDPOINTS.USER_ID(id), data: "form" });

export const rmvUser = (id) =>
  instanceAxios({ method: "Delete", url: ENDPOINTS.USER_ID(id) });
