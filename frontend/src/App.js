import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import StoreContext from './components/store/StoreContext';

function App() {

  const [filteredImages, setFilteredImages] = useState(null);

  useEffect(() => {
    console.log(filteredImages);
  }, [filteredImages]);

  return (
    <>
      <StoreContext.Provider value={[filteredImages, setFilteredImages]}>
        <Home />
      </StoreContext.Provider>
    </>
  );
}

export default App;
