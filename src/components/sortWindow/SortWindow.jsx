import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './sortWindow.scss';

const SortWindow = ({ setVisibleSortWindow }) => {
  const [value, setValue] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  function changeHandler(event) {
    setValue(event.target.value);
    if (value === '2') {
      setSearchParams({ sortBy: 'byBirth' });
    }
  }

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
          {/* <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2901 12L14.8301 8.45999C15.0163 8.27263 15.1209 8.01918 15.1209 7.75499C15.1209 7.49081 15.0163 7.23736 14.8301 7.04999C14.7371 6.95627 14.6265 6.88187 14.5046 6.8311C14.3828 6.78033 14.2521 6.7542 14.1201 6.7542C13.9881 6.7542 13.8573 6.78033 13.7355 6.8311C13.6136 6.88187 13.503 6.95627 13.4101 7.04999L9.17007 11.29C9.07634 11.383 9.00194 11.4936 8.95117 11.6154C8.90041 11.7373 8.87427 11.868 8.87427 12C8.87427 12.132 8.90041 12.2627 8.95117 12.3846C9.00194 12.5064 9.07634 12.617 9.17007 12.71L13.4101 17C13.5035 17.0927 13.6143 17.166 13.7362 17.2158C13.858 17.2655 13.9885 17.2908 14.1201 17.29C14.2517 17.2908 14.3821 17.2655 14.504 17.2158C14.6258 17.166 14.7366 17.0927 14.8301 17C15.0163 16.8126 15.1209 16.5592 15.1209 16.295C15.1209 16.0308 15.0163 15.7774 14.8301 15.59L11.2901 12Z"
                fill="#1C1E24"
              />
            </svg>
          </button> */}
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
              {' '}
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
              {' '}
              <span className="sortWindow__option-text">По дню рождения</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortWindow;
