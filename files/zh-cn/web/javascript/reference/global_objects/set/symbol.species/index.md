---
title: Set[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/Set/Symbol.species
---

{{JSRef}}

**`Set[Symbol.species]`** 静态访问器属性是一个未使用的访问器属性，指定了如何复制 `Set` 对象。

## 语法

```js-nolint
Set[Symbol.species]
```

### 返回值

调用 `get [Symbol.species]` 的构造函数的值（`this`）。返回值用于构造复制的 `Set` 实例。

## 描述

`[Symbol.species]` 访问器属性返回 `Set` 对象的默认构造函数。子类构造函数可以覆盖它以更改构造函数赋值。

> [!NOTE]
> 目前所有 `Set` 方法均未使用此属性。

## 示例

### 普通对象的 Species

`[Symbol.species]` 属性返回默认构造函数，即 `Set` 的构造函数。

```js
Set[Symbol.species]; // 函数 Set()
```

### 派生对象的 Species

在一个自定义的 `Set` 子类（如 `MySet`）的实例中，`MySet` 的 `species` 是 `MySet` 构造函数。但是，你可能希望覆盖它，以便在派生类方法中返回父 `Set` 对象：

```js
class MySet extends Set {
  // 用父类 Set 构造函数覆盖 MySet 的 species
  static get [Symbol.species]() {
    return Set;
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Set")}}
- {{jsxref("Symbol.species")}}
