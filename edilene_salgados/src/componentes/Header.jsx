import fundo_header from '../assets/img/salgadosVariados5.png'
import { Phone } from "lucide-react";


function Header(){
  return(
    <header style={{backgroundImage: `url(${fundo_header})` }} className=' relative w-full h-[500px] flex justify-center flex-col bg-cover bg-center bg-no-repeat'>

      <div className='absolute inset-0 bg-black/25 z-10'></div>
      <div className='text-center z-20'  >
        <h1 className='text-6xl text-white font-extrabold'>EDILENE SALGADOS</h1>
        <p className='text-2xl mt-4 text-white'>Salgados deliciosos e fresquinhos para sua festa ou evento!</p>
        <div className='flex mt-5 justify-center gap-6'>
          <a href='#pedido' className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-10 rounded-md shadow-md transition duration-300 text-md cursor-pointer">
            Fazer Pedido
          </a>
          <a
            href="https://wa.me/5511975540523?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20de%20salgados."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition shadow-md"
          >
            <Phone size={20} />
            WhatsApp
          </a>
        </div>

      </div>
    </header>
  )
}

export default Header;