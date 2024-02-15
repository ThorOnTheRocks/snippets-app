'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong! {error.message}</h2>
      <button
        className="rounded p-2 bg-blue-200 justify-end"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
