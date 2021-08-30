/**
 * ANIMATION:
 * Hero section animation
 */
function animateIn( element, timeInterval ) {
	setTimeout( function(){
		element.classList.add('slide-in');
	}, timeInterval);
};

function devicesAnimation(){
	const STACKS = document.querySelectorAll('[class^=stack--0]');
	for ( let i = 0; i < STACKS.length; i++ ) {
		const TOPDEVICE		= STACKS[i].querySelector('.top'),
			BOTTOMDEVICE	= STACKS[i].querySelector('.bottom');
		animateIn( TOPDEVICE, (i*240) );
		animateIn( BOTTOMDEVICE, (i*450) )
	}
};

/**
 * CAPTURE EVENT:
 * Capture when feature screen added to stack.
 */
function stackLayerOpacity() {
	const LAYERS = document.querySelectorAll('.layer');
	for ( let i = 1; i < LAYERS.length-1; i++ ) {
		const CURRENT 			= LAYERS[i],
			CURRENTONTENT		= LAYERS[i].querySelector('.content');
			PREVIOUS 			= LAYERS[i-1],
			PREVIOUSCONTENT		= LAYERS[i-1].querySelector('.content');
		if( CURRENT.offsetTop <= PREVIOUS.offsetTop + PREVIOUS.offsetHeight) {
			let eq = ( ((CURRENT.offsetTop - PREVIOUS.offsetTop)/10) - (i/10) );
			if( eq > 0 ){
				PREVIOUS.style.opacity 			= Math.abs( eq/10 );
				PREVIOUSCONTENT.style.opacity 	= Math.abs( eq/1000 );
				CURRENTONTENT.style.opacity 	= eq/10;
			};
		} else if(i === 1) {
			LAYERS[0].querySelector('.content').style.opacity = 1;
			LAYERS[1].querySelector('.content').style.opacity = 0;
		} else {
			CURRENTONTENT.style.opacity 	= 0;
		};

	}
}

/**
 * Screen stacks background height
 */
function stackBackgroundHeight() {
	let background		= document.querySelector('.screens-stack .background');
		lastStackDiv	= document.querySelector('.layer.null'),
		divHeight		= lastStackDiv.offsetHeight,
		appctaDiv		= document.querySelector('.app-cta'),
		appctaHeight	= appctaDiv.offsetHeight;

	background.style.height = ( divHeight*4 + appctaHeight ) + 'px';
}

/**
 * Video popup
 */
function showVidePopup( modal ) {
	let videoBtn	= document.getElementsByClassName('watch-btn'),
		videoItem	= document.querySelector('.video-item');
	for ( btn of videoBtn ) {
		btn.addEventListener( 'click', function() {
			modal.classList.add('show');
			lockScroll();
		} )
	}
	videoItem.addEventListener( 'click', function() {
		modal.classList.add('show');
		lockScroll();
	} )
}

function closeVideoPopup( modal ) {
	let hidePopup	= document.getElementById('hide-popup'),
		closeBtn	= document.getElementById('close-popup');
	document.body.addEventListener( 'click', event => {
		if ( event.target !== hidePopup && event.target !== closeBtn ) {
			return
		}
		modal.classList.remove('show');
		unlockScroll();
	})
}

function lockScroll() {
	const BODY			= document.body;
	BODY.style.overflow	= 'hidden';
	BODY.scroll			= 'no';
}

function unlockScroll() {
	const BODY			= document.body;
	BODY.style.overflow	= 'auto';
	BODY.scroll			= 'yes';
}

/**
 * Call Functions
 */

 window.addEventListener( 'DOMContentLoaded', function(){
	const videoModal = document.querySelector('.how-it-works');
	devicesAnimation();
	stackLayerOpacity();
	stackBackgroundHeight();
	showVidePopup( videoModal );
	closeVideoPopup( videoModal );
});

window.addEventListener( 'scroll', function(){
	stackLayerOpacity();
	parallaxEffect();
});
