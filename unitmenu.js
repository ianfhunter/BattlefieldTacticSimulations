var fighters = []

function place(){
	var s = Snap("#map_area");
	
	console.log($("#unit_type").text())
	console.log($("#unit_num").val())
	
	if ($("#unit_num").val() <= 0){
		console.log("Cannot have empty unit.")
		return;
	}else if ($("#unit_num").val() > 50){
		console.log("Not enough units available")
	}else{
		console.log($(".army_name ." + $("#unit_team").val() + " ." + $("#unit_type").text() + ".resource_amount").text())
		console.log($(".unit_info ." + $("#unit_team").val() + " ." + $("#unit_type").text() + ".resource_amount").text())
	}
		
	
	
	
	$("#unit_place").text("Click on the map.")
	troop = new Unit(0,0,45,"calvary",$("#unit_team").val(),$("#unit_num").val()),
	troop.draw(s)
	fighters.push(troop)
	
	$("#map_area").on("click", function get_order(e){
		adjust_xy(e,troop);
		$("#map_area").unbind('click');
		troop.obj.attr({
			onclick:'show_interaction(this)'
		})
	})

}

function adjust_xy(event, unit){
	console.log("YO")
	console.log(unit)
	$("#unit_place").text("Place Unit")
	var myMatrix = new Snap.Matrix();
	x = unit.x
	y = unit.y
	myMatrix.translate(event.clientX - x,event.clientY - y  - 108);
	unit.x = event.clientX;
	unit.y = event.clientY;
	unit.obj.animate({ transform: myMatrix },400)
}

function propose_unit(typ){
	$("#unit_type").text(typ);
}

function show_interaction(elem){
	s = Snap(elem);

	s.attr({
		id:'active-delete'
	})
	
	DEL = s.circle(-20,0,10);
	DEL_t = s.text(-24,5,"X");
	DEL.attr({
		fill: '#f00',
		onclick: '$("#active-delete").remove()'
	})
	DEL_t.attr({
		onclick: '$("#active-delete").remove()'
	})
	DEL.addClass('temporary')
	DEL_t.addClass('temporary')

	s.attr({
		onclick:'$(".temporary").remove(); this.setAttribute("onclick","show_interaction(this)")'
	})

	

}