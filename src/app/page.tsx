import Link from 'next/link';
import { db } from '@/db';

export default async function Home() {
  const snippetsList = await db.snippet.findMany();
  const renderedSnippets = snippetsList.map((snippet) => (
    <Link
      className="flex justify-between items-center p-2 border rounded"
      key={snippet.id}
      href={`/snippets/${snippet.id}`}
    >
      <div>{snippet.title}</div>
      <div>View</div>
    </Link>
  ));

  return (
    <main>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Code Snippets</h1>
        <Link href="/snippets/new" className="border p-2 rounded">
          Add new snippet
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderedSnippets}</div>
    </main>
  );
}
