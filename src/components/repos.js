import PropTypes from 'prop-types';
import React from 'react';

const Repos = ({ className, title, repos }) => (
    <div className={className}>
        <h2>{title}</h2>
        <ul>
            {repos.map((repo, index) => (
                <li className='repos' key={index}>
                    <a href={repo.link}>{repo.name}</a>
                </li>
            ))}
        </ul>
    </div>
)

Repos.defaultProps = {
    className: ''
}

Repos.propTypes = {
    className: PropTypes.string,
    repos: PropTypes.array,
    title: PropTypes.string.isRequired
}

export default Repos;