class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        if (s.length === 0) return 0;
         
        let map = new Map<string, number>();
        let maxLen = 0;
        let maxFreq = 0
        let left = 0;
       
        for (let right = 0; right < s.length; right++) {
                const char = s[right]
                map.set(char, (map.get(char) || 0) + 1)
                maxFreq = Math.max(maxFreq, map.get(char)!)
            
            while (right - left + 1 - maxFreq > k) {
                const leftChar = s[left];
                map.set(leftChar, map.get(leftChar)! - 1)
                left++
            }

            maxLen = Math.max(maxLen, right - left + 1)
            
        }
        return maxLen;
    }
}
