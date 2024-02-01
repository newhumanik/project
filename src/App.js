import React from 'react';
import './App.css';
import Updates from './Components/Updates/Updates';
import Trends from './Components/Trends/Trends';
import Recomendations from './Components/Recomendations/recomendations';
import News from './Components/News/News';
import Groups from './Components/Groups/Groups';
import Header from './Components/Header/Header';


function App() {
  return (
      <>
        <Trends/>
        <Updates/>
        <Recomendations/>
        <News/>
        <Groups/>
        <Header/>
      </>
  );
}

export default App;
