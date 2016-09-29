var proportion = 1280/32;
		function resizeFont() { 
			document.getElementById('contacts').style.fontSize = parseInt(document.getElementById('contacts').offsetWidth/proportion) + 'px'
		}
		onload = onresize = resizeFont;
			if (document.addEventListener) document.addEventListener("DOMContentLoaded", resizeFont, null);