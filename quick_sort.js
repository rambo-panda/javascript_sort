"use strict";

var convert_argument_to_array = function(args){
		return Array.prototype.slice.call(args);
	},
	is_array = function(obj){
		return Object.prototype.toString.call(obj) === '[object Array]';
	},
	floor = function(number){
		var right_num = String(number).match( /-?(\d+)\./);

		if(right_num === null){
			return NaN;
		}

		right_num = parseInt(right_num, 10);

		return number < 0 ?  -right_num - 1 : right_num;
	};

var concat_arr = function(){

	var need_concat = convert_argument_to_array(arguments),
		need_concat_length = need_concat.length,
		array_form_arguments,
		need_concat_index = 0;

	var new_array = [];

	while(need_concat_index < need_concat_length){

		array_form_arguments = need_concat[need_concat_index++];

		for(var index = 0; index< array_form_arguments.length; index++){

			var temp_array = array_form_arguments[index];

			new_array[new_array.length] = is_array(temp_array) ? concat_arr(new_array, temp_array) : temp_array;
		}

	}

	return new_array;

};

var quick_sort = function(arr) {

	if (arr.length <= 1) {
		return arr;
	}

	var pivotIndex = floor(arr.length / 2),
		pivot = arr.splice(pivotIndex, 1)[0],
		left = [],
		right = [],
		temp_value,
		index = 0;

	for (; index < arr.length; index++){

		temp_value = arr[index];

		(temp_value < pivot ? left : right).push(temp_value);

	}

	return concat_arr(
		quick_sort(left),
		[pivot],
		quick_sort(right)
	);

};


console.assert(
	quick_sort([1,45, 1220,11,33,44,155, 300, 11]).join('_') === [ 1, 11, 11, 33, 44, 45, 155, 300, 1220 ].join('_'),
	'quick_sort is not right'
);
