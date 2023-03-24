import React from 'react';
import './App.css';
import BasicInfo from './componets/BasicInfo';


//---Medium Solution---
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      person:{
        name: "Ching",
        age:25,
        number:'000'
      }
    };
  }

  render(){
    return(
      <BasicInfo person={this.state.person}/>
    )
  }
}

// ---Easy Solution----
// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       person:{}
//     };
//   }
// }

// -----VeryEasy Solution-----
// function App() {
//   return (
//     <div className="App">
//       Ching Vang
//       25
//       000
//     </div>

//   );
// }

export default App;
