import api from "@/app/service/api";
import {
  CreateUserAPI,
  CreateUserResponseAPI,
  DeleteUserResponseAPI,
  UpdateUserAPI,
  UpdateUserResponseAPI,
  UserLogin,
  UserResponseAPI,
} from "@/app/types/user";

const loginUser = async (user: UserLogin): Promise<UserResponseAPI> => {
  try {
    const response = await api.post(
      `/user/validarLogin/${user.login}/${user.password}`
    );

    return response.data;
  } catch (err) {
    throw err;
  }
};

const listUsers = async (): Promise<UserResponseAPI[]> => {
  try {
    const response = await api.get("/user/list");
    return response.data;
  } catch (err) {
    throw err;
  }
};

const createUser = async (
  user: CreateUserAPI
): Promise<CreateUserResponseAPI> => {
  try {
    const response = await api.post("/user", user);
    return response.data;
  } catch (err) {
    throw err;
  }
};

const userDetail = async (id: number): Promise<UserResponseAPI> => {
  try {
    const response = await api.get(`/user/${id}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};

const userDelete = async (id: number): Promise<DeleteUserResponseAPI> => {
  try {
    const response = await api.delete(`/user/${id}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};

const updateUser = async (
  user: UpdateUserAPI
): Promise<UpdateUserResponseAPI> => {
  try {
    const response = await api.put("/user", user);
    return response.data;
  } catch (err) {
    throw err;
  }
};

const searchUser = async (name: string): Promise<UserResponseAPI[]> => {
  try {
    const response = await api.get(`/user/nome/${name}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export {
  loginUser,
  listUsers,
  createUser,
  userDetail,
  userDelete,
  updateUser,
  searchUser,
};
