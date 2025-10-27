import { useState } from "react";

import avaliacao1 from "../assets/img/avaliacao1.jpg";
import avaliacao2 from "../assets/img/avaliacao2.jpg";
import avaliacao3 from "../assets/img/avaliacao3.jpg";
import avaliacao4 from "../assets/img/avaliacao4.jpg";
import avaliacao5 from "../assets/img/avaliacao5.jpg";
import avaliacao6 from "../assets/img/avaliacao6.jpeg";
import avaliacao7 from "../assets/img/avaliacao7.jpeg";
import avaliacao8 from "../assets/img/avaliacao8.jpeg";
import avaliacao9 from "../assets/img/avaliacao9.jpeg";
import avaliacao10 from "../assets/img/avaliacao10.jpeg";
import avaliacao11 from "../assets/img/avaliacao11.jpeg";

import { Phone, Clock, MapPin, Instagram, Facebook } from "lucide-react";

function Avaliacoes() {
  const avaliacoes = [avaliacao1, avaliacao2, avaliacao3, avaliacao4, avaliacao5, avaliacao6, avaliacao7, avaliacao8, avaliacao9, avaliacao10, avaliacao11];
  const [indiceAtual, setIndiceAtual] = useState(0);

  const anterior = () => {
    setIndiceAtual((prev) => (prev === 0 ? avaliacoes.length - 1 : prev - 1));
  };

  const proximo = () => {
    setIndiceAtual((prev) => (prev === avaliacoes.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="avaliacoes" className="py-10 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-red-500 mb-4">
          O que nossos clientes dizem 🥰
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Veja algumas das avaliações deixadas por nossos clientes no iFood.
        </p>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-lg border bg-white">
            <img
              src={avaliacoes[indiceAtual]}
              alt={`Avaliação ${indiceAtual + 1}`}
              className="w-full h-[400px] object-contain"
            />
          </div>

          <button
            onClick={anterior}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-3 py-2 rounded-r-md shadow-md transition"
          >
            ‹
          </button>

          <button
            onClick={proximo}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-3 py-2 rounded-l-md shadow-md transition"
          >
            ›
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {avaliacoes.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndiceAtual(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                i === indiceAtual ? "bg-yellow-500 scale-110" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
          <div className="flex justify-center flex-wrap gap-2 mt-8">
            <a
              href="https://wa.me/5511975540523?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20de%20salgados."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-md transition shadow-md"
            >
              <Phone size={20} />
              WhatsApp
            </a>

            <a
              href="https://www.instagram.com/edilenesalgadosvvh/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-3 rounded-md transition shadow-md"
            >
              <Instagram size={20} />
              Instagram
            </a>
            <a
              href="https://m.facebook.com/profile.php?id=100003713927930&ref=ig_profile_ac&target=100003713927930&funlid=CbgNCvBrPJZHSpri&wtsid=rdr_0oLmWqQF5Isqaayeu#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-md transition shadow-md"
            >
              <Facebook size={20} />
              Facebook
            </a>
          </div>
    </section>
  );
}

export default Avaliacoes;
