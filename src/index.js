module.exports = function check(str, bracketsConfig) {

  const isOpenBracket = (br) => {
    for (let i=0; i < bracketsConfig.length; i++) {
        if (br === bracketsConfig[i][0]) return true;
      }
      return false;
    };

  const getValidClosedBracket = (br) => {
    for (let i=0; i < bracketsConfig.length; i++) {
        if (br === bracketsConfig[i][0]) return bracketsConfig[i][1];
    }
  };

  const isBracketsEqual = (br) => {
    for (let i=0; i < bracketsConfig.length; i++) {
      if (br === bracketsConfig[i][0] && br === bracketsConfig[i][1]) return true;
    }
    return false;
  };

  let stack = [];


  for (let i = 0; i < str.length; i++) {
    if (isBracketsEqual(str[i])) {
      if (stack.length > 0 && stack[stack.length - 1] === str[i]) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    }
    else if (isOpenBracket(str[i])) {
      stack.push(str[i]);
    }
    else {
      if (stack.length === 0) {
        return false;
      }


  let lastOpenBracket = stack.pop()

      if (getValidClosedBracket(lastOpenBracket) !== str[i]) {
        return false;
      }

    }
  }

  return stack.length === 0;


}

