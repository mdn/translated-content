---
title: Object.prototype.__proto__
slug: Web/JavaScript/Reference/Global_Objects/Object/proto
---

{{JSRef}}{{Deprecated_header}}

> [!WARNING]
> 由于现代 JavaScript 引擎优化属性访问的性质，修改一个对象的 `[[Prototype]]` 在每个浏览器和 JavaScript 引擎中都是非常缓慢的操作。此外，修改继承的效果是微妙和广泛的，不仅限于在 `obj.__proto__ = ...` 语句中花费的时间，而是可能扩展到**_任何_**有访问任何已经被修改过 `[[Prototype]]` 的对象的代码。你可以在这里阅读更多信息：[JavaScript 引擎基础：优化原型](https://mathiasbynens.be/notes/prototypes)。

> [!NOTE]
> 使用 `__proto__` 是有争议且不被鼓励的。它的存在和确切行为仅作为遗留特性被标准化，以确保 Web 兼容性，但它存在一些安全问题和隐患。为了更好的支持，请优先使用 {{JSxRef("Object.getPrototypeOf()")}}/{{JSxRef("Reflect.getPrototypeOf()")}} 和 {{JSxRef("Object.setPrototypeOf()")}}/{{JSxRef("Reflect.setPrototypeOf()")}}。

{{jsxref("Object")}} 实例的 **`__proto__`** 访问器属性暴露了此对象的 [`[[Prototype]]`](/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)（一个对象或 {{jsxref("Operators/null", "null")}}）。

`__proto__` 属性还可以在对象字面量定义中使用，作为创建对象时设置对象 `[[Prototype]]` 的一种替代方法，而不是使用 {{JSxRef("Object.create()")}}。请参见：[对象初始化/字面量语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer)。该语法已经标准化，并且在实现中得到了优化，与 `Object.prototype.__proto__` 相当不同。

## 语法

```js-nolint
obj.__proto__
```

### 返回值

如果作为 getter 使用，返回对象的 `[[Prototype]]`。

### 异常

- {{jsxref("TypeError")}}
  - : 如果尝试设置一个[不可扩展](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible)对象或[不可修改原型的特异对象](https://tc39.es/ecma262/#sec-immutable-prototype-exotic-objects)的原型，例如 `Object.prototype` 或 [`window`](/zh-CN/docs/Web/API/Window)，则会抛出错误。

## 描述

`__proto__` 的 getter 函数暴露了一个对象内部的 `[[Prototype]]` 的值。对于使用对象字面量创建的对象，该值是 `Object.prototype`。对于使用数组字面量创建的对象，该值是 [`Array.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)。对于函数，该值是 {{JSxRef("Function.prototype")}}。你可以在[继承与原型链](/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)中了解有关原型链的更多信息。

`__proto__` 的 setter 允许修改一个对象的 `[[Prototype]]`。提供的值必须是一个对象或 {{JSxRef("Operators/null", "null")}}。提供任何其他值都不会产生任何作用。

与 {{jsxref("Object.getPrototypeOf()")}} 和 {{jsxref("Object.setPrototypeOf()")}} 不同，它们始终作为 `Object` 的静态属性存在并始终反映 `[[Prototype]]` 内部属性。`__proto__` 属性并不总是作为所有对象的属性存在，因此不能可靠地反映 `[[Prototype]]`。

`__proto__` 属性是 `Object.prototype` 上一个简单的访问器属性，由 getter 和 setter 函数组成。如果访问 `__proto__` 属性时最终查询到 `Object.prototype`，则会找到该属性，但如果没有查询 `Object.prototype`，则不会找到该属性。如果在查询 `Object.prototype` 之前就找到了其他的 `__proto__` 属性，则会覆盖 `Object.prototype` 上的 `__proto__` 属性。

[`null` 原型对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#null_原型对象)不从 `Object.prototype` 继承任何属性，包括 `__proto__` 访问器属性。因此，如果你尝试在这样的对象上读取 `__proto__`，则无论对象的实际 `[[Prototype]]` 是什么，该值都将始终为 `undefined`，并且对 `__proto__` 的任何赋值都将创建一个名为 `__proto__` 的新属性，而不是设置对象的原型。此外，`__proto__` 可以通过 {{jsxref("Object.defineProperty()")}} 作为任何对象实例的自有属性重新定义，而不触发 setter。在这种情况下，`__proto__` 将不再是 `[[Prototype]]` 的访问器。因此，为设置和获取对象的 `[[Prototype]]`，请始终使用 {{jsxref("Object.getPrototypeOf()")}} 和 {{jsxref("Object.setPrototypeOf()")}}。

## 示例

### 使用 \_\_proto\_\_

```js
function Circle() {}
const shape = {};
const circle = new Circle();

// 设置该对象的原型
// 已弃用。这里只是举个例子，请不要在生产环境中这样做。
shape.__proto__ = circle;

// 判断该对象的原型链引用是否属于 circle
console.log(shape.__proto__ === circle); // true
```

```js
const ShapeA = function () {};
const ShapeB = {
  a() {
    console.log("aaa");
  },
};

ShapeA.prototype.__proto__ = ShapeB;
console.log(ShapeA.prototype.__proto__); // { a: [Function: a] }

const shapeA = new ShapeA();
shapeA.a(); // aaa
console.log(ShapeA.prototype === shapeA.__proto__); // true
```

```js
const ShapeC = function () {};
const ShapeD = {
  a() {
    console.log("a");
  },
};

const shapeC = new ShapeC();
shapeC.__proto__ = ShapeD;
shapeC.a(); // a
console.log(ShapeC.prototype === shapeC.__proto__); // false
```

```js
function Test() {}
Test.prototype.myName = function () {
  console.log("myName");
};

const test = new Test();
console.log(test.__proto__ === Test.prototype); // true
test.myName(); // myName

const obj = {};
obj.__proto__ = Test.prototype;
obj.myName(); // myName
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{JSxRef("Object.prototype.isPrototypeOf()")}}
- {{JSxRef("Object.getPrototypeOf()")}}
- {{JSxRef("Object.setPrototypeOf()")}}
