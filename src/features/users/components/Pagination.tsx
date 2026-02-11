/**
 * Pagination component.
 *
 * Basic behavior implemented (Prev/Next navigation).
 * Not fully unit tested due to time constraints.
 *
 * Production tests would include:
 * - Boundary conditions (first/last page)
 * - Disabled button states
 * - Correct page index updates
 */


import "./Pagination.css";

type Props = {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
};

const Pagination = ({ page, totalPages, onPrev, onNext }: Props) => {
  return (
    <div className="pagination">
      <button type="button" onClick={onPrev} disabled={page <= 1}>
        Prev
      </button>

      <span className="pagination__text">
        Page {page} / {totalPages}
      </span>

      <button type="button" onClick={onNext} disabled={page >= totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
