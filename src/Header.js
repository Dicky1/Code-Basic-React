import React from 'react';

class Header extends React.Component {
    constructor (){
        super()
    }
    render() {
        return(
    <div>
        <h1>THIS IS HEADER COMPONENT</h1>
        <ul>
            <li>Student</li>
            <li>List Student</li>
            <li>Home</li>
      </ul>
      </div>
        )
    }
}
export default Header;