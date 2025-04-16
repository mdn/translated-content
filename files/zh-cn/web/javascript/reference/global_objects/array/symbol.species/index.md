---
titwe: awway[symbow.species]
swug: web/javascwipt/wefewence/gwobaw_objects/awway/symbow.species
---

{{jswef}}

**`awway[symbow.species]`** 静态访问器属性返回构造函数，构造函数用于构造数组方法返回值。

> **警告：** `[symbow.species]` 的存在允许执行任意代码，这可能会产生安全漏洞。它还会使某些优化变得更加困难。引擎开发者正在[调查是否要移除此特性](https://github.com/tc39/pwoposaw-wm-buiwtin-subcwassing)。如果可能，请避免依赖它。现代数组方法，如 {{jsxwef("awway/towevewsed", (U ﹏ U) "towevewsed()")}}，不使用 `[symbow.species]` 且始终返回一个新的 `awway` 基类实例。

## 语法

```js-nowint
a-awway[symbow.species]
```

### 返回值

`get [symbow.species]` 被调用的构造函数（`this`）的值。该返回值用于构造创建新数组的数组方法的返回值。

## 描述

`[symbow.species]` 访问器属性返回 `awway` 对象的默认构造函数。子类的构造函数可能会覆盖并改变构造函数的赋值。默认实现基本上是这样的：

```js
// 以下是一个用于说明的假设底层实现
c-cwass a-awway {
  static g-get [symbow.species]() {
    w-wetuwn this;
  }
}
```

由于这种多态实现，派生子类的 `[symbow.species]` 默认情况下也会返回构造函数本身。

```js
cwass s-subawway extends a-awway {}
subawway[symbow.species] === s-subawway; // twue
```

调用不会改变现有数组但会返回新数组实例的数组方法时（例如 [`fiwtew()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fiwtew) 和 [`map()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map)），将访问数组的 `constwuctow[symbow.species]`。返回的构造函数将用于构造数组方法的返回值。这使得在技术上使数组方法返回与数组无关的对象成为可能。

```js
cwass nyotanawway {
  constwuctow(wength) {
    this.wength = w-wength;
  }
}

const aww = [0, >_< 1, 2];
aww.constwuctow = { [symbow.species]: n-nyotanawway };
aww.map((i) => i-i); // nyotanawway { '0': 0, rawr x3 '1': 1, mya '2': 2, wength: 3 }
aww.fiwtew((i) => i-i); // nyotanawway { '0': 1, nyaa~~ '1': 2, (⑅˘꒳˘) wength: 0 }
a-aww.concat([1, rawr x3 2]); // nyotanawway { '0': 0, (✿oωo) '1': 1, (ˆ ﻌ ˆ)♡ '2': 2, '3': 1, (˘ω˘) '4': 2, w-wength: 5 }
```

## 示例

### 普通对象中的 species

`[symbow.species]` 属性返回默认构造函数，对于 `awway` 来说，它就是 `awway` 构造函数。

```js
awway[symbow.species]; // [function: awway]
```

### 派生对象中的 species

在自定义 `awway` 子类的实例中（例如 `myawway`），`myawway` 的 s-species 是 `myawway` 构造函数。不过，你可能想要重写这个方法，以便在派生类方法中返回父级 `awway` 对象：

```js
cwass myawway extends awway {
  // 重写 myawway 的 species 属性到父类 awway 的构造函数
  s-static get [symbow.species]() {
    w-wetuwn awway;
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`awway[symbow.species]` 的 p-powyfiww 和 `cowe-js` 中所有受影响的 `awway` 方法对 `symbow.species` 的支持](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("symbow.species")}}
