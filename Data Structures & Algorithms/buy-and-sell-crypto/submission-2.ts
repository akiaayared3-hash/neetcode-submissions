class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        if(prices.length < 2) return 0;
        let maxProfit = 0
        let minePrice = prices[0]

        for (let i = 0; i < prices.length;  i++) {
            if (prices[i] < minePrice) {
             minePrice = prices[i]
            }

            maxProfit = Math.max(maxProfit, prices[i] - minePrice)
        }
      return maxProfit;
    }
    
}
