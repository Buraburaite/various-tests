function shortestDistance(words, a, b) {

  let cWord;
  const aList = [], bList = [];
  for (let i = 0; i < words.length; i++) {
    cWord = words[i];
    if      (cWord === a) { aList.push(i); continue; }
    else if (cWord === b) { bList.push(i); }
  }

  console.log(aList, bList);

  const distances = [];
  for (let i = 0; i < aList.length; i++) {
    for (let j = 0; j < bList.length; j++) {
      distances.push(Math.abs(aList[i] - bList[j]));
    }
  }

  console.log(distances, Math.min(...distances));


  return Math.min(...distances);
}

wordList = ['practice', 'makes', 'perfect', 'makes', 'coding'];
console.log(shortestDistance(wordList, 'makes', 'coding'));
