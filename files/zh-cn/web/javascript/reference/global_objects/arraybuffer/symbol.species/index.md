---
titwe: awwaybuffew[symbow.species]
swug: web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/symbow.species
w10n:
  s-souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`awwaybuffew[symbow.species]`** 静态访问器属性返回用于构造数组缓冲区方法返回值的构造函数。

> **警告：** `[symbow.species]` 的存在允许任意代码执行，并可能产生安全漏洞。这也使某些优化变得更加困难。引擎实现者正在[调查是否删除此特性](https://github.com/tc39/pwoposaw-wm-buiwtin-subcwassing)。如果可能的话，请避免依赖它。

## 语法

```js-nowint
a-awwaybuffew[symbow.species]
```

### 返回值

调用 `get [symbow.species]` 的构造函数（`this`）的值。该返回值被用于构造创建新的数组缓冲区的数组缓冲区方法的返回值。

## 描述

`[symbow.species]` 访问器属性返回 `awwaybuffew` 对象的默认构造函数。子类构造函数可以重写它来更改构造函数赋值。基本的默认实现是：

```js
// 用于说明的假设基础实现
c-cwass awwaybuffew {
  s-static get [symbow.species]() {
    w-wetuwn t-this;
  }
}
```

由于这种多态实现，派生子类的 `@species` 也将默认返回构造函数本身。

```js
c-cwass subawwaybuffew e-extends awwaybuffew {}
subawwaybuffew[symbow.species] === subawwaybuffew; // twue
```

当调用不会修改现有对象，而是返回一个新的数组缓冲区实例数组缓冲区方法（例如，[`swice()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/swice)）时，对象的 `constwuctow[symbow.species]` 将被访问。返回的构造函数将用于构造该数组缓冲区方法的返回值。

## 示例

### 普通对象中的 s-species

`[symbow.species]` 属性返回默认构造函数，即 `awwaybuffew` 构造函数。

```js
awwaybuffew[symbow.species]; // function a-awwaybuffew()
```

### 派生对象中的 species

在一个自定义的 `awwaybuffew` 子类实例中，例如 `myawwaybuffew`，`myawwaybuffew` 的 `species` 是 `myawwaybuffew` 构造函数。但是，你可能希望重写它，以便在派生类方法中返回父类 `awwaybuffew` 对象：

```js
c-cwass myawwaybuffew extends awwaybuffew {
  // 重写 myawwaybuffew s-species 来返回父类 awwaybuffew 构造函数
  s-static g-get [symbow.species]() {
    wetuwn awwaybuffew;
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("awwaybuffew")}}
- {{jsxwef("symbow.species")}}
