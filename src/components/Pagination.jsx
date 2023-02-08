import React from "react";

const Pagination = ({ numbersPage, setPage }) => {
  return (
    <div className="navigation">
      <ul>
        {numbersPage().map((numberPage) => (
          <li onClick={() => setPage(numberPage)} key={numberPage}>
            {" "}
            {numberPage}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
