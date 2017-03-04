/*
* @Author: Kevinlorry
* @Date:   2017-10-27 20:25:08
* @Last Modified by:   Administrator
* @Last Modified time: 2017-03-04 06:21:20
*/	
	var piece = [{
		  black:[{name:"车",id:"a1",pos:[{x:1,y:0}]},
		         {name:"马",id:"a2",pos:[{x:2,y:0}]},
		         {name:"象",id:"a3",pos:[{x:3,y:0}]},
		         {name:"士",id:"a4",pos:[{x:4,y:0}]},
		         {name:"将",id:"a5",pos:[{x:5,y:0}]},
		         {name:"士",id:"a6",pos:[{x:6,y:0}]},
		         {name:"象",id:"a7",pos:[{x:7,y:0}]},
		         {name:"马",id:"a8",pos:[{x:8,y:0}]},
		         {name:"车",id:"a9",pos:[{x:9,y:0}]},
		         {name:"炮",id:"a10",pos:[{x:2,y:2}]},
		         {name:"炮",id:"a11",pos:[{x:8,y:2}]},
		         {name:"卒",id:"a12",pos:[{x:1,y:3}]},
		         {name:"卒",id:"a13",pos:[{x:3,y:3}]},
		         {name:"卒",id:"a14",pos:[{x:5,y:3}]},
		         {name:"卒",id:"a15",pos:[{x:7,y:3}]},
		         {name:"卒",id:"a16",pos:[{x:9,y:3}]}
		        ]},{
		    red:[{name:"車",id:"b1",pos:[{x:1,y:9}]},
		         {name:"馬",id:"b2",pos:[{x:2,y:9}]},
		         {name:"相",id:"b3",pos:[{x:3,y:9}]},
		         {name:"士",id:"b4",pos:[{x:4,y:9}]},
		         {name:"帅",id:"b5",pos:[{x:5,y:9}]},
		         {name:"士",id:"b6",pos:[{x:6,y:9}]},
		         {name:"相",id:"b7",pos:[{x:7,y:9}]},
		         {name:"馬",id:"b8",pos:[{x:8,y:9}]},
		         {name:"車",id:"b9",pos:[{x:9,y:9}]},
		         {name:"炮",id:"b10",pos:[{x:2,y:7}]},
		         {name:"炮",id:"b11",pos:[{x:8,y:7}]},
		         {name:"兵",id:"b12",pos:[{x:1,y:6}]},
		         {name:"兵",id:"b13",pos:[{x:3,y:6}]},
		         {name:"兵",id:"b14",pos:[{x:5,y:6}]},
		         {name:"兵",id:"b15",pos:[{x:7,y:6}]},
		         {name:"兵",id:"b16",pos:[{x:9,y:6}]}
		        ]
		 		 }]

	var chessstep = [];
	var savestep = [];
	var changekey = 0;
	var shurutext = null ;
	var changechess = null ;
	var e = 0 ;
	var j = 0;
	var m = 0;
	var k =0;

	$("#chessfirst2").on("click",function(){
		$(".chessfirst").attr("disabled",true) ;
		$("#chessfirstspan").text("红子先");
		changekey = -1;
		chessstep = piece;
		$("#tishi").text("请输入红子打谱")
		$("#shuru").css("display","block ")
		$(".back").css("display","block ")
	})
	$("#chessfirst1").on("click",function(){
		$(".chessfirst").attr("disabled",true) ;
		$("#chessfirstspan").text("黑子先");
		changekey = 1;
		chessstep = piece;
		$("#tishi").text("请输入黑子打谱")
		$("#shuru").css("display","block ")
		$(".back").css("display","block ")
	}) 

	

	$(document).keydown(function(event){
		if (event.keyCode == 13 && $("#shuru").val() != "") {
			shurutext = $("#shuru").val();
			$("#shuru").val("");
			if ($("#tishi").text()=="请输入黑子打谱") {
				$("#tishi").text("请输入红子打谱")
			}
			else if ($("#tishi").text()=="请输入红子打谱") {
				$("#tishi").text("请输入黑子打谱")
			}
			var shuruArray = shurutext.split("");
			var a = shuruArray[0];
			var b = count(shuruArray[1]);
			var c = shuruArray[2];
			var d = count(shuruArray[3]);
			if (changekey == 1) {
				for (var i = 0;i<16;i++){
 					if(chessstep[0].black[i].name==a&&chessstep[0].black[i].pos[chessstep[0].black[i].pos.length-1].x==b){
 					m = chessstep[0].black[i].id
 					savestep.push({"id":m,"changekey":1,"k":i} )
 					changekey= -1
 					break
 	
 					}
 				}
	 	        x = chessstep[0].black[i].pos[chessstep[0].black[i].pos.length -1].x
	 	        y = chessstep[0].black[i].pos[chessstep[0].black[i].pos.length -1].y
				if (a == "车"||a == "炮"||a == "卒"||a == "将") {
					if (c == "平") {
						e = d
						j = y
					}
					else if (c == "进") {
						e = b
						j = y+parseInt(d)
						console.log(j)
					}
					else if (c == "退") {
						e = b 
						j = y-d
				
					}

				}
				else if (a =="马") {
					if (c == "进") {
						if (d-b == 1|| b-d == 1) {
							e = d
							j = y+2
						}
						else if (d-b == 2||b-d ==2) {
							e = d
							j = y+1
						}	
					}
					else if (c == "退") {
						if (d-b == 1|| b-d == 1) {
							e = d
							j = y-2
						}
						else if (d-b == 2||b-d ==2) {
							e = d
							j = y-1
						}	
					}
				}
				else if (a == "士") {
					if (c == "进") {
						e = d
						j = y+1
					}
					if (c == "退") {
						e = d
						j = y-1
					}
				}
				else if (a == "象") {
					if (c == "进") {
						e = d
						j = y+2
					}
					else if (c == "退") {
						e = d
						j = y-2
					}
				}
				chessstep[0].black[i].pos.push({"x":e,"y":j})

			}
			else if (changekey == -1) {
				b = 10-b
				console.log(b)
				for (var i = 0;i<chessstep[1].red.length;i++){
 					if(chessstep[1].red[i].name==a&&chessstep[1].red[i].pos[chessstep[1].red[i].pos.length-1].x==b){
 					m = chessstep[1].red[i].id
 					savestep.push({"id":m,"changekey":-1,"k":i} )
 					changekey= 1
 					break
 					}
 				}

	 	        x = chessstep[1].red[i].pos[chessstep[1].red[i].pos.length -1].x
	 	        y = chessstep[1].red[i].pos[chessstep[1].red[i].pos.length -1].y
				if (a == "車"||a == "炮"||a == "兵"||a == "帅") {
					if (c == "平") {
						e = 10-d
						j = yy
					}
					else if (c == "进") {
						e = b
						j = yy-d
					}
					else if (c == "退") {
						e = b 
						j = yy+parseInt(d)
					}

				}
				else if (a =="馬") {
					if (c == "进") {
						if (10-d-b == 1|| 10-d-b == -1) {
							e = 10-d
							j = y-2
						}
						else if (10-d-b == 2||10-d-b == -2) {
							e = 10-d
							j = y-1
						}	
					}
					else if (c == "退") {
						if (10-d-b == 1|| 10-d-b == -1) {
							e = d
							j = y+2
						}
						else if (10-d-b == 2||10-d-b == -2) {
							e = d
							j = y+1
						}	
					}
				}
				else if (a == "仕") {
					if (c == "进") {
						e = 10-d
						j = y-1

					}
					if (c == "退") {
						e = 10-d
						j = y+1
					}
				}
				else if (a == "相") {
					if (c == "进") {
						e = 10-d
						j = y-2
					}
					else if (c == "退") {
						e = 10-d
						j = y+2
					}
				}
				chessstep[1].red[i].pos.push({"x":e,"y":j})
			}
			var v = e*50 - 75 +"px";
			var t = j*50 - 25 + "px";
			$("#"+m).css({"left":v,top:"t","transition-duration":"3s"})
		}
	})
	$(".back").on("click",function(){
		var backchess = savestep.pop();
		var s = backchess.id;
		var r = backchess.k ;
		var u = backchess.changekey;
		var o = 0;
		var p = 0;
		console.log(backchess)


		if (u==1) {
			chessstep[0].black[r].pos.pop();
			o = chessstep[0].black[r].pos[chessstep[0].black[r].pos.length-1].x
			p = chessstep[0].black[r].pos[chessstep[0].black[r].pos.length-1].y
			changekey = 1
		}
		else if (u==-1) {
			chessstep[1].red[r].pos.pop();
			o = chessstep[1].red[r].pos[chessstep[1].red[r].pos.length-1].x
			p = chessstep[1].red[r].pos[chessstep[1].red[r].pos.length-1].y
			changekey = -1
		}
		var g = o*50 - 75 +"px";
		var h = p*50 - 25 + "px";
		$("#"+s).css({"left":g,"top":h,"transition-duration":"3s"})
	})

	function count(ss){
		switch (ss) {
			case "一":
				return ss = 1;
				break;
			case "二":
				return ss = 2;
				break;
			case "三":
				return ss = 3;
				break;
			case "四":
				return ss = 4;
				break;
			case "五":
				return ss = 5;
				break;
			case "六":
				return ss = 6;
				break;
			case "七":
				return ss = 7;
				break;
			case "八":
				return ss = 8;
				break;
			case "九":
				return ss = 9;
				break;
			default:
			    return ss
		}
	}



	
// 	function count(){
// 		var count = 0;
// 			count = $(".led").length-$(".ledde").length
// 		return count
// 	}

// 	$("#all").on("click",function(){
// 		$(".cli").removeClass("clic");
// 		$("#all").addClass("clic");
// 		$(".led").css("display","block");
// 		$("#change").text(count());
// 	});
// 	$("#active").on("click",function(){
// 		$(".cli").removeClass("clic");
// 		$("#active").addClass("clic");
// 		$(".led").css("display","block");
// 		$(".led.ledde").css("display","none");
// 		$("#change").text(count());
// 	});
// 	$("#completed").on("click",function(){
// 		$(".cli").removeClass("clic");
// 		$("#completed").addClass("clic");
// 		$(".led").css("display","none");
// 		$(".led.ledde").css("display","block");
// 		$("#change").text(count());
// 	});


// 	$(document).keydown(function(event){
// 		if (event.keyCode == 13 && $("#sousuo").val() != "") { //通过判断按钮的位置来决定输入的是否添加.clic
// 			$(".ledd").css("display","block");
// 		   	$(".ledd").before("<li class='led'> <input type='checkbox' class='box'></li>");		
// 			$("li").eq(-2).append($("#sousuo").val());
// 			$("#sousuo").val("");
// 		    if ($('#completed').hasClass("clic")){
// 				$("li").eq(-2).css("display","block");
// 		    }
// 			$("#change").text(count());  
// 		}
// 	});
// $(function(){
// 	$("#all").click();
// 	$("#clear").on('click',function(){
// 		$(':checked').parent().remove();
// 		$("#change").text(count());
// 		$("#clear").css("display","none");
// 	})
// })
// $(function(){
// 	var box = $(".box");
// 	$("body").on("click",".box",function(){
// 		$(this).parent().toggleClass('ledde');
// 		if($('.box').is(':checked')) {
// 		 	$('#clear').css("display","inline-block");		 	
// 		 }
// 		 else{
// 		 	$("#clear").css("display","none");
// 		 }
	
// 		if ($('#active').hasClass('clic')) {
// 			$(".led").css("display","block");
// 			$(".led.ledde").css("display","none");
// 		}
// 		 else if ($('#completed').hasClass('clic')) {
// 		 	$(".led").css("display","none");
// 		 	$(".led.ledde").css("display","block");
// 		 }
// 		 else if ($('#all').hasClass('clic')) {
// 		 	$(".led").css("display","block");
// 		 }
// 		 $("#change").text(count());

// 	});
// });