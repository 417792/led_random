let x = 0
let y = 0
let b = 0
let a = 0
let list: number[] = []
let n = 0
function 燈數 (num: number) {
    if (num % 5 == 0) {
        x = 4
        y = Math.floor(num / 5) - 1
    } else {
        x = num % 5 - 1
        y = Math.floor(num / 5)
    }
    led.plotBrightness(x, y, randint(50, 225))
}
input.onButtonPressed(Button.A, function () {
    b += 1
    if (a > 0) {
        a = 25
    }
})
input.onButtonPressed(Button.B, function () {
    b += -1
    if (a < 0) {
        a = 0
    }
})
basic.forever(function () {
    basic.clearScreen()
    list = []
    for (let index = 0; index < 25; index++) {
        list.push(0)
    }
    n = 0
    while (n < b) {
        a = randint(0, 24)
        if (list[a] == 0) {
            list[a] = 1
            n += 1
            燈數(a + 1)
        }
    }
    basic.pause(500)
})
