async function(foo) {
	var result = await foo["bar"]();
	return result || result;
}
