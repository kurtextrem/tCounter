/**
 * A tiny jQuery Counter (in Twitter Style).
 *
 * @author kurtextrem <kurtextrem@gmail.com>
 * @license CC BY-SA http://creativecommons.org/licenses/by-sa/3.0/
 * @copyright 2011
 * @version 1.1
 * @jquery >= 1.7.0
 */

(function($){
	$.fn.tCounter = function(counterID, options) {
		var _this = $(this);
		var settings = {			// settings
			maxChar: 140,			// how many chars are allowed?
			color: {			// colors for the counter
				0: [
					'140',
					'#999'		// grey, like twitter
				],
				1: [
					'19',		// from 19-11
					'#5C0002'	// a darker red
				],
				2: [
					'10',		// from 10- -infinity
					'#D40D12'	// a red
				]
			}
		}
		$.extend(settings, options);		// extend the default settings with user input.

		// the main function
		_this.on('keypress keydown keyup', function(){		// we need keypress for keyrepeats, keydown for return, shift etc and keyup for 'good' counting.
			var counter = $(counterID);			// the counter jQuery Obj
			var length = (settings.maxChar)-(_this.val().length);	// count down (for example 140-20 = 120 chars left)
			var colorObj = settings.color;			// the colors
			var color = colorObj[0][1];			// the default color
			if(length <= colorObj[1][0])			// if it's under 19...
				color = colorObj[1][1];			// ...use the color.
			if(length <= colorObj[2][0])			// if it's under 10...
				color = colorObj[2][1];			// ...use the color.
			
			counter.text(length).css('color', color);	// finaly write how many chars.
		});
		
		// returning something now would make no sense I think.
	}
})(jQuery);