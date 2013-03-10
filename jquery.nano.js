/* Nano Templates (Tomasz Mazur, Jacek Becela) */

(function($) {
	var _regex = /\{([\w\.]*)\}/g;
	$.fn.nano = function(template, data) {
		return template.replace(_regex, function (str, key) {
			var keys = key.split('.'), value = data[keys.shift()];
			$.each(keys, function() { value = value[this]; });
			return (value === null || value === undefined) ? '' : value;
		});
	};
}(jQuery));