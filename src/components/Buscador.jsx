import React from 'react'
import LogoDBS from "../img/logos/image.png";
import '../Style/Buscador.less';
import BuscadorZ from '../func/Buscador';
import InfoPersonaje from './InfoPersonaje';

export let ValueInput;
export default function Buscador() {

    const EstaBuscando = () => {
        BuscadorZ();
        ValueInput = document.getElementById('Buscador').value;
    };

  return (
    <section className='Buscador'>
        <InfoPersonaje/>
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
