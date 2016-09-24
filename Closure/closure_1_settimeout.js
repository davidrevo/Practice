var p1 = "abc";
var p2 = "def";
function testSetTime(p1,p2) {
	return (function(){
		console.log(p1 + "-" + p2);
	});
}
var test = testSetTime(p1,p2);
setTimeout(test,1000);
setTimeout(function(){
	console.log(p1 + "-" + p2);
},1000);