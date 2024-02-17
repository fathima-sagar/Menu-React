import React from "react";

function Category({ category, filterItems }) {
  return (
    <div className="btn-container">
      {category.map((cat) => {
        return (
          <button className="btn" key={cat} onClick={() => filterItems(cat)}>
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default Category;
