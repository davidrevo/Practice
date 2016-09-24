var singleton = function() {
	var privateVariable = "I am a private trainer.";
	function privateFunction() {
		console.log(privateVariable);
	}

	return {
		firstMethod: function(a,b) {
			console.log(a + ";" + b + ";" + privateVariable);
		},
		secondMethod: function(c) {
			privateFunction();
			console.log(c);
		}
	}
}

singleton().firstMethod("Hello World","Fantastic");
singleton().secondMethod("Really funny!");