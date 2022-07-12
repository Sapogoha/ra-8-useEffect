import React, { useState, useEffect } from 'react';
import './App.css';

import List from './components/List';
import Details from './components/Details';

function App() {
  const url = process.env.REACT_APP_URL;
  const [data, addData] = useState([]);
  const [id, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const messages = {
    detailsPlaceholder:
      "Click on any user's name to get more information about this person",
    error: 'Loading failed',
    loading: 'Loading ...',
  };

  const loadUsers = () => {
    fetch(`${url}/users.json`)
      .then((response) => response.json())
      .then((users) => {
        addData(users);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadUsers();
  });

  const handleClick = (id) => {
    setDetails(id);
  };

  return (
    <div className="app">
      {loading && (
        <div className="card" style={{ width: '18rem' }}>
          {messages.loading}
        </div>
      )}
      {error && (
        <div className="card" style={{ width: '18rem' }}>
          {messages.error}
        </div>
      )}
      <ul className="list-group">
        <List data={data} onClick={handleClick} />
      </ul>
      <div className="user-details">
        {id ? (
          <Details id={id} />
        ) : (
          <div className="card" style={{ width: '18rem' }}>
            {messages.detailsPlaceholder}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
