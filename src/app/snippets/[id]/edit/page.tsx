import { db } from '@/db';
import SnippetEditForm from '@/components/SnippetEditForm';
import { Snippet } from '@prisma/client';

export type SnippetEditPageProps = {
  params: {
    id: string;
  };
};

export default async function EditSnippetPage({
  params,
}: SnippetEditPageProps) {
  const id = parseInt(params.id);
  const snippet = (await db.snippet.findFirst({
    where: {
      id,
    },
  })) as Snippet;

  return (
    <section>
      <h2>Edit Snippet with title: {snippet?.title}</h2>
      <SnippetEditForm snippet={snippet} />
    </section>
  );
}
