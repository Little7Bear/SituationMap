
function createHistogram(chart, xData) {
    var option = {
        color: ['#194f4f', '#17497e', '#524b24', '#263041'],
        textStyle: {
            color: '#fff'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                axisTick: { show: false },
                data: xData
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '刑警',
                type: 'bar',
                barGap: 0,
                data: [3200, 3320, 3010, 3340, 3900]
            },
            {
                name: '民警',
                type: 'bar',
                data: [2020, 1802, 191, 2304, 2900]
            },
            {
                name: '车辆',
                type: 'bar',
                data: [1500, 2032, 2001, 1504, 1090]
            },
            {
                name: '武器',
                type: 'bar',
                data: [908, 707, 1001, 909, 400]
            }
        ]
    };

    if (option && typeof option === "object") {
        chart.setOption(option, true);
    };
    $(window).resize(function () { chart.resize(); })
}

$(function () {
    var chart = echarts.init(document.getElementById('histogram'));
    var xData = ['石化街道', '工业区', '亭林镇', '山阳镇', '金山卫镇'];
    createHistogram(chart, xData);
})