function(value) {
	const add = async (l, r) => l() + await r;
	return async (foo) => add(() => 1, foo);
}
