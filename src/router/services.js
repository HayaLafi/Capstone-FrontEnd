import React from "react";
import { Outlet} from "react-router-dom";
export default function Services() {
    return (
      <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem"
          }}
        >
        </nav>
        <Outlet />
      </div>
    );
  }