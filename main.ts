let donce = 0
let d = 0
let conce = 0
let c = 0
radio.setTransmitPower(7)
radio.setFrequencyBand(0)
radio.setGroup(1)
let A = 0
let aonce = 0
let b = 0
let bonce = 0
let x = 0
let xonce = 0
let y = 0
let yonce = 0
basic.showIcon(IconNames.Butterfly)
basic.forever(function () {
    A = pins.digitalReadPin(DigitalPin.P13)
    if (A != aonce) {
        radio.sendValue("10", A)
    }
    aonce = A
    b = pins.digitalReadPin(DigitalPin.P15)
    if (b != bonce) {
        radio.sendValue("11", b)
    }
    bonce = b
    x = pins.digitalReadPin(DigitalPin.P14)
    if (x != xonce) {
        radio.sendValue("12", x)
    }
    xonce = x
    y = pins.digitalReadPin(DigitalPin.P12)
    if (y != yonce) {
        radio.sendValue("13", y)
    }
    yonce = y
    c = pins.digitalReadPin(DigitalPin.P5)
    if (c != conce) {
        radio.sendValue("14", c)
    }
    conce = c
    d = pins.digitalReadPin(DigitalPin.P11)
    if (d != donce) {
        radio.sendValue("15", d)
    }
    donce = d
})
