function countChange(amount, denominations) {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
  
    for (const coin of denominations) {
      for (let i = coin; i <= amount; i++) {
        dp[i] += dp[i - coin];
      }
    }
  
    return dp[amount];
  }
  console.log(countChange(4, [1, 2]));   
  console.log(countChange(10, [5, 2, 3]));
  console.log(countChange(11, [5, 7])); 
    