async function() {
	var result = false;
	for (var i = 0; i < arguments.length; i++) {
		if (await arguments[i]())
			result = true;
	}
	return result;
}
