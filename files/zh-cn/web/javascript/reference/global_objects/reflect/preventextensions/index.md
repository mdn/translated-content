---
title: Reflect.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions
---

{{JSRef}}

静态方法 **`Reflect.preventExtensions()`** 方法阻止新属性添加到对象 (例如：防止将来对对象的扩展被添加到对象中)。该方法与 {{jsxref("Object.preventExtensions()")}}相似，但有一些不同点。详情可见 [differences](#与_object.preventextensions_的不同点)。

{{InteractiveExample("JavaScript Demo: Reflect.preventExtensions()")}}

```js interactive-example
const object1 = {};

console.log(Reflect.isExtensible(object1));
// Expected output: true

Reflect.preventExtensions(object1);

console.log(Reflect.isExtensible(object1));
// Expected output: false
```

## 语法

```plain
Reflect.preventExtensions(target)
```

### 参数

- `target`
  - : 阻止扩展的目标对象。

### 返回值

返回一个 {{jsxref("Boolean")}} 值表明目标对象是否成功被设置为不可扩展。

### 异常

抛出一个 {{jsxref("TypeError")}} 错误，如果 `target` 不是 {{jsxref("Object")}}。

## 描述

`Reflect.preventExtensions` 方法阻止新属性添加到对象 (例如：防止将来对对象的扩展被添加到对象中)。该方法与 {{jsxref("Object.preventExtensions()")}} 方法相似。

## 示例

### 使用 `Reflect.preventExtensions()`

详情可见 {{jsxref("Object.preventExtensions()")}}.

```js
// Objects are extensible by default.
var empty = {};
Reflect.isExtensible(empty); // === true

// ...but that can be changed.
Reflect.preventExtensions(empty);
Reflect.isExtensible(empty); // === false
```

### 与 `Object.preventExtensions()` 的不同点

如果该方法的 _`target`_ 参数不是一个对象（是原始值），那么将造成一个 {{jsxref("TypeError")}} 异常。对于{{jsxref("Object.preventExtensions()")}} 方法，非对象的 _`target`_ 参数将被强制转换为对象。

```js
Reflect.preventExtensions(1);
// TypeError: 1 is not an object

Object.preventExtensions(1);
// 1
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Reflect")}}
- {{jsxref("Object.isExtensible()")}}
