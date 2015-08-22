"use strict";

var count_sort = function(array, min_value, max_value){
	var index, z = 0, count = [];

	for(index = min_value; index <= max_value; index++) {
		count[index] = 0;
	}

	for(index=0; index < array.length; index++) {
		count[array[index]]++;
	}

	for(index = min_value; index <= max_value; index++) {
		while (count[index]-- > 0) {
			array[z++] = index;
		}
	}

	return array;
};

console.assert(
	count_sort([1,45, 1220,11,33,44,155, 300, 11], 0, 1222).join('_') === [ 1, 11, 11, 33, 44, 45, 155, 300, 1220 ].join('_'),
	'count_sort is not right'
);
