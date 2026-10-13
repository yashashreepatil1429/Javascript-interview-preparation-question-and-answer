const interviewQuestions = [
  {
    question: "1. What is JavaScript?",
    answer:
      "JavaScript is a high-level, dynamically typed programming language used to make web pages interactive. It allows developers to add behavior to websites, such as form validation, animations, DOM updates, event handling, and communication with servers. It can run in browsers and also on servers using Node.js."
  },
  {
    question: "2. What are the features of JavaScript?",
    answer:
      "JavaScript has several important features: it is dynamically typed, object-based, event-driven, supports first-class functions, allows asynchronous programming with callbacks, promises, and async/await, and can manipulate the DOM. It is also cross-platform and works in modern browsers."
  },
  {
    question: "3. What are the advantages and disadvantages of JavaScript?",
    answer:
      "Advantages include easy browser integration, dynamic interactivity, support for frontend and backend development, and a large ecosystem of libraries and frameworks. Disadvantages include weak typing, maintainability challenges in large applications, browser compatibility issues, and security concerns because client-side code can be inspected by users."
  },
  {
    question: "4. What is ECMAScript?",
    answer:
      "ECMAScript is the official standard specification on which JavaScript is based. It defines the syntax and core behavior of the language. ES6 (ECMAScript 2015) introduced major features such as let, const, arrow functions, template literals, classes, and promises."
  },
  {
    question: "5. What are the data types in JavaScript?",
    answer:
      "JavaScript has primitive data types such as string, number, boolean, undefined, null, bigint, and symbol. It also has objects, which include arrays, functions, and regular objects. Each type is used to represent different kinds of values in an application."
  },
  {
    question: "6. What are variables in JavaScript?",
    answer:
      "Variables are containers used to store data in a program. In JavaScript, variables are declared using var, let, or const. The value stored in a variable can be read or changed while the program runs. In modern JavaScript, let and const are preferred over var because they have block scope and safer behavior."
  },
  {
    question: "7. What is the difference between var, let, and const?",
    answer:
      "`var` is function-scoped and can be redeclared and reassigned. `let` is block-scoped, can be reassigned but cannot be redeclared in the same scope. `const` is also block-scoped and cannot be reassigned, though objects and arrays declared with const can still have their contents modified. In modern JavaScript, let and const are preferred."
  },
  {
    question: "8. What are operators in JavaScript?",
    answer:
      "Operators are symbols used to perform operations on values or variables. JavaScript has arithmetic operators (`+`, `-`, `*`, `/`), assignment operators (`=`, `+=`), comparison operators (`>`, `<`, `===`), logical operators (`&&`, `||`, `!`), and ternary operators. They are used for calculations, comparisons, and decision-making."
  },
  {
    question: "9. What is the difference between == and ===?",
    answer:
      "`==` is loose equality and performs type coercion before comparison, while `===` is strict equality and compares both value and type without coercion. For example, `5 == \"5\"` is true because the string is converted to a number, but `5 === \"5\"` is false because the types differ. `===` is generally safer and preferred."
  },
  {
    question: "10. What is a function in JavaScript?",
    answer:
      "A function is a reusable block of code designed to perform a specific task. Functions can take parameters, process input, and return a result. They help reduce code duplication, organize logic, and make programs easier to understand and maintain."
  },
  {
    question: "11. What is an arrow function in JavaScript?",
    answer:
      "An arrow function is a shorter syntax for writing function expressions in JavaScript. It uses the `=>` symbol and is often used for concise callbacks and one-line operations. Arrow functions also inherit `this` from the surrounding lexical scope, which is different from normal functions that have their own `this` binding."
  },
  {
    question: "12. What is the DOM (Document Object Model)?",
    answer:
      "The DOM is a tree-like representation of an HTML document created by the browser. JavaScript can access and manipulate DOM elements to change text, styles, attributes, and structure. This allows dynamic updates to a webpage without reloading it."
  },
  {
    question: "13. What is a callback function in JavaScript?",
    answer:
      "A callback function is a function passed as an argument to another function and then called later when a particular event or operation occurs. Callbacks are commonly used in event listeners, timers, and asynchronous tasks. They help execute code after a task is completed."
  },
  {
    question: "14. What is a closure in JavaScript?",
    answer:
      "A closure is a function that retains access to variables from its outer scope even after the outer function has finished executing. This allows the inner function to remember and use the outer variables later. Closures are useful for creating private data, counters, and function factories."
  },
  {
    question: "15. What is the difference between synchronous and asynchronous programming?",
    answer:
      "Synchronous programming executes code line by line and blocks further execution until the current task finishes. Asynchronous programming allows a task to run in the background while the rest of the code keeps executing. JavaScript uses asynchronous patterns such as callbacks, promises, and async/await to handle tasks like API requests, file operations, and timers."
  },
  {
    question: "16. What is a Promise in JavaScript?",
    answer:
      "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has states such as pending, fulfilled, and rejected. Promises provide a cleaner way to handle asynchronous work using `.then()` for success and `.catch()` for errors."
  },
  {
    question: "17. What are async and await in JavaScript?",
    answer:
      "`async` and `await` are JavaScript keywords used to work with promises in a more readable way. An `async` function always returns a Promise, and `await` pauses the function until the Promise resolves. This makes asynchronous code easier to write and understand, similar to synchronous code."
  },
  {
    question: "18. What is hoisting in JavaScript?",
    answer:
      "Hoisting is JavaScript behavior where variable and function declarations are moved to the top of their scope during execution. However, only the declaration is hoisted, not necessarily the initialization. For example, `var` is initialized to `undefined`, while `let` and `const` are in the Temporal Dead Zone until they are initialized."
  },
  {
    question: "19. What is CORS (Cross-Origin Resource Sharing)?",
    answer:
      "CORS is a browser security mechanism that controls whether a web page from one origin can access resources from another origin. It uses HTTP headers to tell the browser which cross-origin requests are allowed. This is important when frontend and backend applications run on different domains, ports, or protocols."
  },
  {
    question: "20. What is error handling in JavaScript?",
    answer:
      "Error handling is the process of detecting and dealing with runtime errors in a controlled way. JavaScript uses `try`, `catch`, `finally`, and `throw` to handle exceptions. This helps prevent the program from crashing and allows developers to display useful messages or recover gracefully from errors."
  }
];

module.exports = interviewQuestions;
