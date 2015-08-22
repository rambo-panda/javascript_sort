"use strict";

var swap = function(array, index, j){
	var tmp = array[index];
	array[index] = array[j];
	array[j] = tmp;
};

var shaker_sort = function(array){
	var left = 0,
		right = array.length -1,
		shift = 0,
		index = 0;

	while( left < right){

		for(index = left; index < right; index++) {
			if(array[index] > array[index+1]){  //將最大值往右排
				swap(array, index, index+1);
				shift = index;
			}
		}

		right = shift;

		for(index = right; index > left; index--){
			if(array[index] < array[index-1]){  //將最小值往左排
				swap(array, index, index - 1);
				shift = index;
			}
		}

		left = shift;
	}

	return array;
};

console.assert(
	shaker_sort([1,45, 1220,11,33,44,155, 300, 11]).join('_') === [ 1, 11, 11, 33, 44, 45, 155, 300, 1220 ].join('_'),
	'quick_sort is not right'
);
