import  mydefault , { testString , testFunc , TestClass } from './module1.js'

console.log(testString);

console.log(testFunc(5));

let obj = new TestClass("qasem");

obj.handleLog();

console.log(mydefault);