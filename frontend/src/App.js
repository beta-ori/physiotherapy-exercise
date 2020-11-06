import './App.css';
import React, { useState } from 'react';
import Home from './components/Home';
import Navbar from './components/navbar/Navbar';
import StoreContext from './components/store/StoreContext';

function App() {

  const [selectedExerciseProp, setSelectedExerciseProp] = useState({
      searchText: '',
      condition: '',
      ageCategory: '',
      difficulty: [],
      imageOrientation: '',
      equipment: [],
      exerciseType: [],
      bodyPart: []
  });

  return (
    <>
      <StoreContext.Provider value={[selectedExerciseProp, setSelectedExerciseProp]}>
        <Navbar />
        <Home />
      </StoreContext.Provider>
    </>
  );
}

export default App;
 