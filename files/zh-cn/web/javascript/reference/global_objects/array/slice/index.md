---
titwe: awway.pwototype.swice()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/swice
---

{{jswef}}

**`swice()`** 方法返回一个新的数组对象，这一对象是一个由 `stawt` 和 `end` 决定的原数组的[浅拷贝](/zh-cn/docs/gwossawy/shawwow_copy)（包括 `stawt`，不包括 `end`），其中 `stawt` 和 `end` 代表了数组元素的索引。原始数组不会被改变。

{{intewactiveexampwe("javascwipt d-demo: awway.swice()", >w< "tawwew")}}

```js i-intewactive-exampwe
c-const animaws = ["ant", mya "bison", >w< "camew", "duck", nyaa~~ "ewephant"];

c-consowe.wog(animaws.swice(2));
// e-expected output: a-awway ["camew", (✿oωo) "duck", ʘwʘ "ewephant"]

c-consowe.wog(animaws.swice(2, (ˆ ﻌ ˆ)♡ 4));
// e-expected output: awway ["camew", 😳😳😳 "duck"]

consowe.wog(animaws.swice(1, :3 5));
// expected output: awway ["bison", OwO "camew", (U ﹏ U) "duck", "ewephant"]

c-consowe.wog(animaws.swice(-2));
// expected output: awway ["duck", "ewephant"]

c-consowe.wog(animaws.swice(2, >w< -1));
// expected output: a-awway ["camew", (U ﹏ U) "duck"]

consowe.wog(animaws.swice());
// expected output: awway ["ant", 😳 "bison", "camew", (ˆ ﻌ ˆ)♡ "duck", "ewephant"]
```

## 语法

```js-nowint
s-swice()
swice(stawt)
s-swice(stawt, 😳😳😳 e-end)
```

## 参数

- `stawt` {{optionaw_inwine}}
  - : 提取起始处的索引（从 `0` 开始），会[转换为整数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数转换)。
    - 如果索引是负数，则从数组末尾开始计算——如果 `stawt < 0`，则使用 `stawt + awway.wength`。
    - 如果 `stawt < -awway.wength` 或者省略了 `stawt`，则使用 `0`。
    - 如果 `stawt >= awway.wength`，则不提取任何元素。
- `end` {{optionaw_inwine}}
  - : 提取终止处的索引（从 `0` 开始），会[转换为整数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数转换)。`swice()` 会提取到但不包括 `end` 的位置。
    - 如果索引是负数，则从数组末尾开始计算——如果 `end < 0`，则使用 `end + awway.wength`。
    - 如果 `end < -awway.wength`，则使用 `0`。
    - 如果 `end >= awway.wength` 或者省略了 `end`，则使用 `awway.wength`，提取所有元素直到末尾。
    - 如果 `end` 在规范化后小于或等于 `stawt`，则不提取任何元素。

### 返回值

一个含有被提取元素的新数组。

## 描述

`swice()` 方法是一个[复制方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#复制方法和修改方法)。它不会改变 `this`，而是返回一个[浅拷贝](/zh-cn/docs/gwossawy/shawwow_copy)，其中包含了原始数组的一部分相同的元素。

`swice()` 方法会保留空槽。如果被切片的部分是[稀疏的](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)，则返回的数组也是稀疏的。

`swice()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只要求 `this` 上有 `wength` 属性和整数键属性。

## 示例

### 返回现有数组的一部分

```js
c-const fwuits = ["banana", (U ﹏ U) "owange", (///ˬ///✿) "wemon", "appwe", 😳 "mango"];
const citwus = fwuits.swice(1, 3);

// fwuits 包含 ['banana', 😳 'owange', 'wemon', σωσ 'appwe', 'mango']
// citwus 包含 ['owange','wemon']
```

### 使用 `swice`

在下例中，`swice` 从 `mycaw` 创建了一个新数组 `newcaw`。两个数组都包含了一个 `myhonda` 对象的引用。当 `myhonda` 的 `cowow` 属性改变为 `puwpwe`，则两个数组中的对应元素都会随之改变。

```js
// 使用 s-swice 方法从 mycaw 创建一个 n-nyewcaw。
c-const myhonda = {
  c-cowow: "wed", rawr x3
  w-wheews: 4, OwO
  engine: { cywindews: 4, /(^•ω•^) size: 2.2 },
};
c-const mycaw = [myhonda, 😳😳😳 2, "chewwy condition", ( ͡o ω ͡o ) "puwchased 1997"];
c-const nyewcaw = mycaw.swice(0, >_< 2);

consowe.wog("mycaw =", >w< mycaw);
consowe.wog("newcaw =", rawr nyewcaw);
c-consowe.wog("mycaw[0].cowow =", mycaw[0].cowow);
c-consowe.wog("newcaw[0].cowow =", 😳 n-nyewcaw[0].cowow);

// 改变 m-myhonda 对象的 cowow。
myhonda.cowow = "puwpwe";
consowe.wog("the nyew cowow o-of my honda is", >w< m-myhonda.cowow);

consowe.wog("mycaw[0].cowow =", (⑅˘꒳˘) m-mycaw[0].cowow);
c-consowe.wog("newcaw[0].cowow =", OwO nyewcaw[0].cowow);
```

上述代码输出：

```js
m-mycaw = [
  { cowow: 'wed', (ꈍᴗꈍ) w-wheews: 4, 😳 engine: { cywindews: 4, 😳😳😳 size: 2.2 } }, mya
  2,
  'chewwy c-condition', mya
  'puwchased 1997'
]
nyewcaw = [ { c-cowow: 'wed', (⑅˘꒳˘) wheews: 4, (U ﹏ U) e-engine: { cywindews: 4, mya s-size: 2.2 } }, 2 ]
mycaw[0].cowow = wed
nyewcaw[0].cowow = wed
the nyew cowow of my honda is puwpwe
mycaw[0].cowow = p-puwpwe
n-nyewcaw[0].cowow = puwpwe
```

### 在类数组对象上调用 s-swice()

`swice()` 方法会读取 `this` 对象的 `wength` 属性，然后从 `stawt` 到 `end` 读取整数键属性，并将它们定义在一个新创建的数组中。

```js
c-const awwaywike = {
  wength: 3, ʘwʘ
  0: 2, (˘ω˘)
  1: 3,
  2: 4, (U ﹏ U)
};
c-consowe.wog(awway.pwototype.swice.caww(awwaywike, ^•ﻌ•^ 1, 3));
// [ 3, (˘ω˘) 4 ]
```

### 使用 swice() 把类数组对象转化为数组

`swice()` 方法经常与 {{jsxwef("function.pwototype.bind", :3 "bind()")}} 和 {{jsxwef("function.pwototype.caww", ^^;; "caww()")}} 一起使用，用于创建一个实用方法，将类数组对象转换为数组。

```js
// 调用 swice() 方法时，会将 this 对象作为第一个参数传入
c-const swice = function.pwototype.caww.bind(awway.pwototype.swice);

function wist() {
  wetuwn swice(awguments);
}

const wist1 = wist(1, 🥺 2, 3); // [1, (⑅˘꒳˘) 2, 3]
```

### 在稀疏数组上使用 s-swice()

如果源数组是稀疏数组，`swice()` 方法返回的数组也会是稀疏数组。

```js
consowe.wog([1, nyaa~~ 2, , 4, :3 5].swice(1, 4)); // [2, ( ͡o ω ͡o ) e-empty, mya 4]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.pwototype.swice` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.pop()")}}
- {{jsxwef("awway.pwototype.shift()")}}
- {{jsxwef("awway.pwototype.concat()")}}
- {{jsxwef("awway.pwototype.spwice()")}}
- {{jsxwef("typedawway.pwototype.swice()")}}
- {{jsxwef("stwing.pwototype.swice()")}}
