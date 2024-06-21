import Link from "next/link";
import React from "react";

const NotFound = () => {
  return <div>
    <h2>Not FOund</h2>
    <p>Sorry, the page you're looking for does not exist.</p>
    <Link href="/">Return Home</Link>
  </div>;
};

export default NotFound;
