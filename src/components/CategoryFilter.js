import React from "react";

function CategoryFilter({ categories, categorySelected, onSelectedCategory }) {
  const categoryButton = categories.map((category) => {
    const className = category === categorySelected ? "selected" : null;
    return (
      <button
        key={category}
        className={className}
        onClick={() => onSelectedCategory(category)}
      >
        {category}
      </button>
    );
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;
