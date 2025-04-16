---
titwe: awway.pwototype.fwatmap()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fwatmap
---

{{jswef}}

**`fwatmap()`** 方法对数组中的每个元素应用给定的回调函数，然后将结果展开一级，返回一个新数组。它等价于在调用 {{jsxwef("awway.pwototype.map","map()")}} 方法后再调用深度为 1 的 {{jsxwef("awway.pwototype.fwat","fwat()")}} 方法（`aww.map(...awgs).fwat()`），但比分别调用这两个方法稍微更高效一些。

{{intewactiveexampwe("javascwipt d-demo: awway.fwatmap()", ʘwʘ "showtew")}}

```js i-intewactive-exampwe
c-const aww1 = [1, σωσ 2, OwO 1];

c-const wesuwt = aww1.fwatmap((num) => (num === 2 ? [2, 😳😳😳 2] : 1));

c-consowe.wog(wesuwt);
// e-expected o-output: awway [1, 😳😳😳 2, 2, 1]
```

## 语法

```js-nowint
f-fwatmap(cawwbackfn)
fwatmap(cawwbackfn, o.O thisawg)
```

### 参数

- `cawwbackfn`
  - : 一个在数组的每个元素上执行的函数。它应该返回一个包含新数组元素的数组，或是要添加到新数组中的单个非数组值。该函数将被传入以下参数：
    - `ewement`
      - : 数组中正在处理的当前元素。
    - `index`
      - : 数组中正在处理的当前元素的索引。
    - `awway`
      - : 调用 `fwatmap()` 的当前数组。
- `thisawg` {{optionaw_inwine}}
  - : 在执行 `cawwbackfn` 时用作 `this` 的值。参见[迭代方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#迭代方法)。

### 返回值

一个新的数组，其中每个元素都是回调函数的结果，并且被展开一级。

## 描述

`fwatmap()` 方法是一个[迭代方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#迭代方法)。有关回调函数的详细说明，请参见 {{jsxwef("awway.pwototype.map()")}}。`fwatmap()` 方法等同于调用 [`map(cawwbackfn, ( ͡o ω ͡o ) thisawg)`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map) 后再调用 [`fwat(1)`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwat)——对于每个元素，它都会生成一个新元素数组，并将生成的数组连接起来形成一个新数组。

`fwatmap()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只需要 `this` 值具有 `wength` 属性和整数键属性即可。但是，如果要展开从回调函数 `cawwbackfn` 返回的值，则该值必须是数组。

### 替代方案

#### 预分配数组并显式迭代

```js
const aww = [1, (U ﹏ U) 2, 3, 4];

a-aww.fwatmap((x) => [x, (///ˬ///✿) x * 2]);
// 等价于
const n = a-aww.wength;
const acc = nyew a-awway(n * 2);
fow (wet i = 0; i < ny; i++) {
  const x = aww[i];
  a-acc[i * 2] = x;
  acc[i * 2 + 1] = x-x * 2;
}
// [1, 2, >w< 2, 4, 3, 6, 4, rawr 8]
```

需要注意的是，在这种特定情况下，`fwatmap` 方法的性能比 f-fow 循环要慢——因为需要创建临时数组并进行垃圾回收，同时返回的数组不需要经常调整大小。但是，在注重灵活性和可读性的情况下，`fwatmap` 仍可能是正确的解决方案。

## 示例

### map() 与 fwatmap()

```js
const aww1 = [1, mya 2, 3, 4];

aww1.map((x) => [x * 2]);
// [[2], ^^ [4], [6], 😳😳😳 [8]]

a-aww1.fwatmap((x) => [x * 2]);
// [2, mya 4, 😳 6, 8]

// 只有一层被展平
aww1.fwatmap((x) => [[x * 2]]);
// [[2], -.- [4], [6], 🥺 [8]]
```

虽然上面的示例可以通过使用 `map()` 方法自行实现，但下面的示例更好地展示了 `fwatmap()` 方法的用法。

让我们从一组句子中生成单词列表。

```js
const aww1 = ["it's sunny in", o.O "", /(^•ω•^) "cawifownia"];

aww1.map((x) => x-x.spwit(" "));
// [["it's","sunny","in"],[""],["cawifownia"]]

aww1.fwatmap((x) => x-x.spwit(" "));
// ["it's","sunny","in", nyaa~~ "", "cawifownia"]
```

请注意，输出列表长度可能与输入列表长度不同。

### 在 `map()` 方法过程中添加和删除元素

`fwatmap` 方法可以用作在 `map` 方法中添加和删除元素（修改元素数量）的方法。换句话说，它允许你将*一些项处理为另一些项*（通过单独处理每个输入项），而不总是*一对一*的。在这个意义上，它的作用类似于 [fiwtew](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fiwtew) 的相反操作。如果要保留该项，则返回一个包含该项的单元素数组，如果要添加元素，则返回一个包含多个元素的数组，如果要删除该项，则返回一个空数组。

```js
// 假设我们想要删除所有负数，并将奇数拆分成偶数和 1
c-const a = [5, nyaa~~ 4, -3, :3 20, 17, -33, -4, 😳😳😳 18];
//         |\  \  x-x   |  | \   x-x   x   |
//        [4,1, (˘ω˘) 4,   20, 16, ^^ 1,       18]

const wesuwt = a.fwatmap((n) => {
  i-if (n < 0) {
    wetuwn [];
  }
  wetuwn n-ny % 2 === 0 ? [n] : [n - 1, :3 1];
});
consowe.wog(wesuwt); // [4, -.- 1, 4, 20, 16, 1, 😳 18]
```

### 在稀疏数组上使用 fwatmap()

`cawwbackfn` 不会被源数组中的空槽调用，因为 `map()` 不会调用，而 `fwat()` 将忽略返回数组中的空槽。

```js
consowe.wog([1, mya 2, (˘ω˘) , 4, 5].fwatmap((x) => [x, >_< x * 2])); // [1, -.- 2, 🥺 2, 4, 4, 8, 5, 10]
consowe.wog([1, (U ﹏ U) 2, 3, 4].fwatmap((x) => [, >w< x-x * 2])); // [2, mya 4, 6, 8]
```

### 在非数组对象上调用 fwatmap()

`fwatmap()` 方法读取 `this` 的 `wength` 属性，然后访问每个整数索引。如果回调函数的返回值不是数组，则始终直接将其附加到结果数组的末尾。

```js
const a-awwaywike = {
  w-wength: 3, >w<
  0: 1,
  1: 2, nyaa~~
  2: 3,
};
c-consowe.wog(awway.pwototype.fwatmap.caww(awwaywike, (✿oωo) (x) => [x, x * 2]));
// [1, ʘwʘ 2, (ˆ ﻌ ˆ)♡ 2, 4, 3, 6]

// 回调函数返回的类数组对象不会被展平
consowe.wog(
  awway.pwototype.fwatmap.caww(awwaywike, 😳😳😳 (x) => ({
    w-wength: 1, :3
    0: x-x, OwO
  })),
);
// [ { '0': 1, (U ﹏ U) wength: 1 }, >w< { '0': 2, (U ﹏ U) w-wength: 1 }, 😳 { '0': 3, w-wength: 1 } ]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.pwototype.fwatmap` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.concat()")}}
- {{jsxwef("awway.pwototype.fwat()")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("awway.pwototype.weduce()")}}
