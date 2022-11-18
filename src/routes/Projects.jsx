import { Component, useState } from 'react'
import useFetch from '../components/useFetch'
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
  const [form, setUpdates] = useState('');
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
          onChange={handleChange} placeholder="Start type to print to the screen..." rows="10"></textarea>
      </div>
    </>
  )
}


// Random Country Generator using Rest Countries Api 
const Country = (
  { country: {
    flag,
    name,
    capital,
    region,
    // continent: continent,
    population,
    // language,
    // timezones,
    alpha2Code,
    alpha3Code,
    callingCodes,
    // currencies,
  } }) => {

  return (
    <>
      <div className="countries">
        <img className="country flag" src={flag} alt={name} />
        <h2 className="country title">{name} <br /><span>({name})</span></h2>
        <h3 className="country capital">Capital: {capital}</h3>
        <h3 className="country region">Region: {region}</h3>
        {/* <h3 className="country continent">Continent: {continent}</h3> */}
        <p className="country population">Population: {population}</p>
        {/* <p className="country language">Language: {language.languages[name]}</p> */}
        {/* <p className="country timezone">Timezone: {timezones}</p> */}
        <p className="country countryCode">Country Code: {alpha2Code}</p>
        <p className="country countryCode">Country Code: {alpha3Code}</p>
        <p className="country dialCode">Dial Code: {callingCodes}</p>
        {/* <p className="country currency">Currency: {currencies.map((code) => {<span key={code} code={code}></span>})}</p> */}

      </div>
    </>
  )

}
const CountryGenerator = () => {
  const url = 'https://restcountries.com/v2/all'
  const data = useFetch(url)
  const handleClick = () => {
    setCountry(data[Math.floor(Math.random() * data.length)])
  }

  return (
    <>
      <div className="country-wrapper">
        <h2 className="country-generator-title">Country Generator</h2>
        <div className="country-generator">
          {data.map((country) => {
            return <Country key={country.name} country={country} />
          })}
        </div>
        <button className="country-generator-button" onClick={handleClick}>Generate Country</button>
      </div>
    </>
  )

}

// Random Quote Generator using  JavaScript
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
    colors[index].hexCode = currentColor
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
          <p className='hint'>Hint: Tap on the hex code to generate new colors and the colors to copy to clipboard.</p>
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
            <div className='project'>
              <CountryGenerator />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Projects
