const display = document.querySelector("#display");
const numeros = document.querySelectorAll("[id*=tecla]");

let novoNumero = true;
let operador;
let numeroAnterior;

const atualizarDisplay = (texto) =>{
    if (novoNumero){
    display.textContent = texto;
    novoNumero = false;
    }else{
        display.textContent += texto;
    }
};

const inseriNumero = (event)=>
    atualizarDisplay(event.target.textContent);

    numeros.forEach((numero) => numero.addEventListener("click", inseriNumero));


    const selecionaOperador = (event) =>{
        novoNumero = true;
        operador = event.target.textContent;
        numeroAnterior = display.textContent.replace(",",".");
    };

    operadores.forEach((operador) => 
    operador.addEventListener("click", selecionaOperador));
    

const calcular = () => {
    if(operador !== undefined){
            const numeroAtual = display.textContent.replace(",",".");
            //calculo utlizando a funcção  eval
        const numeroAnterior = display.textContent;
        const resultado = eval(`${numeroAnterior}${operador}${numeroAtual}`);
        novoNumero = true;
        atualizarDisplay(resultado.toString().replace(".",","));
        
        //fazer a atualização do display com o resultado
        operador = undefined;
        }
};

const ativarIgual = () => calcular();

document.querySelector("#igual").addEventListener("click",ativarIgual);

const limparCalculo = () => {
    limparDisplay();
    novoNumero = true;
    operador = undefined;
    numeroAnterior = undefined;
}

document.querySelector("#limparCalculo").addEventListener("click", limparCalculo);

const removerUltimoNumero = () => display.textContent = display.textContent.slice(0, -1);

document.querySelector("#backspace").addEventListener("click", removerUltimoNumero);
//inverter o sinal
const inverterSinal = () => {
    novoNumero = true;
    atualizarDisplay(display.textContent * -1);
}

document.querySelector("#inverter").addEventListener("click", inverterSinal);

const existirValor = () => display.textContent.length > 0;
const existeDecimal = () => display.textContent.indexOf(",") !== -1;

//retorar se existe algum coisa dentro do display
const existirValor = () => display.textContent.length > 0;

//verificar se existir algum valor no display
const inserirDecimal = () => {
    if(!existeDecimal()){
        if(existeValor()){
            atualizarDisplay(",");
        }
    }else{
        atualizarDisplay("0,");
    }
};

document.querySelector("#decimal").addEventListener("click", inserirDecimal);

