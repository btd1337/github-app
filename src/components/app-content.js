import React from 'react';
import PropTypes from 'prop-types'
import Actions from './actions';
import Repos from './repos';
import Search from './search';
import UserInfo from './user-info';

const AppContent = ({getRepos, getStarred, handleSearch, isFetching, isDisplayingRepos, isDisplayingStarreds, repos, starred, userInfo}) => (
	<div className='box'>
	<div className='col-md-4'></div>
	<div className='app col-md-4'>
	  <Search handleSearch={handleSearch} isFetching={isFetching}/>
		{isFetching && <div>Carregando...</div>}
	  {!!userInfo && <UserInfo userInfo={userInfo}/>}
	  {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} />}
	  {!isDisplayingStarreds && !!repos.length && <Repos 
		className='repos' 
		title='Repositórios'
		repos={repos} 
	  />}
	  {!isDisplayingRepos && !!starred.length && <Repos 
		className='starred' 
		title='Favoritos'
		repos={starred} 
	  />}
	</div>
  </div>
)

AppContent.propTypes = {
	getRepos: PropTypes.func.isRequired,
	getStarred: PropTypes.func.isRequired,
	handleSearch: PropTypes.func.isRequired,
	isFetching: PropTypes.bool.isRequired,
	repos: PropTypes.array.isRequired,
	starred: PropTypes.array.isRequired,
	userInfo: PropTypes.object,
}

export default AppContent;