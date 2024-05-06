import "./styles.css";
import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function App() {
  // Creating a ref
  const myRef = useRef(null);

  // Accessing and modifying the DOM node
  const handleClick = () => {
    myRef.current.focus();
  };

  return (
    <div className="container" style={{ margin: "20px" }}>
      {/* Assigning the ref to an input element */}
      <div className="input-group mb-3">
        <input type="text" ref={myRef} className="form-control" />
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={handleClick}>
            Foucs
          </button>
        </div>
      </div>

      {/* Using the ref to focus the input */}
    </div>
  );
}
