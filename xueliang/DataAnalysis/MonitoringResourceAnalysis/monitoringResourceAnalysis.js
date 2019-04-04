var mapChart;//用于保存数据联动的地图对象 
var mapOption;

//全省入网设备地图
function initMap(chart, data) {
    var option = {
        textStyle: {
            color: '#fff'
        },
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
            max: 2000,
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

    if (option && typeof option === "object") {
        chart.setOption(option, true);
        $(window).resize(function () { chart.resize(); })
        mapChart = chart;
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
            },
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
//接入公安监控资源类型排名地图
function initPSActionMap(chart, data, dataType) {
    mapChart = chart;
    mapOption = {
        color: ['#bbf2f4', '#71ed10', '#fbad40', '#d94133'],
        tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>数量：{c}',
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: dataType,
            textStyle: {
                color: '#fff',
                fontSize: 14
            },
            inactiveColor: '#888',
            animation: true
        },
        selectedMode: 'single',
        visualMap: {
            min: 0,
            max: 200,
            text: ['高', '低'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['#669aff', '#577ef9', '#3b38fe',]
            },
            padding: [5, 5, 5, 25],
            textStyle: {
                color: '#fff'
            }
        },
        series: [
            {
                name: dataType[0],
                type: 'map',
                map: '黑龙江',
                roam: false,
                data: data[0],
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
                        // areaColor: '#1f1e23',
                        // borderColo: '#575759',
                    },
                    emphasis: {
                        areaColor: 'yellow',
                        opacity: 1,
                    }
                }
            },
            {
                name: dataType[1],
                type: 'map',
                map: '黑龙江',
                data: data[1],
            },
            {
                name: dataType[2],
                type: 'map',
                map: '黑龙江',
                data: data[2],

            },
            {
                name: dataType[3],
                type: 'map',
                map: '黑龙江',
                data: data[3],
            }
        ]
    };
    if (mapOption && typeof mapOption === "object") {
        chart.setOption(mapOption, true);
        $(window).resize(function () { chart.resize(); })
    };
}
function randomData() {
    return Math.round(Math.random() * 1000);
}
//接入公安监控资源类型排名柱状图
function initPSHDataLinkage(chart, data, yName) {

    var barColor = ['#bbf2f4', '#71ed10', '#fbad40', '#d94133'];
    option = {
        grid://表格间距
        {
            top: '30',
            left: '10',
            right: '15%',
            bottom: '60%',
            borderColor: '#fff',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'
            },
            showContent: false,
        },
        xAxis: {
            type: 'value',
            show: false
        },
        yAxis: {
            boundaryGap: true,
            type: 'category',
            data: yName,
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
                fontSize: 16,
            },
        },
        series: [
            {
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        fontSize: 16,
                        color: '#fff'
                    }
                },
                barMaxWidth: 25,
                data: [
                    {
                        value: data[0],
                        itemStyle: {
                            normal: {
                                color: barColor[0]
                            }
                        }
                    },
                    {
                        value: data[1],
                        itemStyle: {
                            normal: {
                                color: barColor[1]
                            }
                        }
                    },
                    {
                        value: data[2],
                        itemStyle: {
                            normal: {
                                color: barColor[2]
                            }
                        }
                    },
                    {
                        value: data[3],
                        itemStyle: {
                            normal: {
                                color: barColor[3]
                            }
                        }
                    },
                ]
            },
        ]
    };
    if (option && typeof option === "object") {
        chart.setOption(option, true);
    };

    //鼠标移动事件
    chart.on('mouseover', function (params) {
        var mapData;
        switch (params.name) {
            case '路口':
                mapData = [
                    { name: '大兴安岭地区', value: 100 },
                    { name: '黑河市', value: 80 },
                    { name: '齐齐哈尔市', value: 80 },
                    { name: '大庆市', value: 80 },
                    { name: '绥化市', value: 80 },
                    { name: '伊春市', value: 80 },
                    { name: '鹤岗市', value: 80 },
                    { name: '佳木斯市', value: 120 },
                    { name: '双鸭山市', value: 120 },
                    { name: '七台河市', value: 120 },
                    { name: '鸡西市', value: 120 },
                    { name: '牡丹江市', value: 150 },
                    { name: '哈尔滨市', value: 150 }
                ];
                break;
            case '学校':
                mapData = [
                    { name: '大兴安岭地区', value: 68 },
                    { name: '黑河市', value: 68 },
                    { name: '齐齐哈尔市', value: 68 },
                    { name: '大庆市', value: 68 },
                    { name: '绥化市', value: 68 },
                    { name: '伊春市', value: 68 },
                    { name: '鹤岗市', value: 68 },
                    { name: '佳木斯市', value: 96 },
                    { name: '双鸭山市', value: 96 },
                    { name: '七台河市', value: 96 },
                    { name: '鸡西市', value: 96 },
                    { name: '牡丹江市', value: 96 },
                    { name: '哈尔滨市', value: 100 }
                ];
                break;
            case '商圈':
                mapData = [
                    { name: '大兴安岭地区', value: 80 },
                    { name: '黑河市', value: 80 },
                    { name: '齐齐哈尔市', value: 80 },
                    { name: '大庆市', value: 80 },
                    { name: '绥化市', value: 80 },
                    { name: '伊春市', value: 80 },
                    { name: '鹤岗市', value: 80 },
                    { name: '佳木斯市', value: 80 },
                    { name: '双鸭山市', value: 70 },
                    { name: '七台河市', value: 70 },
                    { name: '鸡西市', value: 70 },
                    { name: '牡丹江市', value: 70 },
                    { name: '哈尔滨市', value: 70 }
                ];
                break;
            case '治安卡口':
                mapData = [
                    { name: '大兴安岭地区', value: 68 },
                    { name: '黑河市', value: 68 },
                    { name: '齐齐哈尔市', value: 68 },
                    { name: '大庆市', value: 68 },
                    { name: '绥化市', value: 68 },
                    { name: '伊春市', value: 68 },
                    { name: '鹤岗市', value: 68 },
                    { name: '佳木斯市', value: 50 },
                    { name: '双鸭山市', value: 50 },
                    { name: '七台河市', value: 50 },
                    { name: '鸡西市', value: 50 },
                    { name: '牡丹江市', value: 50 },
                    { name: '哈尔滨市', value: 50 }
                ];
                break;
        }
        mapOption = {
            color: barColor,
            tooltip: {
                trigger: 'item',
                formatter: '{b}<br/>数量：{c}',
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: [params.name],
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                },
                inactiveColor: '#888',
                selectedMode: false,
                animation: true
            },
            visualMap: {
                min: 0,
                max: 200,
                text: ['高', '低'],
                realtime: false,
                calculable: true,
                inRange: {
                    color: ['#669aff', '#577ef9', '#3b38fe',]
                },
                padding: [5, 5, 5, 25],
                textStyle: {
                    color: '#fff'
                }
            },
            series: [
                {
                    name: params.name,
                    type: 'map',
                    map: '黑龙江',
                    roam: false,
                    data: mapData,
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
                }]
        };
        mapChart.clear();
        mapChart.setOption(mapOption);
    });

    $(window).resize(function () {
        chart.resize();
        mapChart.resize();
    })
};
//初始化数据联动地图
function initLinkageMap(chart, data, dataType) {
    option = {
        // tooltip: {
        //     trigger: 'item',
        //     formatter: '{b}<br/>数量：{c}',
        // },
        // visualMap: {
        //     min: 0,
        //     max: 200,
        //     text: ['高', '低'],
        //     realtime: false,
        //     calculable: true,
        //     inRange: {
        //         color: ['#669aff', '#577ef9', '#3b38fe',]
        //     },
        //     padding: [5, 5, 5, 25],
        //     textStyle: {
        //         color: '#fff'
        //     },
        //     show: false
        // },
        series: [
            {
                name: dataType[0],
                type: 'map',
                map: '黑龙江',
                roam: false,
                data: data[0],
                label://地图上文字样式
                {
                    normal: {
                        show: true,
                        color: '#fff'
                    },
                    emphasis: {
                        show: true,
                        color: '#fff',
                    }
                },
                itemStyle://每个区域的样式
                {
                    normal: {
                        areaColor: '#1f1e23',
                        borderColo: '#575759',
                    },
                    emphasis: {
                        areaColor: '#6495ed'
                    }
                }
            },
            {
                name: dataType[1],
                type: 'map',
                map: '黑龙江',
                data: data[1],
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
                }
            },
            {
                name: dataType[2],
                type: 'map',
                map: '黑龙江',
                data: data[2],
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

            },
            {
                name: dataType[3],
                type: 'map',
                map: '黑龙江',
                data: data[3], label://地图上文字样式
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

            },
            {
                name: dataType[4],
                type: 'map',
                map: '黑龙江',
                data: data[4], label://地图上文字样式
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

            },
            {
                name: dataType[5],
                type: 'map',
                map: '黑龙江',
                data: data[5], label://地图上文字样式
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

            },
            {
                name: dataType[6],
                type: 'map',
                map: '黑龙江',
                data: data[6], label://地图上文字样式
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

            },
            {
                name: dataType[7],
                type: 'map',
                map: '黑龙江',
                data: data[7], label://地图上文字样式
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

            },
            {
                name: dataType[8],
                type: 'map',
                map: '黑龙江',
                data: data[8], label://地图上文字样式
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

            },
            {
                name: dataType[9],
                type: 'map',
                map: '黑龙江',
                data: data[9], label://地图上文字样式
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

            },
            {
                name: dataType[10],
                type: 'map',
                map: '黑龙江',
                data: data[10], label://地图上文字样式
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

            },
            {
                name: dataType[11],
                type: 'map',
                map: '黑龙江',
                data: data[11], label://地图上文字样式
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

            },
            {
                name: dataType[12],
                type: 'map',
                map: '黑龙江',
                data: data[12], label://地图上文字样式
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
            },
        ]
    };
    if (option && typeof option === "object") {
        chart.setOption(option, true);
        mapChart = chart;
    };
    $(window).resize(function () { chart.resize(); })
}
//初始化数据联动柱状图
function initLinkageHistogram(chart, data, dataType) {
    var barColor = [
        '#bbf2f4', '#71ed10', '#fbad40',
        '#d94133', '#1985f4', 'pink', 'red', 'cornflowerblue', 'antiquewhite',
        'aquamarine', 'purple', 'gray', 'yellow'];
    option = {
        grid://表格间距
        {
            top: '30',
            left: '10',
            right: '15%',
            bottom: '20',
            borderColor: '#fff',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'
            },
            showContent: false,
        },
        xAxis: {
            type: 'value',
            show: false
        },
        yAxis: {
            boundaryGap: true,
            type: 'category',
            data: dataType,
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
                fontSize: 16,
            },
        },
        series: [
            {
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        fontSize: 16,
                        color: '#fff'
                    }
                },
                barMaxWidth: 25,
                data: [
                    {
                        value: data[0],
                        itemStyle: {
                            normal: {
                                color: barColor[0]
                            }
                        }
                    },
                    {
                        value: data[1],
                        itemStyle: {
                            normal: {
                                color: barColor[1]
                            }
                        }
                    },
                    {
                        value: data[2],
                        itemStyle: {
                            normal: {
                                color: barColor[2]
                            }
                        }
                    },
                    {
                        value: data[3],
                        itemStyle: {
                            normal: {
                                color: barColor[3]
                            }
                        }
                    },
                    {
                        value: data[4],
                        itemStyle: {
                            normal: {
                                color: barColor[4]
                            }
                        }
                    },
                    {
                        value: data[5],
                        itemStyle: {
                            normal: {
                                color: barColor[5]
                            }
                        }
                    },
                    {
                        value: data[6],
                        itemStyle: {
                            normal: {
                                color: barColor[6]
                            }
                        }
                    },
                    {
                        value: data[7],
                        itemStyle: {
                            normal: {
                                color: barColor[7]
                            }
                        }
                    },
                    {
                        value: data[8],
                        itemStyle: {
                            normal: {
                                color: barColor[8]
                            }
                        }
                    },
                    {
                        value: data[9],
                        itemStyle: {
                            normal: {
                                color: barColor[9]
                            }
                        }
                    },
                    {
                        value: data[10],
                        itemStyle: {
                            normal: {
                                color: barColor[10]
                            }
                        }
                    },
                    {
                        value: data[11],
                        itemStyle: {
                            normal: {
                                color: barColor[11]
                            }
                        }
                    },
                    {
                        value: data[12],
                        itemStyle: {
                            normal: {
                                color: barColor[12]
                            }
                        }
                    }
                ]
            },
        ]
    };
    if (option && typeof option === "object") {
        chart.setOption(option, true);
    };

    //联动地图
    chart.on('mouseover', function (params) {
        mapChart.setOption({
            tooltip: {
                trigger: 'item',
                formatter: '{b}'
            },
            series: [
                {
                    type: 'map',
                    map: '黑龙江',
                    selectedMode: 'single',
                    itemStyle: {
                        normal: { label: { show: true } },
                        emphasis: { label: { show: true } }
                    },
                    data: [
                        { name: params.name, selected: true }
                    ]
                }
            ]
        });
    });

    $(window).resize(function () {
        chart.resize();
        mapChart.resize();
    })
};
//自定义地区柱状图
function initVerticalHistogram(chart, data, xName) {

    $(window).resize(function () { chart.resize(); })
    option = {
        color: ['#3398DB'],
        // tooltip: {
        //     trigger: 'axis',
        //     axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        //         type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        //     }
        // },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
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
                    }
                }
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '60%',
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        fontSize: 14,
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
//自定义地区饼图
function initialize_Pie(chart, data) {

    $(window).resize(function () { chart.resize(); })
    option = {
        color: ['#0fadd0', '#fbad40', '#d94133', '#6b78ef'],//设置每个图例的颜色
        series: [
            {
                type: 'pie',
                roseType: false,
                radius: [0, '90%'],
                hoverAnimation: true,
                selectedMode: 'single',
                // stillShowZeroSum: true,
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        align: 'left',
                        formatter: ["{b}: {c}", '({d}%)'].join('\n'),
                    }
                },
                labelLine: {
                    normal: {
                        // length: 10,
                        // length2: 5,
                    },
                },
                data: data,
            }
        ]
    };
    if (option && typeof option === "object") {
        chart.setOption(option, true);
    };
};
//自定义地区地图
function initCustomMap(chart, mapName, url) {
    $.get(url, function (data) {
        echarts.registerMap(mapName, data);

        $(window).resize(function () { chart.resize(); })
        option = {
            series: [{
                type: 'map',
                map: mapName,
                roam: false,
                zoom: 0.8,
                top: 0,
                bottom: 0,
                label://地图上文字样式
                {
                    normal: {
                        show: true,
                        color: '#fff',
                    },
                    emphasis: {
                        show: true,
                        color: '#fff',
                    }
                },
                itemStyle://每个区域的样式
                {
                    normal: {
                        areaColor: '#1f1e23',
                        borderColo: '#575759',
                        borderWidth: '3',
                        borderType: 'solid',
                        opacity: 0.5
                    },
                    emphasis: {
                        areaColor: '#0878c4',
                        opacity: 1,

                    }
                },
            }]
        };
        if (option && typeof option === "object") {
            chart.setOption(option, true);
        };
    })
}
//重置左侧导航背景
function resetIcon() {
    $('.gk').attr('src', '../../images/gaikuang_ic.png');
    $('.ga').attr('src', '../../images/gongan.png');
    $('.jj').attr('src', '../../images/jiaojing.png');
    $('.cg').attr('src', '../../images/chengguang.png');
    $('.sl').attr('src', '../../images/shuili.png');
}

$(function () {
    var provinceMapData = [
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
    var singleDatas = {
        data: [300, 400, 500, 600, 700, 800, 900],
        name: ['56-1', '56-2', '56-3', '56-4', '56-5', '56-6', '56-7'],
        color: ["#bbf2f4", "#71ed10", "#fbad40", "#d94133", "#1985f4", "pink", "red"]
    };
    var areaDatas = {
        data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300],
        name: ['大兴安岭地区', '黑河市', '齐齐哈尔市', '大庆市', '绥化市', '伊春市', '鹤岗市', '佳木斯市', '双鸭山市', '七台河市', '鸡西市', '牡丹江市', '哈尔滨市'],
        color: ["#bbf2f4", "#71ed10", "#fbad40", "#d94133", "#1985f4", "pink", "red", "cornflowerblue", "antiquewhite", "aquamarine", "purple", "gray", "yellow"]
    };
    var allResourcesData = {
        data: [300, 400, 500, 600],
        name: ['路口', '学校', '商圈', '治安卡口'],
        color: ["#bbf2f4", "#71ed10", "#fbad40", "#d94133"]
    };
    var accessPointData = {
        data: [
            [120, 132, 101, 134, 90, 230, 210], [220, 182, 191, 234, 290, 330, 310],
            [150, 232, 201, 154, 190, 330, 410]
        ],
        xAxis: ['0点', '4点', '8点', '12点', '16点', '20点', '23点'],
        name: ["哈尔滨市", "牡丹江市", "绥化市"]
    };

    //侧边导航单击事件
    $(".nav").on("click", function () {
        //切换容器
        $('.nav').css({
            'color': '#c7c7c7',
            'background': ''
        });
        $(this).css({
            'color': '#fff',
            'background': '#3299ff'
        });
        resetIcon();
        $(this).find('img').attr('src', '../../images/icon-clicked' + ($(this).index() + 1) + '.png');
        $('#main').children().hide();
        $("#main>div:eq(" + $(this).index() + ")").show();
    });
    //初始化图表
    $(".nav").one("click", function () {
        switch ($(this).text().trim()) {
            case '概况':
                var chart1 = echarts.init(document.getElementById('map'));
                var chart2 = echarts.init(document.getElementById('allResources'));
                var chart3 = echarts.init(document.getElementById('online'));
                var chart4 = echarts.init(document.getElementById('areaAccess'));
                var chart5 = echarts.init(document.getElementById('singleMonitor'));
                var chart6 = echarts.init(document.getElementById('accessPoint'));
                initMap(chart1, provinceMapData);
                initHorizontalBarChart(chart2, allResourcesData);
                initHorizontalBarChart(chart3, areaDatas);
                initHorizontalBarChart(chart4, areaDatas);
                initHorizontalBarChart(chart5, singleDatas);
                initLineChart(chart6, accessPointData);
                break;
            case '公安系统':
                var chart1 = echarts.init(document.getElementById('securityMap'));
                var chart2 = echarts.init(document.getElementById('securityMonitoring'));
                var chart3 = echarts.init(document.getElementById('structuredCamera'));
                var chart4 = echarts.init(document.getElementById('policeSystem'));
                initMap(chart1, provinceMapData);
                initHorizontalBarChart(chart2, allResourcesData);
                initHorizontalBarChart(chart3, areaDatas);
                initHorizontalBarChart(chart4, areaDatas);
                break;
            case '交警系统':
                var chart1 = echarts.init(document.getElementById('trafficMap'));
                var chart2 = echarts.init(document.getElementById('allElectronicPolice'));
                var chart3 = echarts.init(document.getElementById('onlineElectronicPolice'));
                var chart4 = echarts.init(document.getElementById('areaElectronicPolice'));
                var chart5 = echarts.init(document.getElementById('carTraffic'));
                var chart6 = echarts.init(document.getElementById('dayOfCar'));
                initMap(chart1, provinceMapData);
                initHorizontalBarChart(chart2, areaDatas);
                initHorizontalBarChart(chart3, areaDatas);
                initHorizontalBarChart(chart4, areaDatas);
                initHorizontalBarChart(chart5, areaDatas);
                initLineChart(chart6, accessPointData);
                break;
            case '城管系统':
                break;
            case '水利系统':
                break;
        }
    });

    //默认显示的界面
    $(".nav").triggerHandler("click");

    //接入公安监控资源类型排名
    $('#gaTitle').on('click', function () {
        $('#main').children().hide();
        $('#gacontainer').show();
        var mapData = [
            [
                { name: '大兴安岭地区', value: 10 },
                { name: '黑河市', value: 11 },
                { name: '齐齐哈尔市', value: 12 },
                { name: '大庆市', value: 13 },
                { name: '绥化市', value: 14 },
                { name: '伊春市', value: 15 },
                { name: '鹤岗市', value: 16 },
                { name: '佳木斯市', value: 17 },
                { name: '双鸭山市', value: 18 },
                { name: '七台河市', value: 19 },
                { name: '鸡西市', value: 20 },
                { name: '牡丹江市', value: 21 },
                { name: '哈尔滨市', value: 22 }
            ], [
                { name: '大兴安岭地区', value: 20 },
                { name: '黑河市', value: 21 },
                { name: '齐齐哈尔市', value: 22 },
                { name: '大庆市', value: 23 },
                { name: '绥化市', value: 24 },
                { name: '伊春市', value: 25 },
                { name: '鹤岗市', value: 26 },
                { name: '佳木斯市', value: 27 },
                { name: '双鸭山市', value: 28 },
                { name: '七台河市', value: 29 },
                { name: '鸡西市', value: 30 },
                { name: '牡丹江市', value: 31 },
                { name: '哈尔滨市', value: 32 }
            ], [
                { name: '大兴安岭地区', value: 30 },
                { name: '黑河市', value: 31 },
                { name: '齐齐哈尔市', value: 32 },
                { name: '大庆市', value: 33 },
                { name: '绥化市', value: 34 },
                { name: '伊春市', value: 35 },
                { name: '鹤岗市', value: 36 },
                { name: '佳木斯市', value: 37 },
                { name: '双鸭山市', value: 38 },
                { name: '七台河市', value: 39 },
                { name: '鸡西市', value: 40 },
                { name: '牡丹江市', value: 41 },
                { name: '哈尔滨市', value: 42 }
            ], [
                { name: '大兴安岭地区', value: 40 },
                { name: '黑河市', value: 41 },
                { name: '齐齐哈尔市', value: 42 },
                { name: '大庆市', value: 43 },
                { name: '绥化市', value: 44 },
                { name: '伊春市', value: 45 },
                { name: '鹤岗市', value: 46 },
                { name: '佳木斯市', value: 47 },
                { name: '双鸭山市', value: 48 },
                { name: '七台河市', value: 49 },
                { name: '鸡西市', value: 50 },
                { name: '牡丹江市', value: 51 },
                { name: '哈尔滨市', value: 52 }
            ]];
        var dataType = ['治安卡口', '商圈', '学校', '路口'];
        var histogramData = [300, 400, 500, 600];
        mapChart = echarts.init(document.getElementById('gaMap'));
        var gaChart = echarts.init(document.getElementById('gaFigure'));
        initPSActionMap(mapChart, mapData, dataType);
        initPSHDataLinkage(gaChart, histogramData, dataType);
    })
    //结构化终端数据排名
    $('#jgTitle').on('click', function () {
        $('#main').children().hide();
        $('#jjcontainer').show();
        var mapData = [
            [{ name: '大兴安岭地区', value: 10 }],
            [{ name: '黑河市', value: 20 }],
            [{ name: '齐齐哈尔市', value: 30 }],
            [{ name: '大庆市', value: 40 }],
            [{ name: '绥化市', value: 50 }],
            [{ name: '伊春市', value: 60 }],
            [{ name: '鹤岗市', value: 70 }],
            [{ name: '佳木斯市', value: 80 }],
            [{ name: '双鸭山市', value: 90 }],
            [{ name: '七台河市', value: 100 }],
            [{ name: '鸡西市', value: 110 }],
            [{ name: '牡丹江市', value: 120 }],
            [{ name: '哈尔滨市', value: 130 }]
        ];
        var dataType = [
            '大兴安岭地区', '黑河市', '齐齐哈尔市', '大庆市',
            '绥化市', '伊春市', '鹤岗市', '佳木斯市', '双鸭山市', '七台河市', '鸡西市',
            '牡丹江市', '哈尔滨市'
        ];
        var histogramData = [];
        for (var i = 1; i < 14; i++) {
            histogramData.push(i * 10);
        }
        var chart = echarts.init(document.getElementById('jgMap'));
        var fChart = echarts.init(document.getElementById('jgFigure'));
        initLinkageMap(chart, mapData, dataType);
        initLinkageHistogram(fChart, histogramData, dataType);
    })
    //警务通终端数据排名
    $('#jwtTitle').on('click', function () {
        $('#main').children().hide();
        $('#jwtcontainer').show();
        var mapData = [
            [{ name: '大兴安岭地区', value: 10 }],
            [{ name: '黑河市', value: 20 }],
            [{ name: '齐齐哈尔市', value: 30 }],
            [{ name: '大庆市', value: 40 }],
            [{ name: '绥化市', value: 50 }],
            [{ name: '伊春市', value: 60 }],
            [{ name: '鹤岗市', value: 70 }],
            [{ name: '佳木斯市', value: 80 }],
            [{ name: '双鸭山市', value: 90 }],
            [{ name: '七台河市', value: 100 }],
            [{ name: '鸡西市', value: 110 }],
            [{ name: '牡丹江市', value: 120 }],
            [{ name: '哈尔滨市', value: 130 }]
        ];
        var dataType = [
            '大兴安岭地区', '黑河市', '齐齐哈尔市', '大庆市',
            '绥化市', '伊春市', '鹤岗市', '佳木斯市', '双鸭山市', '七台河市', '鸡西市',
            '牡丹江市', '哈尔滨市'
        ];
        var histogramData = [];
        for (var i = 1; i < 14; i++) {
            histogramData.push(i * 10);
        }
        var chart = echarts.init(document.getElementById('jwtMap'));
        var fChart = echarts.init(document.getElementById('jwtFigure'));
        initLinkageMap(chart, mapData, dataType);
        initLinkageHistogram(fChart, histogramData, dataType);
    })
    //自定义地区24小时车流量单击
    $("#dayOfCarTitle").on("click", function () {
        $('#main').children().hide();
        $('.customDay').show();
        var carData = [500, 2000, 800, 4000, 650];
        var xName = ['大货车', '小桥车', '摩托车', '电动车', '自行车'];
        var breakLawData = [
            { value: 35, name: '酒驾' },
            { value: 31, name: '超速' },
            { value: 24, name: '红灯' },
            { value: 30, name: '逆行' }
        ];
        var chart1 = echarts.init(document.getElementById('customDayCar'));
        var chart2 = echarts.init(document.getElementById('carType'));
        var chart3 = echarts.init(document.getElementById('breakLaw'));
        var chart4 = echarts.init(document.getElementById('customMap'));
        initLineChart(chart1, accessPointData);
        initVerticalHistogram(chart2, carData, xName);
        initialize_Pie(chart3, breakLawData);
        initCustomMap(chart4, '哈尔滨', '../../Scripts/230100.json');
    })
    //全省电子警察在线情况单击
    $('#onlineElectronicTitle').on('click', function () {
        $('#main').children().hide();
        $('.allEP').show();
        var mapData = [
            [{ name: '大兴安岭地区', value: 10 }],
            [{ name: '黑河市', value: 20 }],
            [{ name: '齐齐哈尔市', value: 30 }],
            [{ name: '大庆市', value: 40 }],
            [{ name: '绥化市', value: 50 }],
            [{ name: '伊春市', value: 60 }],
            [{ name: '鹤岗市', value: 70 }],
            [{ name: '佳木斯市', value: 80 }],
            [{ name: '双鸭山市', value: 90 }],
            [{ name: '七台河市', value: 100 }],
            [{ name: '鸡西市', value: 110 }],
            [{ name: '牡丹江市', value: 120 }],
            [{ name: '哈尔滨市', value: 130 }]
        ];
        var dataType = [
            '大兴安岭地区', '黑河市', '齐齐哈尔市', '大庆市',
            '绥化市', '伊春市', '鹤岗市', '佳木斯市', '双鸭山市', '七台河市', '鸡西市',
            '牡丹江市', '哈尔滨市'
        ];
        var histogramData = [];
        for (var i = 1; i < 14; i++) {
            histogramData.push(i * 10);
        }
        var chart = echarts.init(document.getElementById('aepMap'));
        var fChart = echarts.init(document.getElementById('aepOnline'));
        initLinkageMap(chart, mapData, dataType);
        initLinkageHistogram(fChart, histogramData, dataType);
    })
    //全省各区域接入电子警察资源统计
    $('#areaEPTitle').on('click', function () {
        $('#main').children().hide();
        $('.partEP').show();
        var mapData = [
            [{ name: '大兴安岭地区', value: 10 }],
            [{ name: '黑河市', value: 20 }],
            [{ name: '齐齐哈尔市', value: 30 }],
            [{ name: '大庆市', value: 40 }],
            [{ name: '绥化市', value: 50 }],
            [{ name: '伊春市', value: 60 }],
            [{ name: '鹤岗市', value: 70 }],
            [{ name: '佳木斯市', value: 80 }],
            [{ name: '双鸭山市', value: 90 }],
            [{ name: '七台河市', value: 100 }],
            [{ name: '鸡西市', value: 110 }],
            [{ name: '牡丹江市', value: 120 }],
            [{ name: '哈尔滨市', value: 130 }]
        ];
        var dataType = [
            '大兴安岭地区', '黑河市', '齐齐哈尔市', '大庆市',
            '绥化市', '伊春市', '鹤岗市', '佳木斯市', '双鸭山市', '七台河市', '鸡西市',
            '牡丹江市', '哈尔滨市'
        ];
        var histogramData = [];
        for (var i = 1; i < 14; i++) {
            histogramData.push(i * 10);
        }
        var chart = echarts.init(document.getElementById('pepMap'));
        var fChart = echarts.init(document.getElementById('pepFigure'));
        initLinkageMap(chart, mapData, dataType);
        initLinkageHistogram(fChart, histogramData, dataType);
    })
})