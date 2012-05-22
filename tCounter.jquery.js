/**
 * A tiny jQuery counter (in Twitter style).
 *
 * @author 	kurtextrem <kurtextrem@gmail.com>
 * @license	LGPL
 * @copyright 	2012
 * @version 	1.2
 * @jquery 	>= 1.7.0
 */

!function($) {
	$.fn.tCounter = function(counterInputID, options) {
		var $this = $(this),							// the textarea
			settings = {							// settings
				maxChar: 140,						// how many chars should allowed?
				color: {						// colors for the counter
					140:	'',						// #555, grey, like twitter,
					19:	'alert',					// from 19 - 11; #5c0002 a darker red
					10:	'warn'						// from 10 - -infinity; #d40d12 a red
				}
			}
		$.extend(settings, options)						// extend the default settings with developer options.

		// the main function
		$this.on('keydown keyup', function() {					// we need both for a) repeating key press without going up b) Return, Enter etc.
			var counter = document.getElementById(counterInputID),			// the counter jQuery Obj
				length = settings.maxChar-$this.val().length			// count down (for example 140-20 = 120 chars left)

			counter.value = length							// finally write how many chars...

			$.each(settings.color, function(chars, classToAdd) {
				if (length <= chars)
					counter.classList.add(classToAdd)			// and style it (with default color),
				else
					counter.classList.remove(classToAdd)			// or unstyle it.
			})
		})
		
		return $this
	}
}(jQuery)