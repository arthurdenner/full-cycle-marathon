import React from 'react';
import useUsers from './useUsers';
import './users.css';

const Users = () => {
  const { data, error, onLoadMore, status } = useUsers();

  if ((!data || data.users.length === 0) && status === 'loading') {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  if (status === 'error') {
    return (
      <main>
        <h1>Something went wrong</h1>
        <div>{error}</div>
      </main>
    );
  }

  return (
    <main>
      <h1>Users</h1>
      <div>
        {data?.users.map((user) => {
          const full_name = [user.first_name, user.last_name]
            .filter(Boolean)
            .join(' ');

          return (
            <div className="user-card">
              <img src={user.avatar} alt={full_name} />
              <div>
                <p>{full_name}</p>
                <small>{user.email}</small>
              </div>
            </div>
          );
        })}
      </div>
      {data?.hasMorePages ? (
        <button disabled={status === 'loading'} onClick={onLoadMore}>
          Load more
        </button>
      ) : null}
    </main>
  );
};

export default Users;
