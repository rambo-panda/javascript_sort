"use strict";

var bubble_sort = function(arr){
	var length = arr.length,
		index,
		temp_exchange_value;

	while(length>0){

		for(index=0; index<length-1; index++){

			if(arr[index]>arr[index+1]){

				temp_exchange_value = arr[index];

				arr[index]=arr[index+1];

				arr[index+1]=temp_exchange_value;

			}

		}

		length--;
	}

	return arr;
};

var test_arr = [1,10,5,3,10];

console.assert(
	bubble_sort(test_arr).join('_') === [1, 3, 5, 10, 10].join('_'),
	'bubble_sort is wrong'
);
