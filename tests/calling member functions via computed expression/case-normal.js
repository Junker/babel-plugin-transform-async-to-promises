expect((await f(async _ => true, { baz: arg => arg }, "baz"))).toBe(true)