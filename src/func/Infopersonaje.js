
export let MauseOver;
export default function Infopersonaje(Name,ki,MaxKi,Race,Gender,Description,ImgPersonaje){


    if(Name == 'Gohan'){
        document.querySelector('.Buscador').style.background = '#4A4481';
    }else if(Name == 'Gotenks'){
        document.querySelector('.Buscador').style.background = '#21ACA7';
    }else if(Name == 'Gogeta'){
        document.querySelector('.Buscador').style.background = '#3696C4';
    }else if(Name == 'Vegetto'){
        document.querySelector('.Buscador').style.background = '#112482';
    }else if(Name == 'Piccolo'){
        document.querySelector('.Buscador').style.background = '#62D109';
    }else if(Name == 'Trunks'){
        document.querySelector('.Buscador').style.background = '#1D6460';
    }else if(Name == 'Vegeta'){
        document.querySelector('.Buscador').style.background = '#1F6AB5';
    }else if(Name == 'Goku'){
        document.querySelector('.Buscador').style.background = '#E89902';
    }else if(Name == 'Broly'){
        document.querySelector('.Buscador').style.background = '#68EA86';
    };





    let Boleano;
    let Boleano2;

    if(Gender == 'Male'){
        Boleano = true;
    }else{
        Boleano = false;
    };

    if(Race == 'Human'){
        Boleano2 = true;
    }else{
        Boleano2 = false;
    }

    const InfoPersonaje = document.querySelector('.InfoPersonaje');
    InfoPersonaje.innerHTML = '';
    InfoPersonaje.style.display = 'flex';
    console.log(Name,ki,MaxKi,Race,Gender,Description,ImgPersonaje);
    const Card = document.createElement('div');
    Card.addEventListener('mouseover',()=>{
        MauseOver = true;
    });
    Card.addEventListener('mouseleave',()=>{
        MauseOver = false;
    });
    
    Card.className = 'Card';
    Card.innerHTML = `
    <div class ='Card_div1'>
        <img src ='${ImgPersonaje}' alt = '${Name}'/>
    </div>
    <div class ='Card_div2'>

        <div class = 'GIn_Card_div2'>
            <div class = 'Card_div2_d1'>
                <h2>${Name}</h2>
                <span>${Boleano2 ? Boleano ? 'Humano' : 'Humana' : Race} - ${Boleano ? 'Hombre' : 'Mujer'}</span>
            </div>
        </div>

        <div class = 'Card_div2_d4'>
            <h2>Sobre el personaje</h2>
            <p>${Description}</p>
        </div>
    </div>
    `;
    InfoPersonaje.append(Card);
};
{/* <div class = 'Card_div2_d2'>
                <h2>Ki Base</h2>
                <span>${ki}</span>
            </div>

            <div class = 'Card_div2_d3'>
                <h2>Ki Maximo</h2>
                <span>${MaxKi}</span>
            </div> */}