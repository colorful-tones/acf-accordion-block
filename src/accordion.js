/*
 * Accordion styling and state.
 */
import './accordion.scss';
import Accordion from '@10up/component-accordion';

if ( typeof window.ACFAccordionBlock !== 'object' ) {
	window.ACFAccordionBlock = {};
}

window.ACFAccordionBlock.Accordion = Accordion;

function accordionsInit() {
	new ACFAccordionBlock.Accordion( '.accordion' );
}

document.addEventListener( 'DOMContentLoaded', () => {
	if ( window.acf ) {
		window.acf.addAction( 'render_block_preview', accordionsInit );
	} else {
		accordionsInit();
	}
} );
