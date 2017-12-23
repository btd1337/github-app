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
      starred: []
    }
  }

  handleSearch(e) {
    const ENTER = 13;
    const keyCode = e.which || e.keyCode
    const value = e.target.value
    if (keyCode === ENTER) {
      ajax().get(`https://api.github.com/users/${value}`)
        .then((result) => {
          this.setState({
            userInfo: {
              name: result.name,
              avatar_url: result.avatar_url,
              login: result.login,
              public_repos: result.public_repos,
              followers: result.followers,
              following: result.following
            }
          })
        });
    }
  }

  getRepos(e) {
    fetch(`https://api.github.com/users/${this.state.userInfo.login}/repos`)
      .then(result => result.json())
      .then(result => result.map(currentRepo => {
        let repo = {
          name: currentRepo.name,
          link: currentRepo.html_url,
        }
        let reposAux = [...this.state.repos,repo];
        this.setState({
          repos: reposAux
        })
      }))
  }

  render() {
    return (
      <AppContent 
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={(e) => this.getRepos(e)}
      />
    );
  }
}

export default App;
