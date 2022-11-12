import { Component, useState } from 'react'
import './Projects.css' 

const Counter = () => {
  const [count, setCount] = useState(0);
  const addOne = () => {
    let value = count + 1;
    setCount(value);
  };
  const minusOne = () => {
    let value = count - 1;
    setCount(value);
  };

    return (
      <div className="counter">
        <h2 className='counter-title'>Counter</h2>
        {count < 0 ? (
          <h2 className="negative">{count}</h2>
        ) : (
          <h2 className="positive">{count}</h2>
        )}
        <button onClick={addOne} className="addOne">
          +1{' '}
        </button>
        <button onClick={minusOne} className="minusOne">
          -1{' '}
        </button>
      </div>
    )
  }

// class ColorGenerator extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {

//     }
//   }

//   render() {
//     const colorGen = []
//     return (
//       <div className='color__generator'>
//         <h1>Color Generator</h1>

//       </div>
//     )
//   }
// }


class Projects extends Component {
  render() {
    return (
      <>
      <div className="projects">
        <h1 className='header'>Projects Built With React</h1>
        <div className='main__projects'>
          <Counter />
          <Counter />
          <Counter />
          {/* <ColorGenerator /> */}
        </div>
      </div>
      </>
    )
  }
}

export default Projects
