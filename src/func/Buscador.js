

let coincide;
let coincide2;
const BuscadorZ = async (Personaje) => {
    fetch('https://dragonball-api.com/api/characters').then(
        respuesta => respuesta.json()
    ).then(
        (Data) => {
            
            for(let x = 0; x < Data.items.length; x++){
                let ArrayNamePersonaje = Data.items[x].name.split('')
                let ArrayPersonaje = Personaje.split('')
                if(Personaje == Data.items[x].name){
                    console.log(Data.items[x].name);
                }else{
                    if(ArrayPersonaje[1] === ArrayNamePersonaje[1] && ArrayPersonaje[0] === ArrayNamePersonaje[0] ){
                        // console.log(Data.items[x].name + ' este es el primer filtro '); 
                        if(ArrayPersonaje[2] === ArrayNamePersonaje[2]){
                            console.log(Data.items[x].name + ' este es el ultimo filtro '); 
                        }
                    }else{
                       continue;
                    }
                }

                
            };
        }
    ).catch(
        (err) => {
            console.log(err);
        }
    )
};
export default BuscadorZ;