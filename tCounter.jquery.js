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
	$.fn.tCounter.defaults = {
		maxChars: 140,
		ranges: {			// char ranges to classes (index: char limit, value: index of 'cls' array)
			140: 0,			// #555, grey, like twitter,
			19:	1,			// from 19 - 11; #5c0002 a darker red
			10:	2			// from 10 - -infinity; #d40d12 a red
		},
		cls: ['', 'alert', 'warn'],
		
		$input: null,
		$counter: null,
		_cls: '' // joined classes
	}
	
	$.fn.tCounter = function(counterInputID, options) {
		options = $.extend({}, options, $.fn.tCounter.defaults)
		options.$counter = $('#' + counterInputID) 
		options._cls = options.cls.join(' ')
		
		return options.$input = $(this)
			.on('keyup keydown', function (e) {
				tCounter(options)
			})
			.on('input', function() {
				options.$input.off('keydown') // input is supported, turn off keydown + keyup#
				tCounter(options)
			})
	}
	
	function tCounter(options) {
		var	left = settings.maxChars - options.$input.val().length // XXX chars left
		options.$counter.val(left).text(left)
		
		var cls = ''
		$.each(options.ranges, function (cLeft, clsI) {
			if (cLeft <= left)
				cls = options.cls[clsI]
		})
		options.$counter.removeClass(options._cls)
		options.$counter.addClass(clsI)
	}
}(jQuery);
