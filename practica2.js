//EJERCICIO 1//

let John={ name: "John", surname: "Smith", id: 1 };
let Pete = { name: "Pete", surname: "Hunt", id: 2 };
let Mary = { name: "Mary", surname: "Key", id: 3 };
let users = [ John, Pete, Mary ];
console.log(users)
let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
console.log( usersMapped);
//EJERCICIO 2///
let fruits = ["Apples", "Pear", "Orange"]
let shoppingCart = fruits;shoppingCart.push("Banana")
console.log( fruits.length );
console.log( fruits);
//el elemento push agrega elemento al final de array , el resultado es 4 en este ejemplo:
///4
///[ 'Apples', 'Pear', 'Orange', 'Banana' ]//

///EJERCICIO 3///
let styles=["Jazz", "Blues"]
styles.push("Rock-n-Roll")
console.log(styles);
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles);
delete styles[0]
console.log(styles);
styles.unshift("Rap", "Reggae")
console.log(styles);
//EJERCICIO 4//

function filterRange(arr, a, b) {
  // added brackets around the expression for better readability
  return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered);
console.log(arr)
//EJERCICIO 5//
function copySorted(arr) {
  return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log(arr)
console.log(sorted)
///ejercicio 6///
function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3")

console.log(result)
//EJERCICIO 7///
let message = (login == 'Empleado') ? 'Hola' :
  (login == 'Director') ? 'Felicidades' :
  (login == '') ? 'Sin sesión' :
  '';
  console.log(message)
