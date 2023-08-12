import { AxiosError } from "axios";

export interface AuthResponse {
  message: string | null;
  data: {
    token: string;
  } | null;
}

export interface MyResponse {
  message: string | null;
  data: {
    name: string;
    username: string;
  } | null;
  error: AxiosError | null;
}

export interface Login {
  username: string | null;
  password: string | null;
}
