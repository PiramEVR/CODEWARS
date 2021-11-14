function isDivideBy(number, a, b) {
   // good luck
   if (number % a === 0 && number % b === 0) {
      return true;
   } else {
      return false;
   }
}

isDivideBy(-12, 2, -6);
isDivideBy(-12, 2, -5);
isDivideBy(45, 1, 6);
isDivideBy(45, 5, 15);
isDivideBy(4, 1, 4);
isDivideBy(15, -5, 3);