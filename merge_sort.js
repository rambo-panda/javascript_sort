"use strict";

var sort_tool = require('./sort_tool');

var merge = function(left, right) {
		var final_arr = [];

		while(left.length  && right.length){
			final_arr.push(left[0] <= right[0] ? left.shift() : right.shift());
		}

		return final_arr.concat(left.concat(right));
	},
	slice = sort_tool.slice,
	parse_int = sort_tool.parse_int;

var merge_sort = function(array) {

	if (array.length < 2){
		return array;
	}

	var _left = slice(array, 0, parse_int(array.length/2)),
		_right = slice(array, parse_int(array.length/2));

	return merge(
		merge_sort(_left),
		merge_sort(_right)
	);
};

console.assert(
	merge_sort([1,45, 1220,11,33,44,155, 300, 11]).join('_') === [ 1, 11, 11, 33, 44, 45, 155, 300, 1220 ].join('_'),
	'merge_sort is not right'
);
