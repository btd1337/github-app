import React from 'react';
import Actions from './actions';
import Repos from './repos';
import Search from './search';
import UserInfo from './user-info';

const AppContent = () => (
	<div className='box'>
	<div className='col-md-4'></div>
	<div className='app col-md-4'>
	  <Search />
	  <UserInfo />
	  <Actions />
	  <Repos 
		className='repos' 
		title='Repositórios'
		repos={[
		  {
			name: 'Nome do Repositório',
			link: '#'
		  }
		]} 
	  />
	  <Repos 
		className='starred' 
		title='Favoritos'
		repos={[
		  {
			name: 'Nome do Repositório',
			link: '#'
		  }
		]} 
	  />
	</div>
  </div>
)

export default AppContent;