let activeEffect;

class ReactiveEffect {
	constructor(fn) {
		this._fn = fn;
	}

	run() {
		activeEffect = this;
		this._fn();
	}
}

// * targetMap: target -> key
const targetMap = new WeakMap();

// * target -> key -> dep
export function track(target, key) {
	let depsMap = targetMap.get(target);
	if (!depsMap) {
		targetMap.set(target, (depsMap = new Map()));
	}

	// * depsMap: key -> dep
	let dep = depsMap.get(key);
	if (!dep) {
		depsMap.set(key, (dep = new Set()));
	}

	dep.add(activeEffect);
}

export function trigger(target, key) {
	let depsMap = targetMap.get(target);
	if (!depsMap) return;

	let dep = depsMap.get(key);
	if (!dep) return;

	triggerEffects(dep);
}

function triggerEffects(dep) {
	for (const effect of dep) {
		effect.run();
	}
}

// * 《Vue.js设计与实现》
// * 副作用函数：会产生副作用的函数 ->> 直接或间接的对其他函数造成影响
// + fn ->> 依赖
export function effect(fn) {
	const _effect = new ReactiveEffect(fn);

	_effect.run();
}
