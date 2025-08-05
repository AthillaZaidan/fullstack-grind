function createUser(name, age){
    const userName = name;
    return {userName, age};
}

let nama = "adi";
let age = 20;
const user = createUser(nama, 20);

console.log(user.userName);