class Rectangle {
    constructor(width , height){
        this.width = width
        this.height = height
    }

    render(){
        console.log(this.width , this.height);
    }
}

class coloredRectangle extends Rectangle{
    constructor(width , height ,color){
        super(width , height)
        this.color = color
    }

    show(){
        return "<div style='width:"+this.width+"px;height:"+this.height+"px;background:"+this.color+"'></div>"
    }
}

var obj = new coloredRectangle(200 , 100 , "green");
var obj2 = new coloredRectangle(300 , 500 , "red");

document.getElementById("myDiv").innerHTML = obj.show()
document.getElementById("myDiv2").innerHTML = obj2.show()
