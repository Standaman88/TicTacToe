import React from 'react';
import ReactDOM from 'react-dom';


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.username);
   fetch("https://d9u7x85vp9.execute-api.us-east-2.amazonaws.com/production/auth", {
  "headers": {
    "accept": "application/json",
    "accept-language": "en-US,en;q=0.9",
    "authorization": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1lQHRlc3QuY29tIiwiaWF0IjoxNjExMDYyNTIyfQ.d_IiD-vMe_vxJLKEbeq8iIJv23g391bB8yo6UxeGdbs",
  },
  "referrer": "https://d9u7x85vp9.execute-api.us-east-2.amazonaws.com/production/api-docs/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"email\”:\”this.state.username\”}”,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1> Let’s Play {this.state.username}</h1>
      <p>Enter Your Email, and submit:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      <input
        type='submit'
      />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));

