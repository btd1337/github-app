import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

import React, { Component } from 'react';

import Actions from './components/actions';
import Repos from './components/repos';
import Search from './components/search';
import UserInfo from './components/user-info';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
