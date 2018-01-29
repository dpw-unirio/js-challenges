let vm = new Vue({
    el: '#vm',
    data: {
        tests: [
            new Test('Possui um arroba', hasAtSign, [
                [['teste@test.com'], true],
                [['aloha.at.test.com'], false],
                [['email@test@com'], true],
                [['ólha@test'], true],
            ]),
            new Test('Email válido', isValidEmail, [
                [['teste@test.com'], true],
                [['aloha.at.test.com'], false],
                [['email@test@com'], false],
                [['ólha@test'], false],
                [['@test'], false],
                [['.@test..'], false],
            ]),
            new Test('Palíndromo', palindrome, [
                [['arara'], true],
                [['rodador'], true],
                [['tattarrattat'], true],
                [['roma é amor'], true],
                [['pimentel'], false],
                [['dpw'], false],
            ]),
        ]
    }
});