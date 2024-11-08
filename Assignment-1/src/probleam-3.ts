type occarance =  (sentences: string, selectedword : string)  => number;

const countWordOccurrences : occarance = (fullsentence, word) => {
  const words = fullsentence.toLowerCase().split(" ");
  const selectedword = word.toLowerCase();
  let count = 0;
  for (const i of words) {
    if (i === selectedword) {
      count++;
    }
  }
  return count;
};

const totalCount: number =  countWordOccurrences("I love  typescript ", "typescript") ;
console.log(totalCount);
