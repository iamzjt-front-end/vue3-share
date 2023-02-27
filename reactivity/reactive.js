export function reactive(raw) {
	return new Proxy(raw, {
		get(target, key) {
			return Reflect.get(target, key);
		},
		set(target, key, value) {
			return Reflect.set(target, key, value);
		}
	});
}
