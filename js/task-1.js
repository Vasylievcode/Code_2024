// const example = {
//   value: 42,
//   printValue: function() {
//     console.log(this.value);
//   },
// };

// const methodReference = example.printValue.bind(example);
// methodReference();

 
// const service = {
//   name: "Logger",
//   logName() {
//     function foo() {
//       console.log(this.name);
//     }
//     foo.call(this);
//   },
// };
// service.logName();

// const service = {
//   name: "Logger",
//   logName() {
//     const foo =() => {
//       console.log(this.name);
//     }
//     foo();
//   },
// };
// service.logName();



// Викликати такми чином щоб результатом виклику був рядок Jane Doe
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName: function() {
//       return this.firstName + ' ' + this.lastName;
//     }
//   };
  
//   const anotherPerson = {
//     firstName: 'Jane',
//     lastName: 'Doe'
//   };
  
//   const fullName = person.fullName.apply(anotherPerson)
//   console.log(fullName); // Результат: Jane Doe


  // const dog = {
  //   sound: 'Woof!',
  //   makeSound: function() {
  //     console.log(this.sound);
  //   }
  // };
  
  // const cat = {
  //   sound: 'Meow!'
  // };
  
  // const catSoundFunction = dog.makeSound.call(cat)
  // catSoundFunction(); // Результат: Meow!

// const calculator = {
//   summ: 0,
//   add(number) {
//     this.summ += number;
//     return this.summ;
//   },

//   subtract(number) {
//     this.summ -= number;
//     return this.summ;
//   },
// };

// function decorator(callback, ...args) {
//   const result = callback(...args);
//   console.log(
//     `Function: ${callback.name}; arguments: ${args.join(
//       " ,"
//     )}; result: ${result} .`
//   );
//   return result;
// }

// decorator(calculator.add, 5);  //result 5
// decorator(calculator.subtract, 3); //result 2

// const calculator = {
//   summ: 0,
//   add(number) {
//     this.summ += number;
//     return this.summ;
//   },

//   subtract(number) {
//     this.summ -= number;
//     return this.summ;
//   },
// };

// function decorator(callback, ...args) {
//   const result = callback.bind(calculator)(...args);
//   console.log(
//     `Function: ${callback.name}; arguments: ${args.join(
//       " ,"
//     )}; result: ${result} .`
//   );
//   return result;
// }

// decorator(calculator.add, 5);  //result 5
// decorator(calculator.subtract, 3); //result 2

//////////////////////////////////////

// const obj = {
//   value: 42,
//   getValue: function() {
//     return this.value;
//   }
// };

// const getValueFunction = obj.getValue;

// // Fix the code below to correctly use 'obj' as the context for the function call.
// const result = getValueFunction.call(obj); 
// console.log(result); // It should print 42

///////////////
// function greet(name) {
//   console.log(`Hello, ${name}! My age is ${this.age}`);
// }

// const person = {
//   age: 25
// };

// greet.call(person, "John");

////////////
// function sayHello() {
//   console.log(this.greeting);
// }

// const greetings = {
//   greeting: "Hi there!"
// };

// sayHello.apply(greetings); // Expected output: Hi there!

function displayNumber() {
  console.log(this.number);
}

const data = {
  number: 42
};

displayNumber.call(data); // Expected output: 42





