import React from 'react';
import { Link } from 'react-router-dom';
import './worker.scss';
import moment from 'moment';

const Worker = ({ id, name, avatar, position, tag, birthDate, sortBy }) => {
  moment.locale('ru');
  return (
    <div className="userWithBirth">
      <div className="userWithDate">
        <div className="user">
          <div className="user__avatar">
            <Link to="/d">
              <img src={avatar} alt="" style={{ height: '74px', 'border-radius': '50%' }} />
            </Link>
          </div>
          <div className=" user__description">
            <Link to={`/employee/${id}`} className="linkStyle">
              <div>
                <p className="user__name">
                  {name} <span className="user__tag">{tag}</span>
                </p>
                <p className="user__position">{position}</p>
              </div>
            </Link>
          </div>
        </div>

        {sortBy && (
          <div className="userWithBirth__birth">
            <span className="user__birth">
              {moment(birthDate).format('DD MMM')}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Worker;
