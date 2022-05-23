input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 25) {
        basic.showIcon(IconNames.Happy)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
