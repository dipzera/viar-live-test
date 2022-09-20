import { handleLogin } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    await handleLogin(req, res, {
      authorizationParams: {
        screen_hint: 'signup',
      },
    });
  } catch (error) {
    const typedError = <Error & { status: number }>error;

    res.status(typedError.status || 500).end(typedError.message);
  }
}
