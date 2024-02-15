'use client';
import { createNewSnippet } from '@/actions/createSnippet';
import { useFormState } from 'react-dom';

export default function CreateSnippetsPage() {
  const [formState, formAction] = useFormState(createNewSnippet, {
    message: '',
  });
  return (
    <form action={formAction}>
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
        {formState.message ? (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            {formState.message}
          </div>
        ) : null}
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
