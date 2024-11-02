const checkingLengthString = function(string, length){
  return string.length <= length;
}


//Проверка Палиндрома.
const checkingPalindromeOne = function(string){
  let lowerString = string.replaceAll(' ', '').toLowerCase()
  let checkString = lowerString.split('').reverse().join('');
  return lowerString === checkString;
}


//Проверка Палидрома по материалам курса.
const checkingPalindromeTwo = function(string){
  let lowerString = string.replaceAll(' ', '').toLowerCase();
  let checkString = '';
  for (let i = lowerString.length-1; i >= 0;i -= 1){
    checkString += lowerString.at(i);
  }
  return lowerString === checkString;
}


//Дополнительное задание (Выполнил код, а только потом увидел вкладку "Что использовать?")
const stringToNumber = function(string){
  let checkString = '';
  string = String(string);
  for (let i = 0;i <= string.length; i++){
    if (!isNaN(string.at(i)) && string.at(i) != ' '){
      checkString += string.at(i);
    }
  }
  checkString === '' ? checkString = NaN : '';
  return Number(checkString)
}
