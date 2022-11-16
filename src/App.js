import Header from './components/Header';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WatchList from './components/WatchList';
import Watched from './components/Watched';
import Add from './components/Add';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<WatchList/>}/>
        <Route path="/Watched" element={<Watched/>}/>
        <Route path="/Add" element={<Add/>}/>
      </Routes>
    </Router>
  );
}

export default App;
