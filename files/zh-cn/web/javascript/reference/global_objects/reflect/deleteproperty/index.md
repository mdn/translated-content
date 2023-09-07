---
title: Reflect.deleteProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty
---

{{JSRef}}

静态方法 **`Reflect.deleteProperty()`** 允许用于删除属性。它很像 [`delete` operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete) ，但它是一个函数。

## 语法

```plain
Reflect.deleteProperty(target, propertyKey)
```

### 参数

- `target`
  - : 删除属性的目标对象。
- `propertyKey`
  - : 需要删除的属性的名称。

### 返回值

{{jsxref("Boolean")}} 值表明该属性是否被成功删除。

### 异常

抛出一个 {{jsxref("TypeError")}}，如果`target`不是 {{jsxref("Object")}}。

## 描述

`Reflect.deleteProperty` 允许你删除一个对象上的属性。返回一个 {{jsxref("Boolean")}} 值表示该属性是否被成功删除。它几乎与非严格的 [`delete` operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete) 相同。

## 示例

### 使用 `Reflect.deleteProperty()`

```js
var obj = { x: 1, y: 2 };
Reflect.deleteProperty(obj, "x"); // true
obj; // { y: 2 }

var arr = [1, 2, 3, 4, 5];
Reflect.deleteProperty(arr, "3"); // true
arr; // [1, 2, 3, , 5]

// 如果属性不存在，返回 true
Reflect.deleteProperty({}, "foo"); // true

// 如果属性不可配置，返回 false
Reflect.deleteProperty(Object.freeze({ foo: 1 }), "foo"); // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Reflect")}}
- [`delete` operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)
