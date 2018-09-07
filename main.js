<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r70/three.min.js"</script>

console.clear();
AOS.init({
	offset: -50,
  duration: 650,
  easing: [0.4, 0.0, 0.2, 1],
	delay: 350,
	disable: window.innerWidth < 786
});
var zi9yoyw179vy9j;
(function(d, t) {
	var s = d.createElement(t), options = {
		'userName':'ltrademark',
		'formHash':'zi9yoyw179vy9j',
		'autoResize':true,
		'height':'1100',
		'async':true,
		'host':'wufoo.com',
		'header':'hide',
		'ssl':true
	};
	s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js';
	s.onload = s.onreadystatechange = function() {
		var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
		try { zi9yoyw179vy9j = new WufooForm();zi9yoyw179vy9j.initialize(options);zi9yoyw179vy9j.display(); } catch (e) {}
	};
	var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
})(document, 'script');

$(window).scroll(function(){
	var height = Math.round($('.hero').height());
	var top = Math.round($(window).scrollTop());
	if(top != 0) {
		$('.hero').find('.main-content').addClass('fade');
	} else {
		$('.hero').find('.main-content').removeClass('fade');
		$('body').velocity("stop");
	}
});
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function setMetaColor() {
	var bodyRGB = window.getComputedStyle(document.body, null).getPropertyValue('background-color'),
			bRGBstrip = bodyRGB.replace('rgb','').replace('(', '').replace(')', '').split(','),
			bodyHEX = rgbToHex(parseInt(bRGBstrip[0]), parseInt(bRGBstrip[1]), parseInt(bRGBstrip[2]));
	document.head.getElementsByTagName('meta')[2].setAttribute('content', bodyHEX);
	console.log(bodyHEX);
}

$('#messageForm').on('click', function(){
	$('.about').css('opacity', '0');
	$('.message-form').addClass('open');
});
$('.dismiss-form').on('click', function(){
	$('.about').css('opacity', '1');
	$('.message-form').removeClass('open');
});
$('#thememain').on('click', function(){
	$('.swatch').removeClass('current');
	$(this).addClass('current');
	$('html, body').attr('class','');
	setMetaColor();
});
$('#theme1, #theme2, #theme3').on('click', function(){
	var theme = $(this).attr('id');
	$('.swatch').removeClass('current');
	$(this).addClass('current');
	$('html, body').attr('class','').addClass(theme);
	setMetaColor();
});
