$(function () {
    var map = new BMap.Map("map");
    map.centerAndZoom(new BMap.Point(126.623212, 45.761933), 15);
    map.addControl(new BMap.NavigationControl());//地图放大平移控件
    map.enableContinuousZoom(false);

    // 创建交通流量图层    
    var traffic = new BMap.TrafficLayer();
    map.addTileLayer(traffic);

    // 使用自定义标注图标
    function addMarker(point, index) {
        var myIcon;
        if (index === 2) {
            myIcon = new BMap.Icon("../../images/Policeman.png", new BMap.Size(48, 48));
        }
        else {
            myIcon = new BMap.Icon("../../images/Ambulance.png", new BMap.Size(48, 48));
        }
        // 创建标注对象并添加到地图   
        var marker = new BMap.Marker(point, { icon: myIcon });
        map.addOverlay(marker);
    }
    var point1 = new BMap.Point(126.642652, 45.7705);
    var point2 = new BMap.Point(126.593281, 45.7562);
    addMarker(point1, 1);
    addMarker(point2, 2);

    //使用自定义信息窗口
    var content1 = ['<div class="infobox-patrol-wagon">', '<img src="../../images/运兵车_pic.png" alt="暂无">', '<ul class="infoboxMessage">',
        '<li>警车：黑A6386V</li>', '<li>姓名：李佳峰</li>', ' <li>手机：15666853324</li>', '<li>车种：运兵车</li>', '</ul></div>'
    ];
    var content2 = ['<div class="infobox-police">', '<img src="../../images/photo_警员_默认.png" alt="暂无">', '<ul class="infoboxMessage">',
        '<li>警员：陈路</li>', '<li>警号：15643256</li>', ' <li>手机：15354686441</li>', '<li>警种：民警</li>', '</ul></div>'
    ];
    function initInfoBox(point, content, index) {
        var infoBox;
        if (index === 1) {
            infoBox = new BMapLib.InfoBox(map, content.join(""), {
                boxStyle: {
                    background: "url('../../images/车辆信息_bg.png')"
                }
                , enableAutoPan: true
                , enableCloseOnClick: false
                , align: INFOBOX_AT_TOP
            });
        }
        else {
            infoBox = new BMapLib.InfoBox(map, content.join(""), {
                boxStyle: {
                    background: "url('../../images/警员信息_bg.png')"
                }
                , enableAutoPan: true
                , enableCloseOnClick: false
                , align: INFOBOX_AT_TOP
            });
        }
        infoBox.open(point);
    }
    var p1 = new BMap.Point(126.638879, 45.771389);
    var p2 = new BMap.Point(126.595257, 45.757406);
    initInfoBox(p1, content1, 1);
    initInfoBox(p2, content2, 2);
    $('.infoBox>img').remove();

    //添加卫星地图切换控件
    // map.addControl(new BMap.MapTypeControl()); 
    // map.setCurrentCity("哈尔滨");

    //使用默认模板设置地图底色
    // var mapStyle = { style: "midnight" }
    // map.setMapStyle(mapStyle);

    // 创建标注
    // var point = new BMap.Point(126.650861, 45.737268);
    // var marker = new BMap.Marker(point);
    // map.addOverlay(marker);

    //监听标注单击事件
    // marker.addEventListener("click", function () {   
    //     alert("您点击了标注");
    // });

    //折线
    // var polyline = new BMap.Polyline([
    //     new BMap.Point(126.641734,45.731202),
    //     new BMap.Point(126.649172,45.739959),
    //     new BMap.Point(126.654275,45.744916),
    //     new BMap.Point(126.66509,45.74167)
    // ],
    //     { strokeColor: "blue", strokeWeight: 4, strokeOpacity: 0.5 }
    // );
    // map.addOverlay(polyline);

    //使用实时路况控件
    //<script type="text/javascript" src="http://api.map.baidu.com/library/TrafficControl/1.4/src/TrafficControl_min.js"></script>
    // var ctrl = new BMapLib.TrafficControl(); 
    // map.addControl(ctrl);
    // ctrl.showTraffic();
});
