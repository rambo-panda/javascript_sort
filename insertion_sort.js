"use strict";

var insertion_sort = function(array){
	var temp_exchange_value,
		index = 1,
		length = array.length,
		min_index;

	for(; index < length; index++){

		if ((array[index]) < (array[index - 1])) {

			temp_exchange_value = array[index];

			min_index = index - 1;

			do {
				array[min_index + 1] = array[min_index];
			}while(
				--min_index > -1 && (temp_exchange_value < array[min_index])
			);

			array[min_index + 1] = temp_exchange_value;
		}
	}

	return array;
};


console.assert(
	insertion_sort([1,45, 1220,11,33,44,155, 300, 11]).join('_') === [ 1, 11, 11, 33, 44, 45, 155, 300, 1220 ].join('_'),
	'insertion_sort is not right'
);
