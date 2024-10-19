import React, { useState } from "react";

const AddTask = ({ onAddTask, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || title.length < 1) {
      setError("Title is required");
      return;
    }

    if (description.length > 200) {
      setError("Description must be less than 200 characters.");
      return;
    }

    setError("");
    onAddTask({ title, description, priority, completed: false });
    setTitle("");
    setDescription("");
    setPriority("medium");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        required
        style={inputStyle}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
        style={textareaStyle}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={selectStyle}
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button type="submit" style={buttonStyle}>
        Add Task
      </button>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </form>
  );
};

export default AddTask;

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  maxWidth: "400px",
  margin: "6px auto",
  padding: "20px",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9",
};

const inputStyle = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  fontSize: "16px",
  outline: "none",
  transition: "border-color 0.3s",
};

const textareaStyle = {
  ...inputStyle,
  minHeight: "80px",
};

const selectStyle = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  fontSize: "16px",
  outline: "none",
  transition: "border-color 0.3s",
};

const buttonStyle = {
  padding: "10px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#0070f3",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
  transition: "background-color 0.3s, transform 0.2s",
};
