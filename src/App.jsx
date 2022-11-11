import React, { Component } from 'react'
import Navbar from '/src/components/Navbar'
import './App.css'

class Footer extends Component {
  render() {
    const currentYear = new Date().getFullYear()
    return (
      <div className="footer__content">
        <footer className="footer">
          <div className="container">
            <span className="text-muted">
              <a href='#privacy'>Privacy Terms</a>. Copyright &copy; {currentYear}. All rights reserved.</span>
          </div>
        </footer>
      </div>
    )

  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Footer />
      </div>
    )
  }
}

export default App


