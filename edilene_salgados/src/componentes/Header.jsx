import Styles from './css/Header.module.css'
import fundo_header from '../assets/img/fundo_header_salgados.jpg'

function Header(){
  return(
    <header style={{backgroundImage: `url(${fundo_header})` }} className=' relative w-full h-[500px] flex justify-center flex-col bg-cover bg-center bg-no-repeat'>

      <div className='absolute inset-0 bg-black/25 z-10'></div>
      <div className='text-center z-20'  >
        <h1 className='text-6xl text-white font-extrabold'>EDILENE SALGADOS</h1>
        <p className='text-2xl mt-4 text-white'>Salgados deliciosos e fresquinhos para sua festa ou evento!</p>
        <div className='flex mt-5 justify-center gap-6'>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-10 rounded-md shadow-md transition duration-300 text-md cursor-pointer">
            Fazer Pedido
          </button>
          <a
          href="https://wa.me/5511975540523"
          target="_blank"
          rel="noopener noreferrer"
          className="flex text-center items-center gap-2 border border-white text-white font-medium py-3 px-6 rounded-md hover:bg-green-500 transition duration-300"
        >        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"org
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75C2.25 5.784 3.034 5 4 5h2.25c.414 0 .75.336.75.75v2.25c0 .414-.336.75-.75.75H5.25A.75.75 0 0 0 4.5 9l.008.16c.042.81.2 1.65.48 2.4a11.25 11.25 0 0 0 5.44 5.44 8.86 8.86 0 0 0 2.4.48L13 17.5a.75.75 0 0 0 .75-.75v-1.5c0-.414.336-.75.75-.75H16.5c.966 0 1.75.784 1.75 1.75V20c0 .966-.784 1.75-1.75 1.75h-.25c-5.937 0-10.75-4.813-10.75-10.75V8c0-.966.784-1.75 1.75-1.75H8c.414 0 .75.336.75.75V9a.75.75 0 0 1-.75.75H6.5a.75.75 0 0 0-.75.75v.25z"
          />
        </svg>
          WhatsApp</a>
        </div>

      </div>
    </header>
  )
}

export default Header;