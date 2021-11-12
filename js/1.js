function XO(str) {
   let s = str.toLowerCase();
   let x = 0;
   let o = 0;
   for (let i = 0; i < s.length; i++) {

      if (s[i] === "x") {
         x++;
      } else if (s[i] === "o") {
         o++;
      } else {
         return false;
      }
   }
   if (x === o) {
      return true;
   } else {
      return false;
   }
}

console.log(XO('xoO'));
