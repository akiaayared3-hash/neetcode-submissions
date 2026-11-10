class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
    if (s.length === 0) return 0;
  
      let map = new Map();
      let left = 0;
      let maxLength = 0;
        
       for (let right = 0; right < s.length; right++) { 
        while (map.has(s[right])) {
            map.delete(s[left])
            left++
       } 
          map.set(s[right], right)
          maxLength = Math.max(maxLength, right - left + 1)
       }
       return maxLength;
    }
    
}
