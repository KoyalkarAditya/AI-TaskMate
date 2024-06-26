"use client";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export default function Tasks() {
  const tasks = useQuery(api.tasks.get);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {tasks?.map((task, id) => <p>{JSON.stringify(task)}</p>)}
    </main>
  );
}
