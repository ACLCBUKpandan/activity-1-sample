import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ItemDetails from './pages/ItemDetails';

function App() {
  return (
    <Routes>

      <Route
        path='/'
        element={<Home />}>
      </Route>

      <Route
        path='/products/:id'
        element={<ItemDetails />}>
      </Route>

    </Routes>
  )

}

export default App
