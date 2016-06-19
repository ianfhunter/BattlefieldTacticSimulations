
var menu_height;
var info_height;
var interface_height;

window.onload = function () { 
	menu_height = $('#interface').css('height');
	info_height = 19;
	interface_height = menu_height + info_height;	//from initial menu
	
	auto_populate(menu_height, info_height);
}

function auto_populate(menu_height, info_height){
	$(".unit_info").html("Units Available: <br />")
	for (army in armies){
		info_height += 19;
		interface_height += info_height
		$(".unit_info").append("<span class='army_name "+army+" ' >"+army + "")
		$(".legend").append( // Legend.
			"<img class='flag' src=\"data/"+ armies[army]["Flag"] +"\" />"+ '(' + 
				"<img class='flag' style=\"background-color:"+ armies[army]["color"] +"\" />"
				+ ')' +army + "<br />")
		$('#unit_team').append('<option value="'+army+'">'+army+'</option>' )
		for (unit in armies[army]["Units"]){
			console.log("."+army)
			$("."+army+"").append('<span class="resource '+unit+'"><b class="resource_name">'+ unit + '</b> <i class="resource_amount">'+armies[army]["Units"][unit]+'</i></span> ')
		}
		$(".unit_info .army_name").append('</span>')
	}
	$("#info_bar").css('height', info_height)
}