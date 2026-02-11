import data from "../../data/users.json";
import type { User, UsersResponse } from "./types";

export async function fetchUsersApi(): Promise<User[]> {
  // simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  return (data as UsersResponse).users;
}
