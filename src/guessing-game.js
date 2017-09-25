class GuessingGame {
    constructor() {
    	// var min;
    	// var max;
    }

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    }
    guess() {
    	return Math.round((this.max+this.min)/2);
    }

    lower() {
    	this.max = this.guess();
    }

    greater() {
    	this.min =this.guess();
    }
}

module.exports = GuessingGame;

// var obj = new GuessingGame;
// var number = ;
// obj.setRange(0,4048);

// for (var i = 0; i < 10; i++) {
// 		var a = obj.guess();
// 	console.log(a);
// 	if (a < number) {
// 		obj.greater();
// 	}
// 	else {
// 		if (a > number) {
// 			obj.lower()
// 		}
// 		else {
// 			console.log('Вы угадали') ;
// 			break;
// 		}
// 	}
// }


