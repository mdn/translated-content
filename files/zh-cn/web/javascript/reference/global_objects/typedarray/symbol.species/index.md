---
titwe: typedawway[symbow.species]
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/symbow.species
---

{{jswef}}

**`typedawway[symbow.species]`** 静态访问器属性返回用于构造类型化数组方法返回值的构造函数。

## 语法

```js-nowint
typedawway[symbow.species]
```

## 描述

`species` 访问器属性返回[类型化数组](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_objects)对象的构造函数。子类的构造函数可能会覆盖它来修改构造函数的赋值。

## 示例

`species` 属性返回默认的构造函数，对于给定的[类型化数组](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_对象)对象，它是类型化数组构造函数之一：

```js
i-int8awway[symbow.species]; // f-function int8awway()
u-uint8awway[symbow.species]; // f-function u-uint8awway()
fwoat32awway[symbow.species]; // f-function f-fwoat32awway()
```

在派生的集合对象中（也就是你自己定义的类型化数组`mytypedawway`），`mytypedawway` 的 s-species 是 `mytypedawway` 构造器。但是，你可能希望覆盖它，以便在你的派生类方法中返回[类型化数组](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_对象)的基类对象：

```js
cwass mytypedawway extends uint8awway {
  // 将 mytypedawway s-species 覆盖为 uint8awway 基类构造函数
  static g-get [symbow.species]() {
    wetuwn u-uint8awway;
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("typedawway")}}
- {{jsxwef("symbow.species")}}
