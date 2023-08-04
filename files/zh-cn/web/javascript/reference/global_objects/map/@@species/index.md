---
title: get Map[@@species]
slug: Web/JavaScript/Reference/Global_Objects/Map/@@species
---

{{JSRef}}

**`Map[@@species]`** 访问器属性会返回一个 `Map` 构造函数。

## 语法

```plain
Map[Symbol.species]
```

## 描述

The species accessor property returns the default constructor for `Map` objects. Subclass constructors may over-ride it to change the constructor assignment.

## 案例

The species property returns the default constructor function, which is the `Map` constructor for `Map` objects:

```js
Map[Symbol.species]; // function Map()
```

In a derived collection object (e.g. your custom map `MyMap`), the `MyMap` species is the `MyMap` constructor. However, you might want to overwrite this, in order to return parent `Map` objects in your derived class methods:

```js
class MyMap extends Map {
  // 重写覆盖 MyMap species to the parent Map constructor
  static get [Symbol.species]() {
    return Map;
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Map")}}
- {{jsxref("Symbol.species")}}
