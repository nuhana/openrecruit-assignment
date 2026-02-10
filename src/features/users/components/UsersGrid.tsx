import type { User } from "../types";
import UserCard from "./UserCard";
import "./UsersGrid.css";

type Props = {
  users: User[];
};

const UsersGrid = ({ users }: Props) => {
  return (
    <div className="users-grid">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersGrid;
