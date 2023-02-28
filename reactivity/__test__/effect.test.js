import { describe, it, expect } from 'vitest';
import { reactive } from '../reactive.js';
import { effect } from '../effect.js';

describe('effect', () => {
	it('happy path', () => {
		// * 定义一个响应式对象
		const user = reactive({
			age: 10
		})

		let nextAge;
		// * get -> 收集依赖
		effect(() => {
			nextAge = user.age + 1;
		})

		expect(nextAge).toBe(11);

		// * set -> 触发依赖
		user.age++;
		expect(nextAge).toBe(12);
	})
})
