import BuscadorZ from "./Buscador";
import LogoDBS from "../img/logos/image.png";

export default function Cerrar() {
    const Buscador = document.querySelector('.Buscador');
    Buscador.innerHTML = '';

    
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

    const InputSearch =document.createElement('input');
    InputSearch.type = 'text';
    InputSearch.id = 'Buscador';
    InputSearch.placeholder = 'Busca a tu personaje favorito';
    InputSearch.addEventListener('input',()=>{
        BuscadorZ(InputSearch.value);
    });
    BC_div2_Span1.append(InputSearch);
    
};
