import React from 'react';
import './Users.css';
import PropTypes from 'prop-types';

const UserItem = ({ user: { email, first_name, last_name, avatar } }) => {
  return (
    <div className='card '>
      <div>
        <img src={avatar} alt='' className='image' />
      </div>

      <ul className='user-name'>
        <li>{first_name}</li>
        <li>{last_name}</li>
      </ul>

      <div className='email'>
        <i className='fas fa-envelope'></i>
        {email}
      </div>
    </div>
  );
};

UserItem.prototype = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
