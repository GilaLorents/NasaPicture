import logo from './logo.svg';
import './App.css';
import { MyRoute } from './Route'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return (

    <div className="App">
      {/* <ReactUploadImage></ReactUploadImage> */}
      <Router>
        <MyRoute></MyRoute>
      </Router>
      {/* <Orders></Orders> */}
      {/* < Product></Product>     */}
      {/* <Login></Login>
      <Register /> */}
      {/* <NasaPictures></NasaPictures> */}
    </div>

  );
}

export default App;
