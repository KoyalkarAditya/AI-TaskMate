import Tasks from "@/components/todo_client/tasks";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Sachin is bad boy</Button>
      <Tasks />
    </main>
  );
}
