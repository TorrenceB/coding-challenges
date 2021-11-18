/* 
    Recursion Practice, Includes helper method recursion
    and pure recursion.
*/

/*
 * 2a. Print each item in an array in order
 *
 * Input:   arr {Array}
 * Output:  {undefined}
 *
 * Example: printArray([1,2,3]) =>
 *          1
 *          2
 *          3
 */

/* 
    1. Instantiate helper method, pass in pointer param
    2. Return helper method w/ initial value
    3. Define base case(s)
    4. Define recursive case(s)

    Input: int[];
    Output: undefined
*/
const printArray = function (arr) {
  function traverse(i) {
    if (i >= arr.length) {
      return;
    }

    console.log(arr[i]);
    traverse(i + 1);
  }

  traverse(0);
};
