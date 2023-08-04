---
title: get Set[@@species]
slug: Web/JavaScript/Reference/Global_Objects/Set/@@species
---

{{JSRef}}

**`Set[@@species]`** 访问器属性返回`Set`的构造函数。

## 描述

species 访问属性返回 `Set` 对象的默认构造函数。子构造函数或许会重载这个属性以至改变构造函数的赋值。

## 示例

### 普通对象中的 Species

species 属性返回默认的构造函数，它是`Set` 对象的构造函数：

```js
Set[Symbol.species]; // function Set()
```

### 派生对象中的 Species

在一个派生集合对象中 (比如你自定义的`MySet`集合), `MySet` 的 species 属性 是 `MySet` 构造函数。又或者，你想要重写它，让它能在你派生的类方法中能返回父级`Set` 对象：

```js
class MySet extends Set {
  // Overwrite MySet species to the parent Set constructor
  static get [Symbol.species]() {
    return Set;
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("Set")}}
- {{jsxref("Symbol.species")}}
