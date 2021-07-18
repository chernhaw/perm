import React from 'react';
import ReactDOM from 'react-dom';

// //import Car from 'Car.js';
/*
 class Car extends React.Component{
  
   constructor(props){
     super(props);
     this.brand = props.brand;
  }

   render(){
    return( <div>
        {this.brand}

         <h1> Who is in car </h1>
         <Hammy fur="banded"/>
  </div>
   );
   }

 }
 class Hammy extends React.Component{
 render(){
    return <h2>I am a {this.props.fur}!</h2>
  }
}

 const hammy = <Hammy fur="banded"/>


 const ford = <Car brand="Ford"/>
*/
// ReactDOM.render(
 
//   ford,
//    document.getElementById('root')
//  )

 class RestCall extends React.Component{
//employees:[];

//const [employees, setEmployees] = useState([]);
  
   constructor(props){
     super(props);
     this.state ={
     error: null,
    isLoaded: false,
     employees:[]
   };
  
  }

    componentDidMount(){

    
    fetch("http://localhost:8080/employees", {mode:'no-cors'})
    .then(res => res.json)
    .then ((result)=>{
     this.setState(
       {isLoaded:true,
       employees:result.employees
      });

  },
  (error)=>{
    this.setState(
     {isLoaded:true, 
       error
      });
  }
  )
 }

render () {
 
    const{error, isLoaded, employees} = this.state;
     if (error){
       return <div>Error: {error.message}</div>
     } else if (!isLoaded){
       return <div>Loading...</div>;
     } else {
    // console.log("render "+ employees);
      return (<ul>
        {employees.map (employee =>(
         <li key = {employee.id}> {employee.firstName}
           {employee.lastName}
         </li>
        ))}
     </ul>
      );

    }
  // render () {
    
  //    return (
  //      <div> Hello I am working</div>
  //    );
  
       }
  }
const mycomp = <RestCall /> 

ReactDOM.render(
 
  mycomp ,
   document.getElementById('root')
 )