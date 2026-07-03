export default function PageHero({ image, title, subtitle, children }) {
  return (
    <section
      className="relative flex items-center justify-center text-center text-white min-h-[320px] sm:min-h-[420px] bg-neutral-700 bg-cover bg-center"
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative container-site py-16">
        <h1 className="text-4xl sm:text-5xl font-bold drop-shadow">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-xl sm:text-2xl drop-shadow">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
}
