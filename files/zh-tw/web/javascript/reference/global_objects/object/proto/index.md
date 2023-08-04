---
title: Object.prototype.__proto__
slug: Web/JavaScript/Reference/Global_Objects/Object/proto
---

> **警告：** 基於現代 Javascript 引擎最佳化物件屬性存取的方法，改變一個物件的 `[[Prototype]]` 在任何瀏覽器或是 Javascript 引擎都是非常慢的操作?。改變繼承屬性對效能的影響微妙且深遠，不僅僅只是影響執行 `obj.__proto__ = ...` 的時間，而是會影響到所有有存取到被改變 `[[Prototype]]` 的物件的程式碼的執行時間。如果你在乎效能的話就應該避免改變一個物件的 `[[Prototype]]` 。反之，請用 {{jsxref("Object.create()")}} 來產生一個擁有 `[[Prototype]]` 的物件。

> **警告：** 雖然 `Object.prototype.__proto__` 在今日已經被絕大部分的瀏覽器所支援，其存在與確切的行為只有在 ECMAScript 2015 規範才被標準化成一個歷史功能來確保相容性。為了更好的支援，建議使用{{jsxref("Object.getPrototypeOf()")}}。

{{JSRef}}

The `__proto__` property of {{jsxref("Object.prototype")}} is an accessor property (a getter function and a setter function) that exposes the internal `[[Prototype]]` (either an object or {{jsxref("Global_Objects/null", "null")}}) of the object through which it is accessed.

The use of `__proto__` is controversial, and has been discouraged. It was never originally included in the EcmaScript language spec, but modern browsers decided to implement it anyway. Only recently, the `__proto__` property has been standardized in the ECMAScript 2015 language specification for web browsers to ensure compatibility, so will be supported into the future. It is deprecated in favor of {{jsxref("Object.getPrototypeOf")}}/{{jsxref("Reflect.getPrototypeOf")}} and {{jsxref("Object.setPrototypeOf")}}/{{jsxref("Reflect.setPrototypeOf")}} (though still, setting the `[[Prototype]]` of an object is a slow operation that should be avoided if performance is a concern).

The `__proto__` property can also be used in an object literal definition to set the object `[[Prototype]]` on creation, as an alternative to {{jsxref("Object.create()")}}. See: [object initializer / literal syntax](/zh-TW/docs/Web/JavaScript/Reference/Operators/Object_initializer).

## Syntax

```js
var Circle = function () {};
var shape = {};
var circle = new Circle();

// Set the object prototype.
// DEPRECATED. This is for example purposes only. DO NOT DO THIS in real code.
shape.__proto__ = circle;

// Get the object prototype
console.log(shape.__proto__ === circle); // true
```

```js
var shape = function () {};
var p = {
  a: function () {
    console.log("aaa");
  },
};
shape.prototype.__proto__ = p;

var circle = new shape();
circle.a(); // aaa
console.log(shape.prototype === circle.__proto__); // true

// or
var shape = function () {};
var p = {
  a: function () {
    console.log("a");
  },
};

var circle = new shape();
circle.__proto__ = p;
circle.a(); // a
console.log(shape.prototype === circle.__proto__); // false

// or
function test() {}
test.prototype.myname = function () {
  console.log("myname");
};

var a = new test();
console.log(a.__proto__ === test.prototype); // true
a.myname(); // myname

// or
var fn = function () {};
fn.prototype.myname = function () {
  console.log("myname");
};

var obj = {
  __proto__: fn.prototype,
};

obj.myname(); // myname
```

Note: that is two underscores, followed by the five characters "proto", followed by two more underscores.

## Description

The `__proto__` getter function exposes the value of the internal `[[Prototype]]` of an object. For objects created using an object literal, this value is {{jsxref("Object.prototype")}}. For objects created using array literals, this value is {{jsxref("Array.prototype")}}. For functions, this value is {{jsxref("Function.prototype")}}. For objects created using `new fun`, where `fun` is one of the built-in constructor functions provided by JavaScript ({{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Date")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("String")}}, and so on — including new constructors added as JavaScript evolves), this value is always `fun.prototype`. For objects created using `new fun`, where `fun` is a function defined in a script, this value is the value of `fun.prototype`. (That is, if the constructor didn't return an other object explicitly, or the `fun.prototype` has been reassigned since the instance was created).

The `__proto__` setter allows the `[[Prototype]]` of an object to be mutated. The object must be extensible according to {{jsxref("Object.isExtensible()")}}: if it is not, a {{jsxref("Global_Objects/TypeError", "TypeError")}} is thrown. The value provided must be an object or {{jsxref("Global_Objects/null", "null")}}. Providing any other value will do nothing.

To understand how prototypes are used for inheritance, see guide article [Inheritance and the prototype chain](/zh-TW/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

The `__proto__` property is a simple accessor property on {{jsxref("Object.prototype")}} consisting of a getter and setter function. A property access for `__proto__` that eventually consults {{jsxref("Object.prototype")}} will find this property, but an access that does not consult {{jsxref("Object.prototype")}} will not find it. If some other `__proto__` property is found before {{jsxref("Object.prototype")}} is consulted, that property will hide the one found on {{jsxref("Object.prototype")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Compatibility notes

While the ECMAScript 2015 specification dictates that support for `__proto__` is required _only_ for web browsers (although being normative), other environments may support it as well for legacy usage.

## See also

- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
