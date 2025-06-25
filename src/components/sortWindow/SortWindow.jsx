import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './sortWindow.scss';

const SortWindow = ({ setVisibleSortWindow }) => {
  const [value, setValue] = useState();
  const [, setSearchParams] = useSearchParams();

  const handleSort = e => {
    setValue(e.target.value);
    setSearchParams(prevParams => {
      const params = new URLSearchParams(prevParams);
      if (e.target.value == '1') {
        params.delete('sortBy');
      } else if (e.target.value == '2') {
        params.set('sortBy', 'byBirth');
      }
      return params;
    });
  };

  return (
    <div className="sortWindow overlay">
      <div className="sortWindow__content">
        <div className="sortWindow__upper">
          <h3 className="sortWindow__header">Сортировка </h3>
          <button className="btn-close" onClick={() => setVisibleSortWindow(false)}>
            &times;
          </button>
        </div>
        <div className="sortWindow__option">
          <div className="sortWindow__center">
            <input
              className="sortWindow__radio"
              id="1"
              type="radio"
              name="radio"
              value="1"
              checked={value === '1' ? true : false}
              onChange={e => {
                handleSort(e);
              }}
            />
            <label htmlFor="1">
              <span className="sortWindow__option-text">По алфавиту</span>
            </label>
          </div>
        </div>
        <div className="sortWindow__option">
          <div className="sortWindow__center">
            <input
              className="sortWindow__radio"
              id="2"
              type="radio"
              name="radio"
              value="2"
              checked={value === '2' ? true : false}
              onChange={e => {
                handleSort(e);
              }}
            />
            <label htmlFor="2">
              <span className="sortWindow__option-text">По дню рождения</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortWindow;
