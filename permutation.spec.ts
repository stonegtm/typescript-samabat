import { permutation } from "./permutation";

describe("permutation", () => {
  test('return permutations for ab"', () => {
    const result = permutation("ab");
    expect(result).toEqual(["ab", "ba"]);
  });

  test(" empty input", () => {
    const result = permutation("");
    expect(result).toEqual([""]);
  });
});
