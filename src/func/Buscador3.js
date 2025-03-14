// import { ValueInput } from "../components/Buscador";
import Buscador4 from "./Buscador4";
import Infopersonaje from "./Infopersonaje";

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

const Buscador3 = async (ValueInput) => {
    let Yes_Pass;

    fetch('https://dragonball-api.com/api/characters?page=3&limit=10').then(
        respuesta => respuesta.json()
    ).then(
        (Data) => {
            let ArrayValueInput = ValueInput.split('')
            for(let x = 0; x < Data.items.length; x++){
                if(ValueInput.toUpperCase() == Data.items[x].name.toUpperCase()){
                    document.querySelector('.Resultado').style.display = 'flex';
                    document.querySelector('.Resultado').innerHTML = '';
                    const spanS = document.createElement('span');
                    spanS.className = `S${x}`;
                    const InSpanS = document.createElement('span');
                    InSpanS.innerText = Data.items[x].name;
                    const iconS = document.createElement('i');
                    iconS.className = 'bx bx-search';
                    spanS.append(iconS,InSpanS);
                    spanS.addEventListener('click',()=>{
                        Infopersonaje(Data.items[x].name,
                        Data.items[x].ki,Data.items[x].maxKi,
                        Data.items[x].race,Data.items[x].gender,
                        Data.items[x].description,Data.items[x].image);
                        document.querySelector('.Buscador').classList.replace('B1','B2');

                    });                    
                    Existe = true;
                    document.querySelector('.Resultado').append(spanS);

                }else{
                }
            };

            if(Existe == undefined){
                document.querySelector('.Resultado').innerHTML= '';

                    

                        if(1 == ArrayValueInput.length){
                            
                            for(let z = 0; z < Data.items.length; z++){

                                let ArrayNameValueInput = Data.items[z].name.split('');

                                Filtro1 = ArrayValueInput[0].toUpperCase() == ArrayNameValueInput[0];

                                if(Filtro1 === true){

                                    document.querySelector('.Resultado').style.display = 'flex';
                                    const spanS = document.createElement('span');
                                    spanS.className = `S${z}`;
                                    const InSpanS = document.createElement('span');
                                    InSpanS.innerText = Data.items[z].name;
                                    const iconS = document.createElement('i');
                                    iconS.className = 'bx bx-search';
                                    spanS.append(iconS,InSpanS);
                                    spanS.addEventListener('click',()=>{
                                        Infopersonaje(Data.items[z].name,
                                        Data.items[z].ki,Data.items[z].maxKi,
                                        Data.items[z].race,Data.items[z].gender,
                                        Data.items[z].description,Data.items[z].image);
                                        document.querySelector('.Buscador').classList.replace('B1','B2');

                                    });
                                    document.querySelector('.Resultado').append(spanS);
                                    Yes_Pass = true;

                                }else{

                                }

                            }
                            if(Yes_Pass === undefined){
                                Buscador4(ValueInput);
                            }else{

                            }
                        }else if(2 == ArrayValueInput.length){
                            
                            for(let z = 0; z < Data.items.length; z++){

                                let ArrayNameValueInput = Data.items[z].name.split('');

                                Filtro1 = ArrayValueInput[0].toUpperCase() == ArrayNameValueInput[0];
                                Filtro2 = Filtro1 && ArrayValueInput[1] == ArrayNameValueInput[1];



                                if(Filtro2 === true){

                                    document.querySelector('.Resultado').style.display = 'flex';
                                    const spanS = document.createElement('span');
                                    spanS.className = `S${z}`;
                                    const InSpanS = document.createElement('span');
                                    InSpanS.innerText = Data.items[z].name;
                                    const iconS = document.createElement('i');
                                    iconS.className = 'bx bx-search';
                                    spanS.append(iconS,InSpanS);
                                    spanS.addEventListener('click',()=>{
                                        Infopersonaje(Data.items[z].name,
                                        Data.items[z].ki,Data.items[z].maxKi,
                                        Data.items[z].race,Data.items[z].gender,
                                        Data.items[z].description,Data.items[z].image);
                                        document.querySelector('.Buscador').classList.replace('B1','B2');

                                    });                                    
                                    document.querySelector('.Resultado').append(spanS);
                                    Yes_Pass = true;

                                }else{

                                }

                            }
                            if(Yes_Pass === undefined){
                                Buscador4(ValueInput);
                            }else{

                            }
                        }else if(3 == ArrayValueInput.length){
                            for(let z = 0; z < Data.items.length; z++){

                                let ArrayNameValueInput = Data.items[z].name.split('');

                                Filtro1 = ArrayValueInput[0].toUpperCase() == ArrayNameValueInput[0];
                                Filtro2 = Filtro1 && ArrayValueInput[1] == ArrayNameValueInput[1];
                                Filtro3 = Filtro2 && ArrayValueInput[2] == ArrayNameValueInput[2];


                                if(Filtro3 === true){

                                    document.querySelector('.Resultado').style.display = 'flex';
                                    const spanS = document.createElement('span');
                                    spanS.className = `S${z}`;
                                    const InSpanS = document.createElement('span');
                                    InSpanS.innerText = Data.items[z].name;
                                    const iconS = document.createElement('i');
                                    iconS.className = 'bx bx-search';
                                    spanS.append(iconS,InSpanS);
                                    spanS.addEventListener('click',()=>{
                                        Infopersonaje(Data.items[z].name,
                                        Data.items[z].ki,Data.items[z].maxKi,
                                        Data.items[z].race,Data.items[z].gender,
                                        Data.items[z].description,Data.items[z].image);
                                        document.querySelector('.Buscador').classList.replace('B1','B2');

                                    });                                    
                                    document.querySelector('.Resultado').append(spanS);
                                    Yes_Pass = true;

                                }else{

                                }

                            }
                            if(Yes_Pass === undefined){

                                Buscador4(ValueInput);
                            }else{

                            }
                        }else if(4 == ArrayValueInput.length){
                            for(let z = 0; z < Data.items.length; z++){

                                let ArrayNameValueInput = Data.items[z].name.split('');

                                Filtro1 = ArrayValueInput[0].toUpperCase() == ArrayNameValueInput[0];
                                Filtro2 = Filtro1 && ArrayValueInput[1] == ArrayNameValueInput[1];
                                Filtro3 = Filtro2 && ArrayValueInput[2] == ArrayNameValueInput[2];
                                Filtro4 = Filtro3 && ArrayValueInput[3] == ArrayNameValueInput[3];


                                if(Filtro4 === true){

                                    document.querySelector('.Resultado').style.display = 'flex';
                                    const spanS = document.createElement('span');
                                    spanS.className = `S${z}`;
                                    const InSpanS = document.createElement('span');
                                    InSpanS.innerText = Data.items[z].name;
                                    const iconS = document.createElement('i');
                                    iconS.className = 'bx bx-search';
                                    spanS.append(iconS,InSpanS);
                                    spanS.addEventListener('click',()=>{
                                        Infopersonaje(Data.items[z].name,
                                        Data.items[z].ki,Data.items[z].maxKi,
                                        Data.items[z].race,Data.items[z].gender,
                                        Data.items[z].description,Data.items[z].image);
                                        document.querySelector('.Buscador').classList.replace('B1','B2');

                                    });                                    
                                    document.querySelector('.Resultado').append(spanS);
                                    Yes_Pass = true;

                                }else{

                                }

                            }
                            if(Yes_Pass === undefined){
                                Buscador4(ValueInput);
                            }else{

                            }
                        }else if(5 == ArrayValueInput.length){
                            for(let z = 0; z < Data.items.length; z++){

                                let ArrayNameValueInput = Data.items[z].name.split('');

                                Filtro1 = ArrayValueInput[0].toUpperCase() == ArrayNameValueInput[0];
                                Filtro2 = Filtro1 && ArrayValueInput[1] == ArrayNameValueInput[1];
                                Filtro3 = Filtro2 && ArrayValueInput[2] == ArrayNameValueInput[2];
                                Filtro4 = Filtro3 && ArrayValueInput[3] == ArrayNameValueInput[3];
                                Filtro5 = Filtro4 && ArrayValueInput[4] == ArrayNameValueInput[4];
                   

                                if(Filtro5 === true){

                                    document.querySelector('.Resultado').style.display = 'flex';
                                    const spanS = document.createElement('span');
                                    spanS.className = `S${z}`;
                                    const InSpanS = document.createElement('span');
                                    InSpanS.innerText = Data.items[z].name;
                                    const iconS = document.createElement('i');
                                    iconS.className = 'bx bx-search';
                                    spanS.append(iconS,InSpanS);
                                    spanS.addEventListener('click',()=>{
                                        Infopersonaje(Data.items[z].name,
                                        Data.items[z].ki,Data.items[z].maxKi,
                                        Data.items[z].race,Data.items[z].gender,
                                        Data.items[z].description,Data.items[z].image);
                                        document.querySelector('.Buscador').classList.replace('B1','B2');

                                    });                                    
                                    document.querySelector('.Resultado').append(spanS);
                                    Yes_Pass = true;

                                }else{

                                }

                            }
                            if(Yes_Pass === undefined){
                                Buscador4(ValueInput);
                            }else{

                            }
                        }else if(6 == ArrayValueInput.length){
                            for(let z = 0; z < Data.items.length; z++){

                                let ArrayNameValueInput = Data.items[z].name.split('');

                                Filtro1 = ArrayValueInput[0].toUpperCase() == ArrayNameValueInput[0];
                                Filtro2 = Filtro1 && ArrayValueInput[1] == ArrayNameValueInput[1];
                                Filtro3 = Filtro2 && ArrayValueInput[2] == ArrayNameValueInput[2];
                                Filtro4 = Filtro3 && ArrayValueInput[3] == ArrayNameValueInput[3];
                                Filtro5 = Filtro4 && ArrayValueInput[4] == ArrayNameValueInput[4];
                                Filtro6 = Filtro5 && ArrayValueInput[5] == ArrayNameValueInput[5];
                                

                                if(Filtro6 === true){

                                    document.querySelector('.Resultado').style.display = 'flex';
                                    const spanS = document.createElement('span');
                                    spanS.className = `S${z}`;
                                    const InSpanS = document.createElement('span');
                                    InSpanS.innerText = Data.items[z].name;
                                    const iconS = document.createElement('i');
                                    iconS.className = 'bx bx-search';
                                    spanS.append(iconS,InSpanS);
                                    spanS.addEventListener('click',()=>{
                                        Infopersonaje(Data.items[z].name,
                                        Data.items[z].ki,Data.items[z].maxKi,
                                        Data.items[z].race,Data.items[z].gender,
                                        Data.items[z].description,Data.items[z].image);
                                        document.querySelector('.Buscador').classList.replace('B1','B2');

                                    });                                    
                                    document.querySelector('.Resultado').append(spanS);
                                    Yes_Pass = true;

                                }else{

                                }

                            }
                            if(Yes_Pass === undefined){
                                Buscador4(ValueInput);
                            }else{

                            }
                        }else if(7 == ArrayValueInput.length){
                            for(let z = 0; z < Data.items.length; z++){

                                let ArrayNameValueInput = Data.items[z].name.split('');

                                Filtro1 = ArrayValueInput[0].toUpperCase() == ArrayNameValueInput[0];
                                Filtro2 = Filtro1 && ArrayValueInput[1] == ArrayNameValueInput[1];
                                Filtro3 = Filtro2 && ArrayValueInput[2] == ArrayNameValueInput[2];
                                Filtro4 = Filtro3 && ArrayValueInput[3] == ArrayNameValueInput[3];
                                Filtro5 = Filtro4 && ArrayValueInput[4] == ArrayNameValueInput[4];
                                Filtro6 = Filtro5 && ArrayValueInput[5] == ArrayNameValueInput[5];
                                Filtro7 = Filtro6 && ArrayValueInput[6] == ArrayNameValueInput[6];



                                if(Filtro7 === true){

                                    document.querySelector('.Resultado').style.display = 'flex';
                                    const spanS = document.createElement('span');
                                    spanS.className = `S${z}`;
                                    const InSpanS = document.createElement('span');
                                    InSpanS.innerText = Data.items[z].name;
                                    const iconS = document.createElement('i');
                                    iconS.className = 'bx bx-search';
                                    spanS.append(iconS,InSpanS);
                                    spanS.addEventListener('click',()=>{
                                        Infopersonaje(Data.items[z].name,
                                        Data.items[z].ki,Data.items[z].maxKi,
                                        Data.items[z].race,Data.items[z].gender,
                                        Data.items[z].description,Data.items[z].image);
                                        document.querySelector('.Buscador').classList.replace('B1','B2');

                                    });                                    
                                    document.querySelector('.Resultado').append(spanS);
                                    Yes_Pass = true;

                                }else{

                                }

                            }
                            if(Yes_Pass === undefined){
                                Buscador4(ValueInput);
                            }else{

                            }
                        }else if(8 == ArrayValueInput.length){
                            for(let z = 0; z < Data.items.length; z++){

                                let ArrayNameValueInput = Data.items[z].name.split('');

                                Filtro1 = ArrayValueInput[0].toUpperCase() == ArrayNameValueInput[0];
                                Filtro2 = Filtro1 && ArrayValueInput[1] == ArrayNameValueInput[1];
                                Filtro3 = Filtro2 && ArrayValueInput[2] == ArrayNameValueInput[2];
                                Filtro4 = Filtro3 && ArrayValueInput[3] == ArrayNameValueInput[3];
                                Filtro5 = Filtro4 && ArrayValueInput[4] == ArrayNameValueInput[4];
                                Filtro6 = Filtro5 && ArrayValueInput[5] == ArrayNameValueInput[5];
                                Filtro7 = Filtro6 && ArrayValueInput[6] == ArrayNameValueInput[6];
                                Filtro8 = Filtro7 && ArrayValueInput[7] == ArrayNameValueInput[7];
                                


                                if(Filtro8 === true){

                                    document.querySelector('.Resultado').style.display = 'flex';
                                    const spanS = document.createElement('span');
                                    spanS.className = `S${z}`;
                                    const InSpanS = document.createElement('span');
                                    InSpanS.innerText = Data.items[z].name;
                                    const iconS = document.createElement('i');
                                    iconS.className = 'bx bx-search';
                                    spanS.append(iconS,InSpanS);
                                    spanS.addEventListener('click',()=>{
                                        Infopersonaje(Data.items[z].name,
                                        Data.items[z].ki,Data.items[z].maxKi,
                                        Data.items[z].race,Data.items[z].gender,
                                        Data.items[z].description,Data.items[z].image);
                                        document.querySelector('.Buscador').classList.replace('B1','B2');

                                    });                                    
                                    document.querySelector('.Resultado').append(spanS);
                                    Yes_Pass = true;

                                }else{

                                }

                            }
                            if(Yes_Pass === undefined){
                                Buscador4(ValueInput);
                            }else{

                            }
                        }else if(9 == ArrayValueInput.length){
                            for(let z = 0; z < Data.items.length; z++){

                                let ArrayNameValueInput = Data.items[z].name.split('');

                                Filtro1 = ArrayValueInput[0].toUpperCase() == ArrayNameValueInput[0];
                                Filtro2 = Filtro1 && ArrayValueInput[1] == ArrayNameValueInput[1];
                                Filtro3 = Filtro2 && ArrayValueInput[2] == ArrayNameValueInput[2];
                                Filtro4 = Filtro3 && ArrayValueInput[3] == ArrayNameValueInput[3];
                                Filtro5 = Filtro4 && ArrayValueInput[4] == ArrayNameValueInput[4];
                                Filtro6 = Filtro5 && ArrayValueInput[5] == ArrayNameValueInput[5];
                                Filtro7 = Filtro6 && ArrayValueInput[6] == ArrayNameValueInput[6];
                                Filtro8 = Filtro7 && ArrayValueInput[7] == ArrayNameValueInput[7];
                                Filtro9 = Filtro8 && ArrayValueInput[8] == ArrayNameValueInput[8];


                                if(Filtro9 === true){

                                    document.querySelector('.Resultado').style.display = 'flex';
                                    const spanS = document.createElement('span');
                                    spanS.className = `S${z}`;
                                    const InSpanS = document.createElement('span');
                                    InSpanS.innerText = Data.items[z].name;
                                    const iconS = document.createElement('i');
                                    iconS.className = 'bx bx-search';
                                    spanS.append(iconS,InSpanS);
                                    spanS.addEventListener('click',()=>{
                                        Infopersonaje(Data.items[z].name,
                                        Data.items[z].ki,Data.items[z].maxKi,
                                        Data.items[z].race,Data.items[z].gender,
                                        Data.items[z].description,Data.items[z].image);
                                        document.querySelector('.Buscador').classList.replace('B1','B2');

                                    });                                    
                                    document.querySelector('.Resultado').append(spanS);
                                    Yes_Pass = true;

                                }else{

                                }

                            }
                            if(Yes_Pass === undefined){
                                Buscador4(ValueInput);
                            }else{

                            }
                        }else{
                            document.querySelector('.Resultado').style.display = 'none';

                            if(Yes_Pass === undefined){
                                Buscador4(ValueInput);
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
export default Buscador3;