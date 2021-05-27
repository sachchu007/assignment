import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/users/Users';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false,
    };

    this.handleSubmitButton = this.handleSubmitButton.bind(this);
  }

  async handleSubmitButton() {
    this.setState({ loading: true });
    const res = await axios.get('https://reqres.in/api/users?page=1');

    this.setState({ users: res.data.data, loading: false });

    console.log(res.data);
  }
  render() {
    return (
      <div className='App'>
        <Navbar buttonEvent={this.handleSubmitButton} />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
