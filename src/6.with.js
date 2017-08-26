var o = {
  a:{
    a1:function(){
      console.log('a.a1');
    }
  },
  b:function(){
    console.log('b');
  },
  c:function(){
    console.log('c');
  }
}

o.a.a1()
o.b()
o.c()


with(o){
  a.a1()
  b()
  c()
}
