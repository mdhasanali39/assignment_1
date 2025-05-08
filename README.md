# 1.  Explain the difference between  `any`,  `unknown`, and  `never`  types in TypeScript.

In **TypeScript**, **any**, **unknown**, and **never** are special types that represent different level of type safety. Let's breakdown of each type:   
  
  # Any
  
## Definition: 
A type that can accept any value without restrictions.  
  
No need type checking, allowing you to assign anything to a variable of any type and do whatever you want with it.  
  
## Use case: 
When migrating code or interacting with third party libraries (like - api calling) , you don't know the exact type.  
  
## Example:  
  
```typescript
let value: any = 5;  
value = "Hello";  
value.toFixed();  
There you are no getting any errors above, even if the value is a string at runtime.
```

# Unknown
## Definition:
 Any type are equivalent. Any value can be stored in it, but you must have to check.  
  
We can use typeof or instanceof to checks type.  
  
## Use case:
 We can use when we want to confirm safety before using something.  
  
## Example:
 ```typescript
 let value: unknown = "Hello";  
  
// Error: Object type is 'unknown' // value.toUpperCase();  
  
if (typeof value === "string") { console.log(value.toUpperCase()); // OK
```

# Never
## Definaiton:
A type that never return any type.  
   
  
## Use case:
Beneficial for full tests in switch statements.
And when a value cannot ever occur or for functions that never return (such as throw an error or infinite loop).

## Example:
```typescript
type Shape = 
  | { shapeName: "circle"; radius: number }
  | { shapeName: "square"; sideLength: number }
  | { shapeName: "rectangle"; width: number; height: number };

function getArea(shape: Shape): number {
  switch (shape.shapeName) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    case "rectangle":
      return shape.width * shape.height;

    default:
      // Here we check Exhaustiveness
      const _exhaustiveCheck: never = shape;
      throw new Error(`Unhandled shape: ${_exhaustiveCheck}`);
  }
}

```
### Never is frequently used in functions that never finish normally(Like thorowing error):
```typescript
function throwError(message: string): never {
  throw new Error(message);
}
```

# 2.  What are some differences between interfaces and types in TypeScript?
Type inference in **TypeScript** refers to the **compiler's** to automatically deduce the type of a variable, parameter, or return value of not explicitly type declaration.

## Defination:
When you don't specify the type of variables in TypeScript, it guesses for you the type. This is known as type inference. 
## Use case:
Like: - You don't need to write: string or: number; TypeScript handles the work and will catch errors if you dont explicitly define the type of that variables.

## example:
Even though, you didn't say that "this is a number," the compiler recognizes that x is a number if you write
```typescript
let x = 5
 ```
It's useful since it understands what you're trying to achieve and you don't have to write every kind of type everywhere. Therefore, if you make a mistake, it may detect it and display an error message.
