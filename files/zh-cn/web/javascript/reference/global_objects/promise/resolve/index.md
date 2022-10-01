---
title: Promise.resolve()
slug: Web/JavaScript/Reference/Global_Objects/Promise/resolve
---

{{JSRef}}**`Promise.resolve(value)`**方法返回一个以给定值解析后的 {{jsxref("Promise")}} 对象。如果这个值是一个 promise，那么将返回这个 promise；如果这个值是 thenable（即带有 {{jsxref("Promise.then", "\"then\" ")}} 方法），返回的 promise 会“跟随”这个 thenable 的对象，采用它的最终状态；否则返回的 promise 将以此值完成。此函数将类 promise 对象的多层嵌套展平。

> **警告：** 不要在解析为自身的 thenable 上调用`Promise.resolve`。这将导致无限递归，因为它试图展平无限嵌套的 promise。一个例子是将它与 Angular 中的异步管道一起使用。在[此处](https://angular.io/guide/template-syntax#avoid-side-effects)了解更多信息。

例如下例代码

```js
let thenable = {
  then: (resolve, reject) => {
    resolve(thenable)
  }
}

Promise.resolve(thenable) //这会造成一个死循环
```

{{EmbedInteractiveExample("pages/js/promise-resolve.html")}}

## 语法

```plain
Promise.resolve(value);
```

### 参数

value

将被 `Promise` 对象解析的参数，也可以是一个`Promise` 对象，或者是一个 thenable。

### 返回值

返回一个带着给定值解析过的 `Promise` 对象，如果参数本身就是一个 `Promise` 对象，则直接返回这个 `Promise` 对象。

## 描述

静态方法 `Promise.resolve` 返回一个解析过的 `Promise` 对象。

## 示例

### 使用静态 `Promise.resolve` 方法

```js
Promise.resolve("Success").then(function(value) {
  console.log(value); // "Success"
}, function(value) {
  // 不会被调用
});
```

### resolve 一个数组

```js
var p = Promise.resolve([1,2,3]);
p.then(function(v) {
  console.log(v[0]); // 1
});
```

### resolve 另一个 promise

```js
var original = Promise.resolve(33);
var cast = Promise.resolve(original);
cast.then(function(value) {
  console.log('value: ' + value);
});
console.log('original === cast ? ' + (original === cast));

/*
*  打印顺序如下，这里有一个同步异步先后执行的区别
*  original === cast ? true
*  value: 33
*/
```

日志顺序颠倒其实是由于异步地调用 `then` 方法。在[这里](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#Return_value)查看 `then` 是如何工作的。

### resolve thenable 并抛出错误

```js
// Resolve 一个 thenable 对象
var p1 = Promise.resolve({
  then: function(onFulfill, onReject) { onFulfill("fulfilled!"); }
});
console.log(p1 instanceof Promise) // true，这是一个 Promise 对象

p1.then(function(v) {
    console.log(v); // 输出"fulfilled!"
  }, function(e) {
    // 不会被调用
});

// Thenable 在 callback 之前抛出异常
// Promise rejects
var thenable = { then: function(resolve) {
  throw new TypeError("Throwing");
  resolve("Resolving");
}};

var p2 = Promise.resolve(thenable);
p2.then(function(v) {
  // 不会被调用
}, function(e) {
  console.log(e); // TypeError: Throwing
});

// Thenable 在 callback 之后抛出异常
// Promise resolves
var thenable = { then: function(resolve) {
  resolve("Resolving");
  throw new TypeError("Throwing");
}};

var p3 = Promise.resolve(thenable);
p3.then(function(v) {
  console.log(v); // 输出"Resolving"
}, function(e) {
  // 不会被调用
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Promise")}}
