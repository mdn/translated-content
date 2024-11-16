---
title: Map[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/Map/Symbol.species
---

{{JSRef}}

**`Map[Symbol.species]`** 静态访问器属性是一个未使用的访问器属性，指定了如何复制 `Map` 对象。

## 语法

```js-nolint
Map[Symbol.species]
```

### 返回值

调用 `get [Symbol.species]` 的构造函数的值（`this`）。返回值用于构造复制的 `Map` 实例。

## 描述

`[Symbol.species]` 访问器属性返回 `Map` 对象的默认构造函数。子类构造函数可以覆盖它以更改构造函数赋值。

> [!NOTE]
> 目前所有 `Map` 方法均未使用此属性。

## 示例

### 普通对象的 species

`[Symbol.species]` 属性返回默认构造函数，即 `Map` 的构造函数。

```js
Map[Symbol.species]; // 函数 Map()
```

### 派生对象的 species

在一个自定义的 `Map` 子类（如 `MyMap`）的实例中，`MyMap` 的 `species` 是 `MyMap` 构造函数。但是，你可能希望覆盖它，以便在派生类方法中返回父 `Map` 对象：

```js
class MyMap extends Map {
  // 用父类 Map 构造函数覆盖 MyMap 的 species
  static get [Symbol.species]() {
    return Map;
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Map")}}
- {{jsxref("Symbol.species")}}
