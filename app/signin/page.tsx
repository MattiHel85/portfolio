import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

type SignInPageProps = {
  searchParams?: Promise<{
    callbackUrl?: string;
    error?: string;
  }>;
};

const errorMessages: Record<string, string> = {
  AccessDenied: "This Google account is not allowed to access admin.",
};

export default async function SignInPage({ searchParams }: SignInPageProps) {
  const session = await auth();

  if (session) {
    redirect("/admin");
  }

  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const callbackUrl = resolvedSearchParams?.callbackUrl ?? "/admin";
  const errorCode = resolvedSearchParams?.error;
  const errorMessage = errorCode ? errorMessages[errorCode] ?? "Sign-in failed. Please try again." : null;

  return (
    <main className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-6">
      <section className="w-full max-w-md border border-zinc-800 rounded-xl bg-zinc-900 p-8">
        <h1 className="text-2xl font-semibold text-white">Admin Sign In</h1>
        <p className="mt-2 text-zinc-400 text-sm">
          Continue with your allowed Google account to access the admin dashboard.
        </p>

        {errorMessage ? (
          <p className="mt-4 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {errorMessage}
          </p>
        ) : null}

        <form
          className="mt-6"
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: callbackUrl });
          }}
        >
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-500"
          >
            Sign in with Google
          </button>
        </form>
      </section>
    </main>
  );
}
