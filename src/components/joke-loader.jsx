import React from 'react';
import { CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Speech from 'react-speech/dist/react-speech.min';
import TextField from 'material-ui/TextField';
import VoiceList from './voice-list';

const apiEndPoint = (firstName = 'Chuck', lastName = 'Norris') =>
  `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`;

export default class Test extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      firstName: undefined,
      lastName: undefined,
      voice: null
    };
    this.fetchData = this.fetchData.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleVoiceChange = this.handleVoiceChange.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { firstName, lastName } = this.state;

    this.setState({ data: null });
    fetch(apiEndPoint(firstName, lastName))
    .then(response => response.json())
    .then((data) => {
      this.setState({ data });
    })
    .catch((err) => {
      console.error(err);
    });
  }

  handleClick() {
    this.fetchData();
  }

  handleNameChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleVoiceChange(voice) {
    this.setState({ voice });
  }

  render() {
    const { data } = this.state;
    const joke = data && data.value.joke;

    return (
      <div>
        <CardText>
          {joke || 'Loading...'}
        </CardText>
        <div
          style={{
            display: 'flex'
          }}
        >
          <Speech
            text={joke || 'Loading...'}
            voice={this.state.voice}
            styles={{
              container: {
                flex: '1',
                width: null
              }
            }}
          />
          <VoiceList
            onVoiceChange={this.handleVoiceChange}
          />
        </div>
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <TextField
            name="firstName"
            onChange={this.handleNameChange}
            placeholder="First Name"
            style={{
              margin: '0 5px'
            }}
            value={this.state.firstName || ''}
          />
          <TextField
            name="lastName"
            onChange={this.handleNameChange}
            placeholder="Last Name"
            style={{
              margin: '0 5px'
            }}
            value={this.state.lastName || ''}
          />
          <RaisedButton
            onClick={this.handleClick}
            primary
          >
            Get a new joke!
          </RaisedButton>
        </div>
      </div>
    );
  }
}
