function Person(){
}

Person.prototype.name = 'tom';

var p1 = new Person();
console.log(p1.name);

var p2 = new Person();

//p1.prototype.isPrototypeOf()报错，实例中无法访问prototype
var re = Person.prototype.isPrototypeOf(p1);
console.log(re);
console.log(Person.prototype);
