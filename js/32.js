function printerError(s) {
   var tmp = s.split('');
   var sum = 0;
   var errNum = 0;
   var reg = /^[n-z]+$/
   for (var i = 0; i < tmp.length; i++) {
      sum++
      if (reg.test(tmp[i])) {
         errNum++
      }
   }
   return (errNum + "/" + sum)
}