
import React from 'react';
import { EncoderContent } from '../types';
import CodeBlock from './CodeBlock';
import DataTable from './DataTable';

const CheckIcon: React.FC = () => (
  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

const XIcon: React.FC = () => (
  <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
  </svg>
);

const EncoderSection: React.FC<EncoderContent> = ({
  title,
  description,
  code,
  pros,
  cons,
  initialData,
  transformedData,
  transformedHeaders,
  note,
}) => {
    
  const initialHeaders = Object.keys(initialData[0] || {});
  const highlightableHeaders = transformedHeaders.filter(h => !initialHeaders.includes(h));
  if (title.includes('LabelEncoder')) {
      highlightableHeaders.push('color', 'talla');
  }

  return (
    <section className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
            <DataTable title="Datos Originales" headers={initialHeaders} data={initialData} />
            <div className="flex justify-center items-center text-gray-400 py-4">
                <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </div>
            <DataTable title="Datos Transformados" headers={transformedHeaders} data={transformedData} highlightColumns={highlightableHeaders}/>
            {note && (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-md text-sm">
                    <p><span className="font-bold">Nota:</span> {note}</p>
                </div>
            )}
        </div>
        <div className="space-y-8">
          <CodeBlock code={code} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-bold text-lg text-green-800 mb-2">Ventajas</h4>
              <ul className="space-y-2 text-green-700">
                {pros.map((pro, i) => (
                  <li key={i} className="flex items-start"><CheckIcon /> {pro}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="font-bold text-lg text-red-800 mb-2">Desventajas</h4>
              <ul className="space-y-2 text-red-700">
                {cons.map((con, i) => (
                  <li key={i} className="flex items-start"><XIcon /> {con}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EncoderSection;
