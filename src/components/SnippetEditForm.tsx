'use client';

import Editor from '@monaco-editor/react';
import { useState } from 'react';
import { updateSnippet } from '@/actions/updateSnippet';
import type { Snippet } from '@prisma/client';

export type SnippetEditFormProps = {
  snippet: Snippet;
};

function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [editedCode, setEditedCode] = useState(snippet?.code);

  const handleOnEditForm = (value: string = '') => {
    setEditedCode(value);
  };

  const updateSnippetAction = updateSnippet.bind(
    null,
    snippet?.id,
    editedCode
  );

  return (
    <div>
      <form action={updateSnippetAction}>
        <Editor
          width="800"
          height="40vh"
          theme="vs-dark"
          language="javascript"
          defaultValue={editedCode}
          onChange={handleOnEditForm}
        />
        <button className="p2 border rounded" type="submit">
          Edit Snippet
        </button>
      </form>
    </div>
  );
}

export default SnippetEditForm;
