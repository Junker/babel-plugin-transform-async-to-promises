expect((await f(_ => false, async _ => 1, async _ => 0))).toBe(0)