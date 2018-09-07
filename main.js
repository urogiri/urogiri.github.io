<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r70/three.min.js"</script>

const getUrlParameter = (name) => {
	name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
	var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
	var results = regex.exec(location.search);

	return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

const L = new Vue({
	el: '#ltrademark',
	data: {
		loaded: false,
		weather: '',
		wCondition: '',
		wIcon: '10',
		located: 'Reston, VA',
		work: [
			{
				thumb:'',
				title: 'JSON form Generator',
				desc: 'Made a thing for users unfamiliar with code to generate a json form to be used with A CV template i built.',
				page: '/',
				category: ''
			},{
				thumb:'',
				title: 'SxE Rougue Rocket',
				desc: 'coming soon',
				page: '/',
				category: ''
			},{
				thumb:'',
				title: '',
				desc: '',
				page: '/',
				category: ''
			},{
				thumb:'',
				title: '',
				desc: '',
				page: '/',
				category: ''
			},{
				thumb:'',
				title: '',
				desc: '',
				page: '/',
				category: ''
			}
		],
		networks: [
			{
				type: 'dribbble',
				url: 'http://www.dribbble.com/ltrademark'
			}, {
				type: 'codepen',
				url: 'http://codepen.io/ltrademark'
			}, {
				type: 'github',
				url: 'https://github.com/ltrademark'
			}, {
				type: 'twitter',
				url: 'http://twitter.com/ltrademark'
			}
		],
		isAmerican: true,
		fpModalOpen: false,
		fpContent: [
			'In a nutshell, a <b>Full-Process designer</b> is responsible/capable of handling the entire creative process, from wireframes, UX, and ideation, to design, developement, and prototyping.',
			'For a more expansive and in-depth explanation, take a listen to a podcast centered around the topic by the guys over at Late Nights with Trav &amp; Los. Source below.',
			'Source: <a href="http://www.travandlos.com/26" target="_blank">Trav &amp; Los Full-Process Designer Podcast&nbsp;<i data-feather="external-link"></i></a>'
		],
		work1Open:false,
		work1Content: [
			'lll',
			'sda'
		],
		ctrlH: false,
		isChrome: false,
		isOpera: false,
		isFirefox: false,
		isSafari: false,
		isIE: false,
		isEdge: false,
		isMobile: false,
		debug: ''
	},
	methods: {
		getLocation() {
			this.$http.get("https://ipinfo.io").then(response => {
				let locData = response.body;
				this.isAmerican = locData.country === 'US' ? true : false;
			});
		},
		getTemp() {
			let c = 'nothing',
					wc = 'looking good',
					icon = '10';
			let unitToggle = this.isAmerican;
			$.simpleWeather({
				location: this.located,
				unit: unitToggle ? 'f' : 'c',
				success: function(weather) {
					c = weather.temp;
					wc = weather.currently;
					icon = weather.code;
				},
				error: function(error) {
					console.log('couldnt fetch weather', error)
				}
			});
			setTimeout(() => {
				this.weather = c;
				this.wCondition = wc;
				this.wIcon = 'icon-' + icon;
			}, 1000);
		},
		fpModalToggle() {
			this.fpModalOpen = !this.fpModalOpen;
			if(document.body.style.overflow === 'hidden') {
				document.body.style.overflow = '';
			} else {
				document.body.style.overflow = 'hidden';
			}
		},
		launchFullScreen(element) {
			// console.log(document.documentElement);
			if(element.requestFullScreen) {
				element.requestFullScreen();
			} else if(element.mozRequestFullScreen) {
				element.mozRequestFullScreen();
			} else if(element.webkitRequestFullScreen) {
				element.webkitRequestFullScreen();
			}
		},
		uaDetect() {
			this.isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

			this.isFirefox = typeof InstallTrigger !== 'undefined';

			this.isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

			this.isIE = /*@cc_on!@*/false || !!document.documentMode;

			this.isEdge = !this.isIE && !!window.StyleMedia;

			this.isChrome = !!window.chrome && !!window.chrome.webstore;
			
			if (window.outerWidth < 786)
				this.isMobile = true
			
			window.addEventListener('resize', ()=>{
				if (window.outerWidth < 786) {
					this.isMobile = true
				} else {
					this.isMobile = false
				}
			})
		},
		popup: function(url, w: 550, h: 400){
			let dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left,
					dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top,
					width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
					height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
			let left = ((width / 2) - (w / 2)) + dualScreenLeft,
					top = ((height / 2) - (h / 2)) + dualScreenTop,
					newWindow = window.open(url, '', 'scrollbars=yes,titlebar=no,toolbar=no,location=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
		},
	},
	mounted: function() {
		this.getLocation();
		setTimeout(()=> {
			this.getTemp();
			this.loaded = true;
		}, 500);
		this.launchFullScreen(document);
		this.uaDetect();
	},
	components: {
		'ltm': {
			props: ['color', 'dimensions'],
			template: `
<div class="ltm-emblem" :style="'width:' + dimensions + '; height: ' + dimensions + ';'">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 431.76 411.76">
    <title>LTM__logo</title>
    <g id="ltmWrapper" data-name="container">
        <path :fill="color" class="ltm-Line" d="M0,0V94.85H25V25H406.76V386.76H153.29v25H431.76V0ZM25,119.66H0v292.1H128.47v-25H25Z"/>
        <polygon :fill="color" class="ltm-T" points="90.46 144.44 129.09 144.44 129.09 292.14 153.91 292.14 153.91 144.44 192.54 144.44 192.54 119.62 90.46 119.62 90.46 144.44"/>
        <polygon :fill="color" class="ltm-M" points="316.49 119.62 316.49 119.64 316.33 119.62 278.4 219.29 240.47 119.62 240.25 119.65 240.25 119.62 215.43 119.62 215.43 292.14 240.25 292.14 240.25 186.86 278.4 292.14 316.49 187.03 316.49 292.14 341.3 292.14 341.3 119.62 316.49 119.62"/>
    </g>
</svg>
</div>
`
		},
		'modal': {
			props: ['title','close','content'],
			template: `
<div class="overlay">
	<div class="modal">
		<div class="modal-header">
			<h2>{{title}}</h2>
			<div class="modal-close" @click="close"><i data-feather="x"></i></div>
		</div>
		<div class="modal-body">
			<p v-for="item in content" v-html="item"></p>
		</div>
		<div class="modal-footer">
			<div class="modal-footer--close" @click="close">close</div>
		</div>
	</div>
</div>
			`,
			mounted() {
				feather.replace();
			}
		}
	}
});
