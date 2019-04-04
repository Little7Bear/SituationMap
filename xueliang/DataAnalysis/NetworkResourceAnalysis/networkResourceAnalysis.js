/**
 * 重置左侧导航背景
 */
function resetIcon() {
    $('.nav:nth-child(1) img').attr('src', '../../images/gaikuang_ic.png');
    $('.nav:nth-child(2) img').attr('src', '../../images/gongan.png');
    $('.nav:nth-child(3) img').attr('src', '../../images/jiaojing.png');
    $('.nav:nth-child(4) img').attr('src', '../../images/chengguang.png');
    $('.nav:nth-child(5) img').attr('src', '../../images/shuili.png');
}

function getRandomData(num, logo) {
    var result = [];
    switch (logo) {
        case 1:
            for (var i = 0; i < num; i++) {
                result.push(Math.floor(Math.random() * 100));
            }
            break;
        case 2:
            for (var i = 0; i < num; i++) {
                result.push(Math.floor(Math.random() * 250));
            }
            break;
        case 3:
            for (var i = 0; i < num; i++) {
                result.push(Math.ceil(Math.random() * 10));
            }
            break;
    }
    return result;
}

function initProvinceMap(chart) {
    var geoCoordMap = {
        '哈尔滨': [126.642464, 45.756967],
        '齐齐哈尔': [123.95792, 47.342081],
        '鸡西': [130.975966, 45.300046],
        '鹤岗': [130.277487, 47.332085],
        '双鸭山': [131.157304, 46.643442],
        '大庆': [125.11272, 46.590734],
        '伊春': [128.899396, 47.724775],
        '佳木斯': [130.361634, 46.809606],
        '七台河': [131.015584, 45.771266],
        '牡丹江': [129.618602, 44.582962],
        '黑河': [127.499023, 50.249585],
        '绥化': [126.99293, 46.637393],
        '大兴安岭': [124.711526, 52.335262]
    };

    var HEBData = [
        [{ name: '哈尔滨' }, { name: '齐齐哈尔', value: 50 }],
        [{ name: '哈尔滨' }, { name: '鸡西', value: 50 }],
        [{ name: '哈尔滨' }, { name: '鹤岗', value: 50 }],
        [{ name: '哈尔滨' }, { name: '双鸭山', value: 50 }],
        [{ name: '哈尔滨' }, { name: '大庆', value: 50 }],
        [{ name: '哈尔滨' }, { name: '伊春', value: 50 }],
        [{ name: '哈尔滨' }, { name: '佳木斯', value: 50 }],
        [{ name: '哈尔滨' }, { name: '七台河', value: 50 }],
        [{ name: '哈尔滨' }, { name: '牡丹江', value: 50 }],
        [{ name: '哈尔滨' }, { name: '黑河', value: 50 }],
        [{ name: '哈尔滨' }, { name: '绥化', value: 50 }],
        [{ name: '哈尔滨' }, { name: '大兴安岭', value: 50 }],
    ];

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[1].name];
            var toCoord = geoCoordMap[dataItem[0].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[1].name,
                    toName: dataItem[0].name,
                    coords: [fromCoord, toCoord]
                });
            }
        }
        return res;
    };

    var color = ['#a6c84c'];
    var series = [];
    [[HEBData]].forEach(function (item, i) {
        series.push(
            {
                type: 'lines',
                zlevel: 1,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: '#fff',
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 0,
                        curveness: 0.2
                    }
                },
                data: convertData(item[0])
            },
            {
                type: 'lines',
                zlevel: 2,
                symbol: ['none', 'arrow'],
                symbolSize: 10,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.6,
                        curveness: 0.2
                    }
                },
                data: convertData(item[0])
            },
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i]
                    }
                },
                data: item[0].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            });
    });

    option = {
        tooltip: {
            trigger: 'item',
            show: false
        },
        layoutCenter: ['50%', '50%'],
        layoutSize: '100%',
        geo: {
            map: '黑龙江',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#404a59'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series: series
    };

    chart.on('mouseover', function (params) {
        if (params.name != '哈尔滨市') {
            $('.cityName').text(params.name);
            $('#utilization').text(Math.floor(Math.random() * 100));
            $('#delay').text(Math.floor(Math.random() * 200));
            $('#packet').text(Math.ceil(Math.random() * 10));
            var chart1 = echarts.init(document.getElementById('f1'));
            var chart2 = echarts.init(document.getElementById('f2'));
            var chart3 = echarts.init(document.getElementById('f3'));
            var xName = ['00:00', '04:00', '08:00', '12:00', '16:00', '22:00'];

            initDaiKuang(chart1, getRandomData(10, 1));
            initVerticalHistogram(chart2, getRandomData(6, 2), xName);
            initVerticalHistogram(chart3, getRandomData(6, 3), xName);
        }

    })

    if (option && typeof option === "object") {
        chart.setOption(option, true);
    }
};

function initVerticalHistogram(chart, data, xName) {

    $(window).resize(function () { chart.resize(); })
    option = {
        color: ['#3398DB'],
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '10%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: xName,
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    },
                },
                splitLine: {
                    show: false
                }
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '50%',
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        color: '#fff'
                    }
                },
                data: data
            }
        ]
    };
    if (option && typeof option === "object") {
        chart.setOption(option, true);
    };
}

function initDaiKuang(chart, data) {
    option = {
        tooltip: {
            trigger: 'item',
            show: false
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
            data: ['00:00', '04:00', '08:00', '12:00', '16:00', '22:00']
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        series: [
            {
                name: '黑河市',
                type: 'line',
                stack: '总量',
                data: data
            }
        ]
    };
    if (option && typeof option === "object") {
        chart.setOption(option, true);
    };
    $(window).resize(function () { chart.resize(); })
}

function initGraph(chart) {
    option = {
        tooltip: {
            show: false
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {
                type: 'graph',
                layout: 'none',
                symbolSize: 50,
                roam: true,
                label: {
                    normal: {
                        show: true
                    }
                },
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [4, 10],
                edgeLabel: {
                    normal: {
                        textStyle: {
                            fontSize: 20
                        }
                    }
                },
                data: [
                    {
                        name: '主楼',
                        x: 550,
                        y: 300
                    }, {
                        name: '大楼A',
                        x: 300,
                        y: 300
                    }, {
                        name: '大楼B',
                        x: 800,
                        y: 300
                    }, {
                        name: '大楼C',
                        x: 550,
                        y: 100
                    }, {
                        name: '大楼D',
                        x: 550,
                        y: 500
                    }, {
                        name: '大楼E',
                        x: 400,
                        y: 200
                    }, {
                        name: '大楼F',
                        x: 700,
                        y: 400
                    }, {
                        name: '大楼G',
                        x: 700,
                        y: 200
                    }, {
                        name: '大楼H',
                        x: 420,
                        y: 400
                    }
                ],
                links: [{
                    source: '大楼A',
                    target: '主楼'
                }, {
                    source: '大楼B',
                    target: '主楼'
                }, {
                    source: '大楼C',
                    target: '主楼'
                }, {
                    source: '大楼D',
                    target: '主楼'
                }, {
                    source: '大楼E',
                    target: '主楼'
                }, {
                    source: '大楼F',
                    target: '主楼'
                }, {
                    source: '大楼G',
                    target: '主楼'
                }, {
                    source: '大楼H',
                    target: '主楼'
                }, {
                    source: '主楼',
                    target: '大楼A',
                }, {
                    source: '主楼',
                    target: '大楼B',
                }, {
                    source: '主楼',
                    target: '大楼C',
                }, {
                    source: '主楼',
                    target: '大楼D',
                }, {
                    source: '主楼',
                    target: '大楼E',
                }, {
                    source: '主楼',
                    target: '大楼F',
                }, {
                    source: '主楼',
                    target: '大楼G',
                }, {
                    source: '主楼',
                    target: '大楼H',
                }
                ],
                lineStyle: {
                    normal: {
                        opacity: 0.9,
                        width: 2,
                        curveness: 0
                    }
                }
            }
        ]
    };

    chart.on('mouseover', function (params) {
        if (params.name != '主楼' && params.name.indexOf('>') == -1) {
            $('.cityName').text(params.name);
            $('#utilization').text(Math.floor(Math.random() * 100));
            $('#delay').text(Math.floor(Math.random() * 200));
            $('#packet').text(Math.ceil(Math.random() * 10));
            var chart1 = echarts.init(document.getElementById('f1'));
            var chart2 = echarts.init(document.getElementById('f2'));
            var chart3 = echarts.init(document.getElementById('f3'));
            var xName = ['00:00', '04:00', '08:00', '12:00', '16:00', '22:00'];

            initDaiKuang(chart1, getRandomData(10, 1));
            initVerticalHistogram(chart2, getRandomData(6, 2), xName);
            initVerticalHistogram(chart3, getRandomData(6, 3), xName);
        }

    })

    if (option && typeof option === "object") {
        chart.setOption(option, true);
    }
}

$(function () {
    // 侧边导航样式改变事件
    $(".nav").bind("click", function () {
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
        var index = $(this).index();
        switch (index) {
            case 0:
                resetIcon();
                $('.nav:nth-child(1) img').attr("src", "../../images/gaikuang_ic_click.png");
                $('#graph').hide();
                $('#map').show();
                $('.table2').hide();
                $('.table1').show();
                $('.cityName').text('黑河市');
                $('.mainCity').text('哈尔滨');
                $('#utilization').text(Math.floor(Math.random() * 100));
                $('#delay').text(Math.floor(Math.random() * 200));
                $('#packet').text(Math.ceil(Math.random() * 10));
                var mapChart = echarts.init(document.getElementById('map'));
                var chart1 = echarts.init(document.getElementById('f1'));
                var chart2 = echarts.init(document.getElementById('f2'));
                var chart3 = echarts.init(document.getElementById('f3'));
                var xName = ['00:00', '04:00', '08:00', '12:00', '16:00', '22:00'];
                var carData = [234, 234, 234, 234, 234, 234];
                var carData2 = [0, 0, 1, 0, 0, 0];
                var dkData = [20, 20, 50, 40, 50, 100];
                initProvinceMap(mapChart);
                initDaiKuang(chart1, dkData);
                initVerticalHistogram(chart2, carData, xName);
                initVerticalHistogram(chart3, carData2, xName);
                break;
            case 1:
                resetIcon();
                $('.nav:nth-child(2) img').attr("src", "../../images/gongan_ic_click.png");
                $('#map').hide();
                $('#graph').show();
                $('.table1').hide();
                $('.table2').show();
                $('.cityName').text('大楼A');
                $('.mainCity').text('主楼');
                $('#utilization').text(Math.floor(Math.random() * 100));
                $('#delay').text(Math.floor(Math.random() * 200));
                $('#packet').text(Math.ceil(Math.random() * 10));
                var chart = echarts.init(document.getElementById('graph'));
                var chart1 = echarts.init(document.getElementById('f1'));
                var chart2 = echarts.init(document.getElementById('f2'));
                var chart3 = echarts.init(document.getElementById('f3'));
                var xName = ['00:00', '04:00', '08:00', '12:00', '16:00', '22:00'];
                var carData = [234, 234, 234, 234, 234, 234];
                var carData2 = [0, 0, 1, 0, 0, 0];
                var dkData = [20, 20, 50, 40, 50, 100];
                initGraph(chart);
                initDaiKuang(chart1, dkData);
                initVerticalHistogram(chart2, carData, xName);
                initVerticalHistogram(chart3, carData2, xName);
                break;
        }
    });
    $(".nav:nth-child(1)").trigger("click");
})