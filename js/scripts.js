var femaleNames = ['Diana', 'Kasia', 'Magda', 'Daria'];
var maleNames = ['Marcin', 'Tomek', 'Ryszard', 'Donald'];

var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = 'Marian';

if(allNames.indexOf(newName) === -1) {
  allNames.push(newName);
}

console.log(allNames);


