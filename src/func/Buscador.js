
let filtro1;
let Existe;
const BuscadorZ = async (Personaje) => {
    fetch('https://dragonball-api.com/api/characters').then(
        respuesta => respuesta.json()
    ).then(
        (Data) => {
            let ArrayPersonaje = Personaje.split('')
            for(let x = 0; x < Data.items.length; x++){
                // let ArrayNamePersonaje = Data.items[x].name.split('')
                // let ArrayPersonaje = Personaje.split('')
                if(Personaje == Data.items[x].name){
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
                    
                }
            };

            
            if(Existe == undefined){
                // let fill;
                // document.querySelector('.Resultado').innerHTML= '';
                for(let x = 0; x < Data.items.length; x++){
                    let ArrayNamePersonaje = Data.items[x].name.split('')
                    for(let C = 0; C < ArrayPersonaje.length; C++){
                        
                        if(ArrayPersonaje[0] == ArrayNamePersonaje[0]){

                            // fill = true;
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
                    if(2 == ArrayPersonaje.length){   
                        Filtro1(Data,ArrayPersonaje,ArrayNamePersonaje,x)  
                    };
                    
                }
            }else{
                Existe = undefined;
            }

            
        }
    ).catch(
        (err) => {
            console.log(err);
        }
    )
};
export default BuscadorZ;

const Filtro1 = (Data,ArrayPersonaje,ArrayNamePersonaje,x) => {
    document.querySelector('.Resultado').innerHTML= '';
    // for(let x = 0; x < Data.items.length; x++){
    //     alert('F')
        // let ArrayNamePersonaje = Data.items[x].name.split('')
        for(let C = 0; C < ArrayPersonaje.length; C++){       
    

            if(ArrayPersonaje[0] == ArrayNamePersonaje[0] && ArrayPersonaje[1] == ArrayNamePersonaje[1] ){
                // alert('F')
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
    // }
    if(3 == ArrayPersonaje.length){
        Filtro2(Data,ArrayPersonaje);
    }
}
const Filtro2 = (Data,ArrayPersonaje) => {
    alert('funciona')
    document.querySelector('.Resultado').innerHTML= '';
    for(let x = 0; x < Data.items.length; x++){
        let ArrayNamePersonaje = Data.items[x].name.split('')
        for(let C = 0; C < ArrayPersonaje.length; C++){            
            if(ArrayPersonaje[0] == ArrayNamePersonaje[0] && ArrayPersonaje[1] == ArrayNamePersonaje[1] && ArrayPersonaje[2] == ArrayNamePersonaje[2] ){

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
}