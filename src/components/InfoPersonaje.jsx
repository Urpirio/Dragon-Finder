import React from 'react';
import '../Style/InfoPersonaje.less';
import { MauseOver } from '../func/Infopersonaje';

export default function InfoPersonaje() {
    const CloseModal = () => {
        if(MauseOver == undefined){
            document.querySelector('.Buscador').style.background = 'linear-gradient(180deg,#ff7700,#ffbb00,#ffcb20)1';
            document.querySelector('.InfoPersonaje').style.display = 'none';
        }else if(MauseOver == false){
            document.querySelector('.Buscador').style.background = 'linear-gradient(180deg,#ff7700,#ffbb00,#ffcb20)';
            document.querySelector('.InfoPersonaje').style.display = 'none';
        }else{
            document.querySelector('.InfoPersonaje').style.display = 'flex';
        };

    };
  return (
    <div className='InfoPersonaje' onClick={CloseModal}>
            
    </div>
  )
};
