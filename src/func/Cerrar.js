/**
 * Restaura la vista de búsqueda principal
 * 
 * Esta función cierra la tarjeta de información del personaje y 
 * restablece la interfaz a su estado inicial de búsqueda.
 * Recrea el campo de entrada con su funcionalidad de búsqueda.
 * 
 * @returns {void}
 */
import BuscadorZ from "./Buscador";
import LogoDBS from "../img/logos/image.png";

export default function Cerrar() {
    const Buscador = document.querySelector('.Buscador');
    Buscador.innerHTML = '';

    // Restaura el HTML de la interfaz de búsqueda
    Buscador.innerHTML = `
    <div class='Buscador_contenedor'>
                <div class='Buscador_contenedor_div1'>
                    <img src=${LogoDBS} alt="Logo Dragon Ball super" />
                </div>
                <div class='Buscador_Contenedor_div2'>
                    <span class='BC_div2_Span1'>
                        <i class='bx bx-search' ></i>
                    </span>
                    <div class='Resultado'>
    
                    </div>
                </div>
    </div>
    `;
    const BC_div2_Span1 = document.querySelector('.BC_div2_Span1');

    // Recrea el campo de entrada con su funcionalidad
    const InputSearch =document.createElement('input');
    InputSearch.type = 'text';
    InputSearch.id = 'Buscador';
    InputSearch.placeholder = 'Busca a tu personaje favorito';
    InputSearch.addEventListener('input',()=>{
        BuscadorZ(InputSearch.value);
    });
    BC_div2_Span1.append(InputSearch);
    
};
