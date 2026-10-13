const interviewQuestions = [
  {
    question: '1. What is JavaScript?',
    answer: 'JavaScript is a programming language used to make web pages interactive. It can add behavior to websites such as form validation, click events, animations, and dynamic updates. It runs in browsers and can also run on servers with Node.js.'
  },
  {
    question: '2. What are the features of JavaScript?',
    answer: 'JavaScript is dynamically typed, event-driven, object-based, supports functions as first-class values, can manipulate the DOM, and supports asynchronous programming using callbacks, promises, and async/await. It works across modern browsers and is widely used in web development.'
  },
  {
    question: '3. What are the advantages and disadvantages of JavaScript?',
    answer: 'Advantages include easy browser integration, interactivity, full-stack development support, and a large ecosystem of libraries and frameworks. Disadvantages include weak typing, maintainability issues in large apps, browser compatibility differences, and security concerns due to client-side code visibility.'
  },
  {
    question: '4. What is ECMAScript?',
    answer: 'ECMAScript is the official standard specification for JavaScript. It defines the syntax and core features of the language. ES6 and later versions added modern features such as let, const, arrow functions, classes, template literals, and promises.'
  },
  {
    question: '5. What are the data types in JavaScript?',
    answer: 'JavaScript has primitive types such as string, number, boolean, undefined, null, symbol, and bigint. It also has objects, including arrays, functions, and plain objects.'
  },
  {
    question: '6. What are variables in JavaScript?',
    answer: 'Variables are containers used to store data values. They are declared using var, let, or const. Variables are used to keep values like names, numbers, and objects for later use in the program.'
  },
  {
    question: '7. What is the difference between var, let, and const?',
    answer: 'var is function-scoped and can be redeclared and reassigned. let is block-scoped, can be reassigned, but cannot be redeclared in the same scope. const is block-scoped and cannot be reassigned, though the contents of objects and arrays declared with const can still change.'
  },
  {
    question: '8. What are operators in JavaScript?',
    answer: 'Operators are used to perform calculations and comparisons. Examples include arithmetic operators (`+`, `-`, `*`, `/`), assignment operators (`=`, `+=`), comparison operators (`>`, `<`, `>=`), equality operators (`==`, `===`), and logical operators (`&&`, `||`, `!`).'
  },
  {
    question: '9. What is the difference between == and ===?',
    answer: '`==` compares values loosely and performs type conversion, whereas `===` compares both value and type without conversion. Therefore, `5 == "5"` is true but `5 === "5"` is false.'
  },
  {
    question: '10. What is a function in JavaScript?',
    answer: 'A function is a reusable block of code that performs a specific task. It can accept parameters and return a value. Functions are used to organize code and reduce repetition.'
  },
  {
    question: '11. What is an arrow function in JavaScript?',
    answer: 'An arrow function is a shorter syntax for writing functions. It uses the `=>` symbol and is often used in callbacks and one-line operations. Arrow functions also inherit `this` from the surrounding lexical scope.'
  },
  {
    question: '12. What is the DOM (Document Object Model)?',
    answer: 'The DOM is a tree-like representation of an HTML document. JavaScript can access and change the DOM to update content, styles, and structure on a web page without reloading it.'
  },
  {
    question: '13. What is a callback function in JavaScript?',
    answer: 'A callback function is a function passed into another function and called later. It is commonly used in event handling, timers, and asynchronous operations.'
  },
  {
    question: '14. What is a closure in JavaScript?',
    answer: 'A closure is a function that retains access to variables from its outer scope even after the outer function has finished executing. Closures are useful for data privacy and maintaining state.'
  },
  {
    question: '15. What is the difference between synchronous and asynchronous programming?',
    answer: 'Synchronous programming executes tasks one by one and blocks the next task until the current one finishes. Asynchronous programming allows tasks to run in the background while other code continues executing, which is useful for timers and API requests.'
  },
  {
    question: '16. What is a Promise in JavaScript?',
    answer: 'A Promise is an object that represents the eventual result of an asynchronous operation. It can be pending, fulfilled, or rejected. It helps write cleaner async code using `.then()` and `.catch()`.'
  },
  {
    question: '17. What are async and await in JavaScript?',
    answer: '`async` and `await` are used to work with promises in a more readable way. `async` creates an asynchronous function, and `await` pauses execution until the promise resolves.'
  },
  {
    question: '18. What is hoisting in JavaScript?',
    answer: 'Hoisting is JavaScript’s behavior of moving declarations to the top of their scope during execution. Function declarations are hoisted fully, while var variables are initialized to `undefined`. let and const are blocked by the Temporal Dead Zone until initialized.'
  },
  {
    question: '19. What is CORS (Cross-Origin Resource Sharing)?',
    answer: 'CORS is a browser security mechanism that decides whether a web page from one origin can access resources from another origin. It is controlled through HTTP headers like `Access-Control-Allow-Origin`.'
  },
  {
    question: '20. What is error handling in JavaScript?',
    answer: 'Error handling is the process of catching and handling runtime errors gracefully. JavaScript uses `try`, `catch`, `finally`, and `throw` to manage exceptions and keep the program from crashing unexpectedly.'
  }
];

module.exports = interviewQuestions;
