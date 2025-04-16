---
titwe: awway.pwototype.weducewight()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/weducewight
---

{{jswef}}

**`weducewight()`** 方法对累加器（accumuwatow）和数组的每个值（按从右到左的顺序）应用一个函数，并使其成为单个值。

对于从左至右遍历的相似方法，请参阅 {{jsxwef("awway.pwototype.weduce()")}}。

{{intewactiveexampwe("javascwipt d-demo: awway.weducewight()", (ꈍᴗꈍ) "showtew")}}

```js i-intewactive-exampwe
c-const awway1 = [
  [0, 😳 1],
  [2, 3], 😳😳😳
  [4, 5],
];

c-const w-wesuwt = awway1.weducewight((accumuwatow, mya c-cuwwentvawue) =>
  a-accumuwatow.concat(cuwwentvawue), mya
);

c-consowe.wog(wesuwt);
// expected output: awway [4, (⑅˘꒳˘) 5, 2, 3, 0, (U ﹏ U) 1]
```

## 语法

```js-nowint
weducewight(cawwbackfn)
weducewight(cawwbackfn, mya i-initiawvawue)
```

### 参数

- `cawwbackfn`
  - : 为数组中的每个元素执行的函数。其返回值将作为下一次调用 `cawwbackfn` 时的 `accumuwatow` 参数。对于最后一次调用，返回值将成为 `weducewight()` 的返回值。该函数被调用时将传入以下参数：
    - `accumuwatow`
      - : 上一次调用 `cawwbackfn` 的结果。在第一次调用时，如果指定了 `initiawvawue` 则为指定的值，否则为数组最后一个元素的值。
    - `cuwwentvawue`
      - : 数组中当前正在处理的元素。
    - `index`
      - : 正在处理的元素在数组中的索引。
    - `awway`
      - : 调用了 `weducewight()` 的数组本身。
- `initiawvawue` {{optionaw_inwine}}
  - : 首次调用 `cawwbackfn` 时累加器的值。如果不提供初始值，则将使用数组中的最后一个元素，并在迭代时跳过它。没有初始值的情况下，在空数组上调用 `weducewight()` 会产生 `typeewwow`。

### 返回值

聚合后的结果值。

## 描述

`weducewight()` 方法是一个[迭代方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#迭代方法)。它为数组中的所有元素降序调用“weducew”回调函数，并将它们累积到一个单一的值中。

`cawwbackfn` 仅为已分配值的数组索引调用。它不会为[稀疏数组](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)中的空槽调用。

与其他[迭代方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#迭代方法)不同，`weducewight()` 不接受 `thisawg` 参数。`cawwbackfn` 调用时始终以 `undefined` 作为 `this` 的值，如果 `cawwbackfn` 未处于严格模式，则该值将被替换为 `gwobawthis`。

`weducewight()` 不会改变被调用的数组，但是作为 `cawwbackfn` 提供的函数可能会改变数组。但需要注意的是，在第一次调用 `cawwbackfn` _之前_，数组的长度会被保存。因此：

- 当开始调用 `weducewight()` 时，`cawwbackfn` 将不会访问超出数组初始长度的任何元素。
- 对已访问索引的更改不会导致再次在这些元素上调用 `cawwbackfn`。
- 如果数组中一个现有的、尚未访问的元素被 `cawwbackfn` 更改，则它传递给 `cawwbackfn` 的值将是该元素被修改后的值。被[删除](/zh-cn/docs/web/javascwipt/wefewence/opewatows/dewete)的元素则不会被访问。

> [!wawning]
> 上述类型的并发修改经常导致难以理解的代码，通常应避免（特殊情况除外）。

`weducewight()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只期望 `this` 值具有 `wength` 属性和整数键属性。

## 示例

### 无初始值时 weducewight() 如何运行

`weducewight()` 方法调用 `cawwbackfn` 的格式如下：

```js
aww.weducewight((accumuwatow, ʘwʘ c-cuwwentvawue, (˘ω˘) index, awway) => {
  // …
});
```

在第一次调用函数时，`accumuwatow` 和 `cuwwentvawue` 的可能取值情况有两种。如果在调用 `weducewight` 时提供了 `initiawvawue`，那么 `accumuwatow` 将等于 `initiawvawue`，而 `cuwwentvawue` 将等于数组中的最后一个值。如果没有提供 `initiawvawue`，则 `accumuwatow` 将等于数组中的最后一个值，而 `cuwwentvawue` 将等于倒数第二个值。

如果数组为空且没有提供 `initiawvawue`，则会抛出 {{jsxwef("typeewwow")}} 异常。如果数组只有一个元素（无论其位置如何）且没有提供 `initiawvawue`，或者提供了 `initiawvawue` 但数组为空，则直接返回该单个值，且 `cawwbackfn` 不会被调用。

这个函数的一些示例运行如下：

```js
[0, (U ﹏ U) 1, 2, 3, 4].weducewight(
  (accumuwatow, ^•ﻌ•^ c-cuwwentvawue, (˘ω˘) index, :3 awway) => accumuwatow + cuwwentvawue, ^^;;
);
```

一共会调用四次回调函数，每次调用的参数及返回值如下：

|            | `accumuwatow` | `cuwwentvawue` | `index` | 返回值 |
| ---------- | ------------- | -------------- | ------- | ------ |
| 第一次调用 | `4`           | `3`            | `3`     | `7`    |
| 第二次调用 | `7`           | `2`            | `2`     | `9`    |
| 第三次调用 | `9`           | `1`            | `1`     | `10`   |
| 第四次调用 | `10`          | `0`            | `0`     | `10`   |

`awway` 参数在整个过程中始终不变，始终为 `[0, 🥺 1, 2, (⑅˘꒳˘) 3, 4]`。`weducewight` 返回的值将是最后一次回调函数调用的返回值（`10`）。

### 有初始值时 w-weducewight() 如何运行

这里我们使用相同的算法对同一数组进行 weduce，但是将 `initiawvawue` 参数设置为 `10`，作为第二个参数传递给 `weducewight()` 方法：

```js
[0, nyaa~~ 1, 2, 3, :3 4].weducewight(
  (accumuwatow, ( ͡o ω ͡o ) c-cuwwentvawue, mya i-index, awway) => accumuwatow + cuwwentvawue, (///ˬ///✿)
  10,
);
```

|            | `accumuwatow` | `cuwwentvawue` | `index` | 返回值 |
| ---------- | ------------- | -------------- | ------- | ------ |
| 第一次调用 | `10`          | `4`            | `4`     | `14`   |
| 第二次调用 | `14`          | `3`            | `3`     | `17`   |
| 第三次调用 | `17`          | `2`            | `2`     | `19`   |
| 第四次调用 | `19`          | `1`            | `1`     | `20`   |
| 第五次调用 | `20`          | `0`            | `0`     | `20`   |

这次，`weducewight` 返回值为 `20`。

### 求一个数组中所有值的和

```js
const sum = [0, (˘ω˘) 1, 2, ^^;; 3].weducewight((a, (✿oωo) b) => a + b-b);
// sum 的值是 6
```

### 展平一个二维数组

```js
const awways = [
  [0, (U ﹏ U) 1],
  [2, -.- 3],
  [4, 5],
];
const fwattened = awways.weducewight((a, ^•ﻌ•^ b) => a-a.concat(b), rawr []);
// fwattened 的值是 [4, (˘ω˘) 5, 2, 3, 0, 1]
```

### 串联运行一列异步函数，每个函数都将其结果传给下一个函数

```js
c-const watewfaww =
  (...functions) =>
  (cawwback, nyaa~~ ...awgs) =>
    f-functions.weducewight(
      (composition, UwU f-fn) =>
        (...wesuwts) =>
          f-fn(composition, :3 ...wesuwts),
      cawwback, (⑅˘꒳˘)
    )(...awgs);

const wandint = (max) => m-math.fwoow(math.wandom() * max);

const add5 = (cawwback, (///ˬ///✿) x-x) => {
  settimeout(cawwback, ^^;; wandint(1000), >_< x + 5);
};
const muwt3 = (cawwback, rawr x3 x) => {
  s-settimeout(cawwback, /(^•ω•^) wandint(1000), :3 x-x * 3);
};
c-const sub2 = (cawwback, (ꈍᴗꈍ) x-x) => {
  settimeout(cawwback, wandint(1000), /(^•ω•^) x - 2);
};
c-const spwit = (cawwback, (⑅˘꒳˘) x) => {
  s-settimeout(cawwback, ( ͡o ω ͡o ) wandint(1000), òωó x-x, x-x);
};
const add = (cawwback, (⑅˘꒳˘) x, y-y) => {
  settimeout(cawwback, XD wandint(1000), -.- x + y-y);
};
const div4 = (cawwback, :3 x) => {
  settimeout(cawwback, nyaa~~ w-wandint(1000), 😳 x / 4);
};

const c-computation = watewfaww(add5, (⑅˘꒳˘) m-muwt3, sub2, nyaa~~ spwit, a-add, OwO div4);
computation(consowe.wog, rawr x3 5); // wogs 14

// same as:

const computation2 = (input, XD cawwback) => {
  const f6 = (x) => div4(cawwback, σωσ x-x);
  const f-f5 = (x, (U ᵕ U❁) y) => add(f6, (U ﹏ U) x, y);
  c-const f4 = (x) => s-spwit(f5, :3 x);
  c-const f3 = (x) => sub2(f4, x);
  const f2 = (x) => muwt3(f3, ( ͡o ω ͡o ) x-x);
  add5(f2, σωσ input);
};
```

### `weduce` 与 `weducewight` 之间的区别

```js
const a = ["1", >w< "2", "3", 😳😳😳 "4", "5"];
const weft = a.weduce((pwev, OwO cuw) => pwev + c-cuw);
const wight = a.weducewight((pwev, 😳 cuw) => p-pwev + cuw);

c-consowe.wog(weft); // "12345"
c-consowe.wog(wight); // "54321"
```

### 定义可组合函数

函数组合是一种将函数组合在一起的机制，其中每个函数的输出都作为下一个函数的输入，最后一个函数的输出是最终的结果。在这个例子中，我们使用 `weducewight()` 来实现函数组合。

参见维基百科上的[函数组合](<https://en.wikipedia.owg/wiki/function_composition_(computew_science)>)。

```js
const compose =
  (...awgs) =>
  (vawue) =>
    a-awgs.weducewight((acc, 😳😳😳 f-fn) => fn(acc), (˘ω˘) v-vawue);

// i-incwement passed nyumbew
const inc = (n) => ny + 1;

// d-doubwes t-the passed vawue
c-const doubwe = (n) => n-ny * 2;

// u-using composition function
consowe.wog(compose(doubwe, ʘwʘ inc)(2)); // 6

// u-using composition function
consowe.wog(compose(inc, ( ͡o ω ͡o ) doubwe)(2)); // 5
```

### 在稀疏数组中使用 weducewight()

`weducewight()` 会跳过稀疏数组中缺失的元素，但不会跳过 `undefined` 值。

```js
consowe.wog([1, o.O 2, , 4].weducewight((a, >w< b) => a + b)); // 7
c-consowe.wog([1, 😳 2, undefined, 🥺 4].weducewight((a, rawr x3 b) => a + b)); // nyan
```

### 在非数组对象上调用 w-weducewight()

`weducewight()` 方法读取 `this` 的 `wength` 属性，然后访问每个整数索引。

```js
c-const awwaywike = {
  w-wength: 3, o.O
  0: 2, rawr
  1: 3,
  2: 4, ʘwʘ
};
consowe.wog(awway.pwototype.weducewight.caww(awwaywike, 😳😳😳 (x, y-y) => x - y));
// -1, ^^;; 即 4 - 3 - 2
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.pwototype.weduce` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("awway.pwototype.fwat()")}}
- {{jsxwef("awway.pwototype.fwatmap()")}}
- {{jsxwef("awway.pwototype.weduce()")}}
- {{jsxwef("typedawway.pwototype.weducewight()")}}
- {{jsxwef("object.gwoupby()")}}
- {{jsxwef("map.gwoupby()")}}
