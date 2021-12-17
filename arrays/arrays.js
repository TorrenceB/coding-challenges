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

/* 
  Given a non-empty array of integers nums, every element appears twice except for one. 
  Find that single one.

  You must implement a solution with a linear runtime complexity and use only constant extra space.

  Input: nums = [2,2,1]
  Output: 1

  1. Utilize map data structure, initialize
    const map = new Map()
  2. Iterate array, if current element doesn't exist
    map.set(currentEl, 1)
    if current element exists value ++;
  3. Iterate map object and find key where value === 1;
  4. Return corresponding key
*/

function singleNumber(nums) {
  const store = new Map();
  const numsLen = nums.length;

  for (let i = 0; i < numsLen; i++) {
    if (!store.has(nums[i])) {
      store.set(nums[i], 1);
    } else {
      let count = store.get(nums[i]);
      store.set(nums[i], count + 1);
    }
  }

  for (const [key, value] of store) {
    if (value === 1) {
      return key;
    }
  }
}

console.log(singleNumber([4, 1, 2, 4, 1, 3, 2]));
