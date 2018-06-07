import React from 'react'
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom'

import '../css/style.scss'

import Header from './header'
import Footer from './footer'
import Home from './app/home'
import About from './app/about'
import Projects from './app/projects'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <Router history={browserHistory}>
        <div>
          <div id='wrap'>
            <div id='header'><Header/></div>
            <div className='app container'>
              <Route exact={true} path='/' component={Home} />

              <Route path='/hello' render={() => <h1>HELLO</h1>} />
              <Route path='/about' component={About} />
              <Route path='/projects' component={Projects} />
            </div>
          </div>
          <div id='footer'><Footer/></div>
        </div>
      </Router>
    )
  }
}
