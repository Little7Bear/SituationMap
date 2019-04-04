function creatMap(chart, data) {
    $.get('../../Scripts/230100.json', function (hebJson) {
        echarts.registerMap('哈尔滨', hebJson);
        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}<br/>数量：{c}'
            },
            visualMap: {
                min: 0,
                max: 20,
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
                map: '哈尔滨',
                roam: false,
                zoom: 0.55,
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
        };
    })
}

function creatHistogram(chart, data, yName) {
    var color = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3', '#fff', '#888', '#f65489', 'yellow', 'lightblue', 'lightgreen', '#af5674'];
    var barData = [];
    for (var i = 0; i < data.length; i++) {
        var a = {};
        var b = {};
        b.color = color[i];
        a.value = data[i];
        a.itemStyle = b;
        barData.push(a);
    }

    option = {
        grid://表格间距
            {
                top: '5%',
                left: '10',
                right: '15%',
                bottom: '10',
                borderColor: '#fff',
                containLabel: true
            },
        textStyle: {
            color: '#fff',
            fontSize: 14,
            fontFamily: 'Microsoft YaHei'
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
                align: 'right'
            },
        },

        series: [
            {
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                barMaxWidth: 13,
                barGap: 10,
                barCategoryGap: 10,
                data: barData
            },

        ]
    };

    if (option && typeof option === "object") {
        chart.setOption(option, true);
        $(window).resize(function () { chart.resize(); })
    };
};

function creatLineChart(chart, data, dataName) {
    var series = [];
    for (var i = 0; i < data.length; i++) {
        series.push(
            {
                name: dataName[i],
                type: 'line',
                stack: '总量',
                data: data[i]
            }
        );
    }

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
            top: '5%',
            left: '3%',
            right: '5%',
            bottom: '30',
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
        series: series
    };

    if (option && typeof option === "object") {
        chart.setOption(option, true);
        $(window).resize(function () { chart.resize(); })
    };
}

$(function () {
    var mapData = [
        { name: '道外区', value: 20 },
        { name: '阿城区', value: 15 },
        { name: '巴彦县', value: 15 },
        { name: '宾县', value: 14 },
        { name: '道里区', value: 16 },
        { name: '方正县', value: 18 },
        { name: '呼兰区', value: 10 },
        { name: '木兰县', value: 10 },
        { name: '南岗区', value: 10 },
        { name: '平房区', value: 10 },
        { name: '尚志市', value: 10 },
        { name: '双城市', value: 10 },
        { name: '松北区', value: 10 },
        { name: '通河县', value: 10 },
        { name: '五常市', value: 10 },
        { name: '香坊区', value: 10 },
        { name: '延寿县', value: 10 },
        { name: '依兰县', value: 10 }
    ];
    var histogramData = [];
    var histogramName = [];
    var lineData = [
        [10, 8, 7, 10, 12, 15, 13], [10, 8, 7, 10, 12, 15, 13],
        [10, 8, 7, 10, 12, 15, 13], [10, 8, 7, 10, 12, 15, 13]
    ];
    for (var i = 0; i < mapData.length; i++) {
        histogramData.push(mapData[i].value);
    }
    for (var i = 0; i < mapData.length; i++) {
        histogramName.push(mapData[i].name);
    }

    var mapChart = echarts.init(document.getElementById('map'));
    var histogramChart = echarts.init(document.getElementById('histogram'));
    var lineChart = echarts.init(document.getElementById('lineChart'));

    creatMap(mapChart, mapData);
    creatHistogram(histogramChart, histogramData, histogramName);
    creatLineChart(lineChart, lineData, histogramName);

    var listHtml = '';
    for (var i = 0; i < histogramName.length; i++) {
        var html = '<li>';
        html += '<span>' + histogramName[i] + '(' + histogramData[i] + '/' + histogramData[i] + ')' + '</span>';
        html += '</li>';
        listHtml += html;
    }
    $('.terminalList').html(listHtml);

})