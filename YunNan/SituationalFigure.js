//<!--月查勤次数统计图-->
function initialize_BeOnDutyFigure(chart, currentData) {
    var app = {};
    option = null;
    //获得数组名

    function GetName(arry) {
        var name = [];
        for (var i = 0; i < arry.length; i++) {
            name.push(arry[i][0]);
        };
        return name;
    };
    ////获得数组值
    function GetValue(arry) {
        var value = [];
        for (var i = 0; i < arry.length; i++) {
            value.push(arry[i][1]);
        };
        return value;
    };

    var teamName = GetName(currentData);
    var v1 = GetValue(currentData);

    option = {
        grid://表格间距
            {
                top: '10',
                left: 'left',
                right: '20%',
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
            data: teamName,
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
                fontFamily: 'Microsoft YaHei',
                fontSize: 16,
                align: 'right'
            },
        },
        series: [
            {
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        fontSize: 16,
                        position: 'right',
                        color: '#fff'
                    }
                },
                barMaxWidth: 13,
                data: [
                    {
                        value: v1[0],
                        itemStyle: {
                            normal: {
                                color: '#d94133'
                            }
                        }
                    },
                    {
                        value: v1[1],
                        itemStyle: {
                            normal: {
                                color: '#1985f4'
                            }
                        }
                    },
                    {
                        value: v1[2],
                        itemStyle: {
                            normal: {
                                color: 'pink'
                            }
                        }
                    },
                    {
                        value: v1[3],
                        itemStyle: {
                            normal: {
                                color: 'yellow'
                            }
                        }
                    },
                    {
                        value: v1[4],
                        itemStyle: {
                            normal: {
                                color: 'red'
                            }
                        }
                    },
                ]
            },
        ]
    };
    if (option && typeof option === "object") {
        chart.setOption(option, true);
    }
};

//<!--临时勤务总数图-->
function initialize_TemporaryService(chart, currentData, rank) {
    var option = null;

    var yData;
    var zhiduiData = ['携带枪弹数', '车辆数', '动用兵力'];
    var zhongduiData = ['其他类型', '学生军训', '警戒设卡', '押运(跨省)', '押运(省内)', '押解', '巡逻'];

    if (rank === "支队") {
        yData = zhiduiData;
    }
    else {
        yData = zhongduiData;
    };

    option = {
        grid://表格间距
            {
                top: '5%',
                left: '20',
                right: '20%',
                bottom: '10%',
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
            data: yData,
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
                        fontSize: 16,
                        color: '#fff'
                    }
                },
                //barMinHeight: 20,
                barMaxWidth: 13,
                data: [
                    {
                        value: currentData[0],
                        itemStyle: {
                            normal: {
                                color: '#bbf2f4'
                            }
                        }
                    },
                    {
                        value: currentData[1],
                        itemStyle: {
                            normal: {
                                color: '#71ed10'
                            }
                        }
                    },
                    {
                        value: currentData[2],
                        itemStyle: {
                            normal: {
                                color: '#fbad40'
                            }
                        }
                    },
                    {
                        value: currentData[3],
                        itemStyle: {
                            normal: {
                                color: '#d94133'
                            }
                        }
                    },
                    {
                        value: currentData[4],
                        itemStyle: {
                            normal: {
                                color: '#1985f4'
                            }
                        }
                    },
                    {
                        value: currentData[5],
                        itemStyle: {
                            normal: {
                                color: '#fe007f'
                            }
                        }
                    },
                    {
                        value: currentData[6],
                        itemStyle: {
                            normal: {
                                color: '#7d00fe'
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

//<!--年度临时勤务总数图-->
function initialize_AnnualTemporaryService(chart, currentData, rank) {
    var option = null;

    var yData;
    var zhiduiData = ['携带枪弹数', '车辆数', '动用兵力'];
    var zhongduiData = ['其他类型', '学生军训', '警戒设卡', '押运(跨省)', '押运(省内)', '押解', '巡逻'];

    if (rank === "支队") {
        yData = zhiduiData;
    }
    else {
        yData = zhongduiData;
    };

    option = {
        grid://表格间距
            {
                top: '5%',
                left: '0',
                right: '20%',
                bottom: '10%',
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
            data: yData,
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
                        fontSize: 16,
                        color: '#fff'
                    }
                },
                //barMinHeight: 20,
                barMaxWidth: 13,
                data: [
                    {
                        value: currentData[0],
                        itemStyle: {
                            normal: {
                                color: '#bbf2f4'
                            }
                        }
                    },
                    {
                        value: currentData[1],
                        itemStyle: {
                            normal: {
                                color: '#71ed10'
                            }
                        }
                    },
                    {
                        value: currentData[2],
                        itemStyle: {
                            normal: {
                                color: '#fbad40'
                            }
                        }
                    },
                    {
                        value: currentData[3],
                        itemStyle: {
                            normal: {
                                color: '#d94133'
                            }
                        }
                    },
                    {
                        value: currentData[4],
                        itemStyle: {
                            normal: {
                                color: '#1985f4'
                            }
                        }
                    },
                    {
                        value: currentData[5],
                        itemStyle: {
                            normal: {
                                color: '#fe007f'
                            }
                        }
                    },
                    {
                        value: currentData[6],
                        itemStyle: {
                            normal: {
                                color: '#7d00fe'
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

//<!--堆叠柱状图1-->
function initialize_Histogram1(chart, data) {
    var app = {};
    option = null;
    var jData1 = [], jData2 = [], jData3 = [], jData4 = [], jData5 = [], jData6 = [], jData7 = [], jData8 = [];
    var barName = ['暴狱', '灾害', '越狱', '劫持', '袭击', '突发', '冲闯', '破坏'];
    var totalValue = [];
    var yName = [];
    var total = 0;

    data.sort(function (a, b) {
        return b.totalAlarmTimes - a.totalAlarmTimes
    });
    data.splice(8);
    $.each(data, function (i, d) {
        totalValue.unshift(d.totalAlarmTimes);
        yName.unshift(d.organization);
        $.each(d.details, function (j, item) {
            switch (item.alarmType) {
                case barName[0]: jData1.unshift(item.count);
                    break;
                case barName[1]: jData2.unshift(item.count);
                    break;
                case barName[2]: jData3.unshift(item.count);
                    break;
                case barName[3]: jData4.unshift(item.count);
                    break;
                case barName[4]: jData5.unshift(item.count);
                    break;
                case barName[5]: jData6.unshift(item.count);
                    break;
                case barName[6]: jData7.unshift(item.count);
                    break;
                case barName[7]: jData8.unshift(item.count);
                    break;
            };
        });
    });
    for (var i = 0; i < totalValue.length; i++) {
        total += totalValue[i];
    };

    option = {
        color: ['#1985f4', '#0fadd0', '#ef7340', '#eeb329', '#00a293', '#34c6bb', '#9a3adc', '#dc5b8f'],
        tooltip://提示
            {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'
                },
                confine: true,
                position: function (pos, params, dom, rect, size) {
                    var obj = { top: 60 };
                    obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
                    return obj;
                }
            },
        legend://图例
            {
                show: false,
                data: barName
            },
        grid://表格间距
            {
                top: 10,
                left: 'left',
                right: '35',
                bottom: '5%',
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
                fontFamily: 'Microsoft YaHei',
                fontSize: 16,
                interval: 0,
            },
        },
        series: [
            {
                name: barName[0],
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: false
                    }
                },
                data: jData1,
                barMinHeight: 1,
                barMaxWidth: 13,
            },
            {
                name: barName[1],
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: false
                    }
                },
                data: jData2,
                barMinHeight: 1
            },
            {
                name: barName[2],
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: false
                    }
                },
                data: jData3,
                barMinHeight: 1
            },
            {
                name: barName[3],
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: false
                    }
                },
                data: jData4,
                barMinHeight: 1
            },
            {
                name: barName[4],
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: false
                    }
                },
                data: jData5,
                barMinHeight: 1
            },
            {
                name: barName[5],
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: false
                    }
                },
                data: jData6,
                barMinHeight: 1
            },
            {
                name: barName[6],
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: false
                    }
                },
                data: jData7,
                barMinHeight: 1
            },
            {
                name: barName[7],
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        color: '#fff',
                        fontFamily: 'Arial',
                        fontSize: 16,
                        formatter: function (params) {
                            return totalValue[params.dataIndex]
                        }
                    }
                },
                data: jData8,
                barMinHeight: 1,
            }
        ]
    };
    if (option && typeof option === "object") {
        chart.setOption(option, true);
    };
};

//<!--堆叠柱状图3-->
function initialize_Histogram3(chart, data,subdata) {
    option = {
        tooltip://提示
            {
                trigger: 'item',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'
                },
                formatter: function (params, ticket, callback) {
                    var learn = subdata.学习;
                    var training = subdata.集训;
                    var hospital = subdata.住院;
                    var visitation = subdata.探亲;
                    var other = subdata.其它;
                    return "<ul><h3>中队在位人数</h3><li>学习：" + learn[params.dataIndex] + 
                    "人</li><li>集训：" + training[params.dataIndex] + "人</li><li>住院：" + hospital[params.dataIndex] + "人</li><li>探亲：" +
                    visitation[params.dataIndex] + "人</li><li>其它：" + other[params.dataIndex] + "人</li></ul>";
                }
            },
        grid://表格间距
            {
                top: '15',
                left: '10',
                right: '35',
                bottom: '10',
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
            data: ['峨山中队', '红塔中队', '通海中队', '新平中队', '易门中队', '元江中队', '华宁中队', '澄江中队', '江川中队', '玉溪中队'],
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
                                color: '#fe007f'
                            }
                        }
                    },
                    {
                        value: data[9],
                        itemStyle: {
                            normal: {
                                color: '#d77a20'
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

//<!--饼图1-->
function initialize_Pie1(chart, data) {
    var app = {};
    option = null;

    var jData1 = 0, jData2 = 0, jData3 = 0, jData4 = 0, jData5 = 0, jData6 = 0, jData7 = 0, jData8 = 0;
    var jData = new Array;
    var barName = ['暴狱', '灾害', '越狱', '劫持', '袭击', '突发', '冲闯', '破坏'];
    var cpData = [];
    var total = 0;

    $.each(data, function (i, d) {
        $.each(d.details, function (j, item) {
            switch (item.alarmType) {
                case barName[0]: jData1 += item.count;
                    break;
                case barName[1]: jData2 += item.count;
                    break;[0]
                case barName[2]: jData3 += item.count;
                    break;[0]
                case barName[3]: jData4 += item.count;
                    break;[0]
                case barName[4]: jData5 += item.count;
                    break;[0]
                case barName[5]: jData6 += item.count;
                    break;[0]
                case barName[6]: jData7 += item.count;
                    break;[0]
                case barName[7]: jData8 += item.count;
                    break;
            };
        });
    });
    jData.push(jData1); jData.push(jData2); jData.push(jData3);
    jData.push(jData4); jData.push(jData5); jData.push(jData6);
    jData.push(jData7); jData.push(jData8);

    for (var i = 0; i < barName.length; i++) {
        cpData.push({ name: barName[i], value: jData[i] });
    };
    for (var i = 0; i < jData.length; i++) {
        total += jData[i];
    }
    document.getElementById("total_callPolice").innerHTML = "总数：" + total;
    option = {
        color: ['#1985f4', '#0fadd0', '#ef7340', '#eeb329', '#00a293', '#34c6bb', '#9a3adc', '#dc5b8f'],
        series: [
            {
                type: 'pie',
                roseType: true,
                radius: [0, '50%'],
                hoverAnimation: false,
                stillShowZeroSum: false,
                label: {
                    normal: {
                        show: true,
                        position: 'outside',
                        formatter: ["{b}: {c}", '({d}%)'].join('\n'),
                    }
                },
                labelLine: {
                    normal: {
                        length: 2,
                        length2: 5,
                    },
                },
                data: cpData,
            }
        ]
    };
    ;
    if (option && typeof option === "object") {
        chart.setOption(option, true);
    };

};

////<!--饼图3-->
function initialize_Pie3(chart, data) {
    var app = {};
    option = null;
    //模拟数据
    var evaluationData = data;
    option = {
        color: ['#bbf2f4', '#71ed10', '#fbad40', '#d94133', '#1985f4', 'pink', 'red', 'cornflowerblue', '#fe007f', '#d77a20'],//设置每个图例的颜色
        series: [
            {
                type: 'pie',
                roseType: true,
                radius: [20, '40%'],
                hoverAnimation: false,
                stillShowZeroSum: false,
                label: {
                    normal: {
                        show: true,
                        position: 'outside',
                        align: 'left',
                        formatter: ["{b}: {c}", '({d}%)'].join('\n'),
                    }
                },
                labelLine: {
                    normal: {
                        length: 10,
                        length2: 5,
                    },
                },
                data: evaluationData,
            }
        ]
    };
    if (option && typeof option === "object") {
        chart.setOption(option, true);
    };
};