"use client";

import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(users.length);
  return <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
}
