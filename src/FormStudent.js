// destructuring
import React, { Component } from 'react'
import { Button } from 'reactstrap';


class FormStudent extends Component {
    //STATE
    constructor(){
        super()
        this.state = {
            students: ['John Doe'],
            currentStudentName: ''
        }
    }
    addStudent(){
        let currentStudents = this.state.students
        currentStudents.push(this.state.currentStudentName)
        this.setState({
        students: currentStudents
            }) 

    }
    render(){
        return(
            <div>
                <span> {this.state.currentStudentName} </span>
                <input 
                type="text" 
                name="student_name" 
                onChange={(e) => this.setState({ currentStudentName : e.target.value}) }/>
                <br/>
                <input type="submit" value="Add Student"/>
                <h2> Students: </h2>
                { this.state.students.map( student => {
                   return <h3> { student } </h3>
                })}
            </div>
        )
    }
}
export default FormStudent