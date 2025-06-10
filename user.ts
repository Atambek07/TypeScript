interface User {
  name: string;
  age: number;
}

function showUser(user: User): void {
  console.log(`${user.name} is ${user.age} years old`);
}

const me: User = { name: "Атамбек", age: 17 };
showUser(me);
