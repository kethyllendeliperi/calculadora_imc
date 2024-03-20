import { useState } from "react";

const Formulario = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState('');

    const calculaIMC = () => {
        const imc = peso / (altura * altura);
        setResultado (imc);
    };
    
    return (
        <>
            <h1>Calculadora de IMC</h1>
            <form>
                <h2>Altura</h2>
                <input type="number" placeholder="Exemplo: 1.70" onChange={evento => setAltura(parseFloat(evento.target.value))}/>
                <h2>Peso</h2>
                <input type="number" placeholder="Exemplo: 60.3" onChange={evento => setPeso(parseFloat(evento.target.value))}/>
            </form>
            <button onClick={calculaIMC}>Calcular IMC</button>
            {resultado && (
                <div>
                    <h2>Resultado:</h2>
                    <p>Seu IMC é: {resultado.toFixed(2)}</p>
                </div>
            )}
        </>
            )
        }
        
        export default Formulario;