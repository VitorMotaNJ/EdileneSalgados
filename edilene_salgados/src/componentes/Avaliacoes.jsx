import { useState } from "react";

// 👉 importe aqui seus prints de avaliações (substitua pelos seus arquivos reais)
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
    <section id="avaliacoes" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-yellow-700 mb-4">
          O que Nossos Clientes Dizem 🥰
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
    </section>
  );
}

export default Avaliacoes;
