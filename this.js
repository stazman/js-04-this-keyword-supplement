//js-4-using-the-this-keyword —

//After Class Activity Bug Notes and Solutions

//Directions: Follow the Canvas activity but be prepared to use this file to help you along. You can use the sandboxed code sections of the Canvas activity or you can do your work here.

//Part 1: Defining forEach

//A solution for the sandboxed exercise solution will show the correct results in the console but the red error message still shows there's a mistake. Notice that you can tell that because the line numbers of where an error is supposedly happening are off.

//Solution:

// function forEach(array, callback){
//  for (let index = 0; index < array.length; index++) {
//    const element = array[index];
//    callback(element)
//  }
// }

// forEach([ 1, 2, 3 ], function(number){
//     console.log('iteration', number)
// })



//Part 2: Defining "Object Method"

//The sandboxed activity here isn't buggy at all, but here's the solution, anyway:

// let rectangle = {
//  width: 100,
//  height: 100,
//  area: function(){
//      return this.width * this.height // <-- Replace null
//  }
// }

// console.log(rectangle.area())


//Part 3: Using "this" with forEach

//In the sandboxed exercise here, The red error message will still show there's a mistake when there isn't, and there isn't a console for it next to the sandbox, so apparently you're just expect to show a function that doesn't necessarily work but doesn't use the array as a parameter but uses what is shown before about "this" and objects. I couldn't really figure out what the sandboxed exercise was asking for, so I made a "solution" that doesn't work but which exemplifies the use of "this" with objects and methods:

// function forEach(){
//  let myNumbers = [ 1, 2, 3 ];
//   myNumbers.forEach = function(callback){

  //Note: It may look strange but we can add a method to an array as in the previous line of code because an array is a distinct built-in structure called "array" but it's also an object, in a more general sense. So we can add a method to an array because it's an object. That's why if you type "typeof []" in a JS console, the result will be "object".

//       for(let i = 0; i < this.length; i++){
//           callback(this[i])
//       }
//   }
// }

//Here is a further example of how you can make a object method on an array without all the "forEach" noise:

// let myNumbers = [ 1, 2, 3 ];

// myNumbers.objectMethod = function(){console.log('Hi')}

// myNumbers.objectMethod()


//Note: Below is a solution that isn't exactly what the sandboxed exercise is looking for considering it's function forEach(){} starter code, but it's a solution that works and exemplifies the use of "this" with objects and methods:

// let forEach = {
//  array: [ 1, 2, 3 ],
//  forEach: function(){
//    for (let i = 0; i < this.array.length; i++) {
//      const element = this.array[i];
//      console.log(element)
//    }
//  }
// }

// forEach.forEach()

//Note: In the invocation (call) here, the first forEach is the object and the second forEach is the method of the object.


//4) Assigning forEach to the Array.prototype

//Just ignore the rest of the first piece of copy/paste code from Part 4. It's very confusing, partly because you can't really tell the difference between using a prototype and just using the built-in .forEach() method. "Prototype" is an advanced topic about JS, but it's important to understand, so you'll get more exposure to it later in the course. The main things you should know about "prototype" are

//1. It's a way to define the values and behaviors that are true for ALL instances of a particular class. You can look at it this way: classes are the "parents" of objects that are instances (examples) of that class (as well as being parents of subclasses).

//The example in the activity is about making a prototype for the Array class, which is the "parent" of all arrays. So the prototype is a way to define the values and behaviors that are true for ALL arrays. In the case of the activity example, the behavior is the .forEach() method. Like the activity says, it is frowned upon to set prototypes on built-in JS classes like Array, but they are great to make sure objects of a custom class have the same values and behaviors no matter the instance of the class. For example:

// class InsaneCurriculumCreator {
//  constructor(issue){
//    this.issue = issue
//  }
// }

// let bob = new InsaneCurriculumCreator("I haven't slept in two weeks.")

// console.log(bob.issue)

// let alice = new InsaneCurriculumCreator("I have 30 cats.")

// console.log(alice.issue)

//Since the value of the "remedy" property is the same for both bob and alice, even though they have different issues, we can set a prototype value on the "remedy" property like this so it will result in the same value for both of them, like this:

// InsaneCurriculumCreator.prototype.remedy = `professional help`

// console.log(bob.remedy)

// let alice = new InsaneCurriculumCreator("I have 30 cats.")

// console.log(alice.remedy)

//Notice that setting the prototype is very similar to setting a default value for a property of a class, which is also true for all instances of the class: (make sure to comment the previous code out before running this code)

// class InsaneCurriculumCreator {
//  constructor(issue){
//    this.issue = issue
//     this.remedy = `professional help`
//  }
// }

// let bob = new InsaneCurriculumCreator("I haven't slept in two weeks.")

// console.log(bob.remedy)

// let alice = new InsaneCurriculumCreator("I have 30 cats.")

// console.log(alice.remedy)

//2. Understanding how using prototype methods in JS can help you understand how they differ from the use of class methods and static methods in programming languages such as Python, Ruby, Java, and C#.

//Also, it shows how classes in JS are different from classes in other programming languages and why it's said JS isn't a true object-oriented or class-based language. In JS, classes are just functions that are used as constructors for objects, but in other languages like the four previously mentioned, classes are more fundamental to how things are done in them.

//In these languages built-in and custom classes may even have their own data types! This is why classes in JS are called "syntactic sugar"... because they don't have as much of a fundamental place in how other languages are built and function.

//One more thing: JavaScript isn't technically a "programming language". Instead, it's a "scripting language".
