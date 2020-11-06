import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './components/Home';
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

  useEffect(() => {
    console.log(selectedExerciseProp);
  }, [selectedExerciseProp]);

  return (
    <>
      <StoreContext.Provider value={[selectedExerciseProp, setSelectedExerciseProp]}>
        <Home />
      </StoreContext.Provider>
    </>
  );
}

export default App;
 