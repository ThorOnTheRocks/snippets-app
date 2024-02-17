import { db } from '@/db';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { deleteSnippet } from '@/actions/deleteSnippet';

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

  const deleteSnippetAction = deleteSnippet.bind(null, snippet.id);

  return (
    <section>
      <div className="flex m-4 justify-between items-center">
        <h1>{snippet?.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`${snippet.id}/edit`}
            className="p-2 border rounded"
          >
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button className="p-2 border rounded">Delete</button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </section>
  );
}
