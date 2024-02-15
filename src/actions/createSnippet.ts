'use server';
import { db } from '@/db';
import { redirect } from 'next/navigation';

export async function createNewSnippet(
  formState: { message: string },
  formData: FormData
) {
  try {
    const title = formData.get('title');
    const code = formData.get('code');

    if (typeof title !== 'string' || title.length < 3) {
      return {
        message: 'Title should be longer',
      };
    }

    if (typeof code !== 'string' || code.length < 10) {
      return {
        message: 'Code should be longer',
      };
    }

    await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    redirect('/');
  } catch (error) {
    if (error instanceof Error) {
      return {
        message: error.message,
      };
    } else {
      return {
        message: 'An unexpected error happened...please try again!',
      };
    }
  }
}
