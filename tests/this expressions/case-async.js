expect((await f.call({ foo: async _ => 2, bar: async _ => 4 }))).toBe(6)