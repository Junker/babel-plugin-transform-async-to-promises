expect((await f(() => ["foo", "bar", "baz"]))).toEqual(["bar", "baz"]);
