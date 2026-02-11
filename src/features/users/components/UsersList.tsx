/**
 * List view – base table layout.
 *
 * Implemented:
 * - Column structure aligned with Figma
 * - Candidate cell (avatar, name, rating, id)
 * - Static checkbox column
 *
 * Not implemented:
 * - Exact visual layout (spacing, icons, detailed styling)
 * - Sorting behavior
 * - Real data for profile/job/source (placeholders used)
 * - Row actions, filters, search, side panel
 *
 * This version focuses on structure and data rendering.
 */


import Stars from "../../../shared/components/Stars/Stars";
import type { UsersResponse } from "../types";
import "./UsersList.css";

const UsersList = ({ users }: UsersResponse) => {
  return (
    <div className="users-list">
      <div className="users-list__header">
        <div className="users-list__col users-list__col--checkbox" />
        <div className="users-list__col users-list__col--candidate">Candidate</div>
        <div className="users-list__col users-list__col--profile">Profile type</div>
        <div className="users-list__col users-list__col--location">Location & area</div>
        <div className="users-list__col users-list__col--job">Job & Talent pool</div>
        <div className="users-list__col users-list__col--source">Sourced by</div>
      </div>

      {users.map((user) => (
        <div className="users-list__row" key={user.id}>
          <div className="users-list__cell users-list__col--checkbox">
            <input type="checkbox" aria-label={`Select ${user.fullName}`} />
          </div>

          <div className="users-list__cell users-list__col--candidate">
            <div className="candidate-cell">
              <div className="candidate-cell__avatar">{user.fullName.charAt(0)}</div>
              <div className="candidate-cell__info">
                <div className="candidate-cell__name">{user.fullName}</div>
                <div className="candidate-cell__sub">
                  <Stars value={user.rating} />
                  <span className="candidate-cell__id">#{user.number}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="users-list__cell users-list__col--profile">
            <div className="chips">
              {/* Assumption: profile types not provided in JSON; using placeholders for now */}
              <span className="chip">Key account manager</span>
              <span className="chip">Sales manager</span>
            </div>
          </div>

          <div className="users-list__cell users-list__col--job">
            <div className="muted">{user.city}</div>
          </div>

          <div className="users-list__cell users-list__col--source">
            <span className="chip chip--ghost">LinkedIn</span>
          </div>

        </div>
      ))}
    </div>
  );
};

export default UsersList;
