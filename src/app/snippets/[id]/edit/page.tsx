import { db } from '@/db';

export type SnippetEditPageProps = {
  params: {
    id: string;
    title: string;
    code: string;
  };
};

export default async function EditSnippetPage({
  params,
}: SnippetEditPageProps) {
  const id = parseInt(params.id);
  return (
    <section>
      <h2>Edit Snippet {id}</h2>
    </section>
  );
}
