function initBaiduMap(data) {
	//创建和初始化地图函数：
	function initMap() {
		createMap(125.139275, 46.561406); //创建地图
		setMapEvent(); //设置地图事件
		addMapControl(); //向地图添加控件
	}
	//创建地图函数：
	function createMap(x, y) {
		var map = new BMap.Map("bmap"); //在百度地图容器中创建一个地图
		var point = new BMap.Point(x, y); //定义一个中心点坐标
		map.centerAndZoom(point, 12); //设定地图的中心点和坐标并将地图显示在地图容器中
		window.map = map; //将map变量存储在全局
	}
	//地图事件设置函数：
	function setMapEvent() {
		map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
		map.enableKeyboard(); //启用键盘上下左右键移动地图
	}
	//地图控件添加函数：
	function addMapControl() {
		//向地图中添加缩放控件
		var ctrl_nav = new BMap.NavigationControl({
			anchor: BMAP_ANCHOR_TOP_LEFT,
			type: BMAP_NAVIGATION_CONTROL_LARGE
		});
		map.addControl(ctrl_nav);
		//向地图中添加缩略图控件
		var ctrl_ove = new BMap.OverviewMapControl({
			anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
			isOpen: 1
		});
		map.addControl(ctrl_ove);
		//向地图中添加比例尺控件
		var ctrl_sca = new BMap.ScaleControl({
			anchor: BMAP_ANCHOR_BOTTOM_LEFT
		});
		map.addControl(ctrl_sca);
		//向地图中添加卫星地图控件
		map.addControl(new BMap.MapTypeControl());
	}
	initMap(); //创建和初始化地图
}

function initInfoWindow() {
	var content = tb_content;
	var map = window.map;
	var opts = {
		width: 480, // 信息窗口宽度
		height: 280, // 信息窗口高度
		title: "个人信息", // 信息窗口标题
		enableMessage: true //设置允许信息窗发送短息
	};

}

function openInfo(content, e) {
	var opts = {
		width: 480, // 信息窗口宽度
		height: 280, // 信息窗口高度
		// title: "个人信息", // 信息窗口标题
		enableMessage: true //设置允许信息窗发送短息
	};
	var p = e.target;
	var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
	var infoWindow = new BMap.InfoWindow(content, opts); // 创建信息窗口对象 
	map.openInfoWindow(infoWindow, point); //开启信息窗口
}

function setIcon(checked, iconType) {
	var points = iconType.points;
	if(checked) {
		for(var i = 0; i < points.length; i++) {
			var point = new BMap.Point(points[i].xAxis, points[i].yAxis);
			addCustomOverlay(iconType.url, point, iconType.type);
		}
	} else {
		hideIcon(iconType.type)
	}

}

function addCustomOverlay(url, point, type) {
	var myIcon = new BMap.Icon(url, new BMap.Size(45, 45), {});
	myIcon.setName(type);
	var marker = new BMap.Marker(point, {
		icon: myIcon
	}); // 创建标注
	var map = window.map;
	map.addOverlay(marker);

	var content = tb_content;

	addClickHandler(content, marker);

	marker.disableDragging(); // 不可拖拽
}

function addClickHandler(content, marker) {
	marker.addEventListener("click", function(e) {
		openInfo(content, e)
	});
}

function hideIcon(type) {
	var all_overlays = window.map.getOverlays();

	for(var i = 0; i < all_overlays.length; i++) {
		if(all_overlays[i].toString() == "[object Marker]") {
			if(all_overlays[i].getIcon().type == type) {
				all_overlays[i].hide()
			}
		}
	}
}

function setIconByText(checked, text) {
	switch(text) {
		case "治安卡口":
			setIcon(checked, public_security);
			break;
		case "主要街道":
			setIcon(checked, main_street);
			break;
		case "政府周边":
			setIcon(checked, government);
			break;
		case "出租屋分布":
			setIcon(checked, let_distribution);
			break;
		case "流动人口分布":
			setIcon(checked, floating_population_distribution);
			break;
		case "出租屋专题":
			setIcon(checked, let_subjet);
			break;
		case "流动人口专题":
			setIcon(checked, floating_population_subject);
			break;
		case "涉毒":
			setIcon(checked, drug_relative);
			break;
		case "重大刑事犯罪前科":
			setIcon(checked, criminal);
			break;
		case "重点上访人员":
			setIcon(checked, petitioner);
			break;
		case "肇事肇祸精神病人":
			setIcon(checked, mental_patient);
			break;
		case "警用车辆":
			setIcon(checked, police_vehicle);
			break;
		case "城管车辆":
			setIcon(checked, chengguan_vehicle);
			break;
		default:
			break;
	}
}

function setIconOnCheck() {
	$('#tt').tree({
		onCheck: function(node, checked) {

			var is_leaf = ($('#tt').tree('getChildren', node.target) == '');
			// alert(is_leaf);
			if(is_leaf) {
				// alert(node.text);
				setIconByText(checked, node.text);
			} else {
				var childrens = $('#tt').tree('getChildren', node.target);
				for(let i = 0; i < childrens.length; i++) {
					setIconByText(checked, childrens[i].text);
				}
			}
		}
	});
}

//侧边导航单击事件
function initNav() {

	$(".nav").bind("click", function() {
		//样式改变
		$(this).css({
			'color': '#fff',
			'background': '#3299ff'
		}).removeClass("nav");
		$('.nav').css({
			'color': '#c7c7c7',
			'background': ''
		});
		$(this).addClass('nav');
		
		//右侧图表改变
		switch($(this).text().trim()) {
			case '监控地图':
				resetIcon();
				$('.jk').attr("src", "../FocusCrowd/Image/监控地图_ic_click.png");
				break;
			case '企业地图':
				resetIcon();
				$('.qy').attr("src", "../FocusCrowd/Image/企业地图_ic_click.png");
				break;
			case '人员地图':
				resetIcon();
				$('.rr').attr("src", "../FocusCrowd/Image/人员地图_ic_click.png");
				break;
		}
	});
	$(".nav:first-child").trigger("click"); 
}

function resetIcon() {
	$('.jk').attr('src', '../FocusCrowd/Image/监控地图_ic.png');
	$('.qy').attr('src', '../FocusCrowd/Image/企业地图_ic.png');
	$('.rr').attr('src', '../FocusCrowd/Image/人员地图_ic.png');
}

onload = function() {
	BMap.Icon.prototype.type = "";
	BMap.Icon.prototype.setName = function(type) {
		this.type = type;
	}

	initBaiduMap("bmap"); //创建和初始化地图
	setIconOnCheck();
	initNav();
}