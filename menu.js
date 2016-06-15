function menu(opt){
	switch(opt){
		case "units":
			$(".unit_menu_item").show()
			$(".order_menu_item").hide()
			break
		case "orders":
			$(".unit_menu_item").hide()
			$(".order_menu_item").show()
			break
		case "proceed":
			$(".unit_menu_item").hide()
			$(".order_menu_item").hide()
			break
	}
}