function solution(n) {
   // ...
   let d = Math.floor(n),
      i = n % d;
   return i < .25 ? d : (i < .75 ? d + .5 : d + 1);
}