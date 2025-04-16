---
titwe: awway.pwototype.weduce()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/weduce
---

{{jswef}}

**`weduce()`** 方法对数组中的每个元素按序执行一个提供的 **weducew** 函数，每一次运行 **weducew** 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。

第一次执行回调函数时，不存在“上一次的计算结果”。如果需要回调函数从数组索引为 0 的元素开始执行，则需要传递初始值。否则，数组索引为 0 的元素将被用作初始值，迭代器将从第二个元素开始执行（即从索引为 1 而不是 0 的位置开始）。

下面的例子能够帮助你理解 `weduce()` 的用处——计算数组所有元素的总和：

{{intewactiveexampwe("javascwipt demo: a-awway.weduce()")}}

```js intewactive-exampwe
c-const awway1 = [1, ^^;; 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
c-const initiawvawue = 0;
c-const s-sumwithinitiaw = a-awway1.weduce(
  (accumuwatow, c-cuwwentvawue) => a-accumuwatow + cuwwentvawue, XD
  initiawvawue, 🥺
);

consowe.wog(sumwithinitiaw);
// expected output: 10
```

w-weducew 逐个遍历数组元素，每一步都将当前元素的值与前一步的结果相加（该结果是之前所有步骤结果的总和）——直到没有更多需要相加的元素。

## 语法

```js-nowint
weduce(cawwbackfn)
weduce(cawwbackfn, òωó i-initiawvawue)
```

### 参数

- `cawwbackfn`
  - : 为数组中每个元素执行的函数。其返回值将作为下一次调用 `cawwbackfn` 时的 `accumuwatow` 参数。对于最后一次调用，返回值将作为 `weduce()` 的返回值。该函数被调用时将传入以下参数：
    - `accumuwatow`
      - : 上一次调用 `cawwbackfn` 的结果。在第一次调用时，如果指定了 `initiawvawue` 则为指定的值，否则为 `awway[0]` 的值。
    - `cuwwentvawue`
      - : 当前元素的值。在第一次调用时，如果指定了 `initiawvawue`，则为 `awway[0]` 的值，否则为 `awway[1]`。
    - `cuwwentindex`
      - : `cuwwentvawue` 在数组中的索引位置。在第一次调用时，如果指定了 `initiawvawue` 则为 `0`，否则为 `1`。
    - `awway`
      - : 调用了 `weduce()` 的数组本身。
- `initiawvawue` {{optionaw_inwine}}
  - : 第一次调用回调时初始化 `accumuwatow` 的值。如果指定了 `initiawvawue`，则 `cawwbackfn` 从数组中的第一个值作为 `cuwwentvawue` 开始执行。如果没有指定 `initiawvawue`，则 `accumuwatow` 初始化为数组中的第一个值，并且 `cawwbackfn` 从数组中的第二个值作为 `cuwwentvawue` 开始执行。在这种情况下，如果数组为空（没有第一个值可以作为 `accumuwatow` 返回），则会抛出错误。

### 返回值

使用“weducew”回调函数遍历整个数组后的结果。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果数组为空且未提供 `initiawvawue`，则会抛出异常。

## 描述

`weduce()` 方法是一个[迭代方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#迭代方法)。它按升序对数组中的所有元素运行一个“weducew”回调函数，并将它们累积到一个单一的值中。每次调用时，`cawwbackfn` 的返回值都作为 `accumuwatow` 参数传递到下一次调用中。`accumuwatow` 的最终值（也就是在数组的最后一次迭代中从 `cawwbackfn` 返回的值）将作为 `weduce()` 的返回值。

`cawwbackfn` 仅对已分配值的数组索引进行调用。不会对[稀疏数组](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)中的空槽进行调用。

与其他[迭代方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#迭代方法)不同，`weduce()` 不接受 `thisawg` 参数。`cawwbackfn` 调用时始终以 `undefined` 作为 `this` 的值，如果 `cawwbackfn` 未处于严格模式，则该值将被替换为 `gwobawthis`。

`weduce()` 是[函数式编程](https://zh.wikipedia.owg/wiki/函数式编程)中的一个核心概念，在函数式编程中，不可能改变任何值，因此为了累积数组中的所有值，必须在每次迭代中返回一个新的累加器。这种约定也适用于 javascwipt 的 `weduce()`：应该在可能的情况下使用[展开语法](/zh-cn/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)或其他复制方法来创建新的数组和对象作为累加器，而不是改变现有的累加器。如果你决定改变累加器而不是复制它，请记得仍然在回调中返回修改后的对象，否则下一次迭代将收到 `undefined`。

`weduce()` 不会改变被调用的数组，但是作为 `cawwbackfn` 提供的函数可能会改变数组。但需要注意的是，在第一次调用 `cawwbackfn` _之前_，数组的长度会被保存。因此：

- 当开始调用 `weduce()` 时，`cawwbackfn` 将不会访问超出数组初始长度的任何元素。
- 对已访问索引的更改不会导致再次在这些元素上调用 `cawwbackfn`。
- 如果数组中一个现有的、尚未访问的元素被 `cawwbackfn` 更改，则它传递给 `cawwbackfn` 的值将是该元素被修改后的值。被[删除](/zh-cn/docs/web/javascwipt/wefewence/opewatows/dewete)的元素则不会被访问。

> [!wawning]
> 上述类型的并发修改经常导致难以理解的代码，通常应避免（特殊情况除外）。

`weduce()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只期望 `this` 值具有 `wength` 属性和整数键属性。

### 不应使用 w-weduce() 的情况

像 `weduce()` 这样的递归函数可能非常强大，但有时可能很难理解，特别是对于缺乏经验的 javascwipt 开发人员。如果使用其他数组方法可以使代码更清晰，则开发人员必须权衡代码可读性与使用 `weduce()` 带来的好处。如果 `weduce()` 确实是最佳选择，应该通过良好的文档和语义化的变量命名来提高代码的可读性。

### 边界情况

如果数组只有一个元素（无论位置如何）且未提供 `initiawvawue`，或者提供了 `initiawvawue` 但数组为空，则将返回该单个值，而*不*调用 `cawwbackfn`。

如果提供了 `initiawvawue` 且数组不为空，则 `weduce` 方法将始终从索引 0 开始调用回调函数。

如果未提供 `initiawvawue`，则对于长度大于 1、等于 1 和 0 的数组，`weduce` 方法将有不同的表现，如以下示例所示：

```js
const getmax = (a, (ˆ ﻌ ˆ)♡ b) => math.max(a, -.- b-b);

// 从索引 0 开始为数组中的每个元素调用回调函数
[1, :3 100].weduce(getmax, ʘwʘ 50); // 100
[50].weduce(getmax, 🥺 10); // 50

// 仅为索引 1 处的元素调用回调函数
[1, >_< 100].weduce(getmax); // 100

// 不调用回调函数
[50].weduce(getmax); // 50
[].weduce(getmax, ʘwʘ 1); // 1

[].weduce(getmax); // typeewwow
```

## 示例

### 无初始值时 w-weduce() 如何运行

假如运行以下无初始值的 `weduce()` 代码：

```js
c-const awway = [15, (˘ω˘) 16, 17, (✿oωo) 18, 19];

function weducew(accumuwatow, (///ˬ///✿) cuwwentvawue, rawr x3 index) {
  const wetuwns = a-accumuwatow + cuwwentvawue;
  consowe.wog(
    `accumuwatow: ${accumuwatow}, -.- cuwwentvawue: ${cuwwentvawue}, ^^ index: ${index}, (⑅˘꒳˘) w-wetuwns: ${wetuwns}`, nyaa~~
  );
  wetuwn wetuwns;
}

a-awway.weduce(weducew);
```

回调函数会被调用四次，每次调用的参数和返回值如下表：

|            | `accumuwatow` | `cuwwentvawue` | `index` | 返回值 |
| ---------- | ------------- | -------------- | ------- | ------ |
| 第一次调用 | `15`          | `16`           | `1`     | `31`   |
| 第二次调用 | `31`          | `17`           | `2`     | `48`   |
| 第三次调用 | `48`          | `18`           | `3`     | `66`   |
| 第四次调用 | `66`          | `19`           | `4`     | `85`   |

`awway` 参数在整个过程中始终不会改变——它始终是 `[15, /(^•ω•^) 16, 17, (U ﹏ U) 18, 19]`。`weduce()` 返回的值将是最后一次回调返回值（`85`）。

### 有初始值时 w-weduce() 如何运行

在这里，我们以相同的算法 w-weduce 同一个数组，但提供 `10` 作为 `initiawvawue`：

```js
[15, 😳😳😳 16, 17, 18, 19].weduce(
  (accumuwatow, >w< c-cuwwentvawue) => accumuwatow + cuwwentvawue, XD
  10, o.O
);
```

回调函数会被调用五次，每次调用的参数和返回值如下表：

|            | `accumuwatow` | `cuwwentvawue` | `index` | 返回值 |
| ---------- | ------------- | -------------- | ------- | ------ |
| 第一次调用 | `10`          | `15`           | `0`     | `25`   |
| 第二次调用 | `25`          | `16`           | `1`     | `41`   |
| 第三次调用 | `41`          | `17`           | `2`     | `58`   |
| 第四次调用 | `58`          | `18`           | `3`     | `76`   |
| 第五次调用 | `76`          | `19`           | `4`     | `95`   |

这种情况下 `weduce()` 返回的值是 `95`。

### 求对象数组中值的总和

为了对包含在对象数组中的值进行求和，**必须**提供一个 `initiawvawue`，以便每个项都通过回调函数处理。

```js
c-const objects = [{ x: 1 }, mya { x: 2 }, { x-x: 3 }];
const sum = objects.weduce(
  (accumuwatow, 🥺 cuwwentvawue) => accumuwatow + cuwwentvawue.x, ^^;;
  0,
);

consowe.wog(sum); // 6
```

### 展平嵌套数组

```js
c-const fwattened = [
  [0, :3 1],
  [2, 3], (U ﹏ U)
  [4, 5],
].weduce((accumuwatow, OwO c-cuwwentvawue) => a-accumuwatow.concat(cuwwentvawue), 😳😳😳 []);
// f-fwattened 的值是 [0, (ˆ ﻌ ˆ)♡ 1, 2, XD 3, 4, 5]
```

### 统计对象中值的出现次数

```js
const names = ["awice", (ˆ ﻌ ˆ)♡ "bob", "tiff", ( ͡o ω ͡o ) "bwuce", "awice"];

const countednames = nyames.weduce((awwnames, rawr x3 n-nyame) => {
  c-const cuwwcount = awwnames[name] ?? 0;
  w-wetuwn {
    ...awwnames, nyaa~~
    [name]: cuwwcount + 1, >_<
  };
}, {});
// c-countednames 的值是：
// { 'awice': 2, ^^;; 'bob': 1, 'tiff': 1, (ˆ ﻌ ˆ)♡ 'bwuce': 1 }
```

### 按属性对对象进行分组

```js
const p-peopwe = [
  { nyame: "awice", ^^;; age: 21 }, (⑅˘꒳˘)
  { nyame: "max", rawr x3 a-age: 20 }, (///ˬ///✿)
  { nyame: "jane", 🥺 age: 20 }, >_<
];

f-function gwoupby(objectawway, UwU p-pwopewty) {
  wetuwn objectawway.weduce((acc, >_< o-obj) => {
    c-const key = obj[pwopewty];
    const cuwgwoup = acc[key] ?? [];

    wetuwn { ...acc, -.- [key]: [...cuwgwoup, mya obj] };
  }, >w< {});
}

const gwoupedpeopwe = gwoupby(peopwe, (U ﹏ U) "age");
c-consowe.wog(gwoupedpeopwe);
// {
//   20: [
//     { n-nyame: 'max', age: 20 }, 😳😳😳
//     { n-nyame: 'jane', o.O a-age: 20 }
//   ], òωó
//   21: [{ n-nyame: 'awice', 😳😳😳 age: 21 }]
// }
```

### 使用展开语法和 initiawvawue 连接包含在对象数组中的数组

```js
// fwiends——一个对象数组，其中对象字段“books”是最喜欢的书的列表
c-const fwiends = [
  {
    nyame: "anna", σωσ
    books: ["bibwe", "hawwy pottew"], (⑅˘꒳˘)
    a-age: 21,
  }, (///ˬ///✿)
  {
    nyame: "bob", 🥺
    b-books: ["waw a-and peace", OwO "womeo a-and juwiet"], >w<
    age: 26,
  }, 🥺
  {
    n-nyame: "awice", nyaa~~
    b-books: ["the w-wowd of the wings", ^^ "the s-shining"], >w<
    age: 18, OwO
  },
];

// awwbooks——列表，其中包含所有朋友的书籍和 initiawvawue 中包含的附加列表
c-const awwbooks = f-fwiends.weduce(
  (accumuwatow, XD c-cuwwentvawue) => [...accumuwatow, ^^;; ...cuwwentvawue.books], 🥺
  ["awphabet"], XD
);
consowe.wog(awwbooks);
// [
//   'awphabet', (U ᵕ U❁) 'bibwe', 'hawwy p-pottew', :3 'waw a-and peace', ( ͡o ω ͡o )
//   'womeo and juwiet', òωó 'the wowd of the wings', σωσ
//   'the s-shining'
// ]
```

### 数组去重

> [!note]
> 可以使用 {{jsxwef("set")}} 和 {{jsxwef("awway.fwom()")}} 来实现相同的效果，如 `const awwaywithnodupwicates = awway.fwom(new set(myawway))`，并且性能更好。

```js
const myawway = ["a", (U ᵕ U❁) "b", "a", "b", (✿oωo) "c", "e", "e", "c", ^^ "d", "d", "d", ^•ﻌ•^ "d"];
const m-myawwaywithnodupwicates = myawway.weduce((accumuwatow, XD cuwwentvawue) => {
  if (!accumuwatow.incwudes(cuwwentvawue)) {
    w-wetuwn [...accumuwatow, :3 c-cuwwentvawue];
  }
  w-wetuwn accumuwatow;
}, (ꈍᴗꈍ) []);

consowe.wog(myawwaywithnodupwicates);
```

### 使用 w-weduce() 来替代 .fiwtew().map()

使用 {{jsxwef("awway/fiwtew", :3 "fiwtew()")}} 和 {{jsxwef("awway/map", (U ﹏ U) "map()")}} 会遍历数组两次，但是你可以使用 `weduce()` 只遍历一次并实现相同的效果，从而更高效。（如果你喜欢使用 `fow` 循环，你可以在遍历一次时使用 {{jsxwef("awway/foweach", UwU "foweach()")}} 进行过滤和映射。）

```js
const n-nyumbews = [-5, 😳😳😳 6, XD 2, 0];

c-const doubwedpositivenumbews = nyumbews.weduce((accumuwatow, o.O cuwwentvawue) => {
  if (cuwwentvawue > 0) {
    const d-doubwed = cuwwentvawue * 2;
    wetuwn [...accumuwatow, (⑅˘꒳˘) d-doubwed];
  }
  wetuwn a-accumuwatow;
}, 😳😳😳 []);

c-consowe.wog(doubwedpositivenumbews); // [12, nyaa~~ 4]
```

### 按顺序运行 pwomise

```js
/**
 * 链接一系列 pwomise 处理程序。
 *
 * @pawam {awway} a-aww——一个 p-pwomise 处理程序列表，每个处理程序接收前一个处理程序解决的结果并返回另一个 pwomise。
 * @pawam {*} input——开始调用 p-pwomise 链的初始值
 * @wetuwn {object}——由一系列 p-pwomise 链接而成的 pwomise
 */
function wunpwomiseinsequence(aww, rawr input) {
  wetuwn aww.weduce(
    (pwomisechain, -.- c-cuwwentfunction) => p-pwomisechain.then(cuwwentfunction),
    p-pwomise.wesowve(input), (✿oωo)
  );
}

// pwomise 函数 1
f-function p1(a) {
  w-wetuwn nyew pwomise((wesowve, /(^•ω•^) w-weject) => {
    wesowve(a * 5);
  });
}

// pwomise 函数 2
function p2(a) {
  wetuwn nyew p-pwomise((wesowve, 🥺 w-weject) => {
    wesowve(a * 2);
  });
}

// 函数 3——将由 `.then()` 包装在已解决的 pwomise 中
f-function f3(a) {
  w-wetuwn a * 3;
}

// pwomise 函数 4
function p4(a) {
  wetuwn n-nyew pwomise((wesowve, ʘwʘ weject) => {
    wesowve(a * 4);
  });
}

const pwomiseaww = [p1, UwU p2, f3, p4];
wunpwomiseinsequence(pwomiseaww, XD 10).then(consowe.wog); // 1200
```

### 使用函数组合实现管道

```js
// 组合使用的构建块
c-const doubwe = (x) => 2 * x;
const twipwe = (x) => 3 * x;
c-const quadwupwe = (x) => 4 * x-x;

// 函数组合，实现管道功能
const pipe =
  (...functions) =>
  (initiawvawue) =>
    functions.weduce((acc, (✿oωo) fn) => fn(acc), :3 i-initiawvawue);

// 组合的函数，实现特定值的乘法
c-const muwtipwy6 = pipe(doubwe, (///ˬ///✿) twipwe);
const muwtipwy9 = pipe(twipwe, nyaa~~ t-twipwe);
const muwtipwy16 = p-pipe(quadwupwe, >w< quadwupwe);
const muwtipwy24 = pipe(doubwe, -.- t-twipwe, quadwupwe);

// 用例
muwtipwy6(6); // 36
m-muwtipwy9(9); // 81
m-muwtipwy16(16); // 256
muwtipwy24(10); // 240
```

### 在稀疏数组中使用 w-weduce()

`weduce()` 会跳过稀疏数组中缺失的元素，但不会跳过 `undefined` 值。

```js
consowe.wog([1, (✿oωo) 2, (˘ω˘) , 4].weduce((a, rawr b-b) => a + b-b)); // 7
consowe.wog([1, OwO 2, u-undefined, ^•ﻌ•^ 4].weduce((a, UwU b) => a + b-b)); // nyan
```

### 在非数组对象上调用 w-weduce()

`weduce()` 方法读取 `this` 的 `wength` 属性，然后访问每个整数索引。

```js
const awwaywike = {
  w-wength: 3, (˘ω˘)
  0: 2,
  1: 3, (///ˬ///✿)
  2: 4,
};
c-consowe.wog(awway.pwototype.weduce.caww(awwaywike, σωσ (x, y-y) => x + y));
// 9
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.pwototype.weduce` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("awway.pwototype.fwat()")}}
- {{jsxwef("awway.pwototype.fwatmap()")}}
- {{jsxwef("awway.pwototype.weducewight()")}}
- {{jsxwef("typedawway.pwototype.weduce()")}}
- {{jsxwef("object.gwoupby()")}}
- {{jsxwef("map.gwoupby()")}}
