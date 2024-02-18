import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: '8 years experience in React, Nodejs, Nextjs, Mongo db, python, Java',
        imgSrc: 'lionel-messi-9.png',
        profession: 'Software Engineer'
      },
      show: false,
      mountedTime: new Date()
    };
  }

  toggleProfile = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ mountedTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountedTime } = this.state;
    return (
      <div className="App">
        <h1>React State Checkpoint</h1>
        <button onClick={this.toggleProfile}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>
        {show && (
          <div>
            <img src={imgSrc} alt={fullName} style={{width: '100px'}}/>
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time since mount: {((new Date() - mountedTime) / 1000)} seconds</p>
      </div>
    );
  }
}

export default App;
