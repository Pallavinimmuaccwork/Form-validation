// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
<Router>
    <div className="App">
      <div className='App-link'>
      <Link to="/home">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>

      </div>
      <div>
          <Route path="/home" render={(props)=>{
            return <Home userName="Pallavi" />
          }}/>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

        </div>
    </div>
    </Router>
  );
}

export default App;
