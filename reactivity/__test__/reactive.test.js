// * reactive 测试用例
// ps: vitest 测试框架 -> 年轻人的第一款单元测试框架

// * 测试用语 -> 测试用例 集合 ->> 测试套件
// + describe -> 描述（作用域）
// + it -> 断言
// + expect -> 期望

// * TDD -> 测试驱动开发
// * BDD -> 行为驱动开发
// + 测试用例 -> 明确需求(tasking)
// + 开发 -> 通过测试用例
// + 增加需求/重构 -> 确保对以往功能不造成影响

// ! 红灯 -> 绿灯 -> 重构

import { describe, it, expect } from 'vitest';
import { reactive } from '../reactive.js';

describe('reactive', () => {
	it('happy path', () => {
		const original = { foo: 1 };
		const observed = reactive(original);

		expect(observed).not.toBe(original);
		expect(observed.foo).toBe(original.foo);
	})
})
