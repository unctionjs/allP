/* eslint-disable flowtype/require-return-type */
import {test} from "tap"

import allP from "./index"

test(({same}) => {
  return allP([
    Promise.resolve("aa"),
    Promise.resolve("bb"),
  ])
    .then((resolution) => same(
      resolution, [
        "aa",
        "bb"
      ]))
})
