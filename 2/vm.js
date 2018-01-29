let vm = new Vue({
    el: '#vm',
    data: {
        tests: [
            new Test('Divisor', divisor, [
                [[10, 5], true],
                [[10, 2], true],
                [[10, 9], false],
                [[5, 3], false],
            ]),
            new Test('Ímpar', isOdd, [
                [[5], true],
                [[2], false],
                [[10], false],
                [[11], true],
            ]),
            new Test('Área do retângulo', areaOfRectangle, [
                [[10,10], 100],
                [[2,5], 10],
                [[5,1.5], 7.5]
            ]),
            new Test('Área do círculo', areaOfCircle, [
                [[10], 100*Math.PI],
                [[25], 25*25*Math.PI],
            ]),
            new Test('Primo', isPrime, [
                [[1], false],
                [[5], true],
                [[7], true],
                [[10], false],
                [[11], true],
                [[12], false],
            ]),
        ]
    }
});