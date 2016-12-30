//以下是表单验证
(function() {
	var docElem = window.document.documentElement,
		didScroll, scrollPosition;

	// trick to prevent scrolling when opening/closing button
	function noScrollFn() {
		window.scrollTo(scrollPosition ? scrollPosition.x : 0, scrollPosition ? scrollPosition.y : 0);
	}

	function noScroll() {
		window.removeEventListener('scroll', scrollHandler);
		window.addEventListener('scroll', noScrollFn);
	}

	function scrollFn() {
		window.addEventListener('scroll', scrollHandler);
	}

	function canScroll() {
		window.removeEventListener('scroll', noScrollFn);
		scrollFn();
	}

	function scrollHandler() {
		if(!didScroll) {
			didScroll = true;
			setTimeout(function() {
				scrollPage();
			}, 60);
		}
	};

	function scrollPage() {
		scrollPosition = {
			x: window.pageXOffset || docElem.scrollLeft,
			y: window.pageYOffset || docElem.scrollTop
		};
		didScroll = false;
	};

	scrollFn();

	[].slice.call(document.querySelectorAll('.morph-button')).forEach(function(bttn) {
		new UIMorphingButton(bttn, {
			closeEl: '.icon-close',
			onBeforeOpen: function() {
				// don't allow to scroll
				noScroll();
			},
			onAfterOpen: function() {
				// can scroll again
				canScroll();
			},
			onBeforeClose: function() {
				// don't allow to scroll
				noScroll();
			},
			onAfterClose: function() {
				// can scroll again
				canScroll();
			}
		});
	});

	// for demo purposes only
	[].slice.call(document.querySelectorAll('form button')).forEach(function(bttn) {
		bttn.addEventListener('click', function(ev) {
			ev.preventDefault();
		});
	});
})();
//以下是烟火效果
$('.jq22').fireworks({
	sound: false, // sound effect
	opacity: 0.2,
	width: '100%',
	height: '100%'
});

//以下是全屏滚动
$(function() {
	$('#dowebok').fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
				scrollBar: true,
		menu: '#menu',
	});
    $("html").css("overflow","hidden");
});
//以下是wow
wow = new WOW();
wow.init();
//以下是图片效果
(function() {
	var support = {
			transitions: Modernizr.csstransitions
		},
		// transition end event name
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
		onEndTransition = function(el, callback) {
			var onEndCallbackFn = function(ev) {
				if(support.transitions) {
					if(ev.target != this) return;
					this.removeEventListener(transEndEventName, onEndCallbackFn);
				}
				if(callback && typeof callback === 'function') {
					callback.call(this);
				}
			};
			if(support.transitions) {
				el.addEventListener(transEndEventName, onEndCallbackFn);
			} else {
				onEndCallbackFn();
			}
		};

	new GridFx(document.querySelector('.grid'), {
		imgPosition: {
			x: -0.5,
			y: 1
		},
		onOpenItem: function(instance, item) {
			instance.items.forEach(function(el) {
				if(item != el) {
					var delay = Math.floor(Math.random() * 50);
					el.style.WebkitTransition = 'opacity .5s ' + delay + 'ms cubic-bezier(.7,0,.3,1), -webkit-transform .5s ' + delay + 'ms cubic-bezier(.7,0,.3,1)';
					el.style.transition = 'opacity .5s ' + delay + 'ms cubic-bezier(.7,0,.3,1), transform .5s ' + delay + 'ms cubic-bezier(.7,0,.3,1)';
					el.style.WebkitTransform = 'scale3d(0.1,0.1,1)';
					el.style.transform = 'scale3d(0.1,0.1,1)';
					el.style.opacity = 0;
				}
			});
		},
		onCloseItem: function(instance, item) {
			instance.items.forEach(function(el) {
				if(item != el) {
					el.style.WebkitTransition = 'opacity .4s, -webkit-transform .4s';
					el.style.transition = 'opacity .4s, transform .4s';
					el.style.WebkitTransform = 'scale3d(1,1,1)';
					el.style.transform = 'scale3d(1,1,1)';
					el.style.opacity = 1;

					onEndTransition(el, function() {
						el.style.transition = 'none';
						el.style.WebkitTransform = 'none';
					});
				}
			});
		}
	});
})();
(function() {
	var support = {
			transitions: Modernizr.csstransitions
		},
		// transition end event name
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
		onEndTransition = function(el, callback) {
			var onEndCallbackFn = function(ev) {
				if(support.transitions) {
					if(ev.target != this) return;
					this.removeEventListener(transEndEventName, onEndCallbackFn);
				}
				if(callback && typeof callback === 'function') {
					callback.call(this);
				}
			};
			if(support.transitions) {
				el.addEventListener(transEndEventName, onEndCallbackFn);
			} else {
				onEndCallbackFn();
			}
		};

	new GridFx(document.querySelector('.grid'), {
		imgPosition: {
			x: -0.5,
			y: 1
		},
		onOpenItem: function(instance, item) {
			instance.items.forEach(function(el) {
				if(item != el) {
					var delay = Math.floor(Math.random() * 50);
					el.style.WebkitTransition = 'opacity .5s ' + delay + 'ms cubic-bezier(.7,0,.3,1), -webkit-transform .5s ' + delay + 'ms cubic-bezier(.7,0,.3,1)';
					el.style.transition = 'opacity .5s ' + delay + 'ms cubic-bezier(.7,0,.3,1), transform .5s ' + delay + 'ms cubic-bezier(.7,0,.3,1)';
					el.style.WebkitTransform = 'scale3d(0.1,0.1,1)';
					el.style.transform = 'scale3d(0.1,0.1,1)';
					el.style.opacity = 0;
				}
			});
		},
		onCloseItem: function(instance, item) {
			instance.items.forEach(function(el) {
				if(item != el) {
					el.style.WebkitTransition = 'opacity .4s, -webkit-transform .4s';
					el.style.transition = 'opacity .4s, transform .4s';
					el.style.WebkitTransform = 'scale3d(1,1,1)';
					el.style.transform = 'scale3d(1,1,1)';
					el.style.opacity = 1;

					onEndTransition(el, function() {
						el.style.transition = 'none';
						el.style.WebkitTransform = 'none';
					});
				}
			});
		}
	});
})();