//侧边导航单击事件
function initNav() {
	var tab = $('#tt').tabs('getSelected');
	var cls = 'icon-zhongdian-click';

	updateIcon(tab, cls);

	$('#tt').tabs({
		onSelect: function(title) {
			tab = $('#tt').tabs('getSelected');
			switch(title) {
				case "重点人群管控":
					resetIcon();
					cls = 'icon-zhongdian-click';
					break;
				case "特殊人群服务":
					resetIcon();
					cls = 'icon-teshu-click';
					break;
				case "社会组织服务":
					resetIcon();
					cls = 'icon-shehui-click';
					break;
				case "矛盾纠纷排查":
					resetIcon();
					cls = 'icon-maodun-click';
					break;
				case "护路护线联防":
					resetIcon();
					cls = 'icon-hulu-click';
					break;
				case "预防青少年犯罪":
					resetIcon();
					cls = 'icon-yufang-click';
					break;
				case "校园周边防控":
					resetIcon();
					cls = 'icon-xiaoyuan-click';
					break;
				case "综治中心":
					resetIcon();
					cls = 'icon-zongzhi-click';
					var win = window.open("business_training.html", "", "fullscreen=yes, toolbar=no, location=yes, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no");
					var scrWidth = window.screen.width;
					var scrHeight = window.screen.height;
					win.resizeTo(scrWidth, scrHeight);
					break;
				case "网格化管理":
					resetIcon();
					cls = 'icon-wangge-click';
					break;
				default:
					break;
			}

			updateIcon(tab, cls);
		}
	});
}

function getOriginCls(num) {
	var cls;
	switch(num) {
		case 0:
			cls = 'icon-zhongdian';
			break;
		case 1:
			cls = 'icon-teshu';
			break;
		case 2:
			cls = 'icon-shehui';
			break;
		case 3:
			cls = 'icon-maodun';
			break;
		case 4:
			cls = 'icon-hulu';
			break;
		case 5:
			cls = 'icon-yufang';
			break;
		case 6:
			cls = 'icon-xiaoyuan';
			break;
		case 7:
			cls = 'icon-zongzhi';
			break;
		case 8:
			cls = 'icon-wangge';
			break;
		default:
			break;
	}
	return cls;
}

function resetIcon() {
	var tab;
	var cls;
	for(var i = 0; i < 8; i++) {
		tab = $('#tt').tabs('getTab', i);
		cls = getOriginCls(i)
		updateIcon(tab, cls);
	}
}

function updateIcon(tab, cls) {
	$('#tt').tabs('update', {
		tab: tab,
		options: {
			iconCls: cls,
		}
	});
}

$(function() {
	$("#tt").tabs({
		tabWidth: 154,
		tabHeight: 60,
		tabPosition: 'left',
		fit: true,
		narrow: true
	})
	$(".tabs-wrap").css('margin-left', '0');
	$('#tt').tabs({
		onSelect: function(title) {
			if(title == '综治中心') {
				var win = window.open("business_training.html", "", "fullscreen=yes, toolbar=no, location=yes, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no");
				var scrWidth = window.screen.width;
				var scrHeight = window.screen.height;
				win.resizeTo(scrWidth, scrHeight);
			}
		}
	});
	initNav();
})