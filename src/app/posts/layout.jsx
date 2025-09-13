import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <h1>this is parent and won't go anywhere</h1>
      {children}
    </div>
  );
}
