"use strict";

// 满二叉树(堆)排序实现
function Heap(array, max_count){

	this.heap = array;
	this.max_count = max_count;

	var swap = function(array, desc_index, source_index){
			var desc_value = array[desc_index];

			array[desc_index] = array[source_index];
			array[source_index] = desc_value;

		},
		min_heapify = function (array, cur_index, head_size){
			var top_node_index,
				left_subtree,
				right_subtree;

			top_node_index = cur_index;

			do{

				// 常规规则是  left :  2 * cur_index   right : 2 * cur_index + 1  但是我们这里是从下标0 开始计算的 故 往回减一
				left_subtree = 2 * top_node_index + 1;

				right_subtree = 2 * (top_node_index + 1);

				/*
				*         1   top_node_index
				*
				* 2(left)    3(right)  子节点也是从小到大排序
				*
				*/

				if(left_subtree < head_size && array[cur_index] < array[left_subtree]){
					top_node_index = left_subtree;
				}

				if(right_subtree < head_size && array[top_node_index] < array[right_subtree]){
					top_node_index = right_subtree;
				}

				swap(array, top_node_index, cur_index);

			}while(top_node_index !== cur_index && (cur_index = top_node_index) );

		},
		build_min_heap  = function(array){
			var parent_node_index = Math.floor(array.length / 2) - 1,
				cur_index = parent_node_index;

			while(cur_index >=0 ){
				min_heapify(array, cur_index, array.length);
				cur_index--;
			}

		},
		sort = function(array, max_count){

			if(array.length > max_count){
				throw '太大了';
			}

			build_min_heap(array);

			var index = array.length -1;

			while(index > 0){
				swap(array, 0, index);
				min_heapify(array, 0, index);
				index--;
			}

			return array;
		};

	this.sort = sort;
	this.heap = sort(array);
}

Heap.prototype.set = function(value){
	value  = [].concat(value);

	if(this.heap.length + value.length > this.max_count){
		throw '太大了';
	}

	this.heap = this.heap.concat(value);

	this.sort(this.heap);

};

var test_arr = [1,2,5,12,7,22,28,46,92,17,25,19,36,99];

var result = [ 1, 2, 5, 7, 12, 17, 19, 22, 25, 28, 36, 46, 92, 99 ];

var heap = new Heap(test_arr),
	built_heap = heap.heap;

console.log(built_heap);

console.assert(built_heap.join(',') === result.join(',') , 'not equal');

heap.set([21, 600, 200]);

console.log(heap.heap);
result = [ 1, 2, 5, 7, 12, 17, 19, 21, 22, 25, 28, 36, 46, 92, 99, 200, 600 ];

console.assert(heap.heap.join(',') === result.join(',') , 'not equal');
