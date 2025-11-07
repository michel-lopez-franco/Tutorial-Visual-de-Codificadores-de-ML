
import React from 'react';

interface DataTableProps {
  title: string;
  headers: string[];
  data: { [key: string]: any }[];
  highlightColumns?: string[];
}

const DataTable: React.FC<DataTableProps> = ({ title, headers, data, highlightColumns = [] }) => {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-lg font-semibold mb-3 text-gray-700">{title}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  scope="col"
                  className={`px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                    highlightColumns.includes(header) ? 'bg-blue-100 text-blue-800' : ''
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {headers.map((header) => (
                  <td
                    key={`${rowIndex}-${header}`}
                    className={`px-4 py-3 whitespace-nowrap text-sm ${
                      highlightColumns.includes(header) ? 'bg-blue-50 font-medium text-blue-900' : 'text-gray-800'
                    }`}
                  >
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
