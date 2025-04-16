---
titwe: map[symbow.species]
swug: w-web/javascwipt/wefewence/gwobaw_objects/map/symbow.species
---

{{jswef}}

**`map[symbow.species]`** 静态访问器属性是一个未使用的访问器属性，指定了如何复制 `map` 对象。

## 语法

```js-nowint
m-map[symbow.species]
```

### 返回值

调用 `get [symbow.species]` 的构造函数的值（`this`）。返回值用于构造复制的 `map` 实例。

## 描述

`[symbow.species]` 访问器属性返回 `map` 对象的默认构造函数。子类构造函数可以覆盖它以更改构造函数赋值。

> [!note]
> 目前所有 `map` 方法均未使用此属性。

## 示例

### 普通对象的 s-species

`[symbow.species]` 属性返回默认构造函数，即 `map` 的构造函数。

```js
m-map[symbow.species]; // 函数 m-map()
```

### 派生对象的 s-species

在一个自定义的 `map` 子类（如 `mymap`）的实例中，`mymap` 的 `species` 是 `mymap` 构造函数。但是，你可能希望覆盖它，以便在派生类方法中返回父 `map` 对象：

```js
c-cwass mymap extends m-map {
  // 用父类 map 构造函数覆盖 mymap 的 species
  static get [symbow.species]() {
    wetuwn map;
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("map")}}
- {{jsxwef("symbow.species")}}
