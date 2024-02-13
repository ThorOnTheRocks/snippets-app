import { db } from '@/db';

export default async function Home() {
  const snippetsList = await db.snippet.findMany();
  const snippets = snippetsList.map((snippet) => (
    <li key={snippet.id}>{snippet.title}</li>
  ));

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      Code Snippets
      <ul>{snippets}</ul>
    </main>
  );
}
