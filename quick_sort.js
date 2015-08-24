"use strict";

var sort_tool = require('./sort_tool');

var quick_sort = function(array) {

	if (array.length <= 1) {
		return array;
	}

	var pivot_index = sort_tool.floor(array.length / 2),
		pivot = sort_tool.splice(array, pivot_index, 1)[0],
		left = [],
		right = [],
		temp_value,
		index = 0;

	for (; index < array.length; index++){

		temp_value = array[index];

		(temp_value < pivot ? left : right).push(temp_value);

	}

	return sort_tool.concat_arr(
		quick_sort(left),
		[pivot],
		quick_sort(right)
	);

};


console.assert(
	quick_sort([1,45, 1220,11,33,44,155, 300, 11]).join('_') === [ 1, 11, 11, 33, 44, 45, 155, 300, 1220 ].join('_'),
	'quick_sort is not right'
);
