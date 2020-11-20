import React from 'react';  
import './style.css';  

class Popup extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        }) 
    }

    render() {  
        return (  
                <div className='popup'>  
                    <div className='popup_inner'>  
                        <h1 className="LoginForm">Login Form</h1>
                        <img id="dog" src="https://cdn.guff.com/site_1/media/14000/13978/items/0e67b61114c091134d7b9caa.jpg" alt=""/>
                        <form className="Form">
                            Username:<input 
                                name="username" 
                                value={this.state.username} 
                                onChange={this.handleChange} 
                                placeholder="Username" 
                            />
                            <br />
                            Password:
                            <input 
                                name="password" 
                                value={this.state.password}
                                onChange={this.handleChange} 
                                placeholder="Password" 
                            />
                            <br />
                            
                            <button className="Button">Login</button>
                            <button className="Button" onClick={this.props.closePopup}>close me</button>
                        </form> 
                    </div>  
                </div>  
            );  
        }  
}

export default Popup;