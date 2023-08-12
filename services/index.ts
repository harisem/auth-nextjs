import { AuthResponse, Login, MyResponse } from "@/types";
import axios, { AxiosError } from "axios";

export async function login(payload: Login): Promise<AuthResponse> {
  try {
    const { data } = await axios.post("/api/auth/login", payload);

    return {
      message: data.message,
      data: data.data,
    };
  } catch (e) {
    const error = e as AxiosError;

    return {
      message: error.message,
      data: null,
    };
  }
}

export async function logout(): Promise<{ message: string }> {
  try {
    const { data } = await axios.post("/api/auth/logout");

    return { message: data.message };
  } catch (e) {
    const error = e as AxiosError;

    return { message: error.message };
  }
}

export async function getUser(): Promise<MyResponse> {
  try {
    const { data } = await axios.get("/api/auth/me");

    return {
      message: data.message,
      data: data.data,
      error: null,
    };
  } catch (e) {
    const error = e as AxiosError;

    return {
      message: error.message,
      data: null,
      error: error,
    };
  }
}
