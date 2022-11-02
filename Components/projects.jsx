import { Component } from 'react'
// import '/src/assets/css/Projects.css'


class Counter extends Component {
  state = {
    count: 0
  }

  addOne = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  minusOne = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    const count = this.state.count

    return (
      <div className='counter'>
        <h1>Counter</h1>
        <div className='count'>
          <h2>{count}</h2>
          <button onClick={this.addOne} className='addOne'> +1 </button>
          <button onClick={this.minusOne} className='minusOne'> -1 </button>
        </div>
      </div>
    )
  }
}


class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <h1 className='header'>Projects Built With React</h1>
        <Counter />
      </div>
    )
  }
}

export default Projects
