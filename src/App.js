import logo from './logo.svg';
import './App.css';
import FirstSlide from './Components/FirstSlide';
import SecondSlide from './Components/SecondSlide';
import ThirdSlide from './Components/ThirdSlide';
import FirstPointFive from './Components/FirstPointFive'

function App() {

  const goToSecondPart = () =>{
    
  }
  return (
    <div className="App">
     <FirstSlide />
     <FirstPointFive />
     <SecondSlide />
     <ThirdSlide />
    </div>
  );
}

export default App;
