function Salgados() {
  const images = [
    "/src/assets/img/salgadosVariados1.png",
    "/src/assets/img/salgadosVariados2.png",
    "/src/assets/img/salgadosVariados3.png",
    "/src/assets/img/salgadosVariados4.png",
    "/src/assets/img/salgadosCarne.png",
    "/src/assets/img/salgadosChurros.png",
  ];

  const fallback = "/src/assets/img/salgadosVariados1.png";

  return (
    <section className="py-16 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-700 mb-3">
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
                  onError={(e) => { e.currentTarget.src = fallback; }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Feitos com ingredientes selecionados e muito carinho ❤️</p>
        </div>
      </div>
    </section>
  );
}

export default Salgados;
