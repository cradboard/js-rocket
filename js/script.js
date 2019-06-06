		var car = {
			make: 'Toyota',
			type: 'Tacoma',
			color: 'Grey',
			isTurnedOn: false,
			numberOfWheels: 4,
			seats: ['seat1', 
			'seat 2', 
			'seat3', 
			'seat4'
			],
			turnOn: function() {
				this.isTurnedOn = true;
			},
			fly: function() {
				alert('fly');
			},
			switchCar: function(isOn) {
				console.log('turn car '+isOn)
				if (isOn == true) {
					this.isTurnedOn = true;
				} else {
					this.isTurnedOn = false;
				}
			}
		};

		console.log('hello there friends!')