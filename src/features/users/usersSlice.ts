/**
 * Users slice.
 *
 * Manages async loading state and normalized user list.
 * Follows standard data/status/error pattern for async Redux state.
 */


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { User } from "./types";
import { fetchUsersApi } from "./usersApi";

export type UsersState = {
  items: User[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const initialState: UsersState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchUsers = createAsyncThunk<User[]>(
  "users/fetchUsers",
  async () => {
    return await fetchUsersApi();
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // No synchronous reducers needed for this assignment
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to load users";
      });
  },
});

export default usersSlice.reducer;
