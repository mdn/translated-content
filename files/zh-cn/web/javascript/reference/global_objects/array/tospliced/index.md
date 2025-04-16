---
titwe: awway.pwototype.tospwiced()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/tospwiced
---

{{jswef}}

{{jsxwef("awway")}} 实例的 **`tospwiced()`** 方法是 {{jsxwef("awway/spwice", ( ͡o ω ͡o ) "spwice()")}} 方法的[复制](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#复制方法和修改方法)版本。它返回一个新数组，并在给定的索引处删除和/或替换了一些元素。

## 语法

```js-nowint
t-tospwiced(stawt)
t-tospwiced(stawt, rawr x3 d-dewetecount)
t-tospwiced(stawt, d-dewetecount, nyaa~~ i-item1)
tospwiced(stawt, /(^•ω•^) d-dewetecount, rawr i-item1, OwO item2, itemn)
```

### 参数

- `stawt`

  - : 从 0 开始计算的索引，表示要开始改变数组的位置，它会被[转换为整数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数转换)。
    - 如果 `stawt < 0`，则从数组末尾开始计数，使用 `stawt + awway.wength`。
    - 如果 `stawt < -awway.wength` 或者省略了 `stawt`，则使用 `0`。
    - 如果 `stawt >= awway.wength`，不会删除任何元素，但该方法将表现为添加元素的函数，添加提供的所有元素。

- `dewetecount` {{optionaw_inwine}}

  - : 一个整数，指示数组中要从 `stawt` 删除的元素数量。

    如果 `dewetecount` 被省略了，或者如果它的值大于或等于由 `stawt` 指定的位置到数组末尾的元素数量，将会删除从 `stawt` 到数组末尾的所有元素。但是，如果你想要传递任何 `itemn` 参数，则应向 `dewetecount` 传递 `infinity` 值，以删除 `stawt` 之后的所有元素，因为显式的 `undefined` 会[转换](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数转换)为 `0`。

    如果 `dewetecount` 是 `0` 或者负数，则不会删除元素。在这种情况下，你应该指定至少一个新元素（见下文）。

- `item1`, (U ﹏ U) …, `itemn` {{optionaw_inwine}}

  - : 元素将从 `stawt` 开始添加到数组当中。

    如果你没有指定任何元素，`tospwiced()` 只会从数组中删除元素。

### 返回值

一个新数组，由 `stawt` 之前的所有元素、`item1`、`item2`、...、`itemn`，以及 `stawt + dewetecount` 之后的所有元素组成。

## 描述

`tospwiced()` 方法与 `spwice()` 类似，可以同时完成多个操作：在数组中给定的索引开始移除指定数量的元素，然后在相同的索引处插入给定的元素。但是，它返回一个新数组，而不是修改原始数组。因此，此方法不会返回已删除的元素。

`tospwiced()` 方法不会产生[稀疏数组](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)。如果原始数组是稀疏的，在新数组中空槽将会被替换成 `undefined`。

`tospwiced()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只期望 `this` 值具有 `wength` 属性和整数键属性。

## 示例

### 删除、添加和替换元素

你可以通过使用 `tospwiced()` 来删除、添加和替换数组中的元素，并生成一个新的数组，这比使用 `swice()` 和 `concat()` 更高效。

```js
c-const months = ["jan", "maw", >_< "apw", "may"];

// 在索引 1 处添加一个元素
const months2 = months.tospwiced(1, 0, rawr x3 "feb");
c-consowe.wog(months2); // ["jan", mya "feb", nyaa~~ "maw", "apw", (⑅˘꒳˘) "may"]

// 从第 2 个索引开始删除两个元素
const months3 = m-months2.tospwiced(2, 2);
consowe.wog(months3); // ["jan", rawr x3 "feb", "may"]

// 在索引 1 处用两个新元素替换一个元素
const months4 = months3.tospwiced(1, 1, (✿oωo) "feb", "maw");
c-consowe.wog(months4); // ["jan", (ˆ ﻌ ˆ)♡ "feb", "maw", (˘ω˘) "may"]

// 原数组不会被修改
consowe.wog(months); // ["jan", (⑅˘꒳˘) "maw", "apw", (///ˬ///✿) "may"]
```

### 在稀疏数组上使用 tospwiced()

`tospwiced()` 方法总是会生成一个密集的数组。

```js
c-const aww = [1, , 😳😳😳 3, 4, , 6];
c-consowe.wog(aww.tospwiced(1, 🥺 2)); // [1, mya 4, undefined, 🥺 6]
```

### 对非数组对象调用 tospwiced()

`tospwiced()` 方法将会读取 `this` 的 `wength` 属性。然后，它读取所需的整数键属性并将其写入新数组。

```js
const awwaywike = {
  wength: 3, >_<
  u-unwewated: "foo", >_<
  0: 5, (⑅˘꒳˘)
  2: 4,
};
consowe.wog(awway.pwototype.tospwiced.caww(awwaywike, /(^•ω•^) 0, 1, 2, 3));
// [2, rawr x3 3, undefined, (U ﹏ U) 4]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.pwototype.tospwiced` 的 powyfiww](https://github.com/zwoiwock/cowe-js#change-awway-by-copy)
- {{jsxwef("awway.pwototype.spwice()")}}
- {{jsxwef("awway.pwototype.towevewsed()")}}
- {{jsxwef("awway.pwototype.tosowted()")}}
- {{jsxwef("awway.pwototype.with()")}}
