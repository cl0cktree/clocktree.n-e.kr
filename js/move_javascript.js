/* move.js 파일을 Vanilla JavaScript로 변환한 move_vanilla.js 입니다.
   $.animate() 및 .stop() 기능은 복잡한 애니메이션 구현을 제외하고 스타일 속성 즉시 변경으로 변환되었습니다.
   $.getJSON() 및 $.load()는 Fetch API를 사용하여 비동기 통신을 처리하도록 변환되었습니다.
*/

document.addEventListener('DOMContentLoaded', function() {
	// var portfolioindex_url = 'https://cl0cktree.github.io/jsonframe';
	// var portfolioindex_url = 'http://clocktree.dothome.co.kr/portfoliomain';
	// var portfolioindex_url = 'http://clocktree.kr';
	// var portfolioindex_url = 'http://www.clocktree.kr/portfoliomain'
	var portfolioindex_url;
	var jsonCover_data;
	var jsonHeader_data;
	var jsonFrame_data;
	var body_tag = document.body;
	const bodyEl = document.querySelector('body'); // $('body') -> document.querySelector('body')
	var scroll_framespeed = 1000/60;
	var cal_year = 2025;
	var nav_num;
	var nav_num_start;
	var contents_head;
	var contents_title;
	var work_years;
	var class_add;
	var frame_year;
	var layer_sel;
	var weather_out;
	var weather_now;
	var name_header=document.querySelector('.header');
	var name_footer=document.getElementsByTagName('footer');
	var footer_contaner=document.querySelector('footer .body-footer-contaner');
	var this_url = window.location.href.split('//')[1];
	var split_url = window.location.href.split('/').reverse()[0];

	function select_url(){
		// ... (select_url 함수 내용은 그대로 유지) ...
		if((this_url=='www.clocktree.co.kr/')||(this_url=='www.clocktree.co.kr/index.html')||(this_url=='www.clocktree.co.kr/sub/sub1.html')||(this_url=='www.clocktree.co.kr/sub/sub2.html')||(this_url=='www.clocktree.co.kr/sub/sub3.html')||(this_url=='www.clocktree.co.kr/sub/sub4.html')||(this_url=='www.clocktree.co.kr/sub/sub5.html')){
			portfolioindex_url = 'https://www.clocktree.co.kr'
			console.log('type_1 = '+portfolioindex_url);
		}else if((this_url=='clocktree.co.kr/')||(this_url=='clocktree.co.kr/index.html')||(this_url=='clocktree.co.kr/sub/sub1.html')||(this_url=='clocktree.co.kr/sub/sub2.html')||(this_url=='clocktree.co.kr/sub/sub3.html')||(this.location.href=='clocktree.co.kr/sub/sub4.html')||(this.location.href=='clocktree.co.kr/sub/sub5.html')){
			portfolioindex_url = 'https://clocktree.co.kr'
			console.log('type_2 = '+portfolioindex_url);
		}else if((this_url=='clocktreedomain.dothome.co.kr/')||(this_url=='clocktreedomain.dothome.co.kr/index.html')||(this_url=='clocktreedomain.dothome.co.kr/sub/sub1.html')||(this_url=='clocktreedomain.dothome.co.kr/sub/sub2.html')||(this_url=='clocktreedomain.dothome.co.kr/sub/sub3.html')||(this_url=='clocktreedomain.dothome.co.kr/sub/sub4.html')||(this_url=='clocktreedomain.dothome.co.kr/sub/sub5.html')){
			portfolioindex_url = 'http://clocktreedomain.dothome.co.kr'
			console.log('type_3 = '+portfolioindex_url);
		}else if((this_url=='clocktree.kr/')||(this_url=='clocktree.kr/index.html')||(this_url=='clocktree.kr/sub/sub1.html')||(this_url=='clocktree.kr/sub/sub2.html')||(this_url=='clocktree.kr/sub/sub3.html')||(this_url=='clocktree.kr/sub/sub4.html')||(this_url=='clocktree.kr/sub/sub5.html')){
			portfolioindex_url = 'http://clocktree.kr'
			console.log('type_4 = '+portfolioindex_url);
		}else if((this_url=='www.clocktree.kr/')||(this_url=='www.clocktree.kr/index.html')||(this_url=='www.clocktree.kr/sub/sub1.html')||(this_url=='www.clocktree.kr/sub/sub2.html')||(this_url=='www.clocktree.kr/sub/sub3.html')||(this_url=='www.clocktree.kr/sub/sub4.html')||(this_url=='www.clocktree.kr/sub/sub5.html')){
			portfolioindex_url = 'http://www.clocktree.kr'
			console.log('type_5 = '+portfolioindex_url);
		}else if((this_url=='www.clocktree.kr/portfoliomain/')||(this_url=='www.clocktree.kr/portfoliomain/index.html')||(this_url=='www.clocktree.kr/portfoliomain/sub/sub1.html')||(this_url=='www.clocktree.kr/portfoliomain/sub/sub2.html')||(this_url=='www.clocktree.kr/portfoliomain/sub/sub3.html')||(this_url=='www.clocktree.kr/portfoliomain/sub/sub4.html')||(this_url=='www.clocktree.kr/portfoliomain/sub/sub5.html')){
			portfolioindex_url = 'http://www.clocktree.kr/portfoliomain'
			console.log('type_6 = '+portfolioindex_url);
		}else if((this_url=='clocktree.dothome.co.kr/portfoliomain/')||(this_url=='clocktree.dothome.co.kr/portfoliomain/index.html')||(this_url=='clocktree.dothome.co.kr/portfoliomain/sub/sub1.html')||(this_url=='clocktree.dothome.co.kr/portfoliomain/sub/sub2.html')||(this_url=='clocktree.dothome.co.kr/portfoliomain/sub/sub3.html')||(this_url=='clocktree.dothome.co.kr/portfoliomain/sub/sub4.html')||(this_url=='clocktree.dothome.co.kr/portfoliomain/sub/sub5.html')){
			portfolioindex_url = 'http://clocktree.dothome.co.kr/portfoliomain'
			console.log('type_7 = '+portfolioindex_url);
		}else if((this_url=='cl0cktree.github.io/jsonframe/')||(this_url=='cl0cktree.github.io/jsonframe/index.html')||(this_url=='cl0cktree.github.io/jsonframe/sub/sub1.html')||(this_url=='cl0cktree.github.io/jsonframe/sub/sub2.html')||(this_url=='cl0cktree.github.io/jsonframe/sub/sub3.html')||(this_url=='cl0cktree.github.io/jsonframe/sub/sub4.html')||(this_url=='cl0cktree.github.io/jsonframe/sub/sub5.html')){
			portfolioindex_url = 'https://cl0cktree.github.io/jsonframe'
			console.log('type_8 = '+portfolioindex_url);
		}else if((this_url=='cl0cktree.github.io/clocktree.n-e.kr/')||(this_url=='cl0cktree.github.io/clocktree.n-e.kr/index.html')||(this_url=='cl0cktree.github.io/clocktree.n-e.kr/sub/sub1.html')||(this_url=='cl0cktree.github.io/clocktree.n-e.kr/sub/sub2.html')||(this_url=='cl0cktree.github.io/clocktree.n-e.kr/sub/sub3.html')||(this_url=='cl0cktree.github.io/clocktree.n-e.kr/sub/sub4.html')||(this_url=='cl0cktree.github.io/clocktree.n-e.kr/sub/sub5.html')){
			portfolioindex_url = 'https://cl0cktree.github.io/clocktree.n-e.kr'
			console.log('type_9 = '+portfolioindex_url);
		}else if((this_url=='www.clocktree.n-e.kr/')||(this_url=='www.clocktree.n-e.kr/index.html')||(this_url=='www.clocktree.n-e.kr/sub/sub1.html')||(this_url=='www.clocktree.n-e.kr/sub/sub2.html')||(this_url=='www.clocktree.n-e.kr/sub/sub3.html')||(this_url=='www.clocktree.n-e.kr/sub/sub4.html')||(this_url=='www.clocktree.n-e.kr/sub/sub5.html')){
			portfolioindex_url = 'https://www.clocktree.n-e.kr'
			console.log('type_10 = '+portfolioindex_url);
		};
		jsonCover_data=portfolioindex_url+'/data/cover_data.json';
		jsonHeader_data=portfolioindex_url+'/data/header_data.json';
		jsonFrame_data=portfolioindex_url+'/data/frame_data.json';
		console.log('-- this pass = '+portfolioindex_url+' --');
	}
	select_url();

	/* loader 제어 */
	function initLoaderAndCSS() {
		select_url();
		const preloader = document.querySelector('.body-filter-preloader');
		const loadUrl = portfolioindex_url + '/cover/cover.html';
		const fragmentSelector = '.filter-preloader-loadingbox';

		// .load()를 fetch로 변환
		fetch(loadUrl)
			.then(response => response.text())
			.then(html => {
				const parser = new DOMParser();
				const doc = parser.parseFromString(html, 'text/html');
				const fragment = doc.querySelector(fragmentSelector);
				if (fragment) {
					preloader.innerHTML = '';
					preloader.appendChild(fragment);
				}
				preloader.style.display = 'none'; // .hide()

				const slideImg = document.querySelector('.slide img');
				const msheight = slideImg ? slideImg.offsetHeight : 0; // .height()
				const slideWrap = document.getElementById('slide-wrap');
				if (slideWrap && msheight) {
					slideWrap.style.height = msheight + 'px'; // .css({'height':msheight})
				}

				const agent = navigator.userAgent.toLowerCase();
				// 브라우저 감지 로직 (그대로 유지)
				if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1) || (agent.indexOf("safari") >-1))
				{
					if ((agent.indexOf("safari") >-1)||(navigator.userAgent.search( "trident" )>-1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1))
					{
						bubble_background2();
					}else{
						bubble_background1();
					}
				}else{
					bubble_background2();
				}
				// ... (weather_now 주석 처리된 로직 생략) ...
			})
			.catch(error => console.error('Error loading HTML fragment:', error));

		// var footerIcon= $('.ul-li-img1').width(); -> Vanilla JS로 변경
		const footerIcon = document.querySelector('.ul-li-img1')?.offsetWidth;
		// 주석 처리된 라인: $('.ul-li-img1').css({'height':footerIcon});
	}

	/*footer 자동 구성*/
	function footer_creat(){
		if(footer_contaner){
			// $.getJSON() -> fetch로 변환
			fetch(jsonCover_data)
				.then(response => response.json())
				.then(data => {
					if(footer_contaner) {
						footer_contaner.insertAdjacentHTML('afterbegin', '<div id="body-footer-add1" class="body-footer-add"><address></address></div>'); // .prepend()
						const addressEl = footer_contaner.querySelector('address');
						data.forEach(item => { // $.each()
							if(item.cover_kinds=='footer' && addressEl){
								addressEl.insertAdjacentHTML('beforeend', item.cover_name+' <span class="footer-add-num">'+item.cover_phone+'</span><br>'+item.cover_address+'<br><a href="mailto:'+item.cover_email+'" tabindex="0">'+item.cover_email+'</a><br><span class="Copyright">'+item.cover_Copyright+'</span><br>'); // .append()
							}
						});
					}
				})
				.catch(error => console.error('Error fetching jsonCover_data:', error));
		};
	};
	/*-----------*/
	/*header를 구성하는 요소들을 json에서 data로 받아와서 자동으로 구성*/
	function header_creat(){
		if((name_header)&&(footer_contaner)){
			// ... (innerHTML 설정은 그대로 유지) ...
			name_header.innerHTML='<nav class="section1-article1-nav" id="section1-article1-nav1"><div class="article1-nav1-toplogo" id="article1-nav1-toplogo1"></div><div class="article1-nav1-topmenuwrap" id="article1-nav1-topmenuwrap1"><ul class="article1-nav1-topmenu" id="article1-nav1-topmenu1"></ul></div><div class="top-icon" id="phon-icon"><h2><span>HP icon - 모바일 기기에서 터치시 전화 연결</span></h2></div><div class="top-icon" id="menu-icon" tabindex="0"><h2><input type="checkbox" id="menu-icon-click" name="menu-icon-click"><label for="menu-icon-click"><span class="menu-icon-menubar">홈페이지 하단에 링크 가능한 메뉴바 표시</span></label></h2></div></nav>';
			footer_contaner.innerHTML='<div class="nav1-side-menu"><div class="side-menu-listwrap"><ul class="menu-list-ul"></ul></div></div><div class="top-btn">Top</div>';
			var headerNum=0;
			var nav1_toplogo=document.querySelector('.article1-nav1-toplogo');

			// $.getJSON() -> fetch로 변환
			fetch(jsonCover_data)
				.then(response => response.json())
				.then(data => {
					const topmenu1 = document.getElementById('article1-nav1-topmenu1');
					const bodyHeader = document.querySelector('.body-all-header');
					const topLogo = document.querySelector('.article1-nav1-toplogo');

					data.forEach(item => { // $.each()
						if(item.cover_kinds=='header'){
							nav1_toplogo.innerHTML='<h1><a href="'+portfolioindex_url+item.cover_url+'" tabindex="0"><img src="'+portfolioindex_url+item.cover_img+'" alt="'+item.cover_alt+'"></a></h1>';
						};
					});

					// .css('display')와 .stop().animate() -> window.getComputedStyle()와 style 변경으로 대체
					if (topmenu1 && window.getComputedStyle(topmenu1).display === 'block') {
						if(bodyHeader) bodyHeader.style.height = '150px';
						if(topLogo) topLogo.style.height = '100px';
					}else{
						if(bodyHeader) bodyHeader.style.height = '100px';
						if(topLogo) topLogo.style.height = '100px';
					}
				})
				.catch(error => console.error('Error fetching jsonCover_data in header_creat:', error));

			// $.getJSON() -> fetch로 변환
			fetch(jsonHeader_data)
				.then(response => response.json())
				.then(data => {
					const topmenuUl = document.querySelector('.article1-nav1-topmenu');
					const menuListUl = document.querySelector('.menu-list-ul');

					data.forEach(item => { // $.each()
						headerNum++;
						if(topmenuUl) topmenuUl.insertAdjacentHTML('beforeend', '<li class="nav1-topmenu1-list" data-nav-section="'+item.nav_section+'" data-nav-kinds="'+item.nav_kinds+'" id="nav1-topmenu1-list'+headerNum+'"><a href="'+portfolioindex_url+item.nav_url+'" tabindex="0" aria-hidden=""><span class="topmenu1-list-span" id="topmenu1-list-span'+headerNum+'"  aria-hidden="">'+item.nav_title+'<span class="list-span-leftborder" aria-hidden=""></span><span class="list-span-rightborder" aria-hidden=""></span></span></a></li>'); // .append()
						if(menuListUl) menuListUl.insertAdjacentHTML('beforeend', '<li class="list-ul-li"><a href="'+portfolioindex_url+item.nav_url+'" id="list-ul-li'+headerNum+'" class="ul-li-img1" tabindex="0" aria-hidden=""><span aria-hidden="">'+item.nav_alt+'</span></a></li>'); // .append()
					});

					const topmenu1 = document.getElementById('article1-nav1-topmenu1');
					const isTopmenuVisible = topmenu1 && window.getComputedStyle(topmenu1).display === 'block';
					const footerEl = document.querySelector('footer');

					// .find().children().attr() -> querySelectorAll 및 setAttribute 사용
					if(topmenu1) {
						topmenu1.querySelectorAll('.nav1-topmenu1-list').forEach(li => {
							li.querySelector('a').setAttribute('aria-hidden', !isTopmenuVisible);
							li.querySelector('span').setAttribute('aria-hidden', !isTopmenuVisible);
						});
					}
					if(footerEl) {
						footerEl.querySelectorAll('.list-ul-li').forEach(li => {
							li.querySelector('a').setAttribute('aria-hidden', isTopmenuVisible);
							li.querySelector('span').setAttribute('aria-hidden', isTopmenuVisible);
						});
					}

					// .css()
					document.querySelectorAll('.topmenu1-list-span').forEach(el => el.style.borderBottom = '0px solid #fff');
					document.querySelectorAll('.ul-li-img1').forEach(el => el.style.border = '0px solid #999');


					// ... (location.href 조건문 그대로 유지) ...
					if (location.href==portfolioindex_url+'/sub/sub1.html')
					{
						nav_num_start=1;
					}else if (location.href==portfolioindex_url+'/sub/sub2.html')
					{
						nav_num_start=2;
					}else if (location.href==portfolioindex_url+'/sub/sub3.html')
					{
						nav_num_start=3;
					}else if (location.href==portfolioindex_url+'/sub/sub4.html')
					{
						nav_num_start=4;
					}else if (location.href==portfolioindex_url+'/sub/sub5.html')
					{
						nav_num_start=5;
					}else if ((location.href==portfolioindex_url+'/index.html')||(location.href==portfolioindex_url+'/')||(location.href==portfolioindex_url+''))
					{
						nav_num_start=0;
						// .stop().animate() -> style 변경으로 대체
						const landingTitle = document.getElementById('landing-contents-title');
						const landingButtonWrap = document.getElementById('landing-contents-buttonwrap');
						if(landingTitle) landingTitle.style.textIndent = '0';
						if(landingButtonWrap) landingButtonWrap.style.textIndent = '0';

						document.querySelectorAll('.topmenu1-list-span').forEach(span => {
							span.querySelectorAll('.list-span-leftborder, .list-span-rightborder').forEach(border => border.style.bottom = '0px');
						});
						bodyEl.style.overflowY = 'hidden'; // $body.css()
						landing_contents();
					}
					nav_start();
				})
				.catch(error => console.error('Error fetching jsonHeader_data:', error));

			// .height() 및 .css() 변환
			for (scib1=1;scib1<=scall1 ;scib1++ )
			{
				const imgEl = document.getElementById('con-box1-imgborder'+scib1+'img');
				const ibheight1 = imgEl ? imgEl.offsetHeight : 0;
				const borderEl = document.getElementById('con-box1-imgborder'+scib1);
				if(borderEl) {
					borderEl.style.height = ibheight1 + 'px';
					borderEl.style.lineHeight = ibheight1 + 'px';
				}
			}
			for (scib2=1;scib2<=scall2 ;scib2++ )
			{
				const imgEl = document.getElementById('con-box2-imgborder'+scib2+'img');
				const ibheight2 = imgEl ? imgEl.offsetHeight : 0;
				const borderEl = document.getElementById('con-box2-imgborder'+scib2);
				if(borderEl) {
					borderEl.style.height = ibheight2 + 'px';
					borderEl.style.lineHeight = ibheight2 + 'px';
				}
			}
			for (scib3=1;scib3<=scall3 ;scib3++ )
			{
				const imgEl = document.getElementById('con-box3-imgborder'+scib3+'img');
				const ibheight3 = imgEl ? imgEl.offsetHeight : 0;
				const borderEl = document.getElementById('con-box3-imgborder'+scib3);
				if(borderEl) {
					borderEl.style.height = ibheight3 + 'px';
					borderEl.style.lineHeight = ibheight3 + 'px';
				}
			}

		};
	};
	/*------------------------------------------------------------*/
	/*각 페이지 링크를 load 시킬 때 각 페이지에 맞는 title 을 지정하기 위한 함수 (jQuery에 의존하지 않으므로 그대로 유지) */
	function title_changer(){
		var title_text;
		if ((split_url=='index.html')||(split_url=='')){
			title_text = 'main';
		}else if (split_url=='sub1.html'){
			title_text = 'introduce';
		}else if (split_url=='sub2.html'){
			title_text = 'web&app';
		}else if (split_url=='sub3.html'){
			title_text = 'movie';
		}else if (split_url=='sub4.html'){
			title_text = 'flash';
		}else if (split_url=='sub5.html'){
			title_text = '2D&Editing';
		}
		document.title = 'Welcome to Portfolio Site - '+title_text;
	}
	/*---------------------------------------------------------------------*/
	/*--nav 시작 시 동작 함수--*/
	function nav_start(){
		// .css() 변환
		const slideWrap = document.getElementById('slide-wrap');
		const slideWrapI = document.getElementById('slide-wrap-i');
		const ulLi = document.getElementById('list-ul-li'+nav_num_start);
		const navSpan = document.getElementById('topmenu1-list-span'+nav_num_start);

		if(nav_num_start!==1){
			if(slideWrap) slideWrap.style.display = 'block';
			if(slideWrapI) slideWrapI.style.display = 'none';
		}else{
			if(slideWrap) slideWrap.style.display = 'none';
			if(slideWrapI) slideWrapI.style.display = 'block';
		}
		if(nav_num_start!==0){
			document.querySelectorAll('.topmenu1-list-span').forEach(el => el.style.borderBottom = '0px solid #bbb');
			if(navSpan) navSpan.style.borderBottom = '3px solid #bbb';

			document.querySelectorAll('.topmenu1-list-span').forEach(span => {
				span.querySelectorAll('.list-span-leftborder, .list-span-rightborder').forEach(border => border.style.bottom = '0px');
			});
			if(navSpan) {
				navSpan.querySelectorAll('.list-span-leftborder, .list-span-rightborder').forEach(border => {
					border.style.bottom = '-3px';
					border.style.borderBottom = '3px solid #bbb';
				});
			}

			document.querySelectorAll('.ul-li-img1').forEach(el => el.style.border = '0px solid #999');
			if(ulLi) ulLi.style.border = '3px solid #999';
		}
	}
	/*--nav click시 동작 함수--*/
	function nav_move(){
		const agent = navigator.userAgent.toLowerCase();
		const preloader = document.querySelector('.body-filter-preloader');
		const bodyAllHeader = document.querySelector('.body-all-header');
		const slideWrap = document.getElementById('slide-wrap');
		const slideWrapI = document.getElementById('slide-wrap-i');

		// 브라우저 감지 로직 그대로 유지
		if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1))
		{
			if ((navigator.userAgent.search( "edge/")>-1)||(navigator.userAgent.search( "trident" ) > -1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1))
			{
				if(preloader) preloader.style.display = 'block';

				// CSS 변경
				document.querySelectorAll('.topmenu1-list-span').forEach(el => el.style.borderBottom = '0px solid #bbb');
				const navSpan = document.getElementById('topmenu1-list-span'+nav_num);
				if(navSpan) navSpan.style.borderBottom = '3px solid #bbb';

				document.querySelectorAll('.topmenu1-list-span').forEach(span => {
					span.querySelectorAll('.list-span-leftborder, .list-span-rightborder').forEach(border => border.style.bottom = '0px');
				});
				if(navSpan) {
					navSpan.querySelectorAll('.list-span-leftborder, .list-span-rightborder').forEach(border => {
						border.style.bottom = '-3px';
						border.style.borderBottom = '3px solid #bbb';
					});
				}

				document.querySelectorAll('.ul-li-img1').forEach(el => el.style.border = '0px solid #999');
				const ulLi = document.getElementById('list-ul-li'+nav_num);
				if(ulLi) ulLi.style.border = '3px solid #999';

				if(nav_num!==1){
					if(slideWrap) slideWrap.style.display = 'block';
					if(slideWrapI) slideWrapI.style.display = 'none';
				}else{
					if(slideWrap) slideWrap.style.display = 'none';
					if(slideWrapI) slideWrapI.style.display = 'block';
				}
				title_changer();

				// .stop().animate() -> window.scrollTo()와 style 변경으로 대체
				const headerHeight = bodyAllHeader ? window.getComputedStyle(bodyAllHeader).height : '0px';
				let topbtnm = 0;
				if (headerHeight=='50px') {
					topbtnm = 50;
				}else if (headerHeight=='100px') {
					topbtnm = 100;
				}else if (headerHeight=='150px') {
					topbtnm = 150;
				}

				window.scrollTo({ top: 0, behavior: 'auto' });

				document.querySelectorAll('.index-btn-all').forEach(el => {
					el.style.background = 'rgba(0,0,0,1)';
					el.style.border = '1px solid #fff';
					el.style.color = '#fff';
				});

				const scrollallBackAcc1 = document.getElementById('scrollall-back-acc1');
				const scrollallBackAcc2 = document.getElementById('scrollall-back-acc2');
				if(scrollallBackAcc1) scrollallBackAcc1.style.top = '270px';
				if(scrollallBackAcc2) scrollallBackAcc2.style.top = '170px';

				if(preloader) preloader.style.display = 'none';
				history.pushState(null,null,portfolioindex_url+'/sub/sub'+nav_num+'.html');
			}else{
				window.location.href = portfolioindex_url+'/sub/sub'+nav_num+'.html';
			}

		}else{
			if(preloader) preloader.style.display = 'block';

			// CSS 변경
			document.querySelectorAll('.topmenu1-list-span').forEach(el => el.style.borderBottom = '0px solid #bbb');
			const navSpan = document.getElementById('topmenu1-list-span'+nav_num);
			if(navSpan) navSpan.style.borderBottom = '3px solid #bbb';

			document.querySelectorAll('.topmenu1-list-span').forEach(span => {
				span.querySelectorAll('.list-span-leftborder, .list-span-rightborder').forEach(border => border.style.bottom = '0px');
			});
			if(navSpan) {
				navSpan.querySelectorAll('.list-span-leftborder, .list-span-rightborder').forEach(border => {
					border.style.bottom = '-3px';
					border.style.borderBottom = '3px solid #bbb';
				});
			}

			document.querySelectorAll('.ul-li-img1').forEach(el => el.style.border = '0px solid #999');
			const ulLi = document.getElementById('list-ul-li'+nav_num);
			if(ulLi) ulLi.style.border = '3px solid #999';

			if(nav_num!==1){
				if(slideWrap) slideWrap.style.display = 'block';
				if(slideWrapI) slideWrapI.style.display = 'none';
			}else{
				if(slideWrap) slideWrap.style.display = 'none';
				if(slideWrapI) slideWrapI.style.display = 'block';
			}
			title_changer();

			const headerHeight = bodyAllHeader ? window.getComputedStyle(bodyAllHeader).height : '0px';
			let topbtnm = 0;
			if (headerHeight=='50px') {
				topbtnm = 50;
			}else if (headerHeight=='100px') {
				topbtnm = 100;
			}else if (headerHeight=='150px') {
				topbtnm = 150;
			}
			window.scrollTo({ top: 0, behavior: 'auto' });

			document.querySelectorAll('.index-btn-all').forEach(el => {
				el.style.background = 'rgba(0,0,0,1)';
				el.style.border = '1px solid #fff';
				el.style.color = '#fff';
			});

			const scrollallBackAcc1 = document.getElementById('scrollall-back-acc1');
			const scrollallBackAcc2 = document.getElementById('scrollall-back-acc2');
			if(scrollallBackAcc1) scrollallBackAcc1.style.top = '270px';
			if(scrollallBackAcc2) scrollallBackAcc2.style.top = '170px';

			if(preloader) preloader.style.display = 'none';
			history.pushState(null,null,portfolioindex_url+'/sub/sub'+nav_num+'.html');
		}

	}
	/*------------------------*/

	/*커버소환*/
	// .children().each(Array).length -> .querySelectorAll().length
	const scall1 = document.querySelectorAll('#main-scroll1-con > .scrollall-con-box').length;
	const scall2 = document.querySelectorAll('#main-scroll2-con > .scrollall-con-box').length;
	const scall3 = document.querySelectorAll('#main-scroll3-con > .scrollall-con-box').length;
	var scib1;
	var scib2;
	var scib3;

	// $body.ready(function(){...}) -> DOMContentLoaded 내에서 호출
	function cover_start(){
		footer_creat();
		header_creat();
		if ((split_url=='index.html')||(split_url=='')){
			mainSommon();
		}else if (split_url=='sub1.html'){
			introSommon();
		}else if (split_url=='sub2.html'){
			webSommon();
		}else if (split_url=='sub3.html'){
			movieSommon();
		}else if (split_url=='sub4.html'){
			flashSommon();
		}else if (split_url=='sub5.html'){
			imageSommon();
		}
		const sectionHeading = document.querySelector('.section-heading');
		if(sectionHeading) sectionHeading.innerHTML = contents_head; // .html()
	};
	cover_start();
	initLoaderAndCSS();

	/*------------------------------------------------------------------*/
	/*전체창 리사이즈시 반응형 동작 빈틈보강*/
	// $(window).resize(function(){...}) -> window.addEventListener('resize', function(){...})
	window.addEventListener('resize', function(){
		const topmenu1 = document.getElementById('article1-nav1-topmenu1');
		const bodyHeader = document.querySelector('.body-all-header');
		const topLogo = document.querySelector('.article1-nav1-toplogo');
		const navSideMenu = document.querySelector('.nav1-side-menu');
		const footerAdd = document.querySelector('.body-footer-add');
		const menuIconCheckbox = document.querySelector('#menu-icon input[type=checkbox]');
		const footerEl = document.querySelector('footer');

		// .width() 및 .css() 변환
		const footerIcon = document.querySelector('.ul-li-img1')?.offsetWidth;

		// .height() 및 .css() 변환
		for (scib1=1;scib1<=scall1 ;scib1++ )
		{
			const imgEl = document.getElementById('con-box1-imgborder'+scib1+'img');
			const ibheight1 = imgEl ? imgEl.offsetHeight : 0;
			const borderEl = document.getElementById('con-box1-imgborder'+scib1);
			if(borderEl) {
				borderEl.style.height = ibheight1 + 'px';
				borderEl.style.lineHeight = ibheight1 + 'px';
			}
		}
		for (scib2=1;scib2<=scall2 ;scib2++ )
		{
			const imgEl = document.getElementById('con-box2-imgborder'+scib2+'img');
			const ibheight2 = imgEl ? imgEl.offsetHeight : 0;
			const borderEl = document.getElementById('con-box2-imgborder'+scib2);
			if(borderEl) {
				borderEl.style.height = ibheight2 + 'px';
				borderEl.style.lineHeight = ibheight2 + 'px';
			}
		}
		for (scib3=1;scib3<=scall3 ;scib3++ )
		{
			const imgEl = document.getElementById('con-box3-imgborder'+scib3+'img');
			const ibheight3 = imgEl ? imgEl.offsetHeight : 0;
			const borderEl = document.getElementById('con-box3-imgborder'+scib3);
			if(borderEl) {
				borderEl.style.height = ibheight3 + 'px';
				borderEl.style.lineHeight = ibheight3 + 'px';
			}
		}

		// .css('display') -> window.getComputedStyle() 사용
		if (topmenu1 && window.getComputedStyle(topmenu1).display === 'none')
		{
			// .stop().animate() -> style 변경으로 대체
			if(bodyHeader) bodyHeader.style.height = '100px';
			if(topLogo) topLogo.style.height = '100px';

			// .find().children().attr() -> querySelectorAll 및 setAttribute 사용
			const topmenuLists = topmenu1.querySelectorAll('.nav1-topmenu1-list');
			const footerLists = footerEl ? footerEl.querySelectorAll('.list-ul-li') : [];

			topmenuLists.forEach(li => {
				li.querySelector('a').setAttribute('aria-hidden', 'true');
				li.querySelector('span').setAttribute('aria-hidden', 'true');
			});
			footerLists.forEach(li => {
				li.querySelector('a').setAttribute('aria-hidden', 'false');
				li.querySelector('span').setAttribute('aria-hidden', 'false');
			});

			// .prop('checked',true) -> .checked = true
			if(menuIconCheckbox && document.activeElement && topmenu1.contains(document.activeElement)) { // focus() 체크 로직
				menuIconCheckbox.checked = true;
				// .animate() -> style 변경으로 대체
				if(navSideMenu) navSideMenu.style.right = '0';
				footerLists.forEach(li => {
					li.querySelector('a').focus();
				});
			};
			if(bodyHeader) console.log('-- down 480 -- in = '+window.getComputedStyle(bodyHeader).width);
			return false;
		}else if(topmenu1){
			// .animate() -> style 변경으로 대체
			if(footerAdd) footerAdd.style.marginLeft = '0px';
			if(navSideMenu) navSideMenu.style.right = '-100%';
			if(bodyHeader) bodyHeader.style.height = '50px';
			if(topLogo) topLogo.style.height = '0px';

			// .prop('checked',false) -> .checked = false
			if(menuIconCheckbox) menuIconCheckbox.checked = false;

			// .find().children().attr() -> querySelectorAll 및 setAttribute 사용
			const topmenuLists = topmenu1.querySelectorAll('.nav1-topmenu1-list');
			const footerLists = footerEl ? footerEl.querySelectorAll('.list-ul-li') : [];

			topmenuLists.forEach(li => {
				li.querySelector('a').setAttribute('aria-hidden', 'false');
				li.querySelector('span').setAttribute('aria-hidden', 'false');
			});
			footerLists.forEach(li => {
				li.querySelector('a').setAttribute('aria-hidden', 'true');
				li.querySelector('span').setAttribute('aria-hidden', 'true');
			});

			// focus() 체크 로직
			if(document.activeElement && footerEl && footerEl.contains(document.activeElement)) {
				topmenuLists.forEach(li => {
					li.querySelector('a').focus();
				});
			};
			if(bodyHeader) console.log('-- up 480 -- out = '+window.getComputedStyle(bodyHeader).width);
			return false;
		}

	});

	/*----------------------------------------------------------------*/
	/*header 부분 동작부*/
	// .on('event1 event2 event3', function) -> addEventListener로 분리
	const headerEl = document.querySelector('.body-all-header');
	const headerHandler = function(event){
		const topmenu1 = document.getElementById('article1-nav1-topmenu1');
		const bodyHeader = document.querySelector('.body-all-header');
		const topLogo = document.querySelector('.article1-nav1-toplogo');
		const isTopmenuVisible = topmenu1 && window.getComputedStyle(topmenu1).display === 'block';

		if (event.type=='mouseover' || event.type=='touchstart')
		{
			// .stop().animate() -> style 변경으로 대체
			if (isTopmenuVisible)
			{
				if(bodyHeader) bodyHeader.style.height = '150px';
				if(topLogo) topLogo.style.height = '100px';
			}else{
				if(bodyHeader) bodyHeader.style.height = '100px';
				if(topLogo) topLogo.style.height = '100px';
			}
		}else if (event.type=='mouseleave')
		{
			// .stop().animate() -> style 변경으로 대체
			if (isTopmenuVisible)
			{
				if(bodyHeader) bodyHeader.style.height = '50px';
				if(topLogo) topLogo.style.height = '0px';
			}else{
				if(bodyHeader) bodyHeader.style.height = '100px';
				if(topLogo) topLogo.style.height = '100px';
			}
		}
	};
	if(headerEl) {
		headerEl.addEventListener('mouseover', headerHandler);
		headerEl.addEventListener('mouseleave', headerHandler);
		headerEl.addEventListener('touchstart', headerHandler);
	}

	// 이벤트 위임
	const bodySectionAll = document.querySelector('.body-section-all');
	if(bodySectionAll) {
		bodySectionAll.addEventListener('click', function(event) {
			const logoContainer = event.target.closest('.article1-nav1-toplogo');
			const phonIcon = event.target.closest('#phon-icon');
			const menuIconCheckbox = event.target.closest('#menu-icon input[type=checkbox]');

			if (logoContainer) {
				const logoAnchor = event.target.closest('.article1-nav1-toplogo a');
				if(logoAnchor) {
					event.preventDefault(); // $(document).on('click history','.article1-nav1-toplogo a',function(event){ event.preventDefault(); })
				}

				const agent = navigator.userAgent.toLowerCase();
				const slideWrap = document.getElementById('slide-wrap');
				const slideWrapI = document.getElementById('slide-wrap-i');
				const preloader = document.querySelector('.body-filter-preloader');
				const bodyAllHeader = document.querySelector('.body-all-header');

				document.querySelectorAll('img').forEach(img => {
					// var imgWidth = this.naturalWidth;
				});
				const msheight = document.querySelector('.slide img')?.offsetHeight;
				const slideshow = document.querySelector('.slideshow');
				if(slideshow && msheight) slideshow.style.height = msheight + 'px';

				document.querySelectorAll('.topmenu1-list-span').forEach(el => el.style.border = '0px');

				// 브라우저 감지 로직 그대로 유지
				if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1)) {
					if ((navigator.userAgent.search( "edge/")>-1)||(navigator.userAgent.search( "trident" )>-1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1)) {
						// IE/Trident/Edge 로직
						if(preloader) preloader.style.display = 'block';

						document.querySelectorAll('.topmenu1-list-span').forEach(el => el.style.borderBottom = '0px solid #fff');
						document.querySelectorAll('.topmenu1-list-span').forEach(span => {
							span.querySelectorAll('.list-span-leftborder, .list-span-rightborder').forEach(border => border.style.bottom = '0px');
						});
						document.querySelectorAll('.ul-li-img1').forEach(el => el.style.border = '0px solid #999');

						if(slideWrap) slideWrap.style.display = 'block';
						if(slideWrapI) slideWrapI.style.display = 'none';

						mainSommon();

						const headerHeight = bodyAllHeader ? window.getComputedStyle(bodyAllHeader).height : '0px';
						let topbtnm = 0;
						if (headerHeight=='50px') {
							topbtnm = 50;
						}else if (headerHeight=='100px') {
							topbtnm = 100;
						}else if (headerHeight=='150px') {
							topbtnm = 150;
						}
						window.scrollTo({ top: 0, behavior: 'auto' });

						document.querySelectorAll('.index-btn-all').forEach(el => {
							el.style.background = 'rgba(0,0,0,1)';
							el.style.border = '1px solid #fff';
							el.style.color = '#fff';
						});

						const scrollallBackAcc1 = document.getElementById('scrollall-back-acc1');
						const scrollallBackAcc2 = document.getElementById('scrollall-back-acc2');
						if(scrollallBackAcc1) scrollallBackAcc1.style.top = '270px';
						if(scrollallBackAcc2) scrollallBackAcc2.style.top = '170px';

						if(preloader) preloader.style.display = 'none';
						history.pushState(null,null,portfolioindex_url+'/index.html');
						title_changer();
					}else{
						window.location.href = portfolioindex_url+'/index.html';
					}
				}else{
					// 기타 브라우저 로직 (위와 거의 동일)
					if(preloader) preloader.style.display = 'block';

					document.querySelectorAll('.topmenu1-list-span').forEach(el => el.style.borderBottom = '0px solid #fff');
					document.querySelectorAll('.topmenu1-list-span').forEach(span => {
						span.querySelectorAll('.list-span-leftborder, .list-span-rightborder').forEach(border => border.style.bottom = '0px');
					});
					document.querySelectorAll('.ul-li-img1').forEach(el => el.style.border = '0px solid #999');

					if(slideWrap) slideWrap.style.display = 'block';
					if(slideWrapI) slideWrapI.style.display = 'none';

					mainSommon();

					const headerHeight = bodyAllHeader ? window.getComputedStyle(bodyAllHeader).height : '0px';
					let topbtnm = 0;
					if (headerHeight=='50px') {
						topbtnm = 50;
					}else if (headerHeight=='100px') {
						topbtnm = 100;
					}else if (headerHeight=='150px') {
						topbtnm = 150;
					}
					window.scrollTo({ top: 0, behavior: 'auto' });

					document.querySelectorAll('.index-btn-all').forEach(el => {
						el.style.background = 'rgba(0,0,0,1)';
						el.style.border = '1px solid #fff';
						el.style.color = '#fff';
					});

					const scrollallBackAcc1 = document.getElementById('scrollall-back-acc1');
					const scrollallBackAcc2 = document.getElementById('scrollall-back-acc2');
					if(scrollallBackAcc1) scrollallBackAcc1.style.top = '270px';
					if(scrollallBackAcc2) scrollallBackAcc2.style.top = '170px';

					if(preloader) preloader.style.display = 'none';
					history.pushState(null,null,portfolioindex_url+'/index.html');
					title_changer();
				}
			}

			if (phonIcon) {
				if (navigator.userAgent.match(/android/i)) {
					window.location.href='tel:010-9954-3410';
				} else if (navigator.userAgent.match(/(iphone)|(ipod)|(ipad)/i)){
					window.location.href='tel:010-9954-3410';
				}else{
					alert('모바일에서만 가능합니다.');
				}
			}

			if (menuIconCheckbox) {
				const navSideMenu = document.querySelector('.nav1-side-menu');
				const topBtn = document.querySelector('.top-btn');
				const indexBtnWrap = document.querySelector('.index-btn-wrap');

				// .animate() 대신 style 변경으로 대체
				if (navSideMenu && window.getComputedStyle(navSideMenu).right !== '0px') {
					if(navSideMenu) navSideMenu.style.right = '0px';
					if(topBtn) topBtn.style.bottom = '90px';
					if(indexBtnWrap) indexBtnWrap.style.bottom = '144px';
				}else if (navSideMenu){
					if(navSideMenu) navSideMenu.style.right = '-100%';
					// ... (Original Code: if($(window).height()+$(window).scrollTop()>=$(document).height())//현재 window와 현재의 scroll값을 더한 값이 보여지는 document 이상일 경우(현재 scroll...)
				}
			}
		});
	}
});