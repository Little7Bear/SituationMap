function mainMap(chart, data) {

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
    };

    $(window).resize(function () { chart.resize(); })    
}

function histogram(chart, data, yName) {
    $(window).resize(function () { chart.resize(); })
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
                barMaxWidth: 13,
                barGap: 10,
                barCategoryGap: 10,
                data: [
                    {
                        value: data[0],
                        itemStyle: {
                            normal: {
                                color: '#bbf2f4'
                            }
                        }
                    },
                    {
                        value: data[1],
                        itemStyle: {
                            normal: {
                                color: '#71ed10'
                            }
                        }
                    },
                    {
                        value: data[2],
                        itemStyle: {
                            normal: {
                                color: '#fbad40'
                            }
                        }
                    },
                    {
                        value: data[3],
                        itemStyle: {
                            normal: {
                                color: '#d94133'
                            }
                        }
                    },
                    {
                        value: data[4],
                        itemStyle: {
                            normal: {
                                color: '#1985f4'
                            }
                        }
                    },
                    {
                        value: data[5],
                        itemStyle: {
                            normal: {
                                color: 'pink'
                            }
                        }
                    },
                    {
                        value: data[6],
                        itemStyle: {
                            normal: {
                                color: 'red'
                            }
                        }
                    },
                    {
                        value: data[7],
                        itemStyle: {
                            normal: {
                                color: 'cornflowerblue'
                            }
                        }
                    },
                    {
                        value: data[8],
                        itemStyle: {
                            normal: {
                                color: 'antiquewhite'
                            }
                        }
                    },
                    {
                        value: data[9],
                        itemStyle: {
                            normal: {
                                color: 'aquamarine'
                            }
                        }
                    },
                    {
                        value: data[10],
                        itemStyle: {
                            normal: {
                                color: 'purple'
                            }
                        }
                    },
                    {
                        value: data[11],
                        itemStyle: {
                            normal: {
                                color: 'gray'
                            }
                        }
                    },
                    {
                        value: data[12],
                        itemStyle: {
                            normal: {
                                color: 'yellow'
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
};

function lineFiruge(chart, data) {

    $(window).resize(function () { chart.resize(); })
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line'
            },
            extraCssText: 'width: 170px;height:80px',
            confine: true
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
            data: ['0点', '4点', '8点', '12点', '16点', '20点', '23点']
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
                data: data[0]
            },
            {
                name: '齐齐哈尔市',
                type: 'line',
                stack: '总量',
                data: data[1]
            },
            {
                name: '大庆市',
                type: 'line',
                stack: '总量',
                data: data[2]
            },
            {
                name: '牡丹江市',
                type: 'line',
                stack: '总量',
                data: data[3]
            },
            {
                name: '伊春市',
                type: 'line',
                stack: '总量',
                data: data[4]
            }
        ]
    };
    if (option && typeof option === "object") {
        chart.setOption(option, true);
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

    var data1 = [];
    var data2 = [];
    for (var i = 1; i < 14; i++) {
        data1.push(i * 500);
    }
    for (var i = 1; i < 14; i++) {
        data2.push(i * 100);
    }

    var histogramName = ['大兴安岭地区', '黑河市', '齐齐哈尔市', '大庆市', '绥化市', '伊春市', '鹤岗市', '佳木斯市', '双鸭山市', '七台河市', '鸡西市', '牡丹江市', '哈尔滨市'];
    var lineData = [
        [120, 132, 101, 134, 90, 230, 210], [220, 182, 191, 234, 290, 330, 310],
        [150, 232, 201, 154, 190, 330, 410], [320, 332, 301, 334, 390, 330, 320]
        [820, 932, 901, 934, 1290, 1330, 1320]
    ];

    var mapChart = echarts.init(document.getElementById('map'));
    var chart1 = echarts.init(document.getElementById('f1'));
    var chart2 = echarts.init(document.getElementById('f2'));
    mainMap(mapChart, mapData);
    histogram(chart1, data1, histogramName);
    histogram(chart2, data2, histogramName);

    for (var i = 0; i < histogramName.length; i++) {
        var html = "<li>";
        html += '<span class="title">' + histogramName[i] + '</span>';
        html += '<ul class="item" hidden>';
        html += '<li>';
        html += '</li><p style="height:30px;line-height:30px;">第十九次全国代表大会<span style="position: absolute;right: 10px;">50次</span></p></li>';
        html += '</li><p style="height:30px;line-height:30px;">第十三次中央委员会第四次全体会议<span style="position: absolute;right: 10px;">48次</span></p></li>';
        html += '</li><p style="height:30px;line-height:30px;">省政协召开党组（扩大）会议<span style="position: absolute;right: 10px;">36次</span></p></li>';
        html += '</li><p style="height:30px;line-height:30px;">省政协十二届一次会议提案交办会<span style="position: absolute;right: 10px;">28次</span></p></li>';
        html += '</li><p style="height:30px;line-height:30px;">全国政协十三届一次会议<span style="position: absolute;right: 10px;">25次</span></p></li>';
        html += '</li><p style="height:30px;line-height:30px;">黑龙江省“雪亮工程建”设推进会议<span style="position: absolute;right: 10px;">24次</span></p></li>';
        html += '</ul></li>';
        $(html).insertAfter(".original");
    }

    $("#onLinelist ul li span").click(function () {
        $(this).parent().animate({ height: $(this).next().height() + 40 }, 500);
        $(this).parent().siblings().animate({ height: 40 }, 500);
        $(this).siblings().show();
        $('.item').hide();
        $(this).next().show();
    })
})