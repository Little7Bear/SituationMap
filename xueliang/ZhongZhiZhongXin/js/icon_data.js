// 治安卡口
var public_security = {
    url: '../icon/治安卡口.png',
    type: 0,
    points: [{
            xAxis: 125.139375,
            yAxis: 46.561506
        },
        {
            xAxis: 125.112245,
            yAxis: 46.613957
        },
        {
            xAxis: 125.00876,
            yAxis: 46.503705
        },
        {
            xAxis: 125.373257,
            yAxis: 46.508072
        },
        {
            xAxis: 125.082925,
            yAxis: 46.513232
        }
    ]
}

// 主要街道
var main_street = {
    url: '../icon/主要街道.png',
    type: 1,
    points: [{
        xAxis: 125.265748,
        yAxis: 46.586217
    }, {
        xAxis: 125.065677,
        yAxis: 46.558463
    }, {
        xAxis: 125.120294,
        yAxis: 46.651582
    }, {
        xAxis: 125.281845,
        yAxis: 46.551323
    }]
}

// 政府周边
var government = {
    url: '../icon/政府周边.png',
    type: 2,
    points: [{
        xAxis: 125.027733,
        yAxis: 46.579081
    }, {
        xAxis: 125.111095,
        yAxis: 46.626237
    }, {
        xAxis: 125.21803,
        yAxis: 46.602466
    }, {
        xAxis: 125.211706,
        yAxis: 46.487823
    }, {
        xAxis: 125.21228,
        yAxis: 46.600089
    }]
}

// 出租屋分布
var let_distribution = {
    url: '../icon/出租屋.png',
    type: 3,
    points: [{
        xAxis: 125.280695,
        yAxis: 46.539423
    }, {
        xAxis: 125.090398,
        yAxis: 46.672165
    }, {
        xAxis: 125.040956,
        yAxis: 46.614353
    }, {
        xAxis: 125.238152,
        yAxis: 46.62188
    }]
}

// 流动人口分布
var floating_population_distribution = {
    url: '../icon/流动人口.png',
    type: 4,
    points: [{
        xAxis: 125.023133,
        yAxis: 46.429813
    }, {
        xAxis: 124.996112,
        yAxis: 46.672956
    }, {
        xAxis: 125.132367,
        yAxis: 46.571945
    }, {
        xAxis: 125.053029,
        yAxis: 46.568773
    }, {
        xAxis: 125.058203,
        yAxis: 46.515216
    }]
}

// 出租屋专题
var let_subjet = {
    url: '../icon/出租屋.png',
    type: 5,
    points: [{
        xAxis: 125.21573,
        yAxis: 46.634159
    }, {
        xAxis: 125.18296,
        yAxis: 46.609995
    }, {
        xAxis: 125.28587,
        yAxis: 46.581856
    }]
}

// 流动人口专题
var floating_population_subject = {
    url: '../icon/流动人口.png',
    type: 6,
    points: [{
        xAxis: 125.220904,
        yAxis: 46.517995
    }, {
        xAxis: 125.082925,
        yAxis: 46.534662
    }, {
        xAxis: 125.139841,
        yAxis: 46.523154
    }, {
        xAxis: 125.155364,
        yAxis: 46.505293
    }, {
        xAxis: 124.881129,
        yAxis: 46.554893
    }]
}

// 涉毒
var drug_relative = {
    url: '../icon/涉毒.png',
    type: 7,
    points: [{
        xAxis: 124.94437,
        yAxis: 46.475511
    }, {
        xAxis: 125.040381,
        yAxis: 46.443328
    }, {
        xAxis: 125.120869,
        yAxis: 46.523551
    }]
}

// 重大刑事犯罪前科
var criminal = {
    url: '../icon/监狱.png',
    type: 8,
    points: [{
        xAxis: 125.124893,
        yAxis: 46.552513
    }, {
        xAxis: 125.255399,
        yAxis: 46.60841
    }]
}

// 重点上访人员
var petitioner = {
    url: '../icon/重点上访人员.png',
    type: 9,
    points: [{
        xAxis: 125.124318,
        yAxis: 46.528313
    }, {
        xAxis: 125.295068,
        yAxis: 46.541406
    }, {
        xAxis: 125.319215,
        yAxis: 46.684828
    }, {
        xAxis: 125.122019,
        yAxis: 46.499735
    }]
}

// 肇事肇祸精神病人
var mental_patient = {
    url: '../icon/精神病人.png',
    type: 10,
    points: [{
        xAxis: 125.00876,
        yAxis: 46.503705
    }, {
        xAxis: 125.373257,
        yAxis: 46.508072
    }, {
        xAxis: 125.082925,
        yAxis: 46.513232
    }]
}

// 警用车辆
var police_vehicle = {
    url: '../icon/警用车辆.png',
    type: 11,
    points: [{
        xAxis: 125.222629,
        yAxis: 46.477894
    }, {
        xAxis: 125.275521,
        yAxis: 46.571549
    }, {
        xAxis: 125.308866,
        yAxis: 46.464785
    }, {
        xAxis: 125.246201,
        yAxis: 46.464785
    }]
}

// 城管车辆
var chengguan_vehicle = {
    url: '../icon/城管车辆.png',
    type: 12,
    points: [{
        xAxis: 125.219179,
        yAxis: 46.569963
    }, {
        xAxis: 124.990363,
        yAxis: 46.550133
    }, {
        xAxis: 125.006461,
        yAxis: 46.515216
    }, {
        xAxis: 125.003011,
        yAxis: 46.484248
    }, {
        xAxis: 124.985764,
        yAxis: 46.449289
    }]
}

var tb_content = 
"<div class='table_bg'>" +
"<table border=1 class='info'>" +
"    <tr>" +
"        <td>身份证号码</td>" +
"        <td colspan='3'>440888248945341234</td>" +
"        <td>" +
"            <button>详细信息</button>" +
"        </td>" +
"    </tr>" +
"    <tr>" +
"        <td>姓名</td>" +
"        <td>向阳</td>" +
"        <td>性别</td>" +
"        <td>男</td>" +
"        <td rowspan='4' class='photo'>" +
"        </td>" +
"    </tr>" +
"    <tr>" +
"        <td>居住状态</td>" +
"        <td>常住</td>" +
"        <td>户籍</td>" +
"        <td>本地</td>" +
"    </tr>" +
"    <tr>" +
"        <td>类别</td>" +
"        <td colspan='3'>关护人群</td>" +
"    </tr>" +
"    <tr>" +
"        <td>现住址</td>" +
"        <td colspan='3'>新桥巷侨乐新村8号</td>" +
"    </tr>" +
"    <tr>" +
"        <td>现活动情况</td>" +
"        <td colspan='3'></td>" +
"        <td>" +
"            <span>2013-06-27</span>" +
"            <button>历史活动情况</button>" +
"        </td>" +
"    </tr>" +
"</table>" +
"</div>";