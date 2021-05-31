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
