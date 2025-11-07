
import React, { useState } from 'react';
import { EncoderType } from './types';
import { ENCODER_CONTENT } from './constants';
import EncoderSection from './components/EncoderSection';

const App: React.FC = () => {
  const [activeEncoder, setActiveEncoder] = useState<EncoderType>(EncoderType.LabelEncoder);

  const encoderTypes = Object.values(EncoderType);

  const renderContent = () => {
    const content = ENCODER_CONTENT[activeEncoder];
    return <EncoderSection {...content} />;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Tutorial Visual de Codificadores de ML
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-0">
              Diferencias entre <code className="bg-gray-200 p-1 rounded">get_dummies</code>, <code className="bg-gray-200 p-1 rounded">LabelEncoder</code>, <code className="bg-gray-200 p-1 rounded">OneHotEncoder</code> y <code className="bg-gray-200 p-1 rounded">ColumnTransformer</code>
            </p>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-4 rounded-md mb-8 shadow">
          <h2 className="font-bold text-lg">¿Por qué codificar variables categóricas?</h2>
          <p className="mt-1">
            Los modelos de Machine Learning requieren que toda la entrada sea numérica. La codificación de variables categóricas es el proceso de convertir datos de texto (categorías) en valores numéricos para que los algoritmos puedan procesarlos y aprender de ellos.
          </p>
        </div>

        <div className="sticky top-0 z-10 bg-gray-50/90 backdrop-blur-sm py-4 mb-8">
          <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-white p-2 rounded-full shadow-lg">
            {encoderTypes.map((encoder) => (
              <button
                key={encoder}
                onClick={() => setActiveEncoder(encoder)}
                className={`px-3 sm:px-6 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  activeEncoder === encoder
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-transparent text-gray-600 hover:bg-gray-200'
                }`}
              >
                {ENCODER_CONTENT[encoder].navTitle}
              </button>
            ))}
          </nav>
        </div>

        <div className="transition-opacity duration-500 ease-in-out">
          {renderContent()}
        </div>
      </main>
      
      <footer className="bg-white mt-12 py-6 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Tutorial de Codificadores de ML. Creado con fines educativos.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
