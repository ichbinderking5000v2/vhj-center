import Link from 'next/link'; // Importiere den Link-Tag

export default function Home() {
  return (
    <main className="flex min-h-screen">
      
      {/* Linke Seite mit Farbverlauf von Schwarz zu Weiß */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-r from-black to-white p-8">
        <div className="text-center">
          {/* Haupttext mit Farbverlauf von Türkis zu Blau */}
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600 mb-4">
            Willkommen bei Viggos PC Teile
          </h1>
          {/* Untertitel mit dem gleichen Farbverlauf wie der Haupttext */}
          <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600 mb-6">
            Deine digitale Lösung für hochwertige PC-Komponenten.
          </p>
          
          {/* Button in einem Link-Tag, der zu einer anderen Seite führt */}
          <Link href="/vhj-center">  {/* Hier gibst du den Pfad zur Zielseite an */}
            <button className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all duration-300">
              Jetzt starten
            </button>
          </Link>
        </div>
      </div>

      {/* Rechte Seite: Bild der PC-Komponenten */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8">
        <div className="relative w-full h-full flex justify-center items-center mt-16"> {/* Flexbox-Zentrierung mit mehr Abstand oben */} 
          <img 
            src="/pc.jpg"  // Bild im public Ordner
            alt="PC Bauteile und Komponenten"
            width="1400"   // Breite
            height="500"   // Höhe
            style={{ objectFit: 'contain' }}  // Das Bild innerhalb des Containers anpassen
          />
        </div>
      </div>

    </main>
  );
}
