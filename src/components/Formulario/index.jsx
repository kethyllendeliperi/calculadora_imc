import { useState } from "react";
import "./formulario.css";
import IMCImage from '../Images/IMC.png';

const Formulario = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [resultado, setResultado] = useState('');

    const calculaIMC = () => {
        if (altura && peso) {
            const imc = peso / (altura * altura);
            setResultado(imc);
        } else {
            alert("Por favor, preencha os campos de altura e peso antes de calcular o IMC.");
        }
    };


    const limpaCampos = () => {
        setAltura('');
        setPeso('');
    };

    return (
        <>
            <h1 className="titulo">Calculadora de IMC</h1>
            <form className="formulario">
                <h2 className="subtitulo">Altura</h2>
                <input type="text" value={altura} placeholder="Exemplo: 1.70" onChange={evento => setAltura(evento.target.value)} className="input" />
                <h2 className="subtitulo">Peso</h2>
                <input type="text" value={peso} placeholder="Exemplo: 60.3" onChange={evento => setPeso(evento.target.value)} className="input" />
                <button type="button" onClick={() => { calculaIMC(); limpaCampos(); }} className="botao">Calcular IMC</button>
            </form>
            {resultado && (
                <div className="resultado">
                    <h2 className="subtitulo">Resultado:</h2>
                    <p>Seu IMC é: {resultado.toFixed(2)}</p>
                </div>
            )}
            <div className="informacoes">
                <h2 className="subtitulo">Informações sobre IMC</h2>
                <p className="informacoesTexto">
                    IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
                    O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado.
                    Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.
                </p>
            </div>
            <img src={IMCImage} alt="Tabela do IMC" className="image" />
        </>
    );
}

export default Formulario;
