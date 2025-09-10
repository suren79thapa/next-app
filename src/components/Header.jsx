import Link from "next/link.js";
import React from "react";

export default function Header() {
  return (
    <div>
      <h1>Next App</h1>
      <nav>
        <Link href={"/posts"}>Posts</Link>
      </nav>
    </div>
  );
}
