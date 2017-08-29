var person = {}
Object.defineProperty(person,"name",{
  writable:false,
  value:'Nicholas',
})

console.log(person.name)
person.name='Greg'
console.log(person.name)

Object.defineProperties(person,{
  one:{
    value:'oo',
  },
  two:{
    value:'tt',
    enumerable:false
  }
})
console.log(person.one)

var des = Object.getOwnPropertyDescriptor(person,'one')

console.log(des.writable,des.value)
/*
Object.defineProperty(person,'name',{
  configurable:false,
})
//报错，
Object.defineProperty(person,'name',{
  configurable:true,
})

*/

var book = {
  _year:2004,
  edition:1
}

Object.defineProperty(book,'year',{
  get:function(){
    return this._year
  },
  set:function(newValue){
    if(newValue > 2004){
      this._year = newValue
      this.edition += newValue - 2004
    }
  }
})

book.year = 2005
console.log(book.edition)
