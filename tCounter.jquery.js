/**
 * A tiny jQuery Counter (in Twitter Style).
 *
 * @author kurtextrem <kurtextrem@gmail.com>
 * @license CC BY-SA http://creativecommons.org/licenses/by-sa/3.0/
 * @copyright 2011-XXXX
 * @version 1.0
 * @jquery >= 1.7.0
 *
 */

(function($){
	$.fn.tCounter = function(options) {
		var _this = $(this);
		var settings = {
			maxChar: 140,
			color: {
				0: [
					'140',
					'#999'
				],
				1: [
					'19',
					'#5C0002'
				],
				2: [
					'10',
					'#D40D12'
				]
			},
			counterID: '#counter',
			counterHTML: '<div></div>',
			cursor: 'default'
		}
		$.extend(settings, options);

		if($(settings.counterID).length == 0)
			_this.after($(settings.counterHTML).attr('id', settings.counterID.replace('#', '')).css('cursor', settings.cursor));

		_this.on('keypress keydown keyup', function(){
			var counter = $(settings.counterID);
			var length = (settings.maxChar)-(_this.val().length);
			var colorObj = settings.color;
			var color = colorObj[0][1];
			if(length <= colorObj[1][0])
				color = colorObj[1][1];
			if(length <= colorObj[2][0])
				color = colorObj[2][1];
			
			counter.text(length).css('color', color);
		});
	}
})(jQuery);