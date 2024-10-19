import React, { useState } from "react";
import Modal from "../globals/Modal";
import AddTask from "../AddTask";

const TodaysTasks = ({ onAddTask }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "6px",
  };

  const dateStyle = {
    fontSize: "16px",
    color: "#555",
  };

  const addTaskButtonStyle = {
    backgroundColor: "#0070f3",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 15px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <div>
      <div style={headerStyle}>
        <div>
          <h2>Your Tasks</h2>
          <div style={dateStyle}>{currentDate}</div>
        </div>
        <button style={addTaskButtonStyle} onClick={handleOpenModal}>
          Add Task
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} head={"Add Task"}>
        <AddTask onAddTask={onAddTask} onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default TodaysTasks;
