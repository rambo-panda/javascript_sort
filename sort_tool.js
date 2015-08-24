"use strict";

var slice = function(array, begin, end){

	(begin < 0) && (begin = array.length + begin);

	(end === undefined) && (end = array.length);

	--begin;

	var new_array = [],
		index = begin;

	for(; index < array.length;  index++){
		if(
			index > begin
			&&
			index < end
		){
			new_array[new_array.length] = array[index];
		}
	}

	return new_array;

};


var parse_int = function(number){
	return Number(String(number).replace(/\.(\d+)/g, ''));
};

var convert_argument_to_array = function(args){
	return Array.prototype.slice.call(args);
};

var is_array = function(obj){
	return Object.prototype.toString.call(obj) === '[object Array]';
};

var floor = function(number){
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


var splice = function(array, start, end){

	// TODO 因为splice 本身是一个不纯的函数， 因此暂时还未想到一个方法。可以在函数体内更改 变量Array 或者说突破 prototype 赋值操作
	// Array.prototype.a = function(){this = [1,2,3]}; //  throw   ReferenceError: Invalid left-hand side in assignment

	return array.splice(start, end);

	//end   || (end = array.length);
	//start || (start = 0);

	//if(start < 0){
	//	start = array.length - start;
	//}

	//var new_array = [],
	//	splice_array = [],
	//	index = 0;

	//end += start - (start > -1 ? 1 : 0);

	//var array_value;

	//for(; index < array.length; index++){
	//	array_value = array[index];

	//	if(index < start || index > end){
	//		new_array.push(array_value);
	//	}else{
	//		splice_array.push(array_value);
	//	}
	//}

	//array = new_array;

	//return splice_array;

};


var swap = function(array, desc_index, source_index){
	var desc_value = array[desc_index];

	array[desc_index] = array[source_index];
	array[source_index] = desc_value;

};

module.exports = {
	slice                     : slice,
	splice                    : splice,
	parse_int                 : parse_int,
	floor                     : floor,
	concat_arr                : concat_arr,
	is_array                  : is_array,
	swap                      : swap,
	convert_argument_to_array : convert_argument_to_array
};
