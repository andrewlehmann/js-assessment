stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   * 
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   * 
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, maxAmount) {
    // start with 1 since there's always at least one of a letter
    let count = 1;
    let returnString = str.charAt(0);

    for(let i = 1; i < str.length; i++) {
      if (str.charAt(i) == str.charAt(i-1)) {
        if (++count <= maxAmount) {
          returnString += str.charAt(i);
        }
      } else {
        count = 1;
        returnString += str.charAt(i);
      }
    }

    return returnString;
  },

  /**
   * Reverses a string of text
   * 
   * Example: reverseString('abc') should be 'bca'
   * 
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
    return str.split('')
      .reverse()
      .join('');
  },
};
