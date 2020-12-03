import React, { Component } from 'react'
import { connect } from 'react-redux'
import NoteList from './components/NoteList'
import Login from './components/Login'
import NavBar from './components/NavBar'
import { Route, Switch } from 'react-router-dom'


export class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route component={NoteList} path='/notes' />
          <Route component={Login} path='/' />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
