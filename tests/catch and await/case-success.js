expect((await f(async _ => "success", async _ => false))).toBe("success")