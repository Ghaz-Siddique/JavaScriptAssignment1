function nestedStars(step) {
	var stars = "";

	for (var i = 0; i < step; i++) {
		for (var j = 0; j <= i; j++) {
			stars += " * ";
		}
		stars += "< br >" ; 
	}
	return document.write(stars);
}

nestedStars(10);