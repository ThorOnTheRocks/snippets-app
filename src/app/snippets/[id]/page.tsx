import { db } from '@/db';
import { notFound } from 'next/navigation';

export type SnippetShowPageProps = {
  params: {
    id: string;
  };
};

export default async function ShowSnippetPage({
  params,
}: SnippetShowPageProps) {
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <section>
      <div className="flex m-4 justify-between items-center">
        <h1>{snippet?.title}</h1>
        <div className="flex gap-4">
          <button className="p-2 border rounded">Edit</button>
          <button className="p-2 border rounded">Delete</button>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </section>
  );
}
