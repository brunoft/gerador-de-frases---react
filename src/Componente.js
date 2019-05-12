import json_data from './frases.json';

import React, { Component } from 'react';
import './App.css';


class Componente extends Component {
  constructor(props){
    super(props);
    this.gerarFrase();
    this.state ={
      frase: this.todasFrases[this.geraNumeroInteiro(0,9)],
      classe: 'color'
    };

  }

  geraNumeroInteiro(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  mudaFrase = event => {
    const fraseGenerator = this.todasFrases[this.geraNumeroInteiro(0,9)];
    this.setState({
      frase: fraseGenerator,
      // class ''
      classe: 'color color--change'
    })
    setTimeout(()=>{
      this.setState({
        classe: 'color'
      })
    }, 600)
  }

  gerarFrase = () =>{
    const totalFrases = json_data;
    this.todasFrases = totalFrases.map(frases => frases.frase);
  }

  render() {
    return (
      <div className="container">
        <h2>Gerador de frases</h2>
        <div className="content__frases">
          <div className="frases"><p className={this.state.classe}>{this.state.frase}</p></div>
            <div className="card__action">
              <button  className="btn__gerar__frase" onClick={this.mudaFrase}>Gerar frase</button>
            </div>
          </div>
      </div>
    );
  }
}

export default Componente;
