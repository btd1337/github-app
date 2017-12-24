import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

import React, { Component } from 'react';
import ajax from '@fdaciuk/ajax';
import AppContent from './components/app-content';
import logo from './logo.svg';

class App extends Component {
  constructor () {
    super();
    this.state = {
      userInfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }
  }

  getGithubApiUrl (username, type) {
    const internalType = (type ? `/${type}` : '');
    const internalUserName = (username ? `${username}` : '');
    const url = `https://api.github.com/users/${internalUserName}${internalType}`;
    return url;
  }

  getRepos(type) {
    return (e) => {
      const login = this.state.userInfo.login;
      fetch(this.getGithubApiUrl(login,type))
        .then(result => result.json())
        .then(result => result.map(currentRepo => {
          let repo = {
            name: currentRepo.name,
            link: currentRepo.html_url,
          }
          let reposAux = (type === 'repos' ? [...this.state.repos,repo] :       [...this.state.starred,repo]);
          this.setState({
            [type]: reposAux
          })
      }))
    }
  }

  handleSearch(e) {
    const ENTER = 13;
    const input = e.target;
    const keyCode = e.which || e.keyCode
    const value = e.target.value
    if (keyCode === ENTER) {
      input.disabled = true;
      
      ajax().get(this.getGithubApiUrl(value))
        .then((result) => {
          this.setState({
            userInfo: {
              name: result.name,
              avatar_url: result.avatar_url,
              login: result.login,
              public_repos: result.public_repos,
              followers: result.followers,
              following: result.following
            },
            repos: [],
            starred: []
          });
        });
        input.disabled = false;
    }
  }

  render() {
    return (
      <AppContent 
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
      />
    );
  }
}

export default App;
