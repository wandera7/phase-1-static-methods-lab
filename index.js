class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
   return string.replace(/[^a-z0-9 - ' -]/gi, '')
  }
  static titleize(string){
  let arr = [];
  let exludeWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
  arr = string.split(' ');
  return arr.map((word, i) =>
  {
     return exludeWords.includes(word) && i!=0 ? [word] : word.charAt(0).toUpperCase() + word.slice(1);

  }).join(' ')
   }
}