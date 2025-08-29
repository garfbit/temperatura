let temperatura = 0
basic.forever(function () {
    temperatura = input.temperature()
    basic.showNumber(temperatura)
    if (temperatura > 25) {
        basic.showIcon(IconNames.Happy)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        basic.showIcon(IconNames.Sad)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
