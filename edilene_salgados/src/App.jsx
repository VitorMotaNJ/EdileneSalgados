import { useState } from 'react'

import Header from './componentes/Header'
import Salgados from './componentes/Salgados'
import Contato from './componentes/Contato'
import PedidoLocalizacao from './componentes/PedidoLocalizacao'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-800 bg-amber-100 flex flex-col '>
      <Header />
      <Salgados />
      <PedidoLocalizacao />
      <Contato /> 
    </div>

  )
}

export default App
