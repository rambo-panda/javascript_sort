"use strict";

var base_bucket_sort = function(array){
	var bucket = [], // 正数桶
		negativeBucket = [], // 负数桶
		result = [],
		l = array.length,
		i,
		j,
		k,
		abs;

	// 入桶
	for (i = 0; i < l; i++) {
		if (array[i] < 0) {
			abs = Math.abs(array[i]);
			if (!negativeBucket[abs]) {
				negativeBucket[abs] = [];
			}
			negativeBucket[abs].push(array[i]);

		} else {
			if (!bucket[array[i]]) {
				bucket[array[i]] = [];
			}
			bucket[array[i]].push(array[i]);
		}
	}
	// 出桶
	l = negativeBucket.length;
	for (i = l - 1; i >= 0; i--) {
		if (negativeBucket[i]) {
			k = negativeBucket[i].length;
			for (j = 0; j < k; j++) {
				result.push(negativeBucket[i][j]);
			}
		}
	}

	l = bucket.length;
	for (i = 0; i < l; i++) {
		if (bucket[i]) {
			k = bucket[i].length;
			for (j = 0; j < k; j++) {
				result.push(bucket[i][j]);
			}
		}
	}

	return result;
};

console.assert(
	base_bucket_sort([1,45, 1220,11,33,44,155, 300, 11]).join('_') === [ 1, 11, 11, 33, 44, 45, 155, 300, 1220 ].join('_'),
	'base_bucket_sort is not right'
);


var range_bucket_sort = function(array, range){
	var result = [],
		bucket = [],
		bucketCount,
		l = array.length,
		i,
		j,
		k,
		s,
		max = array[0],
		min = array[0],
		temp;

	for (i = 1; i < l; i++) {

		if (array[i] > max) {
			max = array[i];
		}

		if (array[i] < min) {
			min = array[i];
		}

	}
	min = min - 1;

	bucketCount = Math.ceil((max - min) / range); // 需要桶的数量

	for (i = 0; i < l; i++) {
		temp = array[i];
		for (j = 0; j < bucketCount; j++) {
			if (temp > (min + range * j) && temp <= (min + range * (j + 1))) { // 判断放入哪个桶
				if (!bucket[j]) {
					bucket[j] = [];
				}
				// 通过插入排序将数字插入到桶中的合适位置
				s = bucket[j].length;
				if (s > 0) {
					for (k = s - 1; k >= 0; k--) {
						if (bucket[j][k] > temp) {
							bucket[j][k + 1] = bucket[j][k];
						} else {
							break;
						}
					}
					bucket[j][k + 1] = temp;
				} else {
					bucket[j].push(temp);
				}
			}
		}
	}

	for (i = 0; i < bucketCount; i++) { // 循环取出桶中数据
		if (bucket[i]) {
			k = bucket[i].length;
			for (j = 0; j < k; j++) {
				result.push(bucket[i][j]);
			}
		}
	}

	return result;
};

console.assert(
	range_bucket_sort([1,45, 1220,11,33,44,155, 300, 11], 30).join('_') === [ 1, 11, 11, 33, 44, 45, 155, 300, 1220 ].join('_'),
	'base_bucket_sort is not right'
);
