import { db } from '@/db';
import { redirect } from 'next/navigation';

export default function CreateSnippetsPage() {
  async function createNewSnippet(formData: FormData) {
    'use server';

    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    console.log('new snippet: ', snippet);
    redirect('/');
  }
  return (
    <form action={createNewSnippet}>
      <h3>Create a Snippet</h3>
      <div className="flex flex-col gap-4 my-5">
        <div className="flex gap-4">
          <label htmlFor="title" className="w-12">
            Title
          </label>
          <input
            id="title"
            name="title"
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="code">Code</label>
          <textarea
            id="code"
            name="code"
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <button
          className="rounded p-2 bg-blue-200 justify-end"
          type="submit"
        >
          Create Snippet
        </button>
      </div>
    </form>
  );
}
