import React from 'react';
import SearchResult from './SearchResult';

const SearchBarResults = ({results}) => {
  return (
    <div className='inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
    {results.map((result, id) => {
        return (
          <SearchResult result={result} key={id} />)
            ;
      })}
    </div>
  );
};

export default SearchBarResults;
