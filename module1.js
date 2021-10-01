
import { testNumber as tn } from "./module2.js";



export var testString = "hello i am a string variable";

export const testFunc = ()=>{
    return "i am a function and x:"+tn
}

export class TestClass{
    constructor(x){
        this.x = x
    }

    handleLog(){
        console.log("this is"+this.x+"in test class");
    }
}

export default "i am default";