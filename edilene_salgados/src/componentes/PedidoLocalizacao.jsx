import { MapPin, Phone, Truck } from "lucide-react";

function PedidoLocalizacao() {
  return (
    <section className="py-20 bg-yellow-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-yellow-700 mb-4">
          Faça Seu Pedido
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Peça seus salgados fresquinhos e receba com praticidade e agilidade.
          Atendemos toda a região de São Paulo!
        </p>

        {/* Botão direto para o WhatsApp */}
        <a
          href="https://wa.me/5511975540523?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20de%20salgados."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition shadow-md"
        >
          <Phone size={20} />
          Fazer Pedido pelo WhatsApp
        </a>

        {/* Blocos de informações */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-left">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full mb-4">
              <MapPin size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Localização</h3>
            <p className="text-gray-600">
              Entrega e retirada em Guaianases e região.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full mb-4">
              <Truck size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Entrega Rápida</h3>
            <p className="text-gray-600">
              Trabalhamos com agendamento e entregas pontuais para o seu evento.
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

export default PedidoLocalizacao;
