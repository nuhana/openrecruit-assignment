# OpenRecruit React Assignment

## Overview

This project implements the candidate list page based on the provided Figma design using React, TypeScript, and Redux Toolkit. The focus of the implementation is clean structure, predictable state management, and clear trade-offs within a limited time scope.

The page supports:

- Grid view (9 items per page)
- List view (10 items per page)
- View toggle (grid/list)
- Basic pagination (Prev / Next)

Data is fetched via Redux using createAsyncThunk, with a mocked API layer reading from a local users.json file. A small artificial delay simulates realistic asynchronous behavior.

---

## Setup Instructions

Install dependencies:

npm install

Start development server:

npm run dev

Run tests:

npm test

The app runs locally at:

http://localhost:5173

---

## Architecture

The solution follows a clear separation of concerns:

users.json → usersApi → usersSlice → Users page

- usersApi simulates a backend API
- usersSlice manages async state (items, status, error)
- UI components are separated into grid, list, and card components
- Redux Toolkit is used for predictable async state management

---

## Testing

Tests focus on core business behavior:

- Default grid rendering (9 users per page)
- Switching to list view (10 users per page)
- View toggle interaction

Presentational components are not individually unit tested to avoid low-value snapshot tests. In a production environment, additional tests would include pagination edge cases, loading/error states, and accessibility behavior.

---

## Assumptions and Trade-offs

Due to time constraints, the implementation prioritizes structural correctness and state logic over pixel-perfect styling.

- Some Figma details were simplified.
- Fields not available in the provided JSON were replaced with placeholders.
- Sorting, filtering, and row-level interactions were intentionally omitted.
- Full accessibility coverage and advanced pagination testing were not implemented.

These would be natural extensions in a production-ready solution.

---

## Notes

The implementation emphasizes:

- Clear component structure
- Separation of concerns
- Testable business logic
- Intentional scope control
