import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value, type} = event.target
        this.setState({ [name]: value })
    }
    
    render() {
        return (
            <form>
                <input 
                    type="text" 
                    value={this.state.username} 
                    name="username" 
                    placeholder="User name" 
                    onChange={this.handleChange} 
                />
                <br />
                <input 
                    type="text" 
                    value={this.state.password} 
                    name="password" 
                    placeholder="Password" 
                    onChange={this.handleChange} 
                />
                <br />
                <button>Login</button>
            </form>
        )
    }
}


export default App