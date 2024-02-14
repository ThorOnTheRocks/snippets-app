import { db } from '@/db';
import Link from 'next/link';

export default async function Home() {
  const snippetsList = await db.snippet.findMany();
  const snippets = snippetsList.map((snippet) => (
    <Link key={snippet.id} href={`/snippets/${snippet.id}`}>
      {snippet.title}
    </Link>
  ));

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      Code Snippets
      <ul>{snippets}</ul>
    </main>
  );
}
