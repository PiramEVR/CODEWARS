function descendingOrder(n) {
   //...
   let a = n.toString().split('').sort().reverse().join('');

   return Number(a);
}