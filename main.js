
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
	$(".unit_info").html("Units Available: <br/>")
	for (army in armies){
		info_height += 19;
		interface_height += info_height
		$(".unit_info").html($(".unit_info").html() + army + ": ")
		$(".legend").html($(".legend").html() // Legend.
			+ "<img class='flag' src=\"data/"+ armies[army]["Flag"] +"\" />"+ '(' + 
				"<img class='flag' style=\"background-color:"+ armies[army]["color"] +"\" />"
				+ ')' +army + "<br />")
		$('#unit_team').html($('#unit_team').html() + '<option value="'+army+'">'+army+'</option>' )
		for (unit in armies[army]["Units"]){
			$(".unit_info").html($(".unit_info").html() + '<b class="resource_name">'+ unit + '</b> <i class="resource_amount">'+armies[army]["Units"][unit]+'</i> ')
		}
		$(".unit_info").html($(".unit_info").html() + '<br />')
	}
	$("#info_bar").css('height', info_height)
}