import "./ViewToggle.css";

export type ViewMode = "grid" | "list";

type Props = {
  value: ViewMode;
  onChange: (next: ViewMode) => void;
};

const ViewToggle = ({ value, onChange }: Props) => {
  return (
    <div className="view-toggle" role="group" aria-label="View toggle">
      <button
        type="button"
        className={value === "grid" ? "view-toggle__btn is-active" : "view-toggle__btn"}
        onClick={() => onChange("grid")}
      >
        Grid
      </button>

      <button
        type="button"
        className={value === "list" ? "view-toggle__btn is-active" : "view-toggle__btn"}
        onClick={() => onChange("list")}
      >
        List
      </button>
    </div>
  );
};

export default ViewToggle;
