import Link from "next/link.js";
import React from "react";

export default function Header() {
  return (
    <div className="flex bg-gray-100 gap-5 py-2">
      <h1>Next App</h1>
      <nav className="flex gap-5">
        <Link href={"/posts"}>Posts</Link>
        <Link href={"/about"}>About</Link>
      </nav>
    </div>
  );
}
