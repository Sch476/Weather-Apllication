import React from 'react'

const SearchResult = ({result}) => {
  return (
<div className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{result}</div>);
  
}

export default SearchResult;
