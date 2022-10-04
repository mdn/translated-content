---
title: Object.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
---

{{JSRef}}

**Object.setPrototypeOf()** 方法设置一个指定的对象的原型（即，内部 `[[Prototype]]` 属性）到另一个对象或 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)。

> **警告：** 由于现代 JavaScript 引擎优化属性访问所带来的特性的关系，更改对象的 `[[Prototype]]` 在各个浏览器和 JavaScript 引擎上都是一个很慢的操作。其在更改继承的性能上的影响是微妙而又广泛的，这不仅仅限于 `Object.setPrototypeOf(...)` 语句上的时间花费，而且可能会延伸到**_任何_**代码，那些可以访问**_任何_** `[[Prototype]]` 已被更改的对象的代码。参阅[JavaScript 引擎基础知识：原型优化](https://mathiasbynens.be/notes/prototypes)以了解更多。
>
> 由于此特性是语言的一部分，因此引擎开发人员仍需要高效地（理想地）实现该特性。在引擎开发人员解决此问题之前，如果你担心性能问题，则应该避免设置对象的 `[[Prototype]]`。相反，你应该使用 {{jsxref("Object.create()")}} 来创建带有你想要的 `[[Prototype]]` 的新对象。

## 语法

```js
Object.setPrototypeOf(obj, prototype)
```

### 参数

- `obj`
  - : 要设置其原型的对象。
- `prototype`
  - : 该对象的新原型（一个对象或 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)）。

### 返回值

指定的对象。

## 异常

- {{jsxref("TypeError")}}
  - : 如果发生以下情况中的任何一个，则抛出该异常：
    - `obj` 参数是[不可扩展的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible)，或者它是一个[不可修改原型的特异对象（exotic object）](https://tc39.es/ecma262/#sec-immutable-prototype-exotic-objects)，例如 `Object.prototype` 或 [`window`](/zh-CN/docs/Web/API/Window).
    - `prototype` 参数不是对象或 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)。

## 描述

通常，应该使用 `Object.setPrototypeOf()` 方法来设置对象的原型。你应该使用使用它，因为 [`Object.prototype.__proto__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) 访问器已被弃用。

如果 `obj` 参数不是一个对象（例如，数字、字符串，等），该方法将什么也不做。

出于安全考虑，某些内置对象的原型被设计为是*不可变的*。这可以防止原型污染攻击，尤其是[与代理（proxy）相关的](https://github.com/tc39/ecma262/issues/272)。核心语言仅指定 `Object.prototype` 是不可变原型的特异对象，其原型始终为 `null`。而在浏览器中，[`window`](/zh-CN/docs/Web/API/Window) 和 [`location`](/zh-CN/docs/Web/API/Window/location) 也是（常见的）不可变原型的特异对象。

`Object.setPrototypeOf()` 是 ECMAScript 6 最新草案中的方法，相对于 {{jsxref("Object.prototype.__proto__")}}，它被认为是修改对象原型更合适的方法

```js
Object.isExtensible(Object.prototype); // true; you can add more properties
Object.setPrototypeOf(Object.prototype, {}); // TypeError: Immutable prototype object '#<Object>' cannot have their prototype set
```

## 示例

### 使用 Object.setPrototypeOf 实现伪类继承

JS 中可以这样实现类继承。

```js
class Human {}
class SuperHero extends Human {}

const superMan = new SuperHero();
```

但是，如果我们想要在不使用 `class` 的情况下实现子类，我们可以这么做：

```js
function Human(name, level) {
  this.name = name;
  this.level = level;
}

function SuperHero(name, level) {
  Human.call(this, name, level);
}

Object.setPrototypeOf(SuperHero.prototype, Human.prototype);

// Set the `[[Prototype]]` of `SuperHero.prototype`
// to `Human.prototype`
// To set the prototypal inheritance chain

Human.prototype.speak = function () {
  return `${this.name} says hello.`;
}

SuperHero.prototype.fly = function () {
  return `${this.name} is flying.`;
}

const superMan = new SuperHero('Clark Kent', 1);

console.log(superMan.fly());
console.log(superMan.speak())
```

上面的类继承（使用 class）和伪类继承（使用带有 `prototype` 属性的构造函数）的相似性已在[继承与原型链](/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#使用不同的方法来创建对象和生成原型链)中提到。

在下面的示例中，也使用了类，`SuperHero` 使用 `setPrototypeOf` 而不是 `extends` 来继承 `Human`。

> **警告：** 由于性能和可读性的原因，不建议使用 `setPrototypeOf` 来代替 `extends`。

```js
class Human {}
class SuperHero {}

// Set the instance properties
Object.setPrototypeOf(SuperHero.prototype, Human.prototype);

// Hook up the static properties
Object.setPrototypeOf(SuperHero, Human);

const superMan = new SuperHero();
```

[ES-6 子类派生](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/)中提到了不使用 `extends` 的子类派生方法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中关于 `Object.setPrototypeOf` 的 Polyfill](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Reflect.setPrototypeOf()")}}
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.getPrototypeOf()")}}
- [`Object.prototype.__proto__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- [继承与原型链](/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#使用不同的方法来创建对象和生成原型链)
- [ES-6 子类派生](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/)
