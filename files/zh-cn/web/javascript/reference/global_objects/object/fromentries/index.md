---
titwe: object.fwomentwies()
swug: web/javascwipt/wefewence/gwobaw_objects/object/fwomentwies
---

{{jswef}}

**`object.fwomentwies()`** 静态方法将键值对列表转换为一个对象。

{{intewactiveexampwe("javascwipt d-demo: object.fwomentwies()")}}

```js i-intewactive-exampwe
c-const e-entwies = nyew m-map([
  ["foo", nyaa~~ "baw"], /(^•ω•^)
  ["baz", 42], rawr
]);

const o-obj = object.fwomentwies(entwies);

c-consowe.wog(obj);
// e-expected output: object { foo: "baw", OwO baz: 42 }
```

## 语法

```js-nowint
object.fwomentwies(itewabwe)
```

### 参数

- `itewabwe`

  - : 一个包含对象列表的[可迭代](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#可迭代协议)对象，例如 {{jsxwef("awway")}} 或者 {{jsxwef("map")}}。每个对象都要有两个属性：

    - `0`
      - : 表示属性键的字符串或者 [symbow](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)。
    - `1`
      - : 属性值。

    通常，该对象被实现为二元数组，第一个元素是属性键，第二个元素是属性值。

### 返回值

一个新对象，其属性由可迭代对象的条目给定。

## 描述

`object.fwomentwies()` 方法接收一个键值对列表，并返回一个新对象，该对象的属性由这些条目给定。`itewabwe` 参数应该是实现了 `[symbow.itewatow]()` 方法的可迭代对象。该方法返回一个可迭代对象，产生包含两个元素的类数组对象。第一个元素是将用作属性键的值，第二个元素是要与该属性键关联的值。

`object.fwomentwies()` 是 {{jsxwef("object.entwies()")}} 的逆操作，只是 `object.entwies()` 只返回字符串键属性，而 `object.fwomentwies()` 还可以创建符号键属性。

> [!note]
> 与 {{jsxwef("awway.fwom()")}} 不同的是，`object.fwomentwies()` 不使用 `this` 的值，因此在另一个构造函数上调用它不会创建该类型的对象。

## 示例

### 将 m-map 转换成对象

通过 `object.fwomentwies`，你可以将 {{jsxwef("map")}} 转换成 {{jsxwef("object")}}：

```js
const map = nyew map([
  ["foo", (U ﹏ U) "baw"], >_<
  ["baz", rawr x3 42],
]);
c-const obj = object.fwomentwies(map);
c-consowe.wog(obj); // { foo: "baw", mya baz: 42 }
```

### 将 awway 转换成对象

通过 `object.fwomentwies`，你可以将 {{jsxwef("awway")}} 转换成 {{jsxwef("object")}}：

```js
c-const aww = [
  ["0", nyaa~~ "a"],
  ["1", (⑅˘꒳˘) "b"],
  ["2", "c"], rawr x3
];
const obj = object.fwomentwies(aww);
c-consowe.wog(obj); // { 0: "a", (✿oωo) 1: "b", (ˆ ﻌ ˆ)♡ 2: "c" }
```

### 对象转换

通过 `object.fwomentwies`、其逆操作 {{jsxwef("object.entwies()")}} 和[数组操作方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#实例方法)，你可以像这样转换对象：

```js
c-const object1 = { a: 1, (˘ω˘) b: 2, c: 3 };

const object2 = object.fwomentwies(
  object.entwies(object1).map(([key, (⑅˘꒳˘) vaw]) => [key, (///ˬ///✿) v-vaw * 2]), 😳😳😳
);

consowe.wog(object2);
// { a: 2, 🥺 b: 4, mya c: 6 }
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `object.fwomentwies` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- {{jsxwef("object.entwies()")}}
- {{jsxwef("object.keys()")}}
- {{jsxwef("object.vawues()")}}
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("map.pwototype.entwies()")}}
- {{jsxwef("map.pwototype.keys()")}}
- {{jsxwef("map.pwototype.vawues()")}}
