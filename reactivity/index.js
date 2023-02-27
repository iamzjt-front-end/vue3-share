// v1
// 1. 回到最原始的状态
// let a = 1;
// let b = a + 1;
// console.log(b);

// a update -> update b
// a = 2;
// b = a + 1;
// console.log(b);

// 最早的实现方式  ->  命令式（面向过程）


// v2
// update b  ->  fn update
// let a = 1;
// let b;
// update();
//
// function update() {
//   b = a + 1;
//   console.log(b);
// }
//
// a = 2;
// update();


// v3
// a update  ->  update b automatic
const { effect, reactive } = require('@vue/reactivity');

// 声明一个响应式变量
let a = reactive({
	value: 1
});
let b;

effect(() => {
	// 函数
	b = a.value + 1;
	console.log(b);
});

a.value = 2;
