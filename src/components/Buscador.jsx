/**
 * Componente principal de búsqueda de personajes de Dragon Ball
 * 
 * Este componente renderiza la interfaz principal de búsqueda que incluye:
 * - Logo de Dragon Ball Super
 * - Campo de búsqueda con autocompletado
 * - Área de resultados
 * 
 * @component
 * @returns {JSX.Element} Componente de búsqueda de personajes
 */
import React from 'react'
import LogoDBS from "../img/logos/image.png";
import '../Style/Buscador.less';
import BuscadorZ from '../func/Buscador';
// import InfoPersonaje from './InfoPersonaje';


export default function Buscador() {

    /**
     * Maneja el evento de entrada del usuario en el campo de búsqueda
     * Llama a la función BuscadorZ para buscar personajes en tiempo real
     */
    const EstaBuscando = () => {
        BuscadorZ(document.getElementById('Buscador').value);
    };

  return (
    <section className='Buscador B1'>
        {/* <InfoPersonaje/> */}
        <div className='Buscador_contenedor'>
            <div className='Buscador_contenedor_div1'>
                <img src={LogoDBS} alt="Logo Dragon Ball super" />
            </div>
            <div className='Buscador_Contenedor_div2'>
                <span className='BC_div2_Span1'>
                    <i class='bx bx-search' ></i>
                    <input onInput={EstaBuscando} type="text" name="" id="Buscador" placeholder='Busca a tu personaje favorito'/>
                </span>
                <div className='Resultado'>

                </div>
            </div>
        </div>
    </section>
  )
}
