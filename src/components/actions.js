import React from 'react';
import PropTypes from 'prop-types';

const Actions = ({ getRepos, getStarred }) => (
    <div className='actions'>
        <button className='btn btn-primary' onClick={getRepos}>Ver Repositórios</button>
        <button className='btn btn-primary' onClick={getStarred}>Ver Favoritos</button>
    </div>
)

Actions.propTypes = {
    getRepos: PropTypes.func.isRequired,
    getStarred: PropTypes.func.isRequired
}

export default Actions;