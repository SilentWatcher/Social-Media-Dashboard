// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Followers from "./components/Followers"
import Header from "./components/Header"
import OverviewToday from "./components/OverviewToday"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <section className="p-8 mx-auto max-w-7xl">
      <Header/>
      <Followers/>
      <OverviewToday/>
    </section>
    </>
  )
}

export default App
