type Input = string;
type ToUpper = boolean;

function formatString(input: Input, toUpper?: ToUpper): string {
  if (toUpper === undefined || toUpper) {
    const upperCaseStr = input.toUpperCase();
    return upperCaseStr;
  } else {
    const lowerCaseStr = input.toLowerCase();
    return lowerCaseStr;
  }
}

type Book = { title: string; rating: number };
function filterByRating(items: Book[]): Book[] {
  return items.filter((item) => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, curr) => [...acc, ...curr], []);
}

class Vehicle {
  private make: string;
  private year: number;

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

type Value = string | number;

function processValue(value: Value): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

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

type PromiseType = number;
async function squareAsync(n: PromiseType): Promise<PromiseType> {
  const promise = new Promise<PromiseType>((resolve, reject) => {
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