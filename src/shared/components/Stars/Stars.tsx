import "./Stars.css";

type Props = {
  value: number;
};

/**
 * Simple star rating component.
 * Intentional: basic visual representation (no half-stars) due to time constraints.
 */
const Stars = ({ value }: Props) => {
  const full = Math.round(value);

  return (
    <span className="stars" aria-label={`Rating ${value} out of 5`}>
      {"★".repeat(full)}
      {"☆".repeat(Math.max(0, 5 - full))}
    </span>
  );
};

export default Stars;
