---
title: Reflect.set()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/set
---

{{JSRef}}

静态方法 **`Reflect.set()`** 工作方式就像在一个对象上设置一个属性。

## 语法

```js-nolint
Reflect.set(target, propertyKey, value)
Reflect.set(target, propertyKey, value, receiver)
```

### 参数

- `target`
  - : 设置属性的目标对象。
- `propertyKey`
  - : 设置的属性的名称。
- `value`
  - : 设置的值。
- `receiver`
  - : 如果遇到 `setter`，`receiver`则为`setter`调用时的`this`值。

### 返回值

返回一个 {{jsxref("Boolean")}} 值表明是否成功设置属性。

### 异常

抛出一个 {{jsxref("TypeError")}}，如果目标不是 {{jsxref("Object")}}。

## 描述

`Reflect.set` 方法允许你在对象上设置属性。它的作用是给属性赋值并且就像 [property accessor](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors) 语法一样，但是它是以函数的方式。

## 示例

### 使用 `Reflect.set()`

```js
// Object
var obj = {};
Reflect.set(obj, "prop", "value"); // true
obj.prop; // "value"

// Array
var arr = ["duck", "duck", "duck"];
Reflect.set(arr, 2, "goose"); // true
arr[2]; // "goose"

// It can truncate an array.
Reflect.set(arr, "length", 1); // true
arr; // ["duck"];

// With just one argument, propertyKey and value are "undefined".
var obj = {};
Reflect.set(obj); // true
Reflect.getOwnPropertyDescriptor(obj, "undefined");
// { value: undefined, writable: true, enumerable: true, configurable: true }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Reflect")}}
- [属性访问器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors)
