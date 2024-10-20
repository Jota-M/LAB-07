import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '../src/components/Button'
import { WrapperList } from './components/WrapperList'
import { List } from './components/List'

function App() {
  return (
    <>
      <WrapperList>
        <List />
      </WrapperList>
    </>
  )
}

export default App
