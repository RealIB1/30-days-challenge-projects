import { Component, useState } from 'react'
import './Projects.css'

const Counter = () => {
  const [ count, setCount ] = useState(0);
  const addOne = () => {
    let value = count + 1;
    setCount(value);
  };
  const minusOne = () => {
    let value = count - 1;
    setCount(value);
  };

  return (
    <>
      <div>

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
      </div>
    </>
  )
}

// Forms with multiple input fields and useState for updating the state.
const Form = () => {
  const [ form, setUpdates ] = useState('');
  const handleChange = (e) => {
    const value = e.target.value
    setUpdates(value)
  }



  return (
    <>
      <div className="form">
        <label className="typewriter-label" htmlFor='typewriter'>Typewriter</label>
        <p className="typewriter-print">{form}</p>
        <textarea className="typewriter"
          type='text'
          value={form}
          onChange={handleChange} placeholder="Type to print on the screen" rows="10"></textarea>
      </div>
    </>
  )
}

class ColorGenerator extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let style = {
      backgroundColor: this.props.hexCode
    }
    return (
      <div className='color__generator'>
        <div className='color' style={style} onClick={this.props.update.bind(this, this.props.index)} >
          <p className='color_code' >{this.props.hexCode}</p>
        </div>
      </div>
    )
  }
}

class ColorGenerate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorCount: 6,
      colors: []
    }
    for (let i = 0; i < this.state.colorCount; i += 1) {
      this.state.colors.push({ hexCode: this.generateColor() })
    }
  }

  generateColor() {
    return '#' + Math.random().toString(16).substr(-6)
  }

  updateColor(index) {
    let colors = this.state.colors.slice()
    const currentColor = this.generateColor()
    colors[ index ].hexCode = currentColor
    this.setState({
      colors: colors
    })
  }

  render() {
    return (

      <>
        <div className="colors_main">
          <h1>Color Generator</h1>
          <div className='colors'>
            {this.state.colors.map((color, index) => <ColorGenerator key={`color-${index}`} index={index} update={this.updateColor.bind(this)} hexCode={color.hexCode} className="colors_gen"></ColorGenerator>)}
          </div>
          <p className='hint'>Hint: Tap on the hexcode to generate new colors and the colors to copy to clipboard.</p>
        </div>
      </>

    )
  }

}


class Projects extends Component {
  render() {
    return (
      <>
        <div className="projects">
          <h1 className='header'>Projects Built With React</h1>
          <div className='main__projects'>
            <div className='project'>
              <Counter />
            </div>

            <div className='project'>
              <ColorGenerate />
            </div>

            <div className='project'>
              <Form />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Projects
