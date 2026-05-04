import { ReactNode, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bed, Bath, ChefHat, TreePine, MessageCircle, MapPin, Maximize2, ExternalLink } from "lucide-react";

export default function App() {
  const whatsappLink = "https://w.app/5ma8td";
  const mapLocation = "https://maps.app.goo.gl/WfnZ9FPN6eZdYr3g7";

  const galleryImages = [
    "https://drive.google.com/uc?export=view&id=1ig3SGmMWxxHwBDFsOgVenNwDgOqxGQcE",
    "https://drive.google.com/uc?export=view&id=1UHPqsERlGeNY8l-Ej79XsJSjkd4E7klD",
    "https://drive.google.com/uc?export=view&id=1-BfCBTh6CX8kkhrBfM9svOD9bDisdfK4",
    "https://drive.google.com/uc?export=view&id=1HQCBssGZ6y5xz69oQKULOsdQ9b40VXAm",
    "https://drive.google.com/uc?export=view&id=1j5QZL6_wCX6Icv3dtSQoCoqCiccRcfvn",
    "https://drive.google.com/uc?export=view&id=1fwQyfKk9Vg_6fldLYcTC7AzKShJvt8qj",
    "https://drive.google.com/uc?export=view&id=1r1gINvkGgDzZAxL3rUHzz19dyl1WOCuf",
    "https://drive.google.com/uc?export=view&id=16MOHfo3fM2aoM7q-uvbzrxPHnuYYB8UA",
    "https://drive.google.com/uc?export=view&id=1UPJh7uWkLmo1gWZG3s2f87tPiah2ISpr",
    "https://drive.google.com/uc?export=view&id=1H-G7OrW7O_h0_6S3kURTbu0BynhMBzZd",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  return (
    <div id="home-rental-app" className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      {/* Header Section */}
      <header id="app-header" className="bg-white border-b border-slate-200 py-4 px-6 lg:px-8 flex justify-between items-center sticky top-0 z-50">
        <div id="logo-container" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-600 rounded-md flex items-center justify-center text-white font-bold text-lg">C</div>
          <span className="font-bold text-slate-800 uppercase tracking-tight text-sm">Casa no Parque Sagrada Família</span>
        </div>
        <nav id="nav-links" className="hidden md:flex gap-6 text-xs font-semibold text-slate-500 uppercase">
          <a href="#hero" className="text-green-600 hover:text-green-700 transition-colors">Destaque</a>
          <a href="#features" className="hover:text-slate-700 transition-colors">Detalhes</a>
          <a href="#gallery" className="hover:text-slate-700 transition-colors">Galeria</a>
        </nav>
        <div className="md:hidden">
           <MessageCircle className="w-6 h-6 text-green-600" />
        </div>
      </header>

      {/* Hero Slider Section */}
      <section id="hero-slider" className="relative h-[250px] sm:h-[400px] lg:h-[500px] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img 
              src={galleryImages[currentSlide]} 
              className="w-full h-full object-cover" 
              alt={`Slide ${currentSlide}`} 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </motion.div>
        </AnimatePresence>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center z-10">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-green-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4"
          >
            Imóvel de Alto Padrão
          </motion.span>
          <motion.h2 
            key={`title-${currentSlide}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black drop-shadow-2xl"
          >
            Sua Nova História Começa Aqui
          </motion.h2>
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="mt-4 flex flex-wrap justify-center gap-4 text-xs sm:text-sm font-medium"
          >
            <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/30">2 Quartos (1 Suíte)</span>
            <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/30">Área Gourmet</span>
            <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/30">Localização Privilegiada</span>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {galleryImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 transition-all rounded-full ${currentSlide === idx ? 'w-8 bg-green-500' : 'w-4 bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      <main id="main-content" className="flex-1 flex flex-col lg:grid lg:grid-cols-12 gap-0">
        {/* Left Content: Hero & Features */}
        <section id="hero" className="lg:col-span-5 flex flex-col justify-center py-12 px-6 lg:px-12 xl:px-16 border-r border-slate-200 bg-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span id="availability-badge" className="bg-green-100 text-green-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6 inline-block">
              Disponível para Aluguel
            </span>
            <h1 id="hero-title" className="text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
              Alugue sua Nova Casa: <span className="text-green-600 block lg:inline">Conforto & Espaço</span>
            </h1>
            <p id="hero-subtitle" className="mt-6 text-slate-600 text-lg leading-relaxed max-w-xl">
              Casa bem distribuída com 2 quartos (sendo 1 suíte), quintal espaçoso e varanda. Pronta para morar e acolher sua família com total privacidade.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div id="features" className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <FeatureItem 
              id="feature-comfort"
              icon={<Bed className="w-5 h-5 text-green-600" />}
              title="Conforto"
              description="Suíte master e quarto iluminado."
            />
            <FeatureItem 
              id="feature-practical"
              icon={<Bath className="w-5 h-5 text-green-600" />}
              title="Praticidade"
              description="2 banheiros modernos completos."
            />
            <FeatureItem 
              id="feature-social"
              icon={<ChefHat className="w-5 h-5 text-green-600" />}
              title="Social"
              description="Cozinha integrada à área externa."
            />
            <FeatureItem 
              id="feature-leisure"
              icon={<TreePine className="w-5 h-5 text-green-600" />}
              title="Lazer"
              description="Varanda e quintal para lazer."
            />
          </div>

          <motion.a 
            id="cta-button-main"
            href={whatsappLink}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-8 rounded-2xl shadow-xl shadow-green-100 transition-all text-lg group"
          >
            <MessageCircle className="w-6 h-6 fill-white group-hover:animate-pulse" />
            Agendar uma Visita pelo WhatsApp
          </motion.a>
        </section>

        {/* Right Content: Main Image & Gallery */}
        <section id="gallery" className="lg:col-span-7 flex flex-col p-4 lg:p-8 gap-6 bg-slate-50">
          <motion.div 
            id="main-image-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex-none lg:flex-1 min-h-[400px] group"
          >
            <img 
              id="hero-image"
              src="https://drive.google.com/uc?export=view&id=1ig3SGmMWxxHwBDFsOgVenNwDgOqxGQcE" 
              alt="Fachada da Casa" 
              className="absolute inset-0 object-cover w-full h-full rounded-3xl shadow-2xl border-8 border-white"
              referrerPolicy="no-referrer"
            />
            <div id="image-label" className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg border border-slate-200">
              <p className="text-sm font-bold text-slate-800">Vista Principal: Fachada Moderna</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Sua futura residência</p>
            </div>
          </motion.div>

          <div id="gallery-grid" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {galleryImages.map((src, index) => (
              <motion.div 
                key={index}
                id={`gallery-item-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="relative aspect-square overflow-hidden rounded-xl border border-slate-200 shadow-sm group cursor-pointer"
              >
                <img 
                  src={src} 
                  alt={`Foto ${index + 1}`} 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <Maximize2 className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            ))}
            <div id="gallery-plus" className="aspect-square rounded-xl bg-slate-200 flex flex-col items-center justify-center text-slate-500 transition-colors hover:bg-slate-300 cursor-pointer border border-slate-300 border-dashed">
              <span className="font-black text-xl">+12</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">Fotos</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Bar */}
      <footer id="app-footer" className="bg-slate-900 text-white py-6 px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] lg:text-xs">
        <div id="footer-info" className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <a 
            href={mapLocation} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 group hover:text-green-400 transition-colors"
          >
            <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-green-900/30 transition-colors">
              <MapPin className="w-4 h-4 text-green-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-300">Localização</span>
              <span className="flex items-center gap-1">
                Av. Daniel Rodrigues Veodato, 938 - Parque Sagrada Família
                <ExternalLink className="w-3 h-3 opacity-50" />
              </span>
            </div>
          </a>
          <span className="opacity-20 hidden md:inline h-8 w-px bg-white/20"></span>
          <div className="flex items-center gap-3">
             <div className="bg-slate-800 p-2 rounded-lg">
                <Maximize2 className="w-4 h-4 text-green-400" />
             </div>
             <div className="flex flex-col">
                <span className="font-bold text-slate-300">Área Útil</span>
                <span>Total de 134m² construídos</span>
             </div>
          </div>
        </div>
        <div id="footer-cta-text" className="font-medium tracking-tight opacity-90 text-center md:text-right md:max-w-[300px]">
          Fale direto com o proprietário e agende sua visita hoje mesmo no melhor do <span className="text-green-400">Parque Sagrada Família</span>.
        </div>
      </footer>
    </div>
  );
}

function FeatureItem({ id, icon, title, description }: { id: string, icon: ReactNode, title: string, description: string }) {
  return (
    <div id={id} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
      <div className="flex-shrink-0 bg-green-50 p-2 rounded-lg">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight">{title}</h3>
        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
