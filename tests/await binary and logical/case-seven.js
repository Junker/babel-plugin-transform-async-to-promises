expect((await f(async _ => 0, async _ => true, async _ => 2))).toBe(0);
