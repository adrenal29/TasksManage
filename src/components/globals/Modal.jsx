import React from "react";
import { X } from "lucide-react";
const Modal = ({ isOpen, onClose, children,head }) => {
  if (!isOpen) return null;

  return (
    <>
      <div style={modalOverlayStyle} onClick={onClose} />
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3>{head}</h3>
          <button
            onClick={onClose}
            style={{
              marginTop: "5px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0",
            }}
          >
            <X />
          </button>
        </div>
        {children}
      </div>
    </>
  );
};

export default Modal;


const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  };

  const modalContentStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    zIndex: 1001,
  };
