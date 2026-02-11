/**
 * Users page container.
 *
 * Responsibilities:
 * - Fetch users via Redux on first mount
 * - Manage view mode (grid/list)
 * - Handle pagination logic (9 items for grid, 10 for list)
 *
 * Trade-offs:
 * - Pagination logic is handled locally for simplicity.
 * - Advanced features such as sorting and filtering are intentionally omitted.
 */


import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchUsers } from "./usersSlice";

import UsersGrid from "./components/UsersGrid";
import UsersList from "./components/UsersList";
import ViewToggle, { type ViewMode } from "./components/ViewToggle";
import Pagination from "./components/Pagination";
import "./Users.css";

const GRID_PAGE_SIZE = 9;
const LIST_PAGE_SIZE = 10;

const Users = () => {
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector((data) => data.users);

  const [view, setView] = useState<ViewMode>("grid");
  const [page, setPage] = useState(1);

 useEffect(() => {
  if (status === "idle") {
    dispatch(fetchUsers());
  }
}, [dispatch, status]);


  // Reset to page 1 when switching views (prevents being on an invalid page)
  const handleViewChange = (newView: ViewMode) => {
    setView(newView);
    setPage(1);
  };

  // Page size is dynamic based on view mode.
  // Grid: 9 items (matches design requirement)
  // List: 10 items (matches design requirement)
  const pageSize = view === "grid" ? GRID_PAGE_SIZE : LIST_PAGE_SIZE;

  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(items.length / pageSize));
  }, [items.length, pageSize]);

  const pagedUsers = useMemo(() => {
    const start = (page - 1) * pageSize;
    return items.slice(start, start + pageSize);
  }, [items, page, pageSize]);

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));

  if (status === "loading") return <p className="users-page">Loading…</p>;
  if (status === "failed") return <p className="users-page">Error: {error}</p>;

  return (
    <div className="users-page">
      <div className="users-page__topbar">
        <h1 className="users-page__title">Candidates</h1>
        <ViewToggle value={view} onChange={handleViewChange} />
      </div>

      {view === "grid" ? (
        <UsersGrid users={pagedUsers} />
      ) : (
        <UsersList users={pagedUsers} />
      )}

      <Pagination page={page} totalPages={totalPages} onPrev={handlePrev} onNext={handleNext} />
    </div>
  );
};

export default Users;
