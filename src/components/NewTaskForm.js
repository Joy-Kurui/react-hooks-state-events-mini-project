 import React from "react";
 import { useState } from "react";

 function NewTaskForm({ categories, onTaskFormSubmit}) {

  const [formData, setFormData] = useState({
    text: "",
    category: "", 
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  
   
    

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    onTaskFormSubmit(formData);
  
  };


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleInputChange} />
        <input type="text" name="text" value={formData.category} onChange={handleInputChange} />
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleInputChange}>
          {/* render <option> elements for each category here */}
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

 export default NewTaskForm;

