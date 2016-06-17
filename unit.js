function add (elem, x, y){
	return [elem[0] + x, elem[1] + y]
}

var running_unit_id = 0

function Unit (x, y, rotation, type,team) {
    this.type = type;
    this.x = x;
	this.y = y;
	this.rotation = rotation;
	this.obj = null;
	this.team = team;
	
	this.draw = function(s){
		prop = unit_list[this.type]["draw"]
		prev_obj = null;
		for(var key in prop){

			if (key == "rect"){
				obj = s.rect(this.x, this.y, prop[key][0], prop[key][1]);
				obj.attr({
					fill: prop[key][2] == null?team_colors[this.team]:prop[key][2] ,
					stroke: prop[key][3],
					strokeWidth: prop[key][4]
				});
			}
			if (key == "polyline"){
				that = this
				translate = prop[key][0].map(
					function(elem){
						return add(elem, that.x, that.y) 
					}
				)
				obj = s.polyline(translate);
				console.log(prop[key][1])
				console.log(prop[key][1] == 'null')
				obj.attr({
					fill: prop[key][1] == 'null' ? team_colors[this.team]: prop[key][1],
					stroke: prop[key][2],
					strokeWidth: prop[key][3]
				});
			}
			
			if (prev_obj != null){
				prev_obj = s.group(prev_obj, obj);
			}else{
				prev_obj = obj;
			}
		}
		this.obj = prev_obj;
		this.obj.attr({
			id: "Unit"+(++running_unit_id),
		})
		//Apply Rotation
		this.obj.transform("rotate(" +this.rotation + " "+(this.x + (22/2)) + " "+(this.y + (10/2)) + ")")
		/*
		this.obj.attr({
			onclick: 'draw_command(this)'
		})
		*/
	}
};

function drawLine(event,obj,s) {
	x = obj.getBoundingClientRect()['left']
	y = obj.getBoundingClientRect()['top']
	console.log(
		x,y,event.clientX,event.clientY
	)
	
	LINE = s.line(x,y,event.clientX,event.clientY)
	LINE.attr({
			fill: '#FF00DD',
			stroke: '#000',
			strokeWidth: 3
		})
	obj.order = LINE
	console.log("ANIMATE")
	var myMatrix = new Snap.Matrix();
	myMatrix.translate(event.clientX - x,event.clientY - y);
	console.log(obj)

	Snap(obj).animate({ transform: myMatrix },400);
	
}

function draw_command(obj){
	console.log(obj)
	s = Snap(obj);
	s.attr({
			fill: '#00FFFF',
			onclick:''
		})
	var a = 0;
	/*document.addEventListener("click", function get_order(e){
		a++; 	
		console.log(a)
		if(a > 1){
			drawLine(e, obj, Snap("#map_area"))			
			document.removeEventListener("click", get_order)
			var fn = function clear_order(){
					console.log("CANCEL")
					obj.order.remove()
					document.removeEventListener("click", clear_order)
					s.attr({
						onclick:"draw_command(this)",
						fill:"#DDDDDD"
					})		
					s.unclick(fn)
			}
//			document.addEventListener("click", fn)
			s.click(fn)
		}
	});*/
}