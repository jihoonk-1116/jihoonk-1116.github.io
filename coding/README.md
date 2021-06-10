# LeetCode Coding Problems

## Array

### 1.Two Sum [Easy]
<a href = "https://leetcode.com/problems/two-sum/"> [Link] </a>

#### Description
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

![image](https://user-images.githubusercontent.com/76544061/121266282-3548c100-c888-11eb-98ee-4cf481873a72.png)

#### Solution

This coding problem is to find two indices that the sum of their elements are same as target argument.
To find them, we need to iterate nums[] array at least once. (O(n))
For brute force answer, using two For loops can successfully return the answer. 

**Brute force**
```
class Solution {
    public int[] twoSum(int[] nums, int target) {
        for(int i=0;i<nums.length;i++){         //first index
            for(int j=i+1;j<nums.length;j++){   //second index
                if(nums[i] + nums[j] == target){  //if the two numbers exist, return them as int array
                    return new int[] {i,j};
                 }
            }
         }
        return null; //if there is no the two numbers, return null
     }
}
```
**Complexity: O(n^2) , Space Complexity: O(1)**
**->Too expensive**

**Suggested Solution: Two-Pass HashTable (by LeetCode)**
The suggested solution uses Hashmap to reduce searching time. 
 

```
    class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();  //Initialize Hashmap
        for (int i = 0; i < nums.length; i++) {
            map.put(nums[i], i);          //Put an element as key and its index as value
        }
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
             
            if (map.containsKey(complement) && map.get(complement) != i) {   
                 //if complement is equal to an element in the array, it means that the element and nums[i] is answer.
               //Fast look up using containsKey() method to find equal value as key, and it should not be itself.
                return new int[] { i, map.get(complement) }; //return as integer array
            }
        }
        throw new IllegalArgumentException("No two sum solution");
    }
}
```

**Complexity: O(n) = Traverse the list(O(n)) + look up time (O(1)) , Space Complexity: O(n)**

### 2. 3 Sum [Medium]
<a href = "https://leetcode.com/problems/3sum/"> [Link] </a>

#### Description
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] <br>
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. <br>
Notice that the solution set must not contain duplicate triplets. <br>

![image](https://user-images.githubusercontent.com/76544061/121587159-7b299480-ca02-11eb-9c25-4d4603555cce.png)

#### Solution
