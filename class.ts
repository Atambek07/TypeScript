class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): void {
    console.log(`Hi, my name is ${this.name}`);
  }
}

const p = new Person("Атамбек");
p.greet();

