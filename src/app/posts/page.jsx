import React from "react";
import { Button } from "../../components/ui/button.jsx";
import Link from "next/link.js";

export default function Page() {
  return (
    <div>
      <h1>This is a post page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eligendi
        consequatur alias sequi rerum dolor voluptatum. In earum officiis
        eligendi.
      </p>
      <Button>
        <Link href={"/posts/110"}>Go to Detail</Link>
      </Button>
    </div>
  );
}
