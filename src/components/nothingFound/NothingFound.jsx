import React from 'react';
import './nothingFound.scss';

const NothingFound = () => {
  return (
    <div className="nothing_page">
      <img
        className="nobody__picture"
        src="/images/search.png"
        alt="Картинка поиск"
      />
      <div className="nobody_block">
        {' '}
        <span className="nobody">Мы никого не нашли</span>
      </div>
      <div className="query_block">
        <span className="query">Попробуй скорректировать запрос</span>
      </div>
    </div>
  );
};

export default NothingFound;
