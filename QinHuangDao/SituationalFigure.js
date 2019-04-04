/******************************************************************数据****************************************************************/
//地图兵力数
var forces = [{
        name: '北戴河中队',
        value: 0
    },
    {
        name: '昌黎中队',
        value: 0
    },
    {
        name: '抚宁中队',
        value: 0
    },
    {
        name: '海港中队',
        value: 0
    },
    {
        name: '卢龙中队',
        value: 0
    },
    {
        name: '青龙中队',
        value: 0
    },
    {
        name: '山海关中队',
        value: 0
    }
];

//初始实时哨位统计数据
var initialize_totalNumber = {
    totalCount: 2583,
    sentryCount: 1128,
    cadresCount: 365,
    remainingCount: 1090
};
//初始月度执勤数据
var initialize_dutyData = {
    data: [1215, 1080, 1033, 1231, 1152, 1323, 1023, 1115, 1325, 1245, 1236, 1245],
    name: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    color: ["#bbf2f4", "#71ed10", "#fbad40", "#d94133", "#1985f4", "pink", "red",
        "cornflowerblue", "antiquewhite", "aquamarine", "purple", "yellow"
    ]
};
//初始季度执勤数据
var quarterDutyData = {
    data: [3450, 4102, 3342, 3456, 3820],
    name: ['一季度', '二季度', '三季度', '四季度'],
    color: ["#bbf2f4", "#71ed10", "#fbad40", "#d94133"]
};
//初始执勤能力等级数据
var initialize_peopleData = {
    data: [863, 1068, 652],
    name: ['优秀', '良好', '合格'],
    color: ["darkorange", "darkcyan", "lightgreen"]
};
//初始装备数据
var initialize_weaponsData = {
    data: [10, 106, 324, 836, 531],
    name: ['维修枪支总数', '执勤用弹总数', '执勤枪支总数', '弹药总数', '枪支总数'],
    color: ["#71ed10", "#fbad40", "#d94133", "#1985f4", "pink"]
};
//初始报警数据
var initialize_alarmData = {
    data: [],
    name: ['四中队', '五中队', '六中队', '七中队', '八中队', '九中队', '十中队', '十一中队', '十二中队',
        '十三中队', '十四中队'
    ],
    barName: ['暴狱', '灾害', '越狱', '劫持', '袭击', '突发', '冲闯', '破坏'],
    color: ['#1985f4', '#0fadd0', '#ef7340', '#eeb329', '#00a293', '#34c6bb', '#9a3adc',
        '#dc5b8f'
    ]
};
for (let i = 0; i < initialize_alarmData.barName.length; i++) {
    var arr = [];
    for (let i = 0; i < initialize_alarmData.name.length; i++) {
        arr.push(randomFrom(300, 500));
    }
    initialize_alarmData.data.push(arr);
}
//初始报警类型占比数据
var initialize_alarmClassData = {
    data: [],
    name: ['暴狱', '灾害', '越狱', '劫持', '袭击', '突发', '冲闯', '破坏'],
    color: ['#1985f4', '#0fadd0', '#ef7340', '#eeb329', '#00a293', '#34c6bb', '#9a3adc',
        '#dc5b8f'
    ]
};
for (let i = 0; i < initialize_alarmClassData.name.length; i++) {
    initialize_alarmClassData.data.push({
        name: initialize_alarmClassData.name[i],
        value: randomFrom(300, 1300)
    });
}

//实时哨位统计数据
var troopsArr = [];
for (let i = 0; i < forces.length; i++) {
    var troops = {};
    troops.totalCount = randomFrom(150, 220);
    troops.sentryCount = randomFrom(80, 100);
    troops.cadresCount = randomFrom(10, 30);
    troops.remainingCount = troops.totalCount - troops.sentryCount - troops.cadresCount;
    troopsArr.push(troops);
    //绑定执勤人员总数到地图兵力数
    forces[i].value = troops.totalCount;
}
//月度执勤兵力统计数据
var dutyData = getDutyData(forces, initialize_dutyData);
//季度执勤兵力统计数据
var qDutyData = getDutyData(forces, quarterDutyData);
//执勤能力等级数据
var gradeData = [];
for (let i = 0; i < forces.length; i++) {
    var gradeObj = {};
    gradeObj.color = initialize_peopleData.color;
    gradeObj.name = initialize_peopleData.name;
    var a = randomFrom(50, 60),
        b = randomFrom(50, 60),
        c = troopsArr[i].totalCount - a - b,
        dd = [];
    dd.push(a, b, c);
    gradeObj.data = dd;
    gradeData.push(gradeObj);
}
//装备实时统计数据
var equipmentData = [];
for (let i = 0; i < forces.length; i++) {
    var equipmentObj = {};
    equipmentObj.color = initialize_weaponsData.color;
    equipmentObj.name = initialize_weaponsData.name;
    equipmentObj.data = [];
    equipmentObj.data.unshift(randomFrom(62, 103));
    equipmentObj.data.unshift(randomFrom(180, 360));
    equipmentObj.data.unshift(randomFrom(20, 60));
    equipmentObj.data.unshift(randomFrom(10, 50));
    equipmentObj.data.unshift(randomFrom(0, 5));
    equipmentData.push(equipmentObj);
}
//警卫目标入住情况数据
var targetArr = [];
for (let i = 0; i < forces.length; i++) {
    targetArr.push(randomFrom(5, 20));
}
//月度查勤数据
var monthlyWeaponsData = {
    data: [20, 15, 30, 28, 33, 31, 26, 20, 21, 15, 26, 18, 18, 16, 22],
    name: ['朱晓明', '李四', '王五', '赵大', '欧阳锋', '李小二', '李大照', '陈都秀', '麦橘子', '江里', '马校', '支堡', '古小歌',
        '陈都都', '陈都'
    ],
    color: ["#bbf2f4", "#71ed10", "#fbad40", "#d94133", "#1985f4", "pink", "red",
        "cornflowerblue", "antiquewhite", "aquamarine", "purple", "yellow", "#3f3f46",
        "#460346", "#808040"
    ]
};
//季度查勤数据
var quarterWeaponsData = {
    data: [201, 183, 177, 155, 234, 123, 243, 213, 222, 177, 156, 142, 180, 106, 220],
    name: ['朱晓明', '李四', '王五', '赵大', '欧阳锋', '李小二', '李大照', '陈都秀', '麦橘子', '江里', '马校', '支堡', '古小歌',
        '陈都都', '陈都'
    ],
    color: ["#bbf2f4", "#71ed10", "#fbad40", "#d94133", "#1985f4", "pink", "red",
        "cornflowerblue", "antiquewhite", "aquamarine", "purple", "yellow", "#3f3f46",
        "#460346"
    ]
};



/******************************************************************方法****************************************************************/
//地图
function initMap(chart, forces, mapName, nameMapObj, markPointData) {
    var option = {
        series: [{
            type: 'map',
            map: mapName,
            roam: false,
            top: 10,
            bottom: 10,
            right:40,
            left:40,
            nameMap: nameMapObj,
            label: //地图上文字样式
            {
                normal: {
                    show: true,
                    color: '#fff',
                    formatter: [
                        '{a|{b}}',
                        '{b|（兵力数：{c}人）}',
                    ].join('\n'),
                    rich: {
                        a: {
                            fontSize: 16,
                        },
                        b: {
                            color: '#fbad40',
                            fontSize: 15,
                        }
                    },
                },
                emphasis: {
                    show: true,
                    color: '#fff',
                }
            },
            itemStyle: //每个区域的样式
            {
                normal: {
                    areaColor: '#1f1e23',
                    borderColo: '#575759',
                    borderWidth: '3',
                    opacity: 0.5
                },
                emphasis: {
                    areaColor: '#0878c4',
                    opacity: 1,

                }
            },
            markPoint: {
                symbol: 'image://../image/icon_map.png',
                symbolSize: 18,
                label: {
                    normal: {
                        show: false,
                    }
                },
                data: markPointData
            },
            data: forces
        }]
    };

    if (option && typeof option === "object") {
        $.get("130300.json", function (mapJson) {
            echarts.registerMap(mapName, mapJson);
            chart.setOption(option, true);
        });
    };
}

//<!--执勤兵力统计图-->
function initialize_BeOnDutyFigure(chart, obj) {
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
    var option = {
        grid: {
            left: '0',
            right: '10',
            bottom: '27',
            top: '20',
            containLabel: false
        },
        xAxis: [{
            type: 'category',
            data: obj.name,
            boundaryGap: true,
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    opacity: 1
                }
            },
            axisLabel: {
                show: true,
                interval: 0,
                color: '#fff',
                fontSize: 14,
                fontFamily: 'Microsoft YaHei',
                showMinLabel: true,
                showMaxLabel: true
            },
        }],
        yAxis: [{
            type: 'value',
            show: false
        }],
        series: [{
            type: 'bar',
            barMaxWidth: '60%',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    color: '#fff',
                    fontSize: 16,
                    fontFamily: 'Microsoft YaHei',
                }
            },
            data: seriesData
        }]
    };
    if (option && typeof option === "object") {
        chart.setOption(option, true);
    }
};

//<!--装备实时统计图-->
function initialize_WeaponsFigure(chart, obj) {
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
    var option = {
        grid: //表格间距
        {
            top: '10',
            left: '0',
            right: '40',
            bottom: '5',
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
                fontSize: 16,
                fontFamily: 'Microsoft YaHei',
            },
        },
        series: [{
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
            data: seriesData
        }]
    };
    if (option && typeof option === "object") {
        chart.setOption(option, true);
    };
};


//<!--堆叠柱状图-->
function initialize_Histogram(chart, obj) {
    var seriesArr = [];
    var totalValue = [];

    for (let i = 0; i < obj.barName.length - 1; i++) {
        var seriesObj = {
            name: obj.barName[i],
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false
                }
            },
            data: obj.data[i]
        };
        seriesArr.push(seriesObj);
    }

    for (let i = 0; i < obj.name.length; i++) {
        totalValue.push(randomFrom(3000, 4000));
    }
    var finallySeries = {
        name: obj.barName[obj.barName.length - 1],
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
        data: obj.data[obj.data.length - 1]
    };
    seriesArr.push(finallySeries);

    var option = {
        color: obj.color,
        tooltip: //提示
        {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'
            },
            confine: true,
            position: function (pos, params, dom, rect, size) {
                var obj = {
                    top: 60
                };
                obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
                return obj;
            }
        },
        legend: //图例
        {
            show: false
        },
        grid: //表格间距
        {
            top: 10,
            left: 'left',
            right: '40',
            bottom: 0,
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
                fontFamily: 'Microsoft YaHei',
                fontSize: 16,
                interval: 0,
            },
        },
        series: seriesArr
    };
    if (option && typeof option === "object") {
        chart.setOption(option, true);
    };
};

//<!--饼图-->
function initialize_Pie(chart, obj) {
    var option = {
        color: obj.color,
        series: [{
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
            data: obj.data,
        }]
    };;
    if (option && typeof option === "object") {
        chart.setOption(option, true);
    };

};

//获取指定范围的随机数
function randomFrom(lowerValue, upperValue) {
    return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
}

//获得执勤兵力情况数据
function getDutyData(mapForcesArr, initDutyData) {
    var result = [];
    for (let i = 0; i < mapForcesArr.length; i++) {
        var dutyObj = {};
        dutyObj.color = initDutyData.color;
        dutyObj.name = initDutyData.name;
        dutyObj.data = [];
        for (let j = 0; j < initDutyData.data.length; j++) {
            dutyObj.data.push(randomFrom(250, 400));
        }
        result.push(dutyObj);
    }
    return result;
}

//格式化时间
function p(s) {
    return s < 10 ? '0' + s : s;
};