/*
 * Accordion styling and state.
 */
import './accordion.scss';

class Accordion {
	constructor(domNode) {
		this.rootEl = domNode;
		this.buttonEl = this.rootEl.querySelector('button[aria-expanded]');

		const controlsId = this.buttonEl.getAttribute('aria-controls');
		this.contentEl = document.getElementById(controlsId);

		this.open = this.buttonEl.getAttribute('aria-expanded') === 'true';

		// Add event listeners.
		this.buttonEl.addEventListener('click', this.onButtonClick.bind(this));
	}

	onButtonClick() {
		this.toggle(!this.open);
	}

	toggle(open) {
		// Don't do anything if the open state doesn't change.
		if (open === this.open) {
			return;
		}

		// Update the internal state.
		this.open = open;

		// Handle DOM updates.
		this.buttonEl.setAttribute('aria-expanded', `${open}`);

		if (open) {
			this.contentEl.removeAttribute('hidden');
		} else {
			this.contentEl.setAttribute('hidden', '');
		}
	}

	// Add public open and close methods for convenience
	open() {
		this.toggle(true);
	}

	close() {
		this.toggle(false);
	}
}

function initAccordion() {
	const accordions = document.querySelectorAll('.accordion h3');

	accordions.forEach((accordionEl) => {
		new Accordion(accordionEl);
	});
}

// Initialize accordions.
document.addEventListener('DOMContentLoaded', () => {
	// Init ACF's preview.
	if (window.acf) {
		window.acf.addAction('render_block_preview/type=accordion', initAccordion )
	} else {
		initAccordion();
	}
});
