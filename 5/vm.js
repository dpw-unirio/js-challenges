
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let resultado = document.getElementById('resultado');
let botao = document.getElementById('botao');


let vm = new Vue({
    el: '#vm',
    data: {
        tests: [
            new Test('Botão possui evento de clique', null,
                function () {

                },
                function () {
                    return !!botao.onclick;
                },
            ),
            new Test('Botão altera o campo de texto', null,
                function () {

                },
                function () {
                    if (botao.onclick){
                        resultado.value = "";

                        botao.onclick();

                        let val = resultado.value;

                        resultado.value = "0";

                        return val!=="";
                    }
                    return false;
                },
            ),
            new Test('Botão realiza soma', null,
                function () {

                },
                function () {
                    if (botao.onclick){
                        num1.value = "5";
                        num2.value = "5";

                        botao.onclick();

                        let val = resultado.value;

                        num1.value = "0";
                        num2.value = "0";
                        resultado.value = "0";

                        return val==="10";
                    }
                    return false;
                },
            )
        ]
    }
});