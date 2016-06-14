
window.onload = function () { 

	var s = Snap("#example3");
	
	red_army = [
	
		new Unit(190,84,45,"calvary",0),
		new Unit(215,104,45,"calvary",0),
		new Unit(234,124,45,"calvary",0),
		
		new Unit(245,151,45,"soldier",0),
		new Unit(269,171,45,"soldier",0),
		new Unit(285,185,45,"soldier",0),
		new Unit(304,205,45,"soldier",0),
		new Unit(320,220,45,"soldier",0),
		new Unit(339,235,45,"soldier",0),
		new Unit(374,268,45,"soldier",0),
		new Unit(395,285,45,"soldier",0),
		new Unit(410,300,45,"soldier",0),
		new Unit(445,330,45,"soldier",0),
		new Unit(460,345,45,"soldier",0),
		new Unit(475,360,45,"soldier",0),
		new Unit(420,410,45,"soldier",0),
		new Unit(442,428,45,"soldier",0),
		
		new Unit(503,383,45,"calvary",0),
		new Unit(520,400,45,"calvary",0),
		new Unit(538,418,45,"calvary",0),
		new Unit(560,435,45,"calvary",0),

		new Unit(590,465,80,"calvary",0),

		
	]
	for (unit in red_army){
		red_army[unit].draw(s);
	}

}