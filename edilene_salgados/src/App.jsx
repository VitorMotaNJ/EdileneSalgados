import { useState } from 'react'

import Header from './componentes/Header'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-800 bg-amber-100 flex flex-col '>
      <Header />
    </div>

  )
}

export default App
