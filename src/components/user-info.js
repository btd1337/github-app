import React from 'react'
import PropTypes from 'prop-types'

const UserInfo = ({ userInfo}) => (
    <div className='user-info'>
        <img src={userInfo.avatar_url} alt='user-pic'/>
        <h1>
            <a href={`https://github.com/${userInfo.login}`}>{userInfo.name} </a>
        </h1>

        <ul className='repos-info'>
            <li>Repositórios: {userInfo.public_repos}</li>
            <li>Seguidores: {userInfo.followers}</li>
            <li>Seguindo: {userInfo.following}</li>
        </ul>
    </div>
)

UserInfo.propTypes = {
    userinfo: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired,
        login: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        repos: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired
    })
}

export default UserInfo;