import { useState } from 'react'
import './App.css'
import { Button } from '../src/components/Button'
import { RandomComponent } from './components/Randomcomponent';
import { CompWithProps } from './components/CompWithProps';
function App() {
  return (
    <>
     <h1>Hello, Vite!</h1>
     <CompWithProps headingType="h1" placeholderText="Nombre Usuario" />
    </>
  )
}
export default App
