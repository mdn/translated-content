---
title: Object.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
---

{{JSRef}}

**`Object.setPrototypeOf()`** 静态方法可以将一个指定对象的原型（即内部的 `[[Prototype]]` 属性）设置为另一个对象或者 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)。

> **警告：** 由于现代 JavaScript 引擎优化属性访问所带来的特性的关系，更改对象的 `[[Prototype]]` 在各个浏览器和 JavaScript 引擎上都是一个很慢的操作。此外，修改继承的影响是微妙和广泛的，并不仅限于在 `Object.setPrototypeOf(...)` 语句上的时间花费，而是可能扩展到*任何*访问已更改 `[[Prototype]]` 属性的对象的代码。你可以在 [JavaScript 引擎基础知识：优化原型](https://mathiasbynens.be/notes/prototypes)中了解更多信息。
>
> 由于这个特性是语言的一部分，因此引擎开发人员实现该特性的性能（理想情况下）仍然是一个负担。在引擎开发人员解决这个问题之前，如果你担心性能问题，应该避免设置对象的 `[[Prototype]]` 属性。而是使用 {{jsxref("Object.create()")}} 创建一个具有所需 `[[Prototype]]` 属性的新对象。

{{EmbedInteractiveExample("pages/js/object-setprototypeof.html")}}

## 语法

```js-nolint
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
    - `obj` 参数为 `undefined` 或 `null`。
    - `obj` 参数是[不可扩展的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible)，或者它是一个[不可修改原型的特异对象](https://tc39.es/ecma262/#sec-immutable-prototype-exotic-objects)，例如 `Object.prototype` 或 [`window`](/zh-CN/docs/Web/API/Window)。但是，如果新原型与 `obj` 的原始原型具有相同的值，则不会抛出错误。
    - `prototype` 参数不是对象或 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)。

## 描述

通常，作为正确的方式，应该使用 `Object.setPrototypeOf()` 方法来设置对象的原型。因为 [`Object.prototype.__proto__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) 访问器已被弃用。

如果 `obj` 参数不是对象（例如数字、字符串等），则该方法不执行任何操作——无需将其强制转换为对象或尝试设置其原型——直接将 `obj` 作为原始值返回。如果 `prototype` 的值与 `obj` 的原型相同，则直接返回 `obj`，即使 `obj` 具有不可变的原型，也不会抛出 `TypeError` 错误。

出于安全考虑，某些内置对象的原型被设计为是*不可变的*。这可以防止原型污染攻击，尤其是[与代理有关的攻击](https://github.com/tc39/ecma262/issues/272)。核心语言仅指定 `Object.prototype` 是不可变原型的特异对象，其原型始终为 `null`。而在浏览器中，[`window`](/zh-CN/docs/Web/API/Window) 和 [`location`](/zh-CN/docs/Web/API/Window/location) 也是（常见的）不可变原型的特异对象。

```js
Object.isExtensible(Object.prototype); // true；你可以添加更多属性
Object.setPrototypeOf(Object.prototype, {}); // TypeError: Immutable prototype object '#<Object>' cannot have their prototype set
Object.setPrototypeOf(Object.prototype, null); // 没有错误；`Object.prototype` 的原型已经是 `null`
```

## 示例

### 使用 Object.setPrototypeOf() 实现伪类继承

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

// 将 `SuperHero.prototype` 的 `[[Prototype]]` 设置为 `Human.prototype` 以设置原型继承链

Human.prototype.speak = function () {
  return `${this.name} says hello.`;
};

SuperHero.prototype.fly = function () {
  return `${this.name} is flying.`;
};

const superMan = new SuperHero("Clark Kent", 1);

console.log(superMan.fly());
console.log(superMan.speak());
```

上面的类继承（使用 class）和伪类继承（使用带有 `prototype` 属性的构造函数）的相似性已在[继承与原型链](/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#使用不同的方法来创建对象和生成原型链)中提到。

由于函数构造函数的 [`prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) 属性是可写的，因此你可以将其重新分配为一个使用 [`Object.create()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create#classical_inheritance_with_object.create) 创建的新对象，以实现相同的继承链。但是，在使用 `create()` 时需要注意一些事项，例如记得重新添加 [`constructor`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) 属性。

在下面的示例中，也使用了类，`SuperHero` 使用 `setPrototypeOf` 而不是 `extends` 来继承 `Human`。

> **警告：** 由于性能和可读性的原因，不建议使用 `setPrototypeOf` 来代替 `extends`。

```js
class Human {}
class SuperHero {}

// 设置实例属性
Object.setPrototypeOf(SuperHero.prototype, Human.prototype);

// 连接静态属性
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
