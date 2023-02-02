/*

Source: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

*/

function reverseString(str) {
  let split = str.split("");
  let reverse = split.reverse();
  let join = reverse.join("");
  return join;
}

module.exports = reverseString;
