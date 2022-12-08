function 燈數 (num: number) {
    if (num % 5 == 0) {
        x = 0
        y = Math.floor(num / 0) - 1
    } else {
        x = num % 5 - 1
        y = Math.floor(num / 5)
    }
    led.plot(x, y)
}
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    list = []
    for (let index = 0; index < 25; index++) {
        list.push(_0)
    }
    n = 0
    while (n < 3) {
        a = randint(0, 24)
        if (list[a] == 0) {
            list[a] = _1
            n += 1
            燈數(a + 1)
        }
    }
})
let a = 0
let n = 0
let list: number[] = []
let y = 0
let x = 0
let _1 = 0
let _0 = 0
_0 = 0
_1 = 1
basic.forever(function () {
	
})
