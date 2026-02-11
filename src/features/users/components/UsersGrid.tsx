import type {  UsersResponse } from "../types";
import UserCard from "./UserCard";
import "./UsersGrid.css";

const UsersGrid = ({ users }: UsersResponse) => {
  return (
    <div className="users-grid">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersGrid;
