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
      isFetching: false,
      repos: [],
      starred: [],
      userInfo: null
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  getGithubApiUrl (username, type) {
    const internalUserName = (username ? `${username}` : '');
    const internalType = (type ? `/${type}` : '');
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
    const keyCode = e.which || e.keyCode
    const value = e.target.value
    if (keyCode === ENTER) {
      this.setState({
        isFetching: true
      })
      ajax().get(this.getGithubApiUrl(value))
        .then((result) => {
          this.setState({
            userInfo: {
              avatar_url: result.avatar_url,
              followers: result.followers,
              following: result.following,
              login: result.login,
              name: result.name,
              public_repos: result.public_repos,
            },
            isFetching: false,
            repos: [],
            starred: []
          });
          console.log(this.state.isFetching);
        });
    }
  }

  render() {
    return (
      <AppContent 
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
        handleSearch={this.handleSearch}
        isFetching={this.state.isFetching}
        repos={this.state.repos}
        starred={this.state.starred}
        userInfo={this.state.userInfo}
      />
    );
  }
}

export default App;
