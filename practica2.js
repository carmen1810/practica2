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
