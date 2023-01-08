module.exports = function reverse (n) {
    n = Math.abs(n);
    n = n.toString();
   let i = n.length -1;
   let str = '';
   while (i >=0){
    str = str + n[i];
    i--;
   }
   return str;
}
