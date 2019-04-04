function mainMap(chart, data) {
    $(window).resize(function () { chart.resize(); })

    option = {
        title: {
            text: '全省入网设备',
            top: 5,
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>数量：{c}'
        },
        visualMap: {
            min: 0,
            max: 200,
            text: ['高', '低'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['#669aff', '#577ef9', '#3b38fe']
            },
            padding: [5, 5, 5, 25],
            textStyle: {
                color: '#fff'
            }
        },
        series: [{
            type: 'map',
            map: '黑龙江',
            roam: false,
            zoom: 0.65,
            top: '-5%',
            bottom: 0,
            data: data,
            label://地图上文字样式
                {
                    normal: {
                        show: true,
                        color: '#fff'
                    },
                    emphasis: {
                        show: true,
                        color: 'red',
                    }
                },
            itemStyle://每个区域的样式
                {
                    normal: {
                        areaColor: '#1f1e23',
                        borderColo: '#575759',
                    },
                    emphasis: {
                        areaColor: 'yellow',
                        opacity: 1,
                    }
                }
        }]
    };

    chart.on('click', function (params) {
        if (params.dataIndex == 12) {
            window.open('hebMeeting.html','_self');
        }
    });

    if (option && typeof option === "object") {
        chart.setOption(option, true);
    };
}
//水平柱状图
function initHorizontalBarChart(chart, obj) {
    var seriesData = [];
    for (let i = 0; i < obj.data.length; i++) {
        var dataObj = {};
        dataObj.value = obj.data[i];
        dataObj.itemStyle = {
            normal: {
                color: obj.color[i]
            }
        };
        seriesData.push(dataObj);
    };

    option = {
        grid://表格间距
            {
                top: '10%',
                left: '10',
                right: '15%',
                bottom: '0',
                borderColor: '#fff',
                containLabel: true
            },
        xAxis: {
            type: 'value',
            show: false
        },
        yAxis: {
            boundaryGap: false,
            type: 'category',
            data: obj.name,
            axisLine: {
                lineStyle: {
                    opacity: 0
                }
            },
            axisTick: false,
            axisLabel: {
                show: true,
                interval: 0,
                color: '#fff',
                align: 'right',
                fontSize: 14,
                fontFamily: 'Microsoft YaHei',
            },
        },
        series: [
            {
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        fontSize: 14,
                        color: '#fff'
                    }
                },
                //barMinHeight: 20,
                barMaxWidth: 13,
                barGap: 10,
                barCategoryGap: 10,
                data: seriesData
            }
        ]
    };
    if (option && typeof option === "object") {
        chart.setOption(option, true);
        $(window).resize(function () { chart.resize(); })
    };
};
//折线图
function initLineChart(chart, obj) {
    var seriesArr = [];
    for (let i = 0; i < obj.data.length; i++) {
        var series = {};
        series.name = obj.name[i];
        series.type = "line";
        series.stack = "总量";
        series.data = obj.data[i];
        seriesArr.push(series);
    };

    option = {
        tooltip: {
            trigger: 'axis',
            confine: true,
            extraCssText: 'width:150px;'
        },
        grid: {
            top: '10%',
            left: '3%',
            right: '5%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            data: obj.xAxis
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        series: seriesArr
    };

    if (option && typeof option === "object") {
        chart.setOption(option, true);
        $(window).resize(function () { chart.resize(); })
    };
}
$(function () {
    var mapData = [
        { name: '大兴安岭地区', value: 100 },
        { name: '黑河市', value: 200 },
        { name: '齐齐哈尔市', value: 300 },
        { name: '大庆市', value: 400 },
        { name: '绥化市', value: 500 },
        { name: '伊春市', value: 600 },
        { name: '鹤岗市', value: 700 },
        { name: '佳木斯市', value: 800 },
        { name: '双鸭山市', value: 900 },
        { name: '七台河市', value: 1500 },
        { name: '鸡西市', value: 1700 },
        { name: '牡丹江市', value: 1600 },
        { name: '哈尔滨市', value: 1800 }
    ];
    var areaDatas = {
        data: [70, 10, 70, 50, 10, 150, 60, 50, 40, 30, 60, 40, 90],
        name: ['大兴安岭地区', '黑河市', '齐齐哈尔市', '大庆市', '绥化市', '伊春市', '鹤岗市', '佳木斯市', '双鸭山市', '七台河市', '鸡西市', '牡丹江市', '哈尔滨市'],
        color: ["#bbf2f4", "#71ed10", "#fbad40", "#d94133", "#1985f4", "pink", "red", "cornflowerblue", "antiquewhite", "aquamarine", "purple", "gray", "yellow"]
    };
    for (var i = 0; i < areaDatas.data.length; i++) {
        mapData[i].value = areaDatas.data[i];
    }
    var accessPointData = {
        data: [
            [120, 132, 101, 134, 90, 230, 210], [220, 182, 191, 234, 290, 330, 310],
            [150, 232, 201, 154, 190, 330, 410]
        ],
        xAxis: ['0点', '4点', '8点', '12点', '16点', '20点', '23点'],
        name: ["哈尔滨市", "牡丹江市", "绥化市"]
    };

    var mapChart = echarts.init(document.getElementById('map'));
    var histogramChart = echarts.init(document.getElementById('histogram'));
    var lineChart = echarts.init(document.getElementById('lineChart'));
    mainMap(mapChart, mapData);
    initHorizontalBarChart(histogramChart,areaDatas);
    initLineChart(lineChart, accessPointData);
    
    $("#onLinelist ul li span").click(function () {
        $(this).parent().animate({ height: $(this).next().height() + 40 }, 500);
        $(this).parent().siblings().animate({ height: 40 }, 500);
        $(this).siblings().show();
        $('.item').hide();
        $(this).next().show();
    })
})