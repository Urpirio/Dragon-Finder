import { ValueInput } from "../components/Buscador";
import BuscadorZ from "./Buscador";
let Existe;
let Filtro1;
let Filtro2;
let Filtro3;
let Filtro4;
let Filtro5;
let Filtro6;
let Filtro7;
let Filtro8;
let Filtro9;
const Buscador2 = () => {
    // console.log('Buscador 2 funciona')
    fetch('https://dragonball-api.com/api/characters?page=2&limit=9').then(
        respuesta => respuesta.json()
    ).then(
        (Data) => {
            // console.log(ValueInput);
            let ArrayValueInput = ValueInput.split('')
            for(let x = 0; x < Data.items.length; x++){
                if(ValueInput == Data.items[x].name){
                    document.querySelector('.Resultado').style.display = 'flex';
                    document.querySelector('.Resultado').innerHTML = '';
                    const spanS = document.createElement('span');
                    spanS.className = `S${x}`;
                    const InSpanS = document.createElement('span');
                    InSpanS.innerText = Data.items[x].name;
                    const iconS = document.createElement('i');
                    iconS.className = 'bx bx-search';
                    spanS.append(iconS,InSpanS);
                    Existe = true;
                    document.querySelector('.Resultado').append(spanS);

                }else{
                    // document.querySelector('.Resultado').style.display = 'none';
                }
            };

            if(Existe == undefined){
                document.querySelector('.Resultado').innerHTML= '';
                for(let x = 0; x < Data.items.length; x++){
                    let ArrayNameValueInput = Data.items[x].name.split('');
                    Filtro1 = ArrayValueInput[0] == ArrayNameValueInput[0];
                    Filtro2 = Filtro1 && ArrayValueInput[1] == ArrayNameValueInput[1];
                    Filtro3 = Filtro2 && ArrayValueInput[2] == ArrayNameValueInput[2];
                    Filtro4 = Filtro3 && ArrayValueInput[3] == ArrayNameValueInput[3];
                    Filtro5 = Filtro4 && ArrayValueInput[4] == ArrayNameValueInput[4];
                    Filtro6 = Filtro5 && ArrayValueInput[5] == ArrayNameValueInput[5];
                    Filtro7 = Filtro6 && ArrayValueInput[6] == ArrayNameValueInput[6];
                    Filtro8 = Filtro7 && ArrayValueInput[7] == ArrayNameValueInput[7];
                    Filtro9 = Filtro8 && ArrayValueInput[8] == ArrayNameValueInput[8];
                    

                        if(1 == ArrayValueInput.length){
                            
                                if(Filtro1 == true){
                                    document.querySelector('.Resultado').style.display = 'flex';
                                    const spanS = document.createElement('span');
                                    spanS.className = `S${x}`;
                                    const InSpanS = document.createElement('span');
                                    InSpanS.innerText = Data.items[x].name;
                                    const iconS = document.createElement('i');
                                    iconS.className = 'bx bx-search';
                                    spanS.append(iconS,InSpanS);
                                    document.querySelector('.Resultado').append(spanS);
                                }
                        }else if(2 == ArrayValueInput.length){
                            
                            if(Filtro2 == true){
                                document.querySelector('.Resultado').style.display = 'flex';
                                const spanS = document.createElement('span');
                                spanS.className = `S${x}`;
                                const InSpanS = document.createElement('span');
                                InSpanS.innerText = Data.items[x].name;
                                const iconS = document.createElement('i');
                                iconS.className = 'bx bx-search';
                                spanS.append(iconS,InSpanS);
                                document.querySelector('.Resultado').append(spanS);
                            }
                        }else if(3 == ArrayValueInput.length){
                            if(Filtro3 == true){
                                document.querySelector('.Resultado').style.display = 'flex';
                                const spanS = document.createElement('span');
                                spanS.className = `S${x}`;
                                const InSpanS = document.createElement('span');
                                InSpanS.innerText = Data.items[x].name;
                                const iconS = document.createElement('i');
                                iconS.className = 'bx bx-search';
                                spanS.append(iconS,InSpanS);
                                document.querySelector('.Resultado').append(spanS);
                            }
                        }else if(4 == ArrayValueInput.length){
                            if(Filtro4 == true){
                                document.querySelector('.Resultado').style.display = 'flex';
                                const spanS = document.createElement('span');
                                spanS.className = `S${x}`;
                                const InSpanS = document.createElement('span');
                                InSpanS.innerText = Data.items[x].name;
                                const iconS = document.createElement('i');
                                iconS.className = 'bx bx-search';
                                spanS.append(iconS,InSpanS);
                                document.querySelector('.Resultado').append(spanS);
                            }
                        }else if(5 == ArrayValueInput.length){
                            if(Filtro5 == true){
                                document.querySelector('.Resultado').style.display = 'flex';
                                const spanS = document.createElement('span');
                                spanS.className = `S${x}`;
                                const InSpanS = document.createElement('span');
                                InSpanS.innerText = Data.items[x].name;
                                const iconS = document.createElement('i');
                                iconS.className = 'bx bx-search';
                                spanS.append(iconS,InSpanS);
                                document.querySelector('.Resultado').append(spanS);
                            }
                        }else if(6 == ArrayValueInput.length){
                            if(Filtro6 == true){
                                document.querySelector('.Resultado').style.display = 'flex';
                                const spanS = document.createElement('span');
                                spanS.className = `S${x}`;
                                const InSpanS = document.createElement('span');
                                InSpanS.innerText = Data.items[x].name;
                                const iconS = document.createElement('i');
                                iconS.className = 'bx bx-search';
                                spanS.append(iconS,InSpanS);
                                document.querySelector('.Resultado').append(spanS);
                            }
                        }else if(7 == ArrayValueInput.length){
                            if(Filtro7 == true){
                                document.querySelector('.Resultado').style.display = 'flex';
                                const spanS = document.createElement('span');
                                spanS.className = `S${x}`;
                                const InSpanS = document.createElement('span');
                                InSpanS.innerText = Data.items[x].name;
                                const iconS = document.createElement('i');
                                iconS.className = 'bx bx-search';
                                spanS.append(iconS,InSpanS);
                                document.querySelector('.Resultado').append(spanS);
                            }
                        }else if(8 == ArrayValueInput.length){
                            if(Filtro8 == true){
                                document.querySelector('.Resultado').style.display = 'flex';
                                const spanS = document.createElement('span');
                                spanS.className = `S${x}`;
                                const InSpanS = document.createElement('span');
                                InSpanS.innerText = Data.items[x].name;
                                const iconS = document.createElement('i');
                                iconS.className = 'bx bx-search';
                                spanS.append(iconS,InSpanS);
                                document.querySelector('.Resultado').append(spanS);
                            }
                        }else if(9 == ArrayValueInput.length){
                            if(Filtro9 == true){
                                document.querySelector('.Resultado').style.display = 'flex';
                                const spanS = document.createElement('span');
                                spanS.className = `S${x}`;
                                const InSpanS = document.createElement('span');
                                InSpanS.innerText = Data.items[x].name;
                                const iconS = document.createElement('i');
                                iconS.className = 'bx bx-search';
                                spanS.append(iconS,InSpanS);
                                document.querySelector('.Resultado').append(spanS);
                            }
                        }
                        
                   
                }
            }else{
                Existe = undefined;
            }
        }



    ).catch(
        (err)=>{
            console.log(err);
        }
    )
};
export default Buscador2;