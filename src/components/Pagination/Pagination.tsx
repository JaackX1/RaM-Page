import React from 'react';

interface PaginationProps {
  currentPage:number;
  totalPages:number;
  onPageChange:(page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };

  const handlePreviousPage = () => {
    scrollToTop();
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    scrollToTop();
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <React.Fragment>
      <div className="flex justify-center flex-wrap md:flex-nowrap items-center w-[100%] py-3">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`${currentPage === 1 ? 'bg-gray-100 text-gray-400' : 'bg-gray-200 hover:bg-gray-300'
            } p-2 md:p-3 border rounded-l-lg`}
        >
          Volver
        </button>

        {getPageNumbers().map((pageNumber, index) => (
          <button
            key={index}
            className={`${pageNumber === '...' ? 'bg-blue-300 hover:bg-blue-500/70 text-white active': currentPage === pageNumber ? 'bg-blue-400 hover:bg-blue-500/70 text-white active' : 'bg-white text-black hover:bg-gray-300'} 
            p-2 md:p-3 border`}
            disabled={currentPage === pageNumber || pageNumber === '...'}
            style={{
              backgroundColor: pageNumber === currentPage ? 'bg-blue-500' : '',
            }}
            onClick={() =>
              typeof pageNumber === 'number' && (onPageChange(pageNumber), scrollToTop())
            }
          >
            {pageNumber}
          </button>
        ))}

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`${currentPage === totalPages
              ? 'bg-gray-100 text-gray-400 '
              : 'bg-gray-200 hover:bg-gray-300'
            } p-2 md:p-3 border rounded-r-lg`}
        >
          Siguiente
        </button>
      </div>
    </React.Fragment>
  );
};

export default Pagination;
