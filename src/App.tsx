import {Component} from 'react'

// import logo from './logo.svg';
import './App.css';

import Message from './Message'


// const initialState = {
//   name : 'Bleh',
//   msg : 'Typescript is cool!'
// }

// type State = Readonly<typeof initialState>

/*
function App() {
  // let firstValue: string = 'Manny'
  // let firstValue: boolean = true
  // let firstValue: number = 22
  // let firstValue: number[] = [1,2,3]
  // let firstValue: Array<string> = ["a","b","c"]

  // TUPLE
  // let firstValue: [string, number] = ['bla', 765] 
  // firstValue[0], firstValue[1]

  // ENUM
  // enum firstValue {first =1, second =2}

  // ANY
  // let firstValue: any = 'blah'
  // let firstValue: any = 5

  // VOID
  const firstValue = ():void => {
    console.log('warning')
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {firstValue} is of {typeof firstValue} type!
          {// The value {firstValue.first} is of {typeof firstValue} type! }
        </p>
        <Message msg="this is a simple message"/>
      </header>
    </div>
  );
}
*/

// class App extends Component<any, State>{
class App extends Component{

  // readonly state: State = initialState

  componentWillMount(){
    console.log('almost there...')
  }
  componentDidMount(){
    console.log('mounted!')
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          {/* <Message name="blah" msg="hello typescripted react"/> */}
          {/* <Message name={this.state.name} msg={this.state.msg}/> */}
          <Message />
        </header>
      </div>
    )
  }

}


export default App;
