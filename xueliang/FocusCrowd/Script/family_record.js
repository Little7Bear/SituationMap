function initListBlueEffect() {
	$(document).ready(function() {
		$("ul.blue-li li").click(function() {
			$(this).addClass("blue").siblings().removeClass("blue");
			//          getData($(this).val());
		});
	});
}

function initGraph(chartId) {
	var dom = document.getElementById(chartId);
	var myChart = echarts.init(dom);
	var app = {};
	option = null;

	app.title = '世界人口总量 - 条形图';

	option = {
		tooltip: {
			trigger: 'axis'
		},
		grid: {
			top: '3%',
			left: '3%',
			right: '4%',
			bottom: '8%',
			containLabel: true,
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
			axisLabel: {
				show: true,
				interval: 0,
				color: '#fff',
				align: 'right',
				fontSize: 12,
				fontFamily: 'Microsoft YaHei',
			},
		},
		yAxis: {
			type: 'value',
			axisLabel: {
				show: true,
				interval: 0,
				color: '#fff',
				align: 'right',
				fontSize: 12,
				fontFamily: 'Microsoft YaHei',
			},
			splitLine: {
				show: true,
				lineStyle: {
					color:'#1e1e1e' 
				}
			}
		},
		series: [{
				name: '邮件营销',
				type: 'line',
				stack: '总量',
				data: [120, 132, 101, 134, 90, 230, 210]
			},
			{
				name: '联盟广告',
				type: 'line',
				stack: '总量',
				data: [220, 182, 191, 234, 290, 330, 310]
			},
			{
				name: '视频广告',
				type: 'line',
				stack: '总量',
				data: [150, 232, 201, 154, 190, 330, 410]
			}
		]
	};

	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	}

}

function initBaiduMap() {
	//创建和初始化地图函数：
	function initMap() {
		createMap(125.139275, 46.561406); //创建地图
		setMapEvent(); //设置地图事件
		// addMapControl(); //向地图添加控件
	}
	//创建地图函数：
	function createMap(x, y) {
		var map = new BMap.Map("family-location"); //在百度地图容器中创建一个地图
		var point = new BMap.Point(x, y); //定义一个中心点坐标
		map.centerAndZoom(point, 12); //设定地图的中心点和坐标并将地图显示在地图容器中
		window.map = map; //将map变量存储在全局
		var marker = new BMap.Marker(point); // 创建标注
		map.addOverlay(marker); // 将标注添加到地图中
		marker.disableDragging(); // 不可拖拽
		var label = new BMap.Label("东城领秀A-51号楼", {
			offset: new BMap.Size(-50, -50),
		});
		marker.setLabel(label);
	}
	//地图事件设置函数：
	function setMapEvent() {
		map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
		map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
		map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
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
	}
	initMap(); //创建和初始化地图
}

onload = function() {
	initListBlueEffect();
	initGraph('water-and-electricity-chart');
	initGraph('family-see-doctor-chart');
	initGraph('community-see-doctor-chart');
	initBaiduMap(); //创建和初始化地图
}