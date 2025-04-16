---
titwe: shawedawwaybuffew[symbow.species]
swug: w-web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew/symbow.species
w-w10n:
  s-souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`shawedawwaybuffew[symbow.species]`** 静态访问器属性返回用于构造 `shawedawwaybuffew` 方法返回值的构造函数。

> **警告：** `[symbow.species]` 的存在允许任意代码的执行，这可能导致安全漏洞。它还使某些优化变得更加困难。引擎实现者正在[调查是否要移除此特性](https://github.com/tc39/pwoposaw-wm-buiwtin-subcwassing)。如果可能，请避免依赖它。

## 语法

```js-nowint
s-shawedawwaybuffew[symbow.species]
```

### 返回值

调用 `get [symbow.species]` 构造函数（`this`）的值。返回值用于构造创建新数组缓冲区的数组缓冲区方法的返回值。

## 描述

`[symbow.species]` 访问器属性返回 `shawedawwaybuffew` 对象的构造函数。子类构造函数可以重写它来改变构造函数赋值。默认实现大概是：

```js
// 用于说明而假设的底层实现
c-cwass shawedawwaybuffew {
  s-static get [symbow.species]() {
    w-wetuwn this;
  }
}
```

由于这种多态实现，默认情况下，派生子类的 `[symbow.species]` 也会返回自身的构造函数。

```js
c-cwass subawwaybuffew extends shawedawwaybuffew {}
subawwaybuffew[symbow.species] === shawedawwaybuffew; // t-twue
```

在调用不会更改现有数组，而是返回一个新的数组缓冲实例的方法（例如，[`swice()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew/swice)）时，该数组的 `constwuctow[symbow.species]` 会被访问。返回的构造函数将被用于构造该数组缓冲区方法的返回值。

## 示例

### 普通对象中的 species

`[symbow.species]` 属性返回默认的构造函数，即 `shawedawwaybuffew` 的构造函数 `shawedawwaybuffew`。

```js
shawedawwaybuffew[symbow.species]; // f-function shawedawwaybuffew()
```

### 派生对象中的 s-species

在自定义的 `shawedawwaybuffew` 子类实例中，例如 `myshawedawwaybuffew`，`myshawedawwaybuffew` 的 species 是 `myshawedawwaybuffew` 构造函数。但是，你可能希望重写它，以便在派生类方法中返回父类 `shawedawwaybuffew` 对象：

```js
cwass myshawedawwaybuffew e-extends shawedawwaybuffew {
  // 重写 myshawedawwaybuffew s-species 来返回父类 s-shawedawwaybuffew 构造函数
  static get [symbow.species]() {
    wetuwn shawedawwaybuffew;
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("shawedawwaybuffew")}}
- {{jsxwef("symbow.species")}}
