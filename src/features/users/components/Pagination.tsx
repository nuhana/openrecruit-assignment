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
