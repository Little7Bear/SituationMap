function initRowBar(chartId) {
    var dom = document.getElementById(chartId);
    var myChart = echarts.init(dom);
    var app = {};
    option = null;

    app.title = '世界人口总量 - 条形图';

    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top: '3%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLabel: {
                show: true,
                interval: 0,
                color: '#fff',
                align: 'center',
                fontSize: 12,
                fontFamily: 'Microsoft YaHei',
            },
        },
        yAxis: {
            type: 'category',
            data: ['佳木斯', '牡丹江', '齐齐哈尔', '哈尔滨'],
            axisLabel: {
                show: true,
                interval: 0,
                color: '#fff',
                align: 'right',
                fontSize: 12,
                fontFamily: 'Microsoft YaHei',
            },
        },
        series: [{
            name: '2011年',
            type: 'bar',
            data: [1230, 2409, 2004, 1497],
            barWidth: 25,
        }],

    };

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

}

function initMap(elementID, data) {
    var chart = echarts.init(document.getElementById(elementID));
    $(window).resize(function () {
        chart.resize();
    })
    var option = null;
    option = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>数量：{c}'
        },
        visualMap: {
            min: 0,
            max: 2000,
            text: ['高', '低'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['#669aff', '#577ef9', '#3b38fe']
            },
            padding: [5, 5, 5, 25]
        },
        series: [{
            type: 'map',
            map: '黑龙江',
            roam: false,
            zoom: 0.65,
            top: '-5%',
            bottom: 0,
            data: data,
            label: //地图上文字样式
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
            itemStyle: //每个区域的样式
            {
                normal: {
                    areaColor: '#1f1e23',
                    borderColo: '#575759',
                    borderWidth: '3',
                    opacity: 1
                },
                emphasis: {
                    areaColor: 'yellow',
                    opacity: 1,
                }
            }
        }]
    };
    if (option && typeof option === "object") {
        chart.setOption(option, true);
    };
}

onload = function () {
    var mapDataGS = [{
            name: '大兴安岭地区',
            value: 100
        },
        {
            name: '黑河市',
            value: 200
        },
        {
            name: '齐齐哈尔市',
            value: 300
        },
        {
            name: '大庆市',
            value: 400
        },
        {
            name: '绥化市',
            value: 500
        },
        {
            name: '伊春市',
            value: 600
        },
        {
            name: '鹤岗市',
            value: 700
        },
        {
            name: '佳木斯市',
            value: 800
        },
        {
            name: '双鸭山市',
            value: 900
        },
        {
            name: '七台河市',
            value: 1500
        },
        {
            name: '鸡西市',
            value: 1700
        },
        {
            name: '牡丹江市',
            value: 1600
        },
        {
            name: '哈尔滨市',
            value: 1800
        }
    ];

    initRowBar('floating-population-chart');
    initRowBar('monitory-population-chart');
    initRowBar('permanent-population-chart');
    initRowBar('wanted-population-chart');
    initMap('map', mapDataGS);
}