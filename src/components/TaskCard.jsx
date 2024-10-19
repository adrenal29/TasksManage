import React, { useState } from "react";

const TaskCard = ({ task, onUpdate, onDelete, onToggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);
  const [hoveredAction, setHoveredAction] = useState(null);

  const handleUpdate = () => {
    onUpdate(editedTask);
    setIsEditing(false);
  };

  const styles = {
    buttonStyle: {
      background: "none",
      border: "none",
      fontSize: "16px",
      cursor: "pointer",
      padding: "5px 10px",
    },
    container: {
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      padding: "16px",
      margin: "12px 0",
      boxShadow: "0 2px 4px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      border: "1px solid",
      borderColor:
        task.priority === "high"
          ? "#fecaca"
          : task.priority === "medium"
          ? "#fde68a"
          : "#bbf7d0",
      maxWidth: "600px",
      width: "100%",
      position: "relative",
    },
    containerHover: {
      transform: "translateY(-1px)",
      boxShadow: "0 4px 6px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.1)",
    },
    priorityBadge: {
      position: "absolute",
      top: "12px",
      right: "12px",
      padding: "4px 8px",
      borderRadius: "12px",
      fontSize: "12px",
      fontWeight: "600",
      backgroundColor:
        task.priority === "high"
          ? "#fee2e2"
          : task.priority === "medium"
          ? "#fef3c7"
          : "#dcfce7",
      color:
        task.priority === "high"
          ? "#dc2626"
          : task.priority === "medium"
          ? "#d97706"
          : "#059669",
    },
    title: {
      margin: "0 0 8px 0",
      fontSize: "18px",
      fontWeight: "600",
      color: "#1f2937",
      paddingRight: "80px",
    },
    description: {
      margin: "0 0 16px 0",
      fontSize: "14px",
      color: "#6b7280",
      lineHeight: "1.5",
    },
    input: {
      width: "100%",
      padding: "10px 14px",
      borderRadius: "8px",
      border: "2px solid #e5e7eb",
      fontSize: "14px",
      marginBottom: "12px",
      outline: "none",
      transition: "border-color 0.2s ease",
    },
    inputFocus: {
      borderColor: "#3b82f6",
      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
    },
    select: {
      width: "100%",
      padding: "10px 14px",
      borderRadius: "8px",
      border: "2px solid #e5e7eb",
      fontSize: "14px",
      marginBottom: "12px",
      outline: "none",
      appearance: "none",
      backgroundColor: "white",
      cursor: "pointer",
    },
    actionsContainer: {
      display: "flex",
      gap: "12px",
      marginTop: "12px",
      borderTop: "1px solid #f3f4f6",
      paddingTop: "12px",
    },
    actionButton: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
      padding: "6px 12px",
      borderRadius: "6px",
      fontSize: "13px",
      fontWeight: "500",
      cursor: "pointer",
      transition: "all 0.2s ease",
      backgroundColor: "transparent",
      border: "none",
      color: "#6b7280",
    },
    completedStatus: {
      position: "absolute",
      top: "12px",
      right: "100px",
      fontSize: "12px",
      padding: "4px 8px",
      borderRadius: "12px",
      backgroundColor: task.completed ? "#dcfce7" : "#f3f4f6",
      color: task.completed ? "#059669" : "#6b7280",
    },
  };

  const renderActionButton = (label, onClick, hoverColor) => (
    <button
      style={{
        ...styles.actionButton,
        ...(hoveredAction === label && {
          backgroundColor: `${hoverColor}15`,
          color: hoverColor,
        }),
      }}
      onClick={onClick}
      onMouseEnter={() => setHoveredAction(label)}
      onMouseLeave={() => setHoveredAction(null)}
    >
      {label}
    </button>
  );

  return (
    <div style={styles.container}>
      {!isEditing && (
        <>
          <div style={styles.priorityBadge}>
            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
          </div>
        </>
      )}

      {isEditing ? (
        <>
          <input
            style={{ ...styles.input, maxWidth: "95%" }}
            value={editedTask.title}
            onChange={(e) =>
              setEditedTask({ ...editedTask, title: e.target.value })
            }
            placeholder="Task Title"
          />
          <textarea
            style={{ ...styles.input, minHeight: "80px", maxWidth: "95%" }}
            value={editedTask.description}
            onChange={(e) =>
              setEditedTask({ ...editedTask, description: e.target.value })
            }
            placeholder="Task Description"
          />
          <select
            style={styles.select}
            value={editedTask.priority}
            onChange={(e) =>
              setEditedTask({ ...editedTask, priority: e.target.value })
            }
          >
            <option value="high">High Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
          </select>
          <button onClick={handleUpdate} style={styles.buttonStyle}>
            Save
          </button>
        </>
      ) : (
        <>
          <h3 style={styles.title}>{task.title}</h3>
          <p style={styles.description}>{task.description}</p>
          <div style={styles.actionsContainer}>
            {renderActionButton("Edit", () => setIsEditing(true), "#3b82f6")}
            {renderActionButton("Delete", () => onDelete(task.id), "#dc2626")}
            {renderActionButton(
              task.completed ? "Mark as Pending" : "Mark as Complete",
              () => onToggleComplete(task.id),
              "#059669"
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default TaskCard;
