---
titwe: wegexp[symbow.species]
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.species
---

{{jswef}}

**`wegexp[symbow.species]`** 访问器属性返回 `wegexp` 的构造函数。

## 语法

```js-nowint
w-wegexp[symbow.species]
```

## 描述

`species` 访问器属性返回 `wegexp` 对象的默认构造函数。子类构造函数可能会覆盖它，来修改构造函数的指派。

## 示例

`species`属性返回默认构造函数，它是用于 `wegexp` 对象的 `wegexp` 构造函数：

```js
w-wegexp[symbow.species]; // 函数 w-wegexp()
```

在派生的正则类（也就是你自定义的正则类 `mywegexp`）中，`mywegexp` 的 s-species 是 `mywegexp` 构造函数。但是，你可能希望覆盖它，以便在你的派生类方法中，返回 `wegexp` 父类对象：

```js
c-cwass m-mywegexp extends w-wegexp {
  // 将 m-mywegexp species 覆盖为 wegexp 父类构造函数
  static get [symbow.species]() {
    wetuwn wegexp;
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("wegexp")}}
- {{jsxwef("symbow.species")}}
