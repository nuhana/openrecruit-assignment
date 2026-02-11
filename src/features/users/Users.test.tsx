/**
 * Users page tests focus on:
 * - View switching (grid/list)
 * - Page size behavior (9 vs 10 items)
 */

import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import Users from "./Users";
import type { User } from "./types";


/**
 * Helper to render with a mocked Redux store
 */
function renderWithStore(preloadedUsers: User[]) {
  const store = configureStore({
    reducer: { users: usersReducer },
    preloadedState: {
      users: {
        items: preloadedUsers,
        status: "succeeded" as const,
        error: null,
      },
    },
  });

  return render(
    <Provider store={store}>
      <Users />
    </Provider>
  );
}

/**
 * Generate mock users
 */
function generateUsers(count: number): User[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `user-${i}`,
    firstName: "Test",
    lastName: `${i}`,
    fullName: `Test User ${i}`,
    number: i,
    rating: 4,
    city: "Copenhagen",
    country: "Denmark",
    profileTypesCount: 1,
    applicationCount: 1,
    talentPoolCount: 1,
    latestActivity: 1,
    profilePictureId: "",
    status: "status.hired",
    humatch: 90,
  }));
}

describe("Users page", () => {
  test("renders 9 users in grid view by default", () => {
    const users = generateUsers(20);

    renderWithStore(users);

    // Grid view default page size = 9
    const renderedUsers = screen.getAllByText(/Test User/i);
    expect(renderedUsers).toHaveLength(9);
  });

  test("renders 10 users when switched to list view", () => {
    const users = generateUsers(20);

    renderWithStore(users);

    // Click list toggle button
    const listButton = screen.getByRole("button", { name: /list/i });
    fireEvent.click(listButton);

    const renderedUsers = screen.getAllByText(/Test User/i);
    expect(renderedUsers).toHaveLength(10);
  });

  test("moves to next page when clicking Next", () => {
  const users = generateUsers(20);

  renderWithStore(users);

  const nextButton = screen.getByRole("button", { name: /next/i });
  fireEvent.click(nextButton);

  const renderedUsers = screen.getAllByText(/Test User/i);
  expect(renderedUsers).toHaveLength(9);
});

});
