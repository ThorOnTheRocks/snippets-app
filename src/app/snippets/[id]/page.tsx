import { db } from '@/db';
import { notFound } from 'next/navigation';

export type SnippetShowPageProps = {
  params: {
    id: string;
  };
};

async function ShowSnippetPage({ params }: SnippetShowPageProps) {
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!snippet) {
    return notFound();
  }

  return <div>{snippet?.title}</div>;
}

export default ShowSnippetPage;
