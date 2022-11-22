document.querySelectorAll('form span').forEach(item => {
    item.addEventListener('click', (e) => {
        addVal(item.innerHTML);
    })
});

function addVal(valor){
    if (valor=='C')
       document.calculadora.expressao.value = '';
    else if (valor == '=')
       document.calculadora.expressao.value = eval(document.calculadora.expressao.value);
    else
       document.calculadora.expressao.value += valor;
}