---
title: get ArrayBuffer[@@species]
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/@@species
---

{{JSRef}}

该 **`ArrayBuffer[@@species]`** 访问器属性会返回 `ArrayBuffer` 构造器。

## 语法

```plain
ArrayBuffer[Symbol.species]
```

## 描述

这个 species 访问器属性会返回默认的 `ArrayBuffer` 构造器。子类构造器可能会覆盖它以改变构造器赋值。

## 示例

返回默认的 `ArrayBuffer` 构造器：

```js
ArrayBuffer[Symbol.species]; // function ArrayBuffer()
```

在派生集合对象中（比如你定制的 array buffer `MyArrayBuffer`），`MyArrayBuffer` species 就是 `MyArrayBuffer` 构造器。但是，你可能想要在派生类里重写它，以期返回的是父类的 `ArrayBuffer` 对象：

```js
class MyArrayBuffer extends ArrayBuffer {
  // Overwrite MyArrayBuffer species to the parent ArrayBuffer constructor
  static get [Symbol.species]() {
    return ArrayBuffer;
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关

- {{jsxref("ArrayBuffer")}}
- {{jsxref("Symbol.species")}}
