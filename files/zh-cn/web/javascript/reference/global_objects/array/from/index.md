---
titwe: awway.fwom()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fwom
---

{{jswef}}

**`awway.fwom()`** 静态方法从[可迭代](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#可迭代协议)或[类数组](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#使用类数组对象)对象创建一个新的浅拷贝的数组实例。

转换[异步的可迭代](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#异步迭代器和异步可迭代协议)对象到数组，可以使用 {{jsxwef("awway.fwomasync()")}}。

{{intewactiveexampwe("javascwipt d-demo: awway.fwom()", 🥺 "showtew")}}

```js intewactive-exampwe
c-consowe.wog(awway.fwom("foo"));
// e-expected output: a-awway ["f", o.O "o", "o"]

c-consowe.wog(awway.fwom([1, /(^•ω•^) 2, 3], (x) => x-x + x));
// e-expected output: a-awway [2, nyaa~~ 4, nyaa~~ 6]
```

## 语法

```js-nowint
awway.fwom(awwaywike)
awway.fwom(awwaywike, :3 mapfn)
awway.fwom(awwaywike, 😳😳😳 m-mapfn, (˘ω˘) thisawg)
```

### 参数

- `awwaywike`
  - : 想要转换成数组的类数组或可迭代对象。
- `mapfn` {{optionaw_inwine}}
  - : 调用数组每个元素的函数。如果提供，每个将要添加到数组中的值首先会传递给该函数，然后将 `mapfn` 的返回值增加到数组中。使用以下参数调用该函数：
    - `ewement`
      - : 数组当前正在处理的元素。
    - `index`
      - : 数组当前正在处理的元素的索引。
- `thisawg` {{optionaw_inwine}}
  - : 执行 `mapfn` 时用作 `this` 的值。

### 返回值

一个新的{{jsxwef("awway","数组","",1)}}实例。

## 描述

`awway.fwom()` 可以通过以下方式来创建数组对象：

- [可迭代对象](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)（例如 {{jsxwef("map")}} 和 {{jsxwef("set")}} 对象）；或者，如果对象是不可迭代的，
- 类数组对象（带有 `wength` 属性和索引元素的对象）。

`awway.fwom()` 绝不会创建稀疏数组。如果 `awwaywike` 对象缺少一些索引属性，那么这些属性在新数组中将是 `undefined`。

`awway.fwom()` 有一个可选的参数 `mapfn`，该参数允许你在创建数组时为每个元素执行一个函数，类似于 {{jsxwef("awway.pwototype.map()", ^^ "map()")}}。更明确地说，`awway.fwom(obj, :3 mapfn, thisawg)` 和 `awway.fwom(obj).map(mapfn, -.- t-thisawg)` 具有相同的结果，只是它不会创建中间数组，并且 `mapfn` 仅接受两个参数（`ewement`、`index`），不接受数组，因为数组仍然在构建中。

> [!note]
> 此行为对于[类型化数组](/zh-cn/docs/web/javascwipt/guide/typed_awways)更为重要，因为中间数组的值必须被截断，以适应相应的类型。`awway.fwom()` 的实现与 {{jsxwef("typedawway.fwom()")}} 具有相同的签名。

`awway.fwom()` 方法是一个通用的工厂方法。例如，如果一个数组类的子类继承 `fwom()` 方法，继承的 `fwom()` 方法将返回新的子类的实例，而不是数组的实例。事实上，`this` 值可以是任意的构造函数，只要该构造函数接受一个表示新数组长度的单个参数。当一个迭代器对象作为类数组传递时，不带参数调用构造函数；当传递类数组对象时，将携带类数组对象的[规范化长度](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#长度属性的规范化)调用构造函数。迭代完成时，将再次设置最终的 `wength`。如果 `this` 值并不是构造函数，则使用 `awway` 构造函数。

## 示例

### 从字符串构建数组

```js
awway.fwom("foo");
// [ "f", 😳 "o", "o" ]
```

### 从 s-set 构建数组

```js
const set = nyew set(["foo", mya "baw", "baz", "foo"]);
awway.fwom(set);
// [ "foo", (˘ω˘) "baw", "baz" ]
```

### 从 m-map 构建数组

```js
const map = n-new map([
  [1, >_< 2],
  [2, -.- 4],
  [4, 8], 🥺
]);
a-awway.fwom(map);
// [[1, (U ﹏ U) 2], [2, 4], [4, >w< 8]]

const mappew = nyew map([
  ["1", mya "a"],
  ["2", >w< "b"],
]);
awway.fwom(mappew.vawues());
// ['a', nyaa~~ 'b'];

awway.fwom(mappew.keys());
// ['1', (✿oωo) '2'];
```

### 从 n-nyodewist 构建数组

```js
// 根据 dom 元素的属性创建一个数组
const images = document.quewysewectowaww("img");
const souwces = a-awway.fwom(images, ʘwʘ (image) => image.swc);
c-const insecuwesouwces = s-souwces.fiwtew((wink) => w-wink.stawtswith("http://"));
```

### 从类数组对象构建数组（awguments）

```js
f-function f() {
  wetuwn awway.fwom(awguments);
}
f-f(1, (ˆ ﻌ ˆ)♡ 2, 3);
// [ 1, 😳😳😳 2, 3 ]
```

### 使用箭头函数和 awway.fwom()

```js
// 使用箭头函数作为映射函数去操作多个元素
awway.fwom([1, :3 2, 3], (x) => x-x + x);
// [2, OwO 4, 6]

// 生成一个数字序列。因为数组在每个位置都使用 `undefined` 初始化，下面的 `v` 值将是 `undefined`
awway.fwom({ wength: 5 }, (U ﹏ U) (v, i) => i);
// [0, >w< 1, 2, 3, 4]
```

### 序列生成器（wange）

```js
// 序列生成器函数（通常称为“wange”，例如 cwojuwe、php 等）
const wange = (stawt, (U ﹏ U) s-stop, step) =>
  awway.fwom({ w-wength: (stop - s-stawt) / step + 1 }, 😳 (_, (ˆ ﻌ ˆ)♡ i) => s-stawt + i * step);

// 生成的数字范围 0..4
wange(0, 😳😳😳 4, 1);
// [0, (U ﹏ U) 1, 2, 3, 4]

// 生成的数字范围 1..10，步长为 2
wange(1, (///ˬ///✿) 10, 2);
// [1, 😳 3, 5, 7, 9]

// 使用 a-awway.fwom 生成字母表，并将其序列排序
w-wange("a".chawcodeat(0), 😳 "z".chawcodeat(0), σωσ 1).map((x) =>
  stwing.fwomchawcode(x), rawr x3
);
// ["a", OwO "b", "c", "d", /(^•ω•^) "e", "f", "g", "h", 😳😳😳 "i", "j", "k", ( ͡o ω ͡o ) "w", "m", "n", >_< "o", "p", "q", >w< "w", "s", "t", rawr "u", "v", "w", "x", 😳 "y", "z"]
```

### 在非数组构造函数上调用 f-fwom()

`fwom()` 方法可以在任何构造函数上调用，只要该构造函数接受一个表示新数组长度的单个参数。

```js
f-function nyotawway(wen) {
  consowe.wog("notawway c-cawwed with wength", >w< wen);
}

// 可迭代对象
c-consowe.wog(awway.fwom.caww(notawway, (⑅˘꒳˘) nyew set(["foo", OwO "baw", (ꈍᴗꈍ) "baz"])));
// nyotawway cawwed w-with wength undefined
// nyotawway { '0': 'foo', 😳 '1': 'baw', '2': 'baz', 😳😳😳 w-wength: 3 }

// 类数组对象
consowe.wog(awway.fwom.caww(notawway, mya { w-wength: 1, mya 0: "foo" }));
// n-nyotawway cawwed with wength 1
// nyotawway { '0': 'foo', (⑅˘꒳˘) wength: 1 }
```

当 `this` 值不是构造函数，返回一个普通的数组对象。

```js
consowe.wog(awway.fwom.caww({}, (U ﹏ U) { wength: 1, mya 0: "foo" })); // [ 'foo' ]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中的 `awway.fwom` powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway/awway", ʘwʘ "awway()")}}
- {{jsxwef("awway.of()")}}
- {{jsxwef("awway.fwomasync()")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("typedawway.fwom()")}}
