//1480. Running Sum of 1d Array

/*Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.*/

 /*
 @param {number[]} nums
 @return {number[]}
 */
 
var runningSum = function(nums) {
    let counter = 0;
    let runningSum = [];
    for (i=0; i<nums.length; i++ ) {
        counter += nums[i]
        runningSum.push(counter);
    }
    return runningSum;
};
