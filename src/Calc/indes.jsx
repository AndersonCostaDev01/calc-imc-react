import React, { useState } from 'react';
import styles from './styles.module.css';

const Calc = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState('');
    const [imcStatus, setImcStatus] = useState('');
    const [mostrarImagem, setMostrarImagem] = useState(false);

    const calcularIMC = () => {
        const alturaEmMetros = parseFloat(altura);
        const pesoEmKg = parseFloat(peso);

        if (!alturaEmMetros || !pesoEmKg) {
            alert("Por favor, insira valores válidos para peso e altura.");
            return;
        }

        const imcCalculado = (pesoEmKg / (alturaEmMetros * alturaEmMetros)).toFixed(2);
        setImc(imcCalculado);

        let status;
        if (imcCalculado < 18.5) {
            status = "Abaixo do peso";
        } else if (imcCalculado >= 18.5 && imcCalculado < 24.9) {
            status = "Peso normal";
        } else if (imcCalculado >= 25 && imcCalculado < 29.9) {
            status = "Sobrepeso";
        } else if (imcCalculado >= 30 && imcCalculado < 34.9) {
            status = "Obesidade Grau I";
        } else if (imcCalculado >= 35 && imcCalculado < 39.9) {
            status = "Obesidade Grau II";
        } else {
            status = "Obesidade Grau III";
        }

        setImcStatus(status);
        setMostrarImagem(true);
    };

    return (
        <div className={styles.calc}>
            <div className={styles.inputs}>
                <div className={styles.title}>
                    <h2>Insira seu dados abaixo</h2>
                    <div className={styles.inputs_add}>
                        <div className={styles.add_bloc}>
                            <label htmlFor="kg" className={styles.label}>Digite seu peso em (kg)</label>
                            <input
                                type="number"
                                id='kg'
                                value={peso}
                                onChange={(e) => setPeso(e.target.value)}
                            />
                        </div>
                        <div className={styles.add_bloc}>
                            <label htmlFor="altura" className={styles.label}>Digite sua altura (metros)</label>
                            <input
                                type="number"
                                id='altura'
                                value={altura}
                                onChange={(e) => setAltura(e.target.value)}
                            />
                        </div>
                    </div>
                    <button onClick={calcularIMC}>Enviar</button>
                </div>
            </div>
            <div className={styles.return}>
                <div className={styles.title}>
                    <h2>Resultado do IMC</h2>
                    <div className={styles.add_bloc}>
                        <label htmlFor="imc" className={styles.label}>Seu IMC é:</label>
                        <input
                            type="text"
                            id="imc"
                            value={imc}
                            readOnly
                        />
                    </div>
                    <div className={styles.add_bloc}>
                        <label htmlFor="imc-status" className={styles.label}>Você está:</label>
                        <input
                            type="text"
                            id='imc-status'
                            value={imcStatus}
                            readOnly
                        />
                    </div>
                    {mostrarImagem && (
                        <div>
                            <img
                                src="https://www.mundoboaforma.com.br/wp-content/uploads/2021/08/escala-IMC-logo.jpg"
                                alt="grafico IMC"
                                className={styles.imagemIMC}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Calc;
