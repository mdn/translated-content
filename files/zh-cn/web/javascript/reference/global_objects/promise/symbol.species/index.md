---
title: Promise[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species
---

{{JSRef}}

静态访问器属性 **`Promise[Symbol.species]`** 返回用于构造 Promise 方法返回值的构造函数。

> **警告：** `[Symbol.species]` 的存在允许任意代码的执行，这可能会导致安全漏洞，并且使某些优化更加困难。引擎实现者正在[调查是否删除此特性](https://github.com/tc39/proposal-rm-builtin-subclassing)。如果可能的话，应避免依赖它。

## 语法

```js-nolint
Promise[Symbol.species]
```

### 返回值

`get [Symbol.species]` 被调用时的构造函数 `this` 的值。返回值用于构造从创建新 Promise 的 Promise 链式方法的返回值。

## 描述

`[Symbol.species]` 访问器属性返回 `Promise` 对象的默认构造函数。子类构造函数可以覆盖它以更改构造函数的赋值。默认实现基本上是这样的：

```js
// 以下是一个假设的基本实现，仅供说明
class Promise {
  static get [Symbol.species]() {
    return this;
  }
}
```

由于这种多态实现，派生子类的 `[Symbol.species]` 默认情况下也会返回构造函数本身。

```js
class SubPromise extends Promise {}
SubPromise[Symbol.species] === SubPromise; // true
```

Promise 链式方法——[`then()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)、[`catch()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) 和 [`finally()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)——返回新的 Promise 对象。它们通过 `this.constructor[Symbol.species]` 获取构造新 Promise 的构造函数。如果 `this.constructor` 为 `undefined`，或者 `this.constructor[Symbol.species]` 为 `undefined` 或 `null`，则会使用默认的 {{jsxref("Promise/Promise", "Promise()")}} 构造函数。否则，将使用 `this.constructor[Symbol.species]` 返回的构造函数来构造新的 Promise 对象。

## 示例

### 普通对象中的 Species

`Symbol.species` 属性返回默认的构造函数，对于 `Promise` 来说，它的默认构造函数就是 `Promise` 构造函数本身。

```js
Promise[Symbol.species]; // [Function: Promise]
```

### 派生对象中的 Species

在自定义 `Promise` 子类的实例中，比如 `MyPromise`，`MyPromise` 的 species 是 `MyPromise` 构造函数本身。然而，你可能希望在派生类的方法中覆盖该属性，以便返回父类 `Promise` 对象。

```js
class MyPromise extends Promise {
  // 将 MyPromise 的 species 覆盖为父类 Promise 构造函数
  static get [Symbol.species]() {
    return Promise;
  }
}
```

默认情况下，Promise 方法将返回具有子类类型的 Promise。

```js
class MyPromise extends Promise {
  someValue = 1;
}

console.log(MyPromise.resolve(1).then(() => {}).someValue); // 1
```

通过覆盖 `[Symbol.species]`，Promise 方法将返回基本的 `Promise` 类型。

```js
class MyPromise extends Promise {
  someValue = 1;
  static get [Symbol.species]() {
    return Promise;
  }
}

console.log(MyPromise.resolve(1).then(() => {}).someValue); // undefined
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Promise")}}
- {{jsxref("Symbol.species")}}
