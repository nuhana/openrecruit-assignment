import type { User } from "../types";
import "./UsersList.css";

type Props = {
  users: User[];
};

const UsersList = ({ users }: Props) => {
  return (
    <div className="users-list">
      <div className="users-list__header">
        <div className="users-list__col users-list__col--checkbox" />
        <div className="users-list__col users-list__col--candidate">Candidate</div>
        <div className="users-list__col users-list__col--profile">Profile type</div>
        <div className="users-list__col users-list__col--location">Location & area</div>
        <div className="users-list__col users-list__col--job">Job & Talent pool</div>
        <div className="users-list__col users-list__col--source">Sourced by</div>
        <div className="users-list__col users-list__col--activity">Latest activity</div>
      </div>

      {users.map((u) => (
        <div className="users-list__row" key={u.id}>
          <div className="users-list__cell users-list__col--checkbox">
            <input type="checkbox" aria-label={`Select ${u.fullName}`} />
          </div>

          <div className="users-list__cell users-list__col--candidate">
            <div className="candidate-cell">
              <div className="candidate-cell__avatar">{u.fullName.charAt(0)}</div>
              <div className="candidate-cell__info">
                <div className="candidate-cell__name">{u.fullName}</div>
                <div className="candidate-cell__sub">
                  <Stars value={u.rating} />
                  <span className="candidate-cell__id">#{u.number}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="users-list__cell users-list__col--profile">
            <div className="chips">
              {/* Assumption: profile types not provided in JSON; using placeholders */}
              <span className="chip">Key account manager</span>
              <span className="chip">Sales manager</span>
            </div>
          </div>

          <div className="users-list__cell users-list__col--location">
            <div className="location-cell">
              <span className="flag" aria-hidden="true">{flagEmoji(u.country)}</span>
              <span>{u.city}</span>
            </div>
            <div className="muted">Text</div>
          </div>

          <div className="users-list__cell users-list__col--job">
            <div className="muted">Text</div>
          </div>

          <div className="users-list__cell users-list__col--source">
            <span className="chip chip--ghost">LinkedIn</span>
          </div>

          <div className="users-list__cell users-list__col--activity">
            <span className="muted">{formatLatestActivity(u.latestActivity)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersList;

/** Keep stars simple (matches your screenshot enough) */
function Stars({ value }: { value: number }) {
  const full = Math.round(value);
  return (
    <span className="stars" aria-label={`Rating ${value} out of 5`}>
      {"★".repeat(full)}
      {"☆".repeat(Math.max(0, 5 - full))}
    </span>
  );
}

/** Small helper: convert known country names to flag emoji */
function flagEmoji(country: string) {
  const map: Record<string, string> = {
    Denmark: "🇩🇰",
    Norway: "🇳🇴",
    Sweden: "🇸🇪",
    "United Kingdom": "🇬🇧",
    Netherlands: "🇳🇱",
    Canada: "🇨🇦",
    France: "🇫🇷",
    Australia: "🇦🇺",
    Monaco: "🇲🇨",
    "United Arab Emirates": "🇦🇪",
    "Saudi Arabia": "🇸🇦",
  };
  return map[country] ?? "🏳️";
}

/** Assumption: latestActivity is a number; we display a simple label */
function formatLatestActivity(latestActivity: number) {
  // In your JSON it's inconsistent; keep it simple for now.
  if (latestActivity <= 2) return "2 days ago";
  if (latestActivity <= 7) return "7 days ago";
  return "—";
}
