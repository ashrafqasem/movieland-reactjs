import {useState, useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';


//New Component
const Person = (props) => {

  return (
    <>
      {/* <h1>Name: Ash</h1> */}
      <h1>Name: {props.name}</h1>

      {/* <h1>Last Name: Qsm</h1> */}
      <h1>Last Name: {props.lastName}</h1>

      {/* <h1>State: NJ</h1> */}
      <h1>State: {props.state}</h1>
    </>
  )
}





//function App() { //'
const App = () => { //'
  let name = null; 
  name = 'Ashraf';

  const isNameShowing = false;

  //Hooks: State
  const [counter, setCounter]  = useState(0);

  useEffect(() => {
    //alert('Reload');

    //counter = 100; xx
    //setCounter(100);

    alert('You\'ve changed the counter to: ' +  counter);

  //});
 //}, [] ); // [] => dependency array //[] if only want to call it at the start
 }, [counter] ); // xx will keep reset it self 



  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {2 + 2}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <h1>Hello, {name}</h1>
      <h1>Hello, {isNameShowing === true ? name : "Don't show name!"}</h1>

      {name ? (
        <>
          <h1>{name}</h1>
        </>
      ) : (
        <>
          test elae
        </>
      )}

      <Person name={'_Ash_'} lastName={'_Qsm_'} state={'_NJ_'} />
      <Person name={'_Ash2_'} lastName={'_Qsm2_'} state={'_NJ2_'} />
      <Person />

    
      <button onClick={() => {}} >Inline function</button>
      <h1></h1>
      <button onClick={() => alert('Clicked')} >Alert clicked</button>
      <h1></h1>

      <button onClick={() => setCounter(counter - 1)} >-</button>
      <h1></h1>
      <button onClick={() => {  setCounter(counter - 1); }} >-</button>
      <h1></h1>
      <button onClick={() => setCounter((prevCount) => prevCount - 1) } >-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>

    </div>
  );
}

export default App;
