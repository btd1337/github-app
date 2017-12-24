import React from 'react';
import PropTypes from 'prop-types'
import Actions from './actions';
import Repos from './repos';
import Search from './search';
import UserInfo from './user-info';

const AppContent = ({userInfo, repos, starred, handleSearch, getRepos, getStarred }) => (
	<div className='box'>
	<div className='col-md-4'></div>
	<div className='app col-md-4'>
	  <Search handleSearch={handleSearch}/>
	  {!!userInfo && <UserInfo userInfo={userInfo}/>}
	  {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} />}
	  {!!repos.length && <Repos 
		className='repos' 
		title='Repositórios'
		repos={repos} 
	  />}
	  {!!starred.length && <Repos 
		className='starred' 
		title='Favoritos'
		repos={starred} 
	  />}
	</div>
  </div>
)

AppContent.propTypes = {
	userInfo: PropTypes.object,
	repos: PropTypes.array.isRequired,
	starred: PropTypes.array.isRequired
}

export default AppContent;