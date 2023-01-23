basic.forever(function () {
    serial.writeValue("level", pins.analogReadPin(AnalogPin.P2))
    if (pins.analogReadPin(AnalogPin.P2) >= 290) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showNumber(1)
        music.ringTone(988)
        basic.pause(2000)
    }
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.showNumber(0)
})
