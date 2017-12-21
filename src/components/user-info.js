import React from 'react'

const UserInfo = () => (
    <div className='user-info'>
        <img src='https://avatars0.githubusercontent.com/u/11943860?v=4' alt='user-pic'/>
        <h1>
            <a href='https://github.com/btd1337'>Helder Bertoldo </a>
        </h1>

        <ul className='repos-info'>
            <li>Repositórios: 38</li>
            <li>Seguidores: 18</li>
            <li>Seguindo: 2</li>
        </ul>
    </div>
)

export default UserInfo;