import salgadosVariados1 from "../assets/img/salgadosVariados1.png";
import salgadosVariados2 from "../assets/img/salgadosVariados2.png";
import salgadosVariados3 from "../assets/img/salgadosVariados3.png";
import salgadosVariados4 from "../assets/img/salgadosVariados4.png";
import salgadosCarne from "../assets/img/salgadosCarne.png";
import salgadosChurros from "../assets/img/salgadosChurros.png";

import { Phone, Clock, MapPin, Instagram, Facebook } from "lucide-react";

function Salgados() {
  const images = [
    salgadosVariados1,
    salgadosVariados2,
    salgadosVariados3,
    salgadosVariados4,
    salgadosCarne,
    salgadosChurros,
  ];

  const fallback = salgadosVariados1;

  return (
    <section className="py-10 bg-linear-to-b from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-red-500 mb-3">
            Variedade de Salgados
          </h2>
          <p className="text-lg text-gray-600">
            Produzidos com muito sabor e qualidade — veja um pouco do que fazemos!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
          {images.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-full h-64 bg-gray-200">
                <img
                  src={src}
                  alt={`Foto de salgados ${i + 1}`}
                  onError={(e) => {
                    e.currentTarget.src = fallback;
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
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
      </div>
    </section>
  );
}

export default Salgados;
