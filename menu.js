var state = 0

/*
0 - Unit Assignment Phase
1 - Order Phase
2 - Animate
*/


function menu(opt){
	switch(opt){
		case "units":
			$(".unit_menu_item").css('display', 'inline-block');
			$(".order_menu_item").hide()
			break
		case "orders":
			$(".unit_menu_item").hide()
			$(".order_menu_item").css('display', 'inline-block');
			break
		case "proceed":
			switch(state){
				case 0:
					$("#orders").css('display', 'inline-block');
					break
				case 1:
					break
				case 2:
					break
			}
			break
	}
}