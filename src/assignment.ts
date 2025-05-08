function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === undefined || toUpper) {
    const upperCaseStr = input.toUpperCase();
    console.log(upperCaseStr);
    return upperCaseStr;
  } else {
    const lowerCaseStr = input.toLowerCase();
    console.log(lowerCaseStr);
    return lowerCaseStr;
  }
}

formatString("hello",);

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

console.log(filterByRating(books));

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, curr)=> [...acc, ...curr], []);
}
console.log(concatenateArrays(["a", "b"], ["c"]));

class Vehicle {
  private make;
  year;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    console.log(`Make: ${this.make}, Year: ${this.year}`);
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel() {
    console.log(`Model: ${this.model}`);
  }
}
const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

console.log(processValue("hello there"));

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  } else {
    let productWithHighestPrice = products[0];

    for (let i = 1; i < products.length; i++) {
      if (products[i].price > productWithHighestPrice.price) {
        productWithHighestPrice = products[i];
      }
    }
    return productWithHighestPrice;
  }
}

const products = [
  { name: "Pen", price: 100 },
  { name: "Notebook", price: 105 },
  { name: "Bag", price: 50 },
];

console.log(getMostExpensiveProduct(products));

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

console.log(getDayType(Day.Wednesday));

async function squareAsync(n: number): Promise<number> {
  const promise = new Promise<number>((resolve, reject) => {
    if (n >= 0) {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    } else {
      reject(new Error("Error: Negative number not allowed"));
    }
  });
  return promise;
}

squareAsync(4).then(console.log);
