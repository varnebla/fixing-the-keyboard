// Write a function that returns the broken key(s) of a keyboard. 
// Broken keys should be ordered by when they first appear in the sentence.
// Only one broken key per letter should be listed.
// Letters will all be in lower case.
// If there is no broken key it should return -1.

// The function looks like:
// findBrokenKeys(correct phrase, what you actually typed)

// Examples: 
// findBrokenKeys("hakuna matata", "hqkunq mqtqtq") => return ["a"]


findBrokenKeys = (str1, str2) => {
  // write your code HERE
  const arr1 = str1.split('');
  const arr2 = str2.split('');
  if(str1 === str2) return -1
  const result = [];
  for (let i = 0; i<arr1.length ; i++) {
    if (arr1[i] !== arr2[i]){
      
      if(result.indexOf(arr1[i]) === -1) result.push(arr1[i]);
      
    }
    
    console.log(result);
  }
return result;

};

module.exports = findBrokenKeys;