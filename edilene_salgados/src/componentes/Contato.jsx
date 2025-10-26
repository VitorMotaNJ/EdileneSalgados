import contatoImg from "../assets/img/logoBlack.jpeg"; 
import { Phone, Clock, MapPin } from "lucide-react";

function Contato() {
  return (
    <section className="py-16 bg-[#fff8f5]">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10">
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-600 mb-8">
            Estamos prontos para atender você e tornar seu evento ainda mais especial!
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 text-red-500 p-3 rounded-lg">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Telefone/WhatsApp</h3>
                <p className="text-gray-600">(11) 97554-0523</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-yellow-100 text-yellow-600 p-3 rounded-lg">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Atendimento</h3>
                <p className="text-gray-600">
                  Entrega e retirada em São Paulo e região
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-yellow-100 text-yellow-600 p-3 rounded-lg">
                <Clock size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Horário de Atendimento</h3>
                <p className="text-gray-600">
                  Segunda a Sábado: 8h às 20h <br /> Domingo: 8h às 18h
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/5511975540523"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-500 text-white font-medium mt-8 px-6 py-3 rounded-md hover:bg-red-600 transition"
          >
            Fale conosco no WhatsApp
          </a>
        </div>

        {/* Lado direito */}
        <div className="flex justify-center">
          <img
            src={contatoImg}
            alt="Edilene Salgados"
            className="rounded-2xl shadow-lg object-cover max-w-sm"
          />
        </div>
      </div>

      {/* Rodapé */}
      <div className="bg-red-500 text-center text-white py-8 mt-16">
        <h3 className="text-2xl font-bold mb-2">EDILENE SALGADOS</h3>
        <p className="text-sm opacity-90 mb-3">
          Sabor e qualidade para o seu evento
        </p>
        <p className="text-xs opacity-75">
          © 2025 Edilene Salgados. Todos os direitos reservados.
        </p>
      </div>
    </section>
  );
}

export default Contato;
