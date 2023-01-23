def on_forever():
    serial.write_value("level", pins.analog_read_pin(AnalogPin.P2))
    basic.show_number(pins.analog_read_pin(AnalogPin.P2))
basic.forever(on_forever)
