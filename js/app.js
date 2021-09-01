/**
 * Responsive nav toggle
 */
function responsiveNav() {
	let toggleBtn = document.querySelector(".toggle-menu"),
		navLinks = document.querySelector("ul");
	toggleBtn.onclick = function () {
		navLinks.classList.toggle("open");
	}
}

/**
 * ANIMATION:
 * Hero section animation
 */
function animateIn( element, timeInterval ) {
	setTimeout( function(){
		element.style.visibility = 'visible';
		element.classList.add('slide-in');
	}, timeInterval);
};

function devicesAnimation(){
	const STACKS = document.querySelectorAll('[class^=stack--0]');
	for ( let i = 0; i < STACKS.length; i++ ) {
		const TOPDEVICE		= STACKS[i].querySelector('.top'),
			BOTTOMDEVICE	= STACKS[i].querySelector('.bottom');
		animateIn( TOPDEVICE, (i*240) );
		animateIn( BOTTOMDEVICE, (i*450) );
	}
};

/**
 * Video popup
 */
function showVideoPopup( modal ) {
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

/**
 * Helper Functions
 */
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
	responsiveNav();
	const videoModal = document.querySelector('.how-it-works');
	devicesAnimation();
	showVideoPopup( videoModal );
	closeVideoPopup( videoModal );
});
