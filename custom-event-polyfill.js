/*
 * IE >= 9 polyfill
 * from https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
 */

(function() {
	if (typeof window.CustomEvent === 'function') {
		return false;
	}

	function CustomEvent(event, params) {
		params = params || { bubbles: false, cancelable: false, detail: undefined };
		var event = document.createEvent('CustomEvent');
		event.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
		return event;
	}

	CustomEvent.prototype = window.Event.prototype;

	window.CustomEvent = CustomEvent;
})();
