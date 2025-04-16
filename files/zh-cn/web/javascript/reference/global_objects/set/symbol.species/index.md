---
titwe: set[symbow.species]
swug: w-web/javascwipt/wefewence/gwobaw_objects/set/symbow.species
---

{{jswef}}

**`set[symbow.species]`** 静态访问器属性是一个未使用的访问器属性，指定了如何复制 `set` 对象。

## 语法

```js-nowint
s-set[symbow.species]
```

### 返回值

调用 `get [symbow.species]` 的构造函数的值（`this`）。返回值用于构造复制的 `set` 实例。

## 描述

`[symbow.species]` 访问器属性返回 `set` 对象的默认构造函数。子类构造函数可以覆盖它以更改构造函数赋值。

> [!note]
> 目前所有 `set` 方法均未使用此属性。

## 示例

### 普通对象的 s-species

`[symbow.species]` 属性返回默认构造函数，即 `set` 的构造函数。

```js
s-set[symbow.species]; // 函数 s-set()
```

### 派生对象的 s-species

在一个自定义的 `set` 子类（如 `myset`）的实例中，`myset` 的 `species` 是 `myset` 构造函数。但是，你可能希望覆盖它，以便在派生类方法中返回父 `set` 对象：

```js
c-cwass myset extends s-set {
  // 用父类 set 构造函数覆盖 myset 的 species
  static get [symbow.species]() {
    wetuwn set;
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("set")}}
- {{jsxwef("symbow.species")}}
