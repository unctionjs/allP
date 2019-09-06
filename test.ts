
import allP from "./index.ts";

test(() => {
  return allP([
    Promise.resolve("aa"),
    Promise.resolve("bb"),
  ])
    .then((resolution) => expect(resolution).toEqual([
        "aa",
        "bb",
      ]));
});
