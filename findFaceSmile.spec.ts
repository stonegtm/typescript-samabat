import { findFaceSmileAndCount } from "./findFaceSmile";

describe("findFaceSmileAndCount", () => {
  test("return 6 for valid smiley faces", () => {
    const input = [":)", ";D", ":-)", ";~D", ";-(", ":-D", ":-~", "xyz"];
    expect(findFaceSmileAndCount(input)).toBe(5);
  });

  test('should return 1 for a single valid smiley face', () => {
    const input = [":)"];
    expect(findFaceSmileAndCount(input)).toBe(1);
  });

});
