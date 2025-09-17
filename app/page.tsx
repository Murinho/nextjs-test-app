import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <h1>🚀 Next.js Mock Site</h1>
      <p>
        If you can see this on Vercel, your deployment works! Edit{" "}
        <code>app/page.tsx</code> and push to redeploy.
      </p>

      <div className="card">
        <h2>What to test</h2>
        <ul>
          <li>Automatic builds on push</li>
          <li>Preview deployments (on PRs)</li>
          <li>Environment variables</li>
          <li>Edge/network logs</li>
        </ul>
      </div>

      <p>
        Learn more at{" "}
        <Link href="https://nextjs.org" target="_blank">
          nextjs.org
        </Link>
        .
      </p>
    </main>
  );
}
