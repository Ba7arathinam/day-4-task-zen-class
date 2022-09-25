//1.How to compare two JSON object have same properties

var obj1={name:"Person 1",age:5};
var obj2={age:5,name:"Person 1"};
var op=JSON.stringify(obj1)===JSON.stringify(obj2)



console.log(op)