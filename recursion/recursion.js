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

/*
 * 2c. Reverse a string
 *
 * Input:   str {String}
 * Output:  {String}
 *
 * Example: reverseString('hello') => 'olleh'
 */

/*
  1st: reverse("hello") ==> i === 4, reversedStr === "o";
  2nd: reverse("hello") ==> i === 3, reversedStr === "ol";
  3rd: reverse("hello") ==> i === 2, reversedStr === "oll";
  4th: reverse("hello") ==> i === 1, reversedStr === "olle";
  5th: reverse("hello") ==> i === 0, reversedStr === "olleh";
  6th: reverse("hello") ==> i === -1, baseCase met
*/

/* 
    1. initialize scope variable, reversedStr = ""
    2. Instantiate and invoke helper method w/ initial values
    3. base case: str.length < 0
    4. recursive case: i - 1
*/
const reverseString = function (str) {
  let reversedStr = "";

  function traverse(i) {
    if (i < 0) return;

    reversedStr += str[i];
    traverse(i - 1);
  }

  traverse(str.length - 1);

  return reversedStr;
};

/* 
    Given a positive integer n, return an array of all the 
    binary strings of length n that DO NOT contain consecutive 1s.

    Input: n (Integer)
    Output: [Str] (Array of Strings)

    Input: 2
    Output: ["00", "01", "10"]

    Input: 3
    Output: ["000", "001", "010", "100", "101"]

    Time Complexity: O(2^N)
    Auxiliary Space Complexity: O(2^N)
    
    1. Scope variable
    2. Helper Method
    3. Base Case
    4. Recursive Case
    
    1. Init resultArr
    2. Helper method param = ""
    3. base case - if preceding num is 1
    
    Initialize an empty array and return it at the end of the function
    Initialize a helper method that takes a string, substr, as an input, and it invoked below with the empty string
    a) If the length of substr is equal to n, push substr into the result array and return
    b) Otherwise, invoke the helper function again with substr + 0 as its argument
    c) If the character at the last index of substr is a 0, then recurse with substr + 1
*/

const nonConsecutiveOnes = function (n) {
  const result = [];

  function recurse(subStr = "") {
    if (subStr.length === n) {
      result.push(subStr);
      return;
    }
    recurse(subStr + 0);
    if (subStr.charAt(subStr.length - 1) !== "1") {
      recurse(subStr + 1);
    }
  }

  recurse("");

  return result;
};

/* 
    A web developer needs to know how to design a web page's size. So, given a specific rectangular web page’s area, 
    your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:

    The area of the rectangular web page you designed must equal to the given target area.
    The width W should not be larger than the length L, which means L >= W.
    The difference between length L and width W should be as small as possible.
    Return an array [L, W] where L and W are the length and width of the web page you designed in sequence.

    Input: area = 4
    Output: [2,2]
    Explanation: The target area is 4, and all the possible ways to construct it are [1,4], [2,2], [4,1]. 
    But according to requirement 2, [1,4] is illegal; according to requirement 3,  [4,1] is not optimal compared to [2,2]. 
    So the length L is 2, and the width W is 2.
*/

const buildRectangle = function (area) {};
