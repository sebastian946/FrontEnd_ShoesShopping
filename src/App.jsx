import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header.jsx";
import WelcomePage from "./components/WelcomePage.jsx";
import Products from "./components/Products.jsx";

function App() {

  return (
    <main>
      <Header/>
      <WelcomePage/>
      <Products/>
    </main>
  )
}

export default App
