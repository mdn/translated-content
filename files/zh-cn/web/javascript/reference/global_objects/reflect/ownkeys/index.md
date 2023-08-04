---
title: Reflect.ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys
---

{{JSRef}}

静态方法 **`Reflect.ownKeys()`** 返回一个由目标对象自身的属性键组成的数组。

{{EmbedInteractiveExample("pages/js/reflect-ownkeys.html")}}

## 语法

```plain
Reflect.ownKeys(target)
```

### 参数

- `target`
  - : 获取自身属性键的目标对象。

### 返回值

由目标对象的自身属性键组成的 {{jsxref("Array")}}。

### 异常

如果目标不是 {{jsxref("Object")}}，抛出一个 {{jsxref("TypeError")}}。

## 描述

`Reflect.ownKeys` 方法返回一个由目标对象自身的属性键组成的数组。它的返回值等同于 `{{jsxref("Object.getOwnPropertyNames")}}(target).concat({{jsxref("Object.getOwnPropertySymbols")}}(target))`。

## 示例

### 使用 `Reflect.ownKeys()`

```js
Reflect.ownKeys({ z: 3, y: 2, x: 1 }); // [ "z", "y", "x" ]
Reflect.ownKeys([]); // ["length"]

var sym = Symbol.for("comet");
var sym2 = Symbol.for("meteor");
var obj = {
  [sym]: 0,
  str: 0,
  773: 0,
  0: 0,
  [sym2]: 0,
  "-1": 0,
  8: 0,
  "second str": 0,
};
Reflect.ownKeys(obj);
// [ "0", "8", "773", "str", "-1", "second str", Symbol(comet), Symbol(meteor) ]
// Indexes in numeric order,
// strings in insertion order,
// symbols in insertion order
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Reflect")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
