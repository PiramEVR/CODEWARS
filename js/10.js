function grow(x) {
  let sum = 1;
  for (i = 0; i < x.length; i++) {
    sum *= x[i]
  }
  return sum;
}