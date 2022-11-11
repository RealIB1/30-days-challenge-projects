import { Component } from "react";
import image from '/src/assets/images/asabenah.jpeg'


const UserCard = ({
  user: { firstName, lastName, image }
}) => {
  return (
    <div className="card">
      <img src={image} alt={firstName} className="card-img" />
      <h2 className="user-detail"> {firstName} {lastName}</h2>
    </div>

  );
}


const Button = ({ text, onClick }) => (

  <button className="btn btn-primary" onClick={onClick}>{text}</button>
)

class Header extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log(this.props.data);
    const {
      title,
      subtitle,
      description,
      link,
      linkText,
      linkTarget,
      date,
    } = this.props.data;
    return (
      <div className="header">
        <div className="header__title">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p>{description}</p>
          <p>{date}</p>
          <a href={link} target={linkTarget}>{linkText}</a>
        </div>
        {/* <div className="header__author">
        <h3>{ firstName } { lastName }</h3>
        <img src={ image } alt="author" />
        <p>{ location }</p>
        <p>{ bio }</p>
        <p>{ skills }</p>
        <p>{ date }</p>
        </div> */}
      </div>
    );
  }
}

class Skills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { skills } = this.props
    const skillsList = skills.map((skill, index) => <li key={index} className='skillsList'>{skill}</li>);
    return skillsList;
  }
}


class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
          <div className="col-sm-8">
            <UserCard user={this.props.user} />
            <h2 className="skillHeader">Skills</h2>
            <ul className="list-group">
              <Skills skills={this.props.skills} />
            </ul>
            <p className="prerequisite">Prerequisite to Get Started with React.js </p>
            <ul className="list-group">
              <li className="list-group-item">HTML</li>
              <li className="list-group-item">CSS</li>
              <li className="list-group-item">JS</li>
            </ul>
            <div className="actionBtns">
              <Button text='Greet' onClick={this.props.greetMessage} />
              <Button text='Show Time' onClick={this.props.handleTime} />
            </div>
          </div>

        </div>
    );
  }

}


class Home extends Component {

  showTime = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]

    const weekdays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]

    const month = months[ time.getMonth() ].slice(0, 3)
    const year = time.getFullYear()
    const day = time.getDate()
    const days = weekdays[ time.getDay() ].slice(0, 3)
    const hour = time.getHours()
    const minute = time.getMinutes()
    const second = time.getSeconds()
    return `Today is ${days} ${month} ${day},${year} ${hour}:${minute}:${second}`
  }

  handleTime = () => {
    // this.props.handleTime(this.showTime(this.props.time))
    alert(`Current time: ${this.showTime(new Date())}`)

  }

  instructor = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
  }

  greetMessage = () => {
    alert(`Hello, I am ${this.instructor.firstName} ${this.instructor.lastName}. Your instructor for the 30 Days of React Learning Challenge.`)
  }

  render() {
    const data = {
      title: 'Welcome to the 30 Days of React Learning Challenge.',
      subtitle: 'Getting Started React',
      description: 'This is a simple blog post built with React. It is a part of the 30 Days of React challenge.',
      link: 'https://reactjs.org/docs/getting-started.html',
      linkText: 'Read more on how to get started with React',
      linkTarget: '_blank',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: new Date().toDateString(),
      image: 'https://avatars.githubusercontent.com/u/50813726?v=4',
      location: 'Finland',
      bio: 'I am a software engineer and a teacher. I love teaching and I am passionate about building scalable software systems.',
    }

    const skills = [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB', 'Python', 'D3.js' ]
    
    const user = { ...data.author, image: image }
    return (
      <>
      <div className="base">
        <Header data={data} />
        <Main
          user={user}
          skills={skills}
          greetMessage={this.greetMessage}
          handleTime={this.handleTime} />
      </div>
          </>


    )

  }

}


export default Home;