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

interface forgotPasswordType {
  email: string;
}

interface resetPasswordType {
  password: string;
  verificationCode: string;
}

export const loginMutationFn = async (data: LoginType) =>
  await API.post("/auth/login", data);

export const registerMutationFn = async (data: registerType) =>
  await API.post("/auth/register", data);

export const forgotPasswordMutationFn = async (data: forgotPasswordType) =>
  await API.post(`/auth/password/forgot`, data);

export const resetPasswordMutationFn = async (data: resetPasswordType) =>
  await API.post(`/auth/password/reset`, data);
