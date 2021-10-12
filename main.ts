let shape = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    shape = 0
})
input.onButtonPressed(Button.B, function () {
    if (shape == 2) {
        basic.showIcon(IconNames.Heart)
        shape += 1
    }
    if (shape == 1) {
        basic.showIcon(IconNames.SmallDiamond)
        shape += 1
    }
    if (shape == 0) {
        basic.showIcon(IconNames.SmallHeart)
        shape += 1
    }
})
