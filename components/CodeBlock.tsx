
import React, { useState } from 'react';

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden relative">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white text-xs font-bold py-1 px-2 rounded transition-colors duration-300"
      >
        {copied ? '¡Copiado!' : 'Copiar'}
      </button>
      <pre className="p-4 overflow-x-auto text-sm">
        <code className="language-python">{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
