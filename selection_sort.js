"use strict";

var swap = function(array, desc_index, source_index){
	var desc_value = array[desc_index];

	array[desc_index] = array[source_index];
	array[source_index] = desc_value;

};

var selection_sort = function(array){
	var index = 0,
		length = array.length;

	for(; index < length; index++){

		var min_value_index = index,
			rest_array_index = index + 1;

		for (; rest_array_index < length; rest_array_index++) {
			array[rest_array_index] < array[min_value_index] && (min_value_index = rest_array_index);
		}

		min_value_index !== index && swap(array, index, min_value_index);

	}

	return array;
};


console.assert(
	selection_sort([1,10,11,1,5,3,9,100]).join('_') === [1, 1, 3, 5, 9, 10, 11, 100].join('_'),
	'selection_sort not right'
);

