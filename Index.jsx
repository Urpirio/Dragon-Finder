import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Buscador from "./src/components/Buscador";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Buscador/>
    </StrictMode>
);
