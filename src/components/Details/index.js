import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Details({ id }) {
  const url = process.env.REACT_APP_URL;
  const [user, addUser] = useState([]);

  useEffect(() => {
    if (id) {
      fetch(`${url}/${id}.json`)
        .then((response) => response.json())
        .then((user) => {
          addUser(user);
        });
    }
  }, [id, url]);

  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img
          src={`${user.avatar}/${user.id}`}
          className="card-img-top"
          alt={user.name}
        />
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">City: {user?.details?.city}</li>
            <li className="list-group-item">
              Company: {user?.details?.company}
            </li>
            <li className="list-group-item">
              Position: {user?.details?.position}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

Details.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Details;
