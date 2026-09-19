import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });
export const loginUser = async (email, password) => {
  const { data } = await API.get("/users", { params: { email, password } });
  if (!data.length) throw new Error("Invalid email or password");
  return data[0];
};
export const getUsers = () => API.get("/users").then(r => r.data);
export const getDepartments = () => API.get("/departments").then(r => r.data);
export const getLeaveTypes = () => API.get("/leaveTypes").then(r => r.data);
export const getLeaveRequests = () => API.get("/leaveRequests").then(r => r.data);
export const getLeaveRequestById = (id) => API.get(`/leaveRequests/${id}`).then(r => r.data);
export const createLeaveRequest = (p) => API.post("/leaveRequests", p).then(r => r.data);
export const updateLeaveStatus = (id, status, mid) => API.patch(`/leaveRequests/${id}`, { status, approved_by: mid, updated_at: new Date().toISOString().split("T")[0] }).then(r => r.data);
