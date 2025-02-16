---
title: Object.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toString
---

{{JSRef}}

**`toString()`** 方法返回一个表示该对象的字符串。该方法旨在重写（自定义）派生类对象的[类型转换](/zh-CN/docs/Web/JavaScript/Data_structures#强制类型转换)的逻辑。

{{InteractiveExample("JavaScript Demo: Object.prototype.toString()")}}

```js interactive-example
function Dog(name) {
  this.name = name;
}

const dog1 = new Dog("Gabby");

Dog.prototype.toString = function dogToString() {
  return `${this.name}`;
};

console.log(dog1.toString());
// Expected output: "Gabby"
```

## 语法

```js-nolint
toString()
```

### 参数

默认情况下，`toString()` 不接受任何参数。然而，继承自 `Object` 的对象可能用它们自己的实现重写它，这些实现可以接受参数。例如，[`Number.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) 和 [`BigInt.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) 方法接受一个可选的 `radix` 参数。

### 返回值

一个表示该对象的字符串。

## 描述

JavaScript 调用 `toString` 方法[将对象转换为一个原始值](/zh-CN/docs/Web/JavaScript/Data_structures#强制类型转换)。你很少需要自己去调用 `toString` 方法；当遇到需要原始值的对象时，JavaScript 会自己调用它。

该方法由[字符串转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#字符串强制转换)优先调用，但是[数字的强制转换](/zh-CN/docs/Web/JavaScript/Data_structures#强制数字类型转换)和[原始值的强制转换](/zh-CN/docs/Web/JavaScript/Data_structures#强制原始值转换)会优先调用 `valueOf()`。然而，因为基本的 [`valueOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) 方法返回一个对象，`toString()` 方法通常在结束时调用，除非对象重写了 `valueOf()`。例如，`+[1]` 返回 `1`，因为它的 [`toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) 方法返回 `"1"`，然后将其转换为数字。

所有继承自 `Object.prototype` 的对象（即，除了 [`null`-prototype 对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)之外的对象）都继承 `toString()` 方法。当你创建一个自定义对象时，你可以重写 `toString()` 以调用自定义方法，以便将自定义对象转换为一个字符串。或者，你可以增加一个 [`[Symbol.toPrimitive]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) 方法，该方法允许对转换过程有更多的控制，并且对于任意的类型转换，且总是优先于 `valueOf` 或 `toString`。

要将基本的 `Object.prototype.toString()` 用于重写的对象（或者在 `null` 或 `undefined` 上调用它），你需要在它上面调用 {{jsxref("Function.prototype.call()")}} 或者 {{jsxref("Function.prototype.apply()")}}，将要检查的对象作为第一个参数传递（称为 `thisArg`）。

```js
const arr = [1, 2, 3];

arr.toString(); // "1,2,3"
Object.prototype.toString.call(arr); // "[object Array]"
```

`Object.prototype.toString()` 返回 `"[object Type]"`，这里的 `Type` 是对象的类型。如果对象有 [`Symbol.toStringTag`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 属性，其值是一个字符串，则它的值将被用作 `Type`。许多内置的对象，包括 [`Map`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map) 和 [`Symbol`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)，都有 `Symbol.toStringTag`。一些早于 ES6 的对象没有 `Symbol.toStringTag`，但仍然有一个特殊的标签。它们包括（标签与下面给出的类型名相同）：

- [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [`Function`](/zh-CN/docs/Web/JavaScript/Reference/Functions)（它的 [`typeof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof) 返回 `"function"`）
- [`Error`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [`Boolean`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [`Number`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`String`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)
- [`Date`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [`RegExp`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

[`arguments`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments) 对象返回 `"[object Arguments]"`。其他所有内容，包括用户自定义的类，除非有一个自定义的 `Symbol.toStringTag`，否则都将返回 `"[object Object]"`。

在 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null) 和 {{jsxref("undefined")}} 上调用 `Object.prototype.toString()` 分别返回 `[object Null]` 和 `[object Undefined]`。

## 示例

### 为自定义对象重写 toString

你可以创建一个要调用的函数来代替默认的 `toString()` 方法。你创建的 `toString()` 函数应该返回一个字符串值。如果它返回一个对象，并且在[类型转换](/zh-CN/docs/Web/JavaScript/Data_structures#强制类型转换)期间隐式调用它，那么忽略它的结果，并使用相关方法 {{jsxref("Object/valueOf", "valueOf()")}} 的值，或者这些方法都不返回原始值，则抛出 `TypeError`。

以下代码定义了 `Dog` 类。

```js
class Dog {
  constructor(name, breed, color, sex) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.sex = sex;
  }
}
```

如果你在 `Dog` 实例上显示或者隐式的调用 `toString()` 方法，它将返回从 {{jsxref("Object")}} 继承的默认值：

```js
const theDog = new Dog("Gabby", "Lab", "chocolate", "female");

theDog.toString(); // "[object Object]"
`${theDog}`; // "[object Object]"
```

以下代码重写了默认的 `toString()` 方法。这个方法生成一个包含该对象的 `name`、`breed`、`color` 和 `sex` 的字符串。

```js
class Dog {
  constructor(name, breed, color, sex) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.sex = sex;
  }
  toString() {
    return `Dog ${this.name} is a ${this.sex} ${this.color} ${this.breed}`;
  }
}
```

有了前面的代码，每当 `Dog` 实例在字符串的上下文中使用，JavaScript 会自动调用 `toString()` 方法。

```js
const theDog = new Dog("Gabby", "Lab", "chocolate", "female");

`${theDog}`; // "Dog Gabby is a female chocolate Lab"
```

### 使用 toString() 去检查对象类

`toString()` 可以与每个对象一起使用，并且（默认情况下）允许你获得它的类。

```js
const toString = Object.prototype.toString;

toString.call(new Date()); // [object Date]
toString.call(new String()); // [object String]
// Math has its Symbol.toStringTag
toString.call(Math); // [object Math]

toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
```

以这种方式使用 `toString()` 是不可靠的；对象可以通过定义 {{jsxref("Symbol.toStringTag")}} 属性来更改 `Object.prototype.toString()` 的行为，从而导致意想不到的结果。例如：

```js
const myDate = new Date();
Object.prototype.toString.call(myDate); // [object Date]

myDate[Symbol.toStringTag] = "myDate";
Object.prototype.toString.call(myDate); // [object myDate]

Date.prototype[Symbol.toStringTag] = "prototype polluted";
Object.prototype.toString.call(new Date()); // [object prototype polluted]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Object.prototype.toString` 的 Polyfill（支持 `Symbol.toStringTag`）](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Number.prototype.toString()")}}
- {{jsxref("Symbol.toPrimitive")}}
- {{jsxref("Symbol.toStringTag")}}
