"use strict";

var sort_tool = require('./sort_tool'),
	swap = sort_tool.swap;

//http://www.davidhampgonsalves.com/Javascript-QuickSelect
function quickSelect(array, k){

	if(--k < 0){
		throw "k必须大于0";
	}

	var left = 0,
		right = array.length - 1;

	while(true){
		if( right <= left + 1 ) {
			if( right === left + 1 && array[right] < array[left] ){
				swap( array, left, right );
			}
			return array[k];
		} else {
			//the unsigned bitshift has the effect of dividing by 2
			//and discarding any remainder
			var middle = ( left + right ) >>> 1;

			swap( array, middle, left + 1 );

			if( array[ left ] > array[ right ] ){
				swap( array, left, right );
			}

			if( array[ left + 1 ] > array[ right ] ){
				swap( array, left + 1, right );
			}

			if( array[ left ] > array[ left + 1 ] ){
				swap( array, left, left + 1 );
			}

			var i = left + 1,
				j = right;

			var pivot = array[ i ];

			while( true ) {
				i++;
				while( array[ i ] < pivot ){
					i++;
				}

				j--;

				while( array[ j ] > pivot ){
					j--;
				}

				if( j < i ){
					break;
				}
				swap(array, i, j);
			}

			array[left + 1] = array[j];
			array[j] = pivot;

			if( j >= k ){
				right = j - 1;
			}

			if( j <= k ){
				left = i;
			}
		}
	}
}

console.assert(
	quickSelect([1,2,3,4,5], 1) === 1,
	'quickSelect zero is error'
);
console.assert(
	quickSelect([1,2,3,4,5], 2) === 2,
	'quickSelect two is error'
);


//http://blog.teamleadnet.com/2012/07/quick-select-algorithm-find-kth-element.html
var select_kth = function(array, k){

	if(--k < 0){
		throw '非法参数 k 必须大于0';
	}

	var from = 0,
		to = array.length - 1;

	while (from < to) {

		var r = from,
			w = to,
			mid = array[Math.floor((r + w) / 2)];

		// stop if the reader and writer meets
		while (r < w) {

			if (array[r] >= mid) { // put the large values at the end
				swap(array, w, r);
				w--;
			} else { // the value is smaller than the pivot, skip
				r++;
			}
		}

		// if we stepped up (r++) we need to step one down
		if(array[r] > mid){
			r--;
		}

		// the r povarer is on the end of the first k elements
		if (k <= r) {
			to = r;
		} else {
			from = r + 1;
		}

	}

	return array[k];

};


console.assert(
	select_kth([1,2,3,4,5], 1) === 1,
	'select_kth one is error'
);

console.assert(
	select_kth([1,6,4,2,3,5], 2) === 2,
	'select_kth two is error'
);




var find_second_max_number = function(array){
	var first_max = -18446744073709552000,
		second_max = -18446744073709552000,
		array_length = array.length,
		array_value;

	while(array_length-- > 0){
		array_value = array[array_length];

		if(array_value > first_max){
			second_max = first_max;
			first_max = array_value;
		}else if(array_value > second_max){
			second_max = array_value;
		}

	}

	return second_max;

};

console.assert(4 === find_second_max_number([5,4,3,2,1]), 'find second max reverse  is error');
console.assert(5 === find_second_max_number([1, 4, 10, 5,2,4,3,1]), 'find second sort is random  is error');
console.assert(3 === find_second_max_number([1,2,3,4]), 'find second positive sequence is error');
