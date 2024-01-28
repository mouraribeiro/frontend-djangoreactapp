import React from 'react';
import UserLists from './UserLists';

export default class LoginComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: '', password: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({username: event.target.value});
      }

      handleChangePassword(event) {
        this.setState({password: event.target.value});
      }
    
      handleSubmit(event) {
        var url = 'http://127.0.0.1:8000/api-token-auth/'
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: this.state.username, password: this.state.password })
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
              localStorage.setItem('token', data.token);
              this.setState({token: data.token});
            })
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    
        event.preventDefault();
      }

      logout(){
        localStorage.removeItem('token');
        this.setState({token: null});
      }
    
      render() {
        var token = localStorage.getItem('token')
       
        if(!token)
            return (
          
            <form onSubmit={this.handleSubmit} className='card'>
                <label class="mt-5 ">
                Name:
                <input class="ms-2" type="text" value={this.state.username} onChange={this.handleChange} />
                </label>
                <label class="mt-5">
                Senha:
                <input class="ms-2" type="password" value={this.state.password} onChange={this.handleChangePassword} />
                </label>
                <button id="login"class="btn btn-success mt-5 mb-5" type="submit" value="Submit">Login</button>
            </form>
            );
            else
            return (
                    <div>
                      <UserLists/>
                      <button type="button" class="btn btn-success " onClick={()=> this.logout()}>Logout</button>
                    </div>
              )
      }
}