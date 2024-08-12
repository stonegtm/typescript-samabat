export const permutation = (char: string): string[] => {
  let results: string[] = [];

  const permute = (arr: string[], m: string[] = []) => {
    if (arr.length === 0) {
      results.push(m.join(""));
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr, m.concat(next));
      }
    }
  };
  permute(char.split(""));
  return results;
};

console.log(permutation("ab"));
