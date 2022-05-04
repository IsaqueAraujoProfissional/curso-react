/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Card from "./components/layout/Card";
import "./App.css"
import Familia from "./components/basicos/Familia";
import Membro from "./components/basicos/Membro";

export default  () => (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Araujo">
                    <Membro nome = "Isaque"></Membro>
                    <Membro nome = "Izael"></Membro>
                    <Membro nome = "Izarelle"></Membro>
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60}></Aleatorio>
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#E94C6F">
                <ComParametro
                    titulo="Segundo Componente"
                    subtitulo="Muito Legal!"></ComParametro>
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#E8B71A">
                <Primeiro></Primeiro>
            </Card> 
            </div>        
        </div>
);
