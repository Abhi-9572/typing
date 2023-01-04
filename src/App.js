
import './App.css';
import Typing from './Components/Typing';
import {GlobalStyle} from './Styles/global'
// var randomWords = require('random-words');

function App() {
  // var words=randomWords(50);
  return (
    <div className='container'>
      <GlobalStyle/>
      <h1>Header</h1>
      <Typing />
      <h1>Footer</h1>
    </div>


   
  );
}

export default App;
