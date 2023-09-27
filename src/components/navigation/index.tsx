const pages = ["INICIO", "CATEGORIAS", "SOBRE", "CONTATO"];

export const Navigation = () => {
  return (
    <section className="hidden sm:flex items-center justify-center gap-12 mb-10">
      {pages.map((page) => (
        <a className="text-lg font-semibold text-dark-10" href="#" key={page}>
          {page}
        </a>
      ))}
    </section>
  );
};
