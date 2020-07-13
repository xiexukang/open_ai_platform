
/*计算资源弹窗*/
(function(){
	var d_title = "<h4>人工智能计算资源</h4>"
	var d_body = "<p>中国人工智能开放创新平台在功能的规划上主要是为国内各AI团队提供安全、先进、标准和开放的实验环境，帮助构建人工智能创业生态，扶持创业者，助力人工智能的技术产业化。</p><p>平台底层基础设施采用领先的云平台和容器技术，通过对虚拟、物理等各类资源的统一调度管理，AI软件的容器化安装部署，实现整个平台的弹性扩展，快速交付。</p><p>训练端采用Intel Xeon Platinum和Intel Xeon Phi融核技术，同时选择intel 100Gb OPA网络进行高速互联。高性能至强服务器（Intel Xeon Platinum）选择Intel最新发布的至强金牌系列CPU，搭配AVX 512位矢量位宽，浮点运算能力达到数Tflops。高性能至强融核服务器（Intel Xeon Phi）（融核）可同时提供了CPU+GPU的能力，可以形成统一的解决方案，无需分别采购CPU和GPU，也是未来Intel在AI方向上主流的服务器，具备较高的性价比，提供更先进的AI模型训练能力。</p><p>部署端包含Intel FPGA套件、计算终端等组件，Intel FPGA套件采用低功耗、可编程的FPGA构成，可以将AI软件灌入其中，适合一些对功耗要求较高的移动和室外场景使用，如机器人、摄像头等。计算终端是基于USB模式的深度学习推理工具和独立的人工智能（AI）加速器，为广泛的边缘主机设备提供专用深度神经网络处理功能，专为产品开发者、研究人员和创客设计，提供专用高性能深度神经网络处理性能，从而减少开发、调优和部署人工智能应用的障碍。同时在无人机、机器人、VR头盔、视频监控等各类领域，对AI开发团队进行敏捷开发有极大帮助。</p>"
	$("").popover({
	html: true,
	placement: 'right',
	trigger: 'click',
	container: 'body',
	title: d_title,
	content: d_body,
	});	
});

/*办公场地*/
(function(){
	var d_title = "<h4>办公场地</h4>"
	var d_body = ""
	$("").popover({
	html: true,
	placement: 'left',
	trigger: 'hover',
	container: 'body',
	title: d_title,
	content: d_body,
	});	
});


$(function(){
	$('#nav li').click(function(){
		$(this).siblings('li').removeClass('active');
		$(this).addClass('active');
	});
});