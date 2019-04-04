function initListBlueEffect() {
	$(document).ready(function() {
		$("ul.list li").click(function() {
			$(this).addClass("blue").siblings().removeClass("blue");
			//			getData($(this).val());
		});
	});
}

function filterOnChange(dg, field, value) {
	if(value == '') {
		dg.datagrid('removeFilterRule', field);
	} else {
		dg.datagrid('addFilterRule', {
			field: field,
			op: 'equal',
			value: value
		});
	}
	dg.datagrid('doFilter');
}

function resizeDateGrid() {
	$(window).resize(function() {
		$('#dg').datagrid('resize', {
			width: $(window).width() - 250,
		})
	});
}

function initFilter() {
	var dg = $('#dg').datagrid({
		filterBtnIconCls: 'icon-filter',
		fitColumns: true
	});
	dg.datagrid('enableFilter', [{
		field: 'period',
		type: 'numberbox',
		options: {
			precision: 1
		},
		op: ['equal', 'notequal', 'less', 'greater']
	}, {
		field: 'credit',
		type: 'numberbox',
		options: {
			precision: 1
		},
		op: ['equal', 'notequal', 'less', 'greater']
	}, {
		field: 'coursetype', //课程类别
		type: 'combobox',
		options: {
			panelHeight: 'auto',
			data: [{
				value: '',
				text: '全部'
			}, {
				value: '必修课',
				text: '必修课'
			}, {
				value: '选修课',
				text: '选修课'
			}],
			onChange: function(value) {
				filterOnChange(dg, 'coursetype', value);
			}
		},
	}, {
		field: 'coursesystem', //课程体系
		type: 'combobox',
		options: {
			panelHeight: 'auto',
			data: [{
				value: '',
				text: '全部'
			}, {
				value: '初级',
				text: '初级'
			}, {
				value: '中级',
				text: '中级'
			}, {
				value: '高级',
				text: '高级'
			}],
			onChange: function(value) {
				filterOnChange(dg, 'coursesystem', value);
			}
		},
	}, {
		field: 'mediatype', //授课形式
		type: 'combobox',
		options: {
			panelHeight: 'auto',
			data: [{
				value: '',
				text: '全部'
			}, {
				value: '文档',
				text: '文档'
			}, {
				value: '视频',
				text: '视频'
			}],
			onChange: function(value) {
				filterOnChange(dg, 'mediatype', value);
			}
		}
	}]);
}

function closeWindow() {
	window.close();
}

function fullScreen() {
	var el = $("#content");
	var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen,
		wscript;
	if(typeof rfs != "undefined" && rfs) {
		rfs.call(el);
		return;
	}

	if(typeof window.ActiveXObject != "undefined") {
		alert(1);
		wscript = new ActiveXObject("WScript.Shell");
		if(wscript) {
			wscript.SendKeys("{F11}");
		}
	}
}

function launchFullScreen() {
	var docElm = document.documentElement;
	//W3C
	if(docElm.requestFullscreen) {
		docElm.requestFullscreen();
	}

	//FireFox
	else if(docElm.mozRequestFullScreen) {
		docElm.mozRequestFullScreen();
	}

	//Chrome等
	else if(docElm.webkitRequestFullScreen) {
		docElm.webkitRequestFullScreen();
	}

	//IE11
	else if(elem.msRequestFullscreen) {
		elem.msRequestFullscreen();
	}
}

$(function() {
	initListBlueEffect();
	initFilter();
	resizeDateGrid();
	launchFullScreen();
});