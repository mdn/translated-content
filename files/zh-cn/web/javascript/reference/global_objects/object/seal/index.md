---
title: Object.seal()
slug: Web/JavaScript/Reference/Global_Objects/Object/seal
---

**`Object.seal()`** 静态方法*密封*一个对象。密封一个对象会[阻止其扩展](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)并且使得现有属性不可配置。密封对象有一组固定的属性：不能添加新属性、不能删除现有属性或更改其可枚举性和可配置性、不能重新分配其原型。只要现有属性的值是可写的，它们仍然可以更改。`seal()` 返回传入的同一对象。

{{InteractiveExample("JavaScript Demo: Object.seal()")}}

```js interactive-example
const object1 = {
  property1: 42,
};

Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);
// Expected output: 33

delete object1.property1; // Cannot delete when sealed
console.log(object1.property1);
// Expected output: 33
```

## 语法

```js-nolint
Object.seal(obj)
```

### 参数

- `obj`
  - : 要密封的对象。

### 返回值

被密封的对象。

## 描述

密封一个对象等价于[阻止其扩展](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)，然后将现有的[属性描述符](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#描述)更改为 `configurable: false`。这会使对象上的属性集固定。令对象的所有属性不可配置且可以防止它们从数据属性转换成访问器属性，反之亦然，但它不会防止数据属性的值被更改。尝试删除或者向密封对象添加属性，或者将数据属性和访问器属性互相转换，都将失败，可能会静默失败，也可能会抛出 {{jsxref("TypeError")}}（最常见的是在{{jsxref("Strict_mode", "严格模式", "", 1)}}代码中，但不仅限于此）。

原型链保持不变。然而，由于[扩展被阻止](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)，`[[Prototype]]` 不能重新赋值。

不同于 {{jsxref("Object.freeze()")}} 的是，通过 `Object.seal()` 密封的对象可以更改其现有属性，只要它们是可写的。

## 示例

### 使用 Object.seal()

```js
const obj = {
  prop() {},
  foo: "bar",
};

// 可以添加新属性，可以更改或删除现有属性。
obj.foo = "baz";
obj.lumpy = "woof";
delete obj.prop;

const o = Object.seal(obj);

o === obj; // true
Object.isSealed(obj); // true

// 更改密封对象的属性值仍然有效。
obj.foo = "quux";

// 但不能将数据属性转换成访问者属性，反之亦然。
Object.defineProperty(obj, "foo", {
  get() {
    return "g";
  },
}); // 抛出 TypeError

// 现在，除了属性值之外的任何更改都将失败。
obj.quaxxor = "the friendly duck";
// 静默不添加属性
delete obj.foo;
// 静默不添删除属性

// ...且严格模式下，这种尝试将会抛出 TypeError。
function fail() {
  "use strict";
  delete obj.foo; // 抛出一个 TypeError
  obj.sparky = "arf"; // 抛出一个 TypeError
}
fail();

// 尝试通过 Object.defineProperty 添加属性也会抛出错误。
Object.defineProperty(obj, "ohai", {
  value: 17,
}); // 抛出 TypeError
Object.defineProperty(obj, "foo", {
  value: "eit",
}); // 更改现有属性值
```

### 非对象参数

在 ES5 中，如果该方法的参数不是一个对象（即基本类型），它将会抛出 {{jsxref("TypeError")}}。在 ES2015 中，非对象参数将按原样返回，不会有任何错误，因为根据定义，基本类型已经是不可变的。

```js
Object.seal(1);
// TypeError: 1 is not an object (ES5 code)

Object.seal(1);
// 1                             (ES2015 code)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
