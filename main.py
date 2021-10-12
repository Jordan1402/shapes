let test = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    test = 0
})
input.onGesture(Gesture.Shake, function () {
    if (test == 0) {
        basic.showNumber(0)
        test += 1
        basic.pause(500)
    }
})
