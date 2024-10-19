import React from "react";

function Topbar({
  allCount,
  openCount,
  closedCount,
  currentFilter,
  setFilter,
}) {
  return (
    <div style={topbarStyle}>
      <button
        style={currentFilter === "all" ? activeButtonStyle : buttonStyle}
        onClick={() => setFilter("all")}
      >
        All {allCount}
      </button>
      <button
        style={currentFilter === "open" ? activeButtonStyle : buttonStyle}
        onClick={() => setFilter("open")}
      >
        Pending {openCount}
      </button>
      <button
        style={currentFilter === "closed" ? activeButtonStyle : buttonStyle}
        onClick={() => setFilter("closed")}
      >
        Completed ({closedCount})
      </button>
    </div>
  );
}

export default Topbar;

const topbarStyle = {
  display: "flex",
  justifyContent: "space-around",
  padding: "10px",
};

const buttonStyle = {
  background: "none",
  border: "none",
  fontSize: "16px",
  cursor: "pointer",
  padding: "5px 10px",
};

const activeButtonStyle = {
  ...buttonStyle,
  fontWeight: "bold",
  color: "#0070f3",
};
