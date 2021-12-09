/* 
    Given an array nums containing n distinct numbers in the range [0, n],
    return the only number in the range that is missing from the array.
*/

function missingNumber(nums) {
  let numsHash = {};
  let count = 0;

  while (count <= nums.length) {
    numsHash[count] = false;
    count++;
  }

  nums.forEach((num) => {
    numsHash[num] = true;
  });

  return Object.keys(numsHash).filter((key) => numsHash[key] === false);
}
