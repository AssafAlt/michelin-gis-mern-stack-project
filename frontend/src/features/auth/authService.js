import { axiosInstance } from "../../config/axiosConfig";

//Register user
const registerUser = async ({ username, password }) => {
  const res = await axiosInstance.post("/auth/register", {
    username,
    password,
  });
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

const login = async ({ username, password }) => {
  const res = await axiosInstance.post("/auth/login", { username, password });
  if (res.data) {
    const user = res.data;
    localStorage.setItem("user", JSON.parse(JSON.stringify(user)));
  }
  return res.data;
};

const logout = async () => {
  const res = await axiosInstance.post("/auth/logout", {});
  if (res) {
    localStorage.removeItem("user");
    console.log(res);
  }
};

const authService = {
  registerUser,
  login,
  logout,
};

export default authService;
