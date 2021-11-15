import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersList from './Components/UsersList';
import Profile from './Components/Profile';




function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Routes>
      <Route exact path="/" />
      <Route path="/userList" element={ <UsersList />} />
      <Route path="/profile/:userId" element={ <Profile /> }/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
