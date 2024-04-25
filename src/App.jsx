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
    <div className="relative">
    <div className="bg-slate-100 dark:bg-slate-700 w-full absolute t-0 l-0 h-[30vh] rounded-b-lg -z-10"></div>
    <section className="p-8 mx-auto max-w-7xl">
      <Header/>
      <Followers/>
      <OverviewToday/>
    </section>
    </div>
  )
}

export default App
