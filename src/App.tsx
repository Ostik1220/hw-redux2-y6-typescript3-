import "./App.css";

function App() {
  // 1) створіть абстрактний клас House, в ньому повинна бути наступна логіка:

  // властивість door – вона може бути закрита, або відкрита.
  // властивість key – об'єкт класу Key.
  // конструктор приймає аргумент класу Key та зберігає його у властивість key.
  // метод comeIn, який додає об'єкт класу Person у властивість tenants і це спрацьовує лише, якщо door відкрита.
  // абстрактний метод openDoor приймає аргумент класу Key
  // 	2) Створіть клас MyHouse, який реалізує клас House
    // створюємо метод openDoor, оскільки він приймає ключ, звіряємо збережений ключ у властивості key чи дорівнює він ключу з аргументу, якщо так, відкриваємо двері.
  // 	3) Створіть об'єкт Key
  // є тільки властивість signature
  // під час створення об'єкта генерує випадкове число та зберігає його у signature
  // метод getSignature повертає випадкове число з signature
  // 	4) Створіть об'єкт Person
  // конструктор приймає ключ класу Key і зберігає його у властивість key
  // метод getKey повертає key

  // 	5) Зробіть так, щоб мешканець потрапив додому.


  abstract class House {
    constructor(
      public door: boolean,
      protected key: Key,
      public tenants: Person[]
    ){}

    comeIn(Person: Person) {
      if (this.door) {
        console.log("Welcome home");
        this.tenants.push(Person);
      } else {
        console.log("Door is closed");
      }
    }

    openDoor(key: Key) {}
  }

  class MyHouse extends House {
    openDoor(key: Key) {
      // console.log(key.getSignature());
      // console.log(this.key.getSignature());
      if (this.key.signature === key.signature) {
        console.log("Door is open");
        this.door = true;
      } else {
        this.door = false;
        console.log("Wrong key");
      }
    }}

  class Key {
    signature: number;

    constructor() {
      this.signature = Math.floor(Math.random() * 1000);
    }

    getSignature(): number {
      return this.signature;
    }
  }

  class Person {
    constructor(readonly key: Key, public name: string) {} 

    getKey() : Key {
      return this.key;
    }
  }

  const Ostap = new Person(new Key(), "Ostap");
  const Maksym = new Person(new Key(), "Maksym");
  const Home = new MyHouse(false, Ostap.getKey(), []);

  console.log(Ostap.getKey().getSignature());
  console.log(Maksym.getKey().getSignature());

  console.log(Ostap.getKey().getSignature());
  Home.openDoor(Ostap.getKey());
  Home.comeIn(Ostap);
  console.log(Home.tenants);
  Home.openDoor(Maksym.getKey());
  Home.comeIn(Maksym);
  console.log(Home.tenants);




  return <></>;
}

export default App;
