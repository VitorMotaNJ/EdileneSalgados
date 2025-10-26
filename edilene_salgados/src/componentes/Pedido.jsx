import { MapPin, Phone, Truck, Utensils, Instagram, ShoppingBag, UtensilsCrossed  } from "lucide-react";

function Pedido() {
  return (
    <section id='pedido' className="py-20 bg-yellow-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-red-500 mb-4">
          Faça seu pedido!
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Peça seus salgados fresquinhos e receba com praticidade e agilidade.
          Atendemos apenas a região de Guaianases e arredores!
        </p>


        <div className="flex flex-wrap justify-center gap-4 mb-16">

          <a
            href="https://wa.me/5511975540523?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20de%20salgados."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition shadow-md"
          >
            <Phone size={20} />
            WhatsApp
          </a>


          <a
            href="https://shre.ink/kAIZ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition shadow-md"
          >
            <Utensils size={20} />
            iFood
          </a>


          <button
            disabled
            className="flex items-center gap-2 bg-gray-300 text-gray-600 font-semibold px-6 py-3 rounded-lg shadow-inner cursor-not-allowed"
          >
            <ShoppingBag size={20} />
            99Food (em breve)
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-10 text-left">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full mb-4">
              <MapPin size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Localização</h3>
            <p className="text-gray-600">
              Atendemos em Guaianases e região.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full mb-4">
              <UtensilsCrossed size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Encomendas</h3>
            <p className="text-gray-600">
              Trabalhamos com encomendas para o seu evento.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full mb-4">
              <Phone size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Contato Direto</h3>
            <p className="text-gray-600">
              Fale conosco pelo WhatsApp: <br />
              <span className="font-medium text-gray-800">(11) 97554-0523</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pedido;
