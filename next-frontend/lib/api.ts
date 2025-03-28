import API from "./axios-client";

interface LoginType {
  email: string;
  password: string;
}

interface registerType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const loginMutationFn = async (data: LoginType) =>
  await API.post("/auth/login", data);

export const registerMutationFn = async (data: registerType) =>
  await API.post("/auth/register", data);
