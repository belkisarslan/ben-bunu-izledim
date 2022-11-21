import Header from './components/Header';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WatchList from './components/WatchList';
import Watched from './components/Watched';
import Add from './components/Add';
import { GlobalProvider } from './context/GlobalState';
import Home from './components/Home';

function App() {
  return (
    <GlobalProvider>
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/WatchList" element={<WatchList/>}/>
        <Route path="/Watched" element={<Watched/>}/>
        <Route path="/Add" element={<Add/>}/>
      </Routes>
    </Router>
    </GlobalProvider>
  );
}

export default App;
