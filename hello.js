// v1
// 我们回到最原始的
// let a = 1;
// let b = a * 2;
// console.log(b);
//
// a = 3;
// b = a * 2;
// console.log(b);

// 命令式的，面向过程

// v2
// let a = 1;
// let b;
// update();
//
// function update() {
//   b = a * 2;
// 	console.log(b);
// }
//
// a = 3;
// update();


// v3
const { effect, reactive } = require('@vue/reactivity');

let a = reactive({
	value: 1
});
let b;

effect(() => {
	b = a.value * 2;
	console.log(b);
});

a.value = 4;
