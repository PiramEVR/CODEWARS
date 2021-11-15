// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    let m0, m1;
  for(let i=0; i<ages.length; i++) {
    if( typeof m0 === 'undefined') {
      m0 = ages[i];
    } else if( m0 < ages[i]) {
      m1 = m0;
      m0 = ages[i];
    } else if( typeof m1 === 'undefined'  &&  m0 > ages[i]) {
      m1 = ages[i];
    } else if( m1 <= ages[i]  &&  m0 >= ages[i]) {
      m1 = ages[i];
    }
  }
  return [m1, m0];
}
