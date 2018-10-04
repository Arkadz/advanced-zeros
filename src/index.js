module.exports = function getZerosCount(number, base) {
  
  let z, temp, tempBase, tempNumber;
  let a = 0;
  
  tempNumber = number;
  tempBase = base;

  for (let i = 2; i <= base; i++) {
    if (tempBase % i == 0) {
      a = 0;
      while (tempBase % i == 0) {
      a++;
      tempBase = Math.floor(tempBase / i);
      }
      z = 0;
      temp = number;
      while (temp / i > 0) {
      z += Math.floor(temp / i);
      temp = Math.floor(temp / i);
      }
      if (tempNumber > z / a) {
      tempNumber = z / a;
      }
    }  
  }
return Math.floor(tempNumber);
}