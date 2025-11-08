/**
 * Punto de entrada principal de la aplicación Dragon Finder
 * 
 * Este archivo inicializa la aplicación React y renderiza el componente
 * principal de búsqueda en el elemento root del DOM.
 */
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Buscador from "./src/components/Buscador";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Buscador/>
    </StrictMode>
);
