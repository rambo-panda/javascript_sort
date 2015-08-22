"use strict";

var swap = function(array, desc_index, source_index){
	var desc_value = array[desc_index];

	array[desc_index] = array[source_index];
	array[source_index] = desc_value;

};

var bogo_sort = function (array) {

	// 随机交换顺序
	function shuffle(array) {
		var index,
			length = array.length;

		for(index = 0; index < length; index++) {
			var j = Math.floor(Math.random() * length);
			swap(array, index, j);
		}
	}

	// 判断是否已经排好序
	function isSorted(array) {
		var index,
			length = array.length;

		for(index = 1; index < length; index++) {
			if (array[index - 1] > array[index]) {
				return false;
			}
		}

		return true;
	}

	var sorted = false;

	while(sorted === false) { // 效率低下的位置
		shuffle(array);

		sorted = isSorted(array);
	}
	return array;
};

console.assert(
	bogo_sort([1,45, 1220,11,33,44,155, 300, 11]).join('_') === [ 1, 11, 11, 33, 44, 45, 155, 300, 1220 ].join('_'),
	'bogo_sort is not right'
);
