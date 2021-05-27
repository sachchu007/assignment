import React from 'react';
import UserItem from './UserItem';
import Loading from '../Loading';

const Users = ({ users, loading }) => {
  if (loading) {
    console.log('loading..');
    return <Loading />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
  gridGap: '1rem',
};
export default Users;
