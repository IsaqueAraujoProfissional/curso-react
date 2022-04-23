/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

export default  () => (
        <div>
            <h1>Fundamentos React</h1>
            <Aleatorio min={10} max={60}></Aleatorio>
            <ComParametro
                titulo="Segundo Componente"
                subtitulo="Muito Legal!"></ComParametro>
            <Primeiro></Primeiro>
        </div>
);
