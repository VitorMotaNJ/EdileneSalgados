import { useState } from 'react'

import Header from './componentes/Header'
import Salgados from './componentes/Salgados'
import Contato from './componentes/Contato'
import Pedido from './componentes/Pedido'
import Avaliacoes from './componentes/Avaliacoes'
import './index.css'

function App() {

  return (
    <main className='w-full bg-amber-100 flex flex-col '>
      <Header />
      <Salgados />
      <Avaliacoes />
      <Pedido />
      <Contato /> 
    </main>

  )
}

export default App
