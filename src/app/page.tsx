import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function Home() {
  const cookie = cookies()
  const token = cookie.getAll().filter((token: RequestCookie) => token.name === 'access_token' || 'refresh_token')

  token.length == 2 && redirect('/login')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl capitalize font-normal">Project NextJS</h1>
    </main>
  );
}
