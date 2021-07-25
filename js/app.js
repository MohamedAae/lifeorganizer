/**
 * ANIMATION:
 * Hero section animation
 */

function animateIn(element, timeInterval) {
	setTimeout( function(){
		element.classList.add('slide-in');
	}, timeInterval);
};

function devicesAnimation(){
	const STACKS = document.querySelectorAll('[class^=stack--0]');
	for ( let i = 0; i < STACKS.length; i++ ) {
		const TOPDEVICE		= STACKS[i].querySelector('.top'),
			BOTTOMDEVICE	= STACKS[i].querySelector('.bottom');
		animateIn(TOPDEVICE, (i*240));
		animateIn(BOTTOMDEVICE, (i*450))
	}
};

/**
 * ANIMATION:
 * Parallax Effect
 */

function parallaxEffect() {
	let layers, layer, depth, distance, movement, translate3d;
	distance		= this.pageYOffset;
	layers 		= document.querySelectorAll('[data-type="parallax"]');
	for ( let i = 0; i < layers.length; i++ ) {
	layer 								= layers[i];
	depth 								= layer.getAttribute('data-depth');
	movement							= -(distance * depth);
	translate3d 						= 'translate3d(0, ' + movement + 'px, 0)';
	layer.style['-webkit-transform'] 	= translate3d;
	layer.style['-moz-transform'] 		= translate3d;
	layer.style['-ms-transform'] 		= translate3d;
	layer.style['-o-transform'] 		= translate3d;
	layer.style.transform 				= translate3d;
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
			let eq = (((CURRENT.offsetTop - PREVIOUS.offsetTop)/10)-(i/10));
			if(eq > 0){
				PREVIOUS.style.opacity 			= Math.abs(eq/10);
				PREVIOUSCONTENT.style.opacity 	= Math.abs(eq/1000);
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
 * Call Functions
 */

 window.addEventListener( 'DOMContentLoaded', function(){
	devicesAnimation();
	stackLayerOpacity();
});

window.addEventListener( 'scroll', function(){
	stackLayerOpacity();
	parallaxEffect();
});
