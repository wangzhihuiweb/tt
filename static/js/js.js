var iSpeedX = 6;
var iSpeedY = 8;
window.onload=function(){
	startMove()
}
function startMove() {
	setInterval(function() {
		var oDiv = document.getElementById("oDiv");
		var l = oDiv.offsetLeft + iSpeedX;
		var t = oDiv.offsetTop + iSpeedY;
		var oDivoffT = document.documentElement.clientHeight - oDiv.offsetHeight;
		var oDivoffl = document.documentElement.clientWidth - oDiv.offsetWidth;

		if(t >= oDivoffT) {
			iSpeedY *= -1;
			t = oDivoffT;
		} else if(t < 0) {
			iSpeedY *= -1;
			t = 0;
		}

		if(l >= oDivoffl) {
			iSpeedX *= -1;
			l = oDivoffl;
		} else if(l <= 0) {
			iSpeedX *= -1;
			l = 0;
		}
		oDiv.style.left = l + 'px';
		oDiv.style.top = t + 'px';

	}, 30)
}