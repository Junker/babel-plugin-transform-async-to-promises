expect((await f(async _ => 5, async _ => 2))).toBe(2)