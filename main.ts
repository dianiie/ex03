let A = 10
let B = 3
let C = A / B
serial.writeValue("C", C)
serial.writeValue("round", Math.round(C))
serial.writeValue("ceiling", Math.ceil(C))
serial.writeValue("floor", Math.floor(C))
serial.writeValue("truncate", Math.trunc(C))
serial.writeValue("max", Math.max(-12, -7))
serial.writeValue("min", Math.min(-12, -7))
serial.writeValue("rnd", randint(0, 100))
serial.writeValue("rnd", randint(0, 100))
basic.forever(function () {
	
})
