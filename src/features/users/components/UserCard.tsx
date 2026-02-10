import type { User } from "../types";
import "./UserCard.css";

type Props = {
  user: User;
};

const UserCard = ({ user }: Props) => {
  return (
    <div className="user-card">
      <div className="user-card__header">
        <div className="user-card__avatar">
          {user.fullName.charAt(0)}
        </div>

        <div className="user-card__info">
          <h3 className="user-card__name">{user.fullName}</h3>
          <p className="user-card__location">
            {user.city}, {user.country}
          </p>
        </div>
      </div>

      <div className="user-card__stats">
        <div>
          <strong>{user.profileTypesCount}</strong>
          <span>Profiles</span>
        </div>
        <div>
          <strong>{user.applicationCount}</strong>
          <span>Applications</span>
        </div>
        <div>
          <strong>{user.talentPoolCount}</strong>
          <span>Talent pools</span>
        </div>
      </div>

      <button className="user-card__button">
        View candidate
      </button>
    </div>
  );
};

export default UserCard;
