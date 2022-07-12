import React, { useState } from 'react';
import PropTypes from 'prop-types';

function List({ data, onClick: handleClick }) {
  const [active, setActive] = useState(null);

  const handleChoice = (id) => {
    setActive(id);
    handleClick(id);
  };

  return data.map((item) => (
    <li
      key={item.id}
      className={`list-group-item ${item.id === active ? 'active' : ''}`}
      onClick={() => {
        handleChoice(item.id);
      }}
    >
      {item.name}
    </li>
  ));
}

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default List;
