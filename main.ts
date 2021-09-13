let value = 0
// serial.setBaudRate(BaudRate.BaudRate115200)
if (true) {
    Asr_V3.Asr_Clear_Buffer()
    Asr_V3.Wait_Asr_Busy()
    Asr_V3.Asr_Set_Mode(Asr_V3.Mode.password_mode)
    Asr_V3.Wait_Asr_Busy()
    Asr_V3.Asr_Add_Words(0, "hua tuo hua tuo")
    Asr_V3.Wait_Asr_Busy()
    Asr_V3.Asr_Add_Words(1, "kai shi xiao du")
    Asr_V3.Wait_Asr_Busy()
    serial.writeNumber(Asr_V3.Asr_NUM_Cleck())
    Asr_V3.Cleck_Asr_Num(2)
}
Asr_V3.Asr_Set_RGB2(Asr_V3.enColor.White)
Asr_V3.Asr_Buzzer(Asr_V3.Buzzer_State.ON)
basic.pause(1000)
Asr_V3.Asr_Set_RGB2(Asr_V3.enColor.OFF)
Asr_V3.Asr_Buzzer(Asr_V3.Buzzer_State.OFF)
basic.forever(function () {
    value = Asr_V3.Asr_Result()
    // serial.writeNumber(value)
    if (value == 1) {
        basic.showIcon(IconNames.Skull)
        pins.analogWritePin(AnalogPin.P2, 1023)
    }
    basic.pause(10000)
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.clearScreen()
})
