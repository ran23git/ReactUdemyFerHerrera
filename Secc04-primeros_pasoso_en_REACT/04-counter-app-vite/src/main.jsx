import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp'; // Asegúrate de que esta línea esté correctamente escrita
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* No pasamos props, por lo que React usará los valores predeterminados */}
    <FirstApp />
  </React.StrictMode>
);
