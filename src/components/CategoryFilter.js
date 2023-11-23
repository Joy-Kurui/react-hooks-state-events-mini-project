// import React, { useState }from "react";

// function CategoryFilter({tasks, categories, setTasks}) {

//   const [selectedCategory, setSelectedCategory] = useState("All");

//   function handleCategoryFilter (e){
//     const category = e.target.value
//       setSelectedCategory(category);
//       const filteredTasks =
//       selectedCategory === "All" ? tasks : tasks.filter((task) => task.category === category);
//     setTasks(filteredTasks);
//   };

//   return (
//     <div className="categories">
//       <h5>Category filters</h5>
//       {/* render <button> elements for each category here */}
//       {categories.map((category) => (
//         <button
//           key={category}
//           onClick={() => handleCategoryFilter(category)} value={category}
//         >
//           {category}
//         </button>
//           ))}
//     </div>
//   );
// }

// export default CategoryFilter;

import React, { useState } from "react";

function CategoryFilter({ tasks, categories, setTasks }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryFilter(e) {
    const category = e.target.value;
    setSelectedCategory(category);
    const filteredTasks =
      category === "All" ? tasks : tasks.filter((task) => task.category === category);
    setTasks(filteredTasks);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          onClick={handleCategoryFilter}
          value={category}
          className={selectedCategory === category ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
