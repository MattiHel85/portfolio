import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/signin?callbackUrl=/admin");
  }

  return (
    <main className="max-w-5xl mx-auto px-6 pt-28 pb-20">
      <h1 className="text-3xl font-semibold text-white">Admin Dashboard</h1>
      <p className="mt-3 text-zinc-300">Signed in as {session.user.email}</p>
      <p className="mt-2 text-zinc-400">
        Phase 1 is active. Next steps are Projects, Contact, and Blog management screens.
      </p>

      <form
        className="mt-8"
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      >
        <button
          type="submit"
          className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white"
        >
          Sign out
        </button>
      </form>
    </main>
  );
}
