function test(x , y){
    console.log(x+y);
}

const test2 =  y=> y*2;


test(2 , 3)
console.log(test2(3));

// if (true) {
//     var x = 2    
//     let y = 3
//     const z = 4

//     x = 5
//     y=5
//     // z=5

//     console.log("x:"+x);
//     console.log("y:"+y);
//     console.log("z:"+z);
// }

// class Rectangle {
//     constructor(width , height){
//         this.width = width
//         this.height = height
//     }

//     render(){
//         console.log(this.width , this.height);
//     }
// }

// class coloredRectangle extends Rectangle{
//     constructor(width , height ,color){
//         super(width , height)
//         this.color = color
//     }

//     show(){
//         return "<div style='width:"+this.width+"px;height:"+this.height+"px;background:"+this.color+"'></div>"
//     }
// }

// var obj = new coloredRectangle(200 , 100 , "green");
// var obj2 = new coloredRectangle(300 , 500 , "red");

// document.getElementById("myDiv").innerHTML = obj.show()
// document.getElementById("myDiv2").innerHTML = obj2.show()
