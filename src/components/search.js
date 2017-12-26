import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleSearch, isFetching }) => (
    <div className='search input'>
        <input 
            disabled={isFetching}
            onKeyUp={handleSearch}
            placeholder='Enter the Github username'
            type='search' 
        />
    </div>
)

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired
}

export default Search;