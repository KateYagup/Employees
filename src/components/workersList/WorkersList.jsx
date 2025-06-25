import React, { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchWorkers } from '../../store/workersSlice';
import { useSelector, useDispatch } from 'react-redux';
import Worker from '../worker/Worker';
import NothingFound from '../nothingFound/NothingFound';
import Spinner from '../spinner/Spinner';
import './workersList.scss';
import moment from 'moment';

const WorkersList = () => {
  const [searchParams] = useSearchParams();
  const workers = useSelector(state => state.workers.workers);
  const status = useSelector(state => state.workers.status);
  const dispatch = useDispatch();
  let copyWorkers = [...workers];
  const { sortBy } = Object.fromEntries(searchParams);

  useEffect(() => {
    dispatch(fetchWorkers());
  }, [dispatch]);

  const filteredWorkers = useMemo(() => {
    const { position: positionQuery, searchText, sortBy } = Object.fromEntries(searchParams);
   

    const filteredData = copyWorkers.filter(
      ({ position, name, tag, email }) =>
        (!positionQuery || position === positionQuery) &&
        (!searchText || [name, tag, email].some(field => field.includes(searchText))),
    );
    
    if (!sortBy) return filteredData;
    if (sortBy) {
      const res = filteredData.sort((a, b) => (a.birthDate > b.birthDate ? 1 : -1));
      const groupedByYear = res.reduce((acc, item) => {
        const key = moment(item.birthDate).format('YYYY');
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(item);
        return acc;
      }, []);
  
      return groupedByYear;
    }
  }, [searchParams, workers]);

  return (
    <div>
      {status === 'in progress' && <Spinner />}
      {filteredWorkers.length === 0 && <NothingFound />}
      {sortBy &&
        filteredWorkers.map((worker, key) => {
          return (
            <div>
              <p className="centerYear">{key}</p>
              {worker.map(worker => 
              <Worker key={worker.id} sortBy={sortBy} {...worker} />
              )}
            </div>
          );
        })}

      {!sortBy && (
        <ul className="list">
          {filteredWorkers.map(worker => (
            <Worker key={worker.id} sortBy={sortBy} {...worker} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkersList;
