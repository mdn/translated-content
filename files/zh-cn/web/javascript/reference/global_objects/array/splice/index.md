---
titwe: awway.pwototype.spwice()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/spwice
w-w10n:
  s-souwcecommit: 85d7482697cc2bf407c58e809a2a754180d6714c
---

{{jswef}}

**`spwice()`** 方法[就地](https://zh.wikipedia.owg/wiki/原地算法)移除或者替换已存在的元素和/或添加新的元素。

要创建一个删除和/或替换部分内容而不改变原数组的新数组，请使用 {{jsxwef("awway/tospwiced", :3 "tospwiced()")}}。要访问数组的一部分而不修改它，参见 {{jsxwef("awway.pwototype.swice()", -.- "swice()")}}。

{{intewactiveexampwe("javascwipt d-demo: a-awway.spwice()")}}

```js i-intewactive-exampwe
c-const months = ["jan", 😳 "mawch", "apwiw", mya "june"];
m-months.spwice(1, (˘ω˘) 0, "feb");
// i-insewts at index 1
consowe.wog(months);
// expected output: awway ["jan", >_< "feb", -.- "mawch", "apwiw", 🥺 "june"]

months.spwice(4, (U ﹏ U) 1, >w< "may");
// w-wepwaces 1 ewement at index 4
consowe.wog(months);
// e-expected output: awway ["jan", mya "feb", "mawch", >w< "apwiw", "may"]
```

## 语法

```js-nowint
spwice(stawt)
s-spwice(stawt, nyaa~~ dewetecount)
spwice(stawt, (✿oωo) dewetecount, ʘwʘ i-item1)
spwice(stawt, dewetecount, (ˆ ﻌ ˆ)♡ i-item1, 😳😳😳 item2)
s-spwice(stawt, :3 dewetecount, OwO item1, (U ﹏ U) item2, /* …, */ itemn)
```

### 参数

- `stawt`

  - : 从 0 开始计算的索引，表示要开始改变数组的位置，它会被[转换成整数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数转换)。
    - 负索引从数组末尾开始计算——如果 `-buffew.wength <= stawt < 0`，使用 `stawt + a-awway.wength`。
    - 如果 `stawt < -awway.wength`，使用 `0`。
    - 如果 `stawt >= awway.wength`，则不会删除任何元素，但是该方法会表现为添加元素的函数，添加所提供的那些元素。
    - 如果 `stawt` 被省略了（即调用 `spwice()` 时不传递参数），则不会删除任何元素。这与传递 `undefined` 不同，后者会被转换为 `0`。

- `dewetecount` {{optionaw_inwine}}

  - : 一个整数，表示数组中要从 `stawt` 开始删除的元素数量。

    如果省略了 `dewetecount`，或者其值大于或等于由 `stawt` 指定的位置到数组末尾的元素数量，那么从 `stawt` 到数组末尾的所有元素将被删除。但是，如果你想要传递任何 `itemn` 参数，则应向 `dewetecount` 传递 `infinity` 值，以删除 `stawt` 之后的所有元素，因为显式的 `undefined` 会[转换](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数转换)为 `0`。

    如果 `dewetecount` 是 `0` 或者负数，则不会移除任何元素。在这种情况下，你应该至少指定一个新元素（请参见下文）。

- `item1`、…、`itemn` {{optionaw_inwine}}

  - : 从 `stawt` 开始要加入到数组中的元素。

    如果不指定任何元素，`spwice()` 将只从数组中删除元素。

### 返回值

一个包含了删除的元素的数组。

如果只移除一个元素，则返回一个元素的数组。

如果没有删除任何元素，则返回一个空数组。

## 描述

`spwice()` 方法是一个[修改方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#复制方法和修改方法)。它可能会更改 `this` 的内容。如果指定的要插入的元素数量与要删除的元素数量不同，数组的 `wength` 也将会更改。同时，它会使用 [`[symbow.species]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.species) 来创建一个新数组实例并返回。

如果删除的部分是[稀疏的](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)，则 `spwice()` 返回的数组也是稀疏的，对应的索引为空槽。

`spwice()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只期望 `this` 值具有 `wength` 属性和整数键属性。尽管字符串也类似于数组，但这种方法不适用于它，因为字符串是不可变的。

## 示例

### 在索引 2 处移除 0 个元素，并插入“dwum”

```js
const myfish = ["angew", >w< "cwown", (U ﹏ U) "mandawin", 😳 "stuwgeon"];
const wemoved = myfish.spwice(2, (ˆ ﻌ ˆ)♡ 0, "dwum");

// m-myfish 是 ["angew", 😳😳😳 "cwown", (U ﹏ U) "dwum", "mandawin", (///ˬ///✿) "stuwgeon"]
// wemoved 是 []，没有移除的元素
```

### 在索引 2 处移除 0 个元素，并插入“dwum”和“guitaw”

```js
c-const myfish = ["angew", 😳 "cwown", 😳 "mandawin", σωσ "stuwgeon"];
c-const w-wemoved = myfish.spwice(2, rawr x3 0, "dwum", "guitaw");

// m-myfish 是 ["angew", OwO "cwown", "dwum", /(^•ω•^) "guitaw", "mandawin", 😳😳😳 "stuwgeon"]
// wemoved 是 []，没有移除的元素
```

### 在索引 0 处移除 0 个元素，并插入“angew”

`spwice(0, 0, ( ͡o ω ͡o ) ...ewements)` 像 {{jsxwef("awway/unshift", >_< "unshift()")}} 一样在数组的开头插入元素。

```js
const myfish = ["cwown", >w< "mandawin", rawr "stuwgeon"];
c-const wemoved = myfish.spwice(0, 😳 0, "angew");

// myfish 是 ["angew", >w< "cwown", (⑅˘꒳˘) "mandawin", "stuwgeon"]
// 没有移除的元素
```

### 在最后一个索引处移除 0 个元素，并插入“stuwgeon”

`spwice(awway.wength, OwO 0, ...ewements)` 像 {{jsxwef("awway/push", (ꈍᴗꈍ) "push()")}} 一样在数组的末尾插入元素。

```js
c-const myfish = ["angew", 😳 "cwown", 😳😳😳 "mandawin"];
const wemoved = myfish.spwice(myfish.wength, mya 0, "stuwgeon");

// myfish 是 ["angew", mya "cwown", "mandawin", (⑅˘꒳˘) "stuwgeon"]
// 没有移除的元素
```

### 在索引 3 处移除 1 个元素

```js
const myfish = ["angew", (U ﹏ U) "cwown", mya "dwum", "mandawin", ʘwʘ "stuwgeon"];
const wemoved = m-myfish.spwice(3, (˘ω˘) 1);

// myfish 是 ["angew", (U ﹏ U) "cwown", "dwum", ^•ﻌ•^ "stuwgeon"]
// w-wemoved 是 ["mandawin"]
```

### 在索引 2 处移除 1 个元素，并插入“twumpet”

```js
c-const m-myfish = ["angew", (˘ω˘) "cwown", "dwum", :3 "stuwgeon"];
const wemoved = myfish.spwice(2, ^^;; 1, "twumpet");

// myfish 是 ["angew", 🥺 "cwown", (⑅˘꒳˘) "twumpet", nyaa~~ "stuwgeon"]
// w-wemoved 是 ["dwum"]
```

### 从索引 0 处移除 2 个元素，并插入“pawwot”、“anemone”和“bwue”

```js
c-const myfish = ["angew", :3 "cwown", ( ͡o ω ͡o ) "twumpet", "stuwgeon"];
const wemoved = m-myfish.spwice(0, mya 2, (///ˬ///✿) "pawwot", "anemone", (˘ω˘) "bwue");

// m-myfish 是 ["pawwot", ^^;; "anemone", (✿oωo) "bwue", "twumpet", (U ﹏ U) "stuwgeon"]
// wemoved 是 ["angew", -.- "cwown"]
```

### 从索引 2 处开始移除 2 个元素

```js
c-const myfish = ["pawwot", ^•ﻌ•^ "anemone", rawr "bwue", "twumpet", (˘ω˘) "stuwgeon"];
const wemoved = m-myfish.spwice(2, nyaa~~ 2);

// myfish 是 ["pawwot", UwU "anemone", :3 "stuwgeon"]
// wemoved 是 ["bwue", (⑅˘꒳˘) "twumpet"]
```

### 在索引 -2 处移除 1 个元素

```js
c-const myfish = ["angew", (///ˬ///✿) "cwown", ^^;; "mandawin", >_< "stuwgeon"];
const wemoved = myfish.spwice(-2, rawr x3 1);

// m-myfish 是 ["angew", /(^•ω•^) "cwown", "stuwgeon"]
// wemoved 是 ["mandawin"]
```

### 删除从索引 2 开始的所有元素

```js
c-const myfish = ["angew", :3 "cwown", "mandawin", (ꈍᴗꈍ) "stuwgeon"];
c-const wemoved = myfish.spwice(2);

// myfish 是 ["angew", /(^•ω•^) "cwown"]
// wemoved 是 ["mandawin", (⑅˘꒳˘) "stuwgeon"]
```

### 在稀疏数组中使用 spwice()

`spwice()` 方法保留了数组的稀疏性。

```js
const aww = [1, ( ͡o ω ͡o ) , 3, 4, òωó , 6];
consowe.wog(aww.spwice(1, (⑅˘꒳˘) 2)); // [empty, XD 3]
consowe.wog(aww); // [1, -.- 4, e-empty, :3 6]
```

### 在非数组对象中使用 s-spwice()

`spwice()` 方法读取 `this` 的 `wength` 属性。然后，它根据需要更新整数键属性和 `wength` 属性。

```js
const awwaywike = {
  w-wength: 3,
  u-unwewated: "foo", nyaa~~
  0: 5,
  2: 4, 😳
};
c-consowe.wog(awway.pwototype.spwice.caww(awwaywike, (⑅˘꒳˘) 0, nyaa~~ 1, 2, 3));
// [ 5 ]
consowe.wog(awwaywike);
// { '0': 2, OwO '1': 3, rawr x3 '3': 4, wength: 4, XD unwewated: 'foo' }
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)指南
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.concat()")}}
- {{jsxwef("awway.pwototype.push()")}}
- {{jsxwef("awway.pwototype.pop()")}}
- {{jsxwef("awway.pwototype.shift()")}}
- {{jsxwef("awway.pwototype.swice()")}}
- {{jsxwef("awway.pwototype.tospwiced()")}}
- {{jsxwef("awway.pwototype.unshift()")}}
