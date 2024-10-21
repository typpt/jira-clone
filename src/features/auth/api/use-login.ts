import { useMutation } from '@tanstack/react-query';
import { InferRequestType, InferResponseType } from 'hono';
import { client } from '@/lib/hono-rpc';

type RequestType = InferRequestType<(typeof client.api.auth.login)['$post']>;
type ResponseType = InferResponseType<(typeof client.api.auth.login)['$post']>;

export function useLogin() {
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ form }) => {
      const response = await client.api.auth.login['$post']({ form });

      return await response.json();
    },
  });

  return mutation;
}
