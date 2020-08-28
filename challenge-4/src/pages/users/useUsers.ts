import { useState, useEffect, useCallback } from 'react';
import { UserResponse, UserState } from './types';

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const useDates = () => {
  const [state, setState] = useState<UserState>({
    error: undefined,
    status: 'idle',
    data: undefined,
    page: 1,
  });

  useEffect(() => {
    const getUsers = () => {
      setState((prev) => ({ ...prev, status: 'loading' }));

      fetch(`${baseUrl}/api/users?page=${state.page}`)
        .then((resp) => resp.json())
        .then(({ data, ...rest }: UserResponse) => {
          setState((prev) => ({
            ...prev,
            status: 'idle',
            data: {
              ...rest,
              hasMorePages: rest.page < rest.total_pages,
              users: prev.data ? prev.data.users.concat(data) : data,
            },
          }));
        })
        .catch((err) => {
          setState((prev) => ({
            ...prev,
            error: err.message,
            status: 'error',
          }));
        });
    };

    getUsers();
  }, [state.page]);

  const onLoadMore = useCallback(
    () =>
      setState((prev) => {
        if (prev.data?.hasMorePages) {
          return { ...prev, page: prev.page + 1 };
        }

        return prev;
      }),
    []
  );

  return { ...state, onLoadMore };
};

export default useDates;
