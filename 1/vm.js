let vm = new Vue({
    el: '#vm',
    data: {
        tests: [
            new Test('Soma', sum, [
                [
                    [1, 1], 2
                ],
                [
                    [-8, 10], 2
                ],
                [
                    [7, 3], 10
                ],
                [
                    [.5, 1.5], 2
                ],
            ]),
            new Test('Subtração', subtract, [
                [
                    [1, 1], 0
                ],
                [
                    [-8, 10], -18
                ],
                [
                    [7, 3], 4
                ],
                [
                    [.5, 1], -.5
                ],
            ]),
            new Test('Multiplicação', multiply, [
                [
                    [1, 1], 1
                ],
                [
                    [-8, 10], -80
                ],
                [
                    [7, 3], 21
                ],
                [
                    [.5, 1], .5
                ],
            ]),
            new Test('Divisão', divide, [
                [
                    [1, 1], 1
                ],
                [
                    [-8, 10], -.8
                ],
                [
                    [6, 3], 2
                ],
                [
                    [.5, .5], 1
                ],
            ]),
        ]
    }
});