
let texto = document.getElementById('texto');
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
            new Test('Botão altera o texto', null,
                function () {

                },
                function () {
                    if (botao.onclick){
                        botao.onclick();
                        let val = texto.innerText;
                        texto.innerText = "Olá mundo";

                        return val === "Aqui o mundo é sereno";
                    }
                    return false;
                },
            )
        ]
    }
});