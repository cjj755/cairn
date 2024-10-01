---
title: 'js'
---

## 1、闭包的理解
闭包是一个函数，return返回一个新函数，新函数应用了父函数的变量，返回的新函数会携带父函数的变量。   
**注：** 因为新函数应用了父函数的变量，使该变量不会被系统回收。闭包使用过多，会导致内存一直增大，造成内存泄漏，尽量避免闭包的使用。
```
function globalFun () {
    let a = 0;
    return function localFun () {
        console.log(a);
    };

};
const resolve = globalFun();
resolve(); // 控制台打印 0
```

## 2、如何处理 JavaScript 中的错误
可以使用 try-catch 语句处理 JavaScript 中的错误。可能抛出错误的代码放在try块中，错误处理代码放在catch块中。处理后的js报错，不会导致视图层显示出错误。


## 3、== 和 === 的区别
**“==”** 比较值是否相等，会做隐式类型转换。   
**“===”** 不仅会比较值是否相等，还会做类型比较，如果类型不相等，返回false.

## 4、事件循环机制、同步异步、宏任务和微任务
JavaScript 是一种单线程的编程语言，只有一个调用栈，在同一个时间只能处理一件事，这就造成了后面的任务要等到前面的任务执行完才能执行后面的任务。   
**同步任务：** 在主线程上排队执行的任务。   
**异步任务：** 不进入主线程，而是进入任务队列中，排队执行的任务。   

<img class="zoom" :src="$withBase('/assets/js_imgs/js循环机制.jpg')" alt="foo">

**异步任务分为宏任务和微任务：** ES6 规范中，宏任务（Macrotask） 称为 Task， 微任务（Microtask） 称为 Jobs。宏任务是由宿主（浏览器、Node）发起的，而微任务由 JS 自身发起的。**事件循环** 过程中，执行栈在同步代码执行完成后，优先检查微任务队列是否有微任务需要执行，如果有就执行微任务，如果没有，接着执行后面的任务。**总结：** 开始执行宏任务，遇到微任务，就把微任务放进队列中，接着执行后面的宏任务。等第一层宏任务执行完成后，再去执行微任务。在微任务中，如果再次有其它微任务，将该微任务存放在新的队列任务中，等该微任务执行完成后，再执行第二次放进队列任务的微任务，依次嵌套执行。

**宏任务：**  setTimeout、setInterval、Ajax、DOM事件、script整体代码块、I/OUI交互事件、postMessageMessage、Channel setImmediate(Node.js 环境)；   
**微任务：** Promise.[ then/catch/finally ]、async/await、Object.observe、MutationObserver（浏览器环境）、process.nextTick（Node环境）注意new Promise是同步执行的，和它的then()等方法区分。
```
console.log('同步代码1');       1，执行第一个同步任务
 
setTimeout(() => {
    console.log('setTimeout')   5，执行宏任务
}, 0)
 
new Promise((resolve) => {
    console.log('同步代码2')      2，执行第二个同步任务
    resolve()
}).then(() => {
    console.log('promise.then') 4，执行微任务
})
 
console.log('同步代码3');       3，执行第三个同步任务
// 最终输出"同步代码1"、"同步代码2"、"同步代码3"、"promise.then"、"setTimeout"
```

```
setTimeout(() => {
    console.log('setTimeout start');    5，执行宏任务里的第一个任务
    new Promise((resolve) => { 
        console.log('promise1 start');     6，执行宏任务里的第二个任务
    resolve();
    }).then(() => {
        console.log('promise1 end');      8，执行宏任务里的微任务
    })
    console.log('setTimeout end');      7，执行宏任务里的第三个任务
}, 0);
function promise2() {
    return new Promise((resolve) => {
        console.log('promise2');         3，执行第一个微任务
        resolve();
    })
}
async function async1() {
    console.log('async1 start');       1，执行第一个同步任务
    await promise2();
    console.log('async1 end');          4，执行第二个微任务
}
async1();
console.log('script end');           2，执行第二个同步任务
```


## 5、bind、call、apply的区别和作用
**作用：** 三个方法都实现一个重要的作用：改变方法（函数）的this指向   
**区别：** 最主要的区别是call()、apply()方法是立即调用当前函数，而bind()是返回一个改变了this指向的新函数，并不立即调用。
* call(newThis,arg1,arg2。。。)   
*  apply(newThis,[arrArg])   
* func().bind(this);方法的返回值是函数，绑定了调用函数的this；


## 6、事件冒泡和事件捕获
事件冒泡是一种事件传播方式，事件从最里面的元素向外传播。事件捕获则相反，事件从最外层的元素向内传播。   
**阻止事件冒泡：**  event.stopPropagation()；


## 7、websocket应用
> 直接使用ws插件实现：   

<<< @/docs/javascript/_example/websoket/websoket_1.html   
<<< @/docs/javascript/_example/websoket/wsServer_1.js  
  
> 使用express实现多个websocket和api短连接：   

<<< @/docs/javascript/_example/websoket/websoket_2.html   
<<< @/docs/javascript/_example/websoket/wsServer_2.js    


[来源于](https://mp.weixin.qq.com/s?__biz=MjM5MDA2MTI1MA==&mid=2649136663&idx=3&sn=4f7c0e5770c1a6114019871bc08b05f1&chksm=be58b9ba892f30acd454bca86b603d42b41c2d81946eec13c74c88bd9e902bff9686134a33aa&scene=27)
