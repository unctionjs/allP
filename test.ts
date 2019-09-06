
import allP from "./index";

test("works", () => {
  return allP([
    Promise.resolve("aa"),
    Promise.resolve("bb"),
  ])
    .then((resolution) => expect(resolution).toEqual([
        "aa",
        "bb",
      ]));
});
