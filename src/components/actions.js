import React from 'react';
import PropTypes from 'prop-types';

const Actions = ({ getRepos }) => (
    <div className='actions'>
        <button onClick={getRepos}>Ver Repositórios</button>
        <button onClick={getRepos}>Ver Favoritos</button>
    </div>
)

Actions.propTypes = {
    getRepos: PropTypes.func.isRequired
}

export default Actions;