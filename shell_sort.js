"use strict";

var shell_pass = function(array, increment){

	var temp_exchange_value,
		rest_index,
		index = increment;

	for(; index < array.length; index++){

		//进行分段比较
		if (array[index] < array[index - increment]){

			temp_exchange_value = array[index];

			rest_index = index - increment;

			do {
				array[rest_index + increment] = array[rest_index];
				rest_index = rest_index - increment;
			}while(rest_index > -1 && (temp_exchange_value < array[rest_index]));

			array[rest_index + increment] = temp_exchange_value;
		}
	}

	return array;
};

var shell_sort = function(array){

	var increment = array.length;

	do {

		increment = (increment / 3 | 0) + 1;  //取整数

		array = shell_pass(array, increment);

	}while(increment > 1);

	return array;
};

console.assert(
	shell_sort([1,45, 1220,11,33,44,155, 300, 11]).join('_') === [ 1, 11, 11, 33, 44, 45, 155, 300, 1220 ].join('_'),
	'quick_sort is not right'
);
