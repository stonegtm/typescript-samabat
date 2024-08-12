export const findFaceSmileAndCount = (arr: string[]): number => {
  const smileyRegex = /^[;:][\-~]?[)D]$/;
  return arr.filter((face) => smileyRegex.test(face)).length;
};
