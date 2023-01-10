
import { ThemeProvider } from 'styled-components';
import './App.css';
import Footer from './Components/Footer';
import Typing from './Components/Typing';
import { useTheme } from './Context/ThemeContext';
import { GlobalStyle } from './Styles/global'
// var randomWords = require('random-words');

function App() {
  // var words=randomWords(50);
  const {theme}=useTheme()
  // console.log(theme);

  // let theme1={
  //   label: 'Red Theme',
  //   background: 'red',
  //   title: "white",
  //   typeBoxText: 'blue',
  //   stats: 'purple'
  // }
  return (

    <ThemeProvider theme={theme}>
      <div className='container'>
        <GlobalStyle />
        <h1>Header</h1>
        <Typing />
        <Footer />
      </div>
     </ThemeProvider>




  );
}

export default App;
