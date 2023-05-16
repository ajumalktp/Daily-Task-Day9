function balancedParens(n) {
    const result = [];
    generateParentheses("", n, n, result);
    return result;
  }
  
  function generateParentheses(current, leftCount, rightCount, result) {
    if (leftCount === 0 && rightCount === 0) {
      result.push(current);
      return;
    }
  
    if (leftCount > 0) {
      generateParentheses(current + "(", leftCount - 1, rightCount, result);
    }
  
    if (rightCount > leftCount) {
      generateParentheses(current + ")", leftCount, rightCount - 1, result);
    }
  }
  console.log(balancedParens(0));  
  console.log(balancedParens(1));  
  console.log(balancedParens(2));  
  console.log(balancedParens(3)); 
    