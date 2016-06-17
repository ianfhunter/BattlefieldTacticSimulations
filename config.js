var unit_list={
	"soldier":{
		"draw":{
			"rect":[22, 10, null, "#000", 1]
		}
	},
	"calvary":{
		"draw":{
			"rect":[22, 10, null, "#000", 1],
			"polyline":[
				[[0, 0],[22, 10],[0, 10]],
				"#FFFFFF",
				"#000", 
				1
			]
		}
	},
	"archer":{
		"draw":{
			"rect":[22, 10, null, "#000", 1],
			"rect":[11, 10, "#FFFFFF", "#000", 1],
		}
	}
};

var armies = {
	"Sikhs":{
		"Flag":'sikh.gif',
		"color":"#0B2EA0",
		"Units":{
			soldier: 20,
			calvary: 10,
			archer: 15			
		}
	},
	"British-Bengal":{
		"Flag":'east_india_company.png',
		"color":"#890000",
		"Units":{
			soldier: 15,
			calvary: 15,
			archer: 10
		}
	},
}