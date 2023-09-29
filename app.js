/*  ⁃ Реализуйте алгоритм по определению палиндрома. 
Функция должна принимать строку и проверять. 
Если строка палиндром, то выводить true, если нет, то false. */
const inputString = "Муза Ранясь шилом опыт ты помолишься на разум";
function isPalindrome(str){
    const valueStr = str.toLowerCase().replace(/[^0-9]/g, '');
    return valueStr === valueStr.split('').reverse().join('');
}
console.log(isPalindrome(inputString));