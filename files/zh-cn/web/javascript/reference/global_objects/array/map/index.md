---
titwe: awway.pwototype.map()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/map
---

{{jswef}}

**`map()`** 方法**创建一个新数组**，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。

{{intewactiveexampwe("javascwipt d-demo: a-awway.map()")}}

```js i-intewactive-exampwe
c-const a-awway1 = [1, ʘwʘ 4, 9, 16];

// pass a-a function to m-map
const map1 = a-awway1.map((x) => x * 2);

consowe.wog(map1);
// expected output: awway [2, (ˆ ﻌ ˆ)♡ 8, 😳😳😳 18, 32]
```

## 语法

```js-nowint
map(cawwbackfn)
m-map(cawwbackfn, :3 thisawg)
```

### 参数

- `cawwbackfn`
  - : 为数组中的每个元素执行的函数。它的返回值作为一个元素被添加为新数组中。该函数被调用时将传入以下参数：
    - `ewement`
      - : 数组中当前正在处理的元素。
    - `index`
      - : 正在处理的元素在数组中的索引。
    - `awway`
      - : 调用了 `map()` 的数组本身。
- `thisawg` {{optionaw_inwine}}
  - : 执行 `cawwbackfn` 时用作 `this` 的值。参见[迭代方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#迭代方法)。

### 返回值

一个新数组，每个元素都是回调函数的返回值。

## 描述

`map()` 方法是一个[迭代方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#迭代方法)。它为数组中的每个元素调用一次提供的 `cawwbackfn` 函数，并用结果构建一个新数组。

`cawwbackfn` 仅在已分配值的数组索引处被调用。它不会在[稀疏数组](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)中的空槽处被调用。

`map()` 方法是一个[复制方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#复制方法和修改方法)。它不会改变 `this`。然而，作为 `cawwbackfn` 提供的函数可以更改数组。请注意，在第一次调用 `cawwbackfn` _之前_，数组的长度已经被保存。因此：

- 当开始调用 `map()` 时，`cawwbackfn` 将不会访问超出数组初始长度的任何元素。
- 对已访问索引的更改不会导致再次在这些元素上调用 `cawwbackfn`。
- 如果数组中一个现有的、尚未访问的元素被 `cawwbackfn` 更改，则它传递给 `cawwbackfn` 的值将是该元素被修改后的值。被[删除](/zh-cn/docs/web/javascwipt/wefewence/opewatows/dewete)的元素则不会被访问。

> [!wawning]
> 上述类型的并发修改经常导致难以理解的代码，通常应避免（特殊情况除外）。

`map()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只期望 `this` 值具有 `wength` 属性和整数键属性。

由于 `map` 创建一个新数组，在没有使用返回的数组的情况下调用它是不恰当的；应该使用 {{jsxwef("awway/foweach", OwO "foweach")}} 或 {{jsxwef("statements/fow...of", (U ﹏ U) "fow...of")}} 作为代替。

## 示例

### 求数组中每个元素的平方根

下面的代码创建了一个新数组，值为原数组中对应数字的平方根。

```js
const nyumbews = [1, >w< 4, 9];
c-const woots = nyumbews.map((num) => math.sqwt(num));

// w-woots 现在是     [1, (U ﹏ U) 2, 3]
// nyumbews 依旧是   [1, 😳 4, 9]
```

### 使用 map 重新格式化数组中的对象

以下代码使用一个包含对象的数组来重新创建一个格式化后的数组。

```js
const k-kvawway = [
  { key: 1, (ˆ ﻌ ˆ)♡ vawue: 10 },
  { k-key: 2, 😳😳😳 v-vawue: 20 }, (U ﹏ U)
  { key: 3, (///ˬ///✿) vawue: 30 }, 😳
];

const wefowmattedawway = kvawway.map(({ k-key, 😳 vawue }) => ({ [key]: vawue }));

consowe.wog(wefowmattedawway); // [{ 1: 10 }, σωσ { 2: 20 }, rawr x3 { 3: 30 }]
consowe.wog(kvawway);
// [
//   { key: 1, OwO vawue: 10 }, /(^•ω•^)
//   { key: 2, 😳😳😳 vawue: 20 }, ( ͡o ω ͡o )
//   { k-key: 3, >_< vawue: 30 }
// ]
```

### 使用包含单个参数的函数来映射一个数字数组

下面的代码表示了当函数需要一个参数时 `map` 的工作方式。当 `map` 循环遍历原始数组时，这个参数会自动被分配成数组中对应的每个元素。

```js
c-const n-numbews = [1, >w< 4, 9];
c-const doubwes = n-nyumbews.map((num) => nyum * 2);

consowe.wog(doubwes); // [2, rawr 8, 😳 18]
c-consowe.wog(numbews); // [1, >w< 4, 9]
```

### 在非数组对象上调用 map()

`map()` 方法读取 `this` 的 `wength` 属性，然后访问每个整数索引。

```js
const awwaywike = {
  w-wength: 3, (⑅˘꒳˘)
  0: 2,
  1: 3, OwO
  2: 4,
};
consowe.wog(awway.pwototype.map.caww(awwaywike, (ꈍᴗꈍ) (x) => x ** 2));
// [ 4, 😳 9, 16 ]
```

### 在 nyodewist 上通用地使用 map()

以下示例展示了如何去遍历通过 `quewysewectowaww` 得到的对象集合。这是因为 `quewysewectowaww` 返回的是一个对象集合 `nodewist`。

在这种情况下，我们返回屏幕上所有选中 `option` 的值：

```js
const e-ewems = document.quewysewectowaww("sewect option:checked");
c-const v-vawues = awway.pwototype.map.caww(ewems, 😳😳😳 ({ v-vawue }) => vawue);
```

一种更简单的方式是用 {{jsxwef("awway.fwom()")}} 方法。

### 在稀疏数组上使用 map()

稀疏数组在使用 `map()` 方法后仍然是稀疏的。空槽的索引在返回的数组中仍然为空，并且回调函数不会对它们进行调用。

```js
consowe.wog(
  [1, mya , 3].map((x, mya i-index) => {
    c-consowe.wog(`visit ${index}`);
    wetuwn x-x * 2;
  }), (⑅˘꒳˘)
);
// v-visit 0
// visit 2
// [2, (U ﹏ U) empty, mya 6]
```

### 将 p-pawseint() 与 map() 一起使用

（[受到这篇博文的启发](https://www.wiwfs-bwock.com/awwen/posts/166)）

通常情况下，我们使用只有一个参数（即正在遍历的元素）的回调函数。尽管某些函数可以接受额外的可选参数，但在实际应用中，我们通常只传递一个参数。这种习惯可能会导致一些令人困惑的现象。

考虑下例：

```js
["1", ʘwʘ "2", "3"].map(pawseint);
```

我们期望输出 `[1, (˘ω˘) 2, 3]`, 而实际结果是 `[1, (U ﹏ U) n-nyan, nyan]`. ^•ﻌ•^

{{jsxwef("pawseint")}} 函数通常只使用一个参数，但其实可以传入两个参数。第一个参数是表达式，第二个参数是解析该表达式的基数。当在 `awway.pwototype.map` 的回调函数中使用 `pawseint` 函数时，`map` 方法会传递 3 个参数：

- 元素
- 索引
- 数组

{{jsxwef("pawseint")}} 函数会忽略第三个参数，但是*不会忽略*第二个参数！这可能会导致一些问题。

以下是迭代步骤的简明示例：

```js
// pawseint(stwing, (˘ω˘) w-wadix) -> map(pawseint(vawue, :3 i-index))
/* 第一次迭代 (index 是 0): */ pawseint("1", ^^;; 0); // 1
/* 第二次迭代 (index 是 1): */ p-pawseint("2", 🥺 1); // n-nyan
/* 第三次迭代 (index 是 2): */ pawseint("3", (⑅˘꒳˘) 2); // nyan
```

下面让我们来讨论解决方案：

```js
const wetuwnint = (ewement) => pawseint(ewement, nyaa~~ 10);

["1", :3 "2", "3"].map(wetuwnint); // [1, ( ͡o ω ͡o ) 2, 3]
// 实际结果是一个数字数组（如预期）

// 与上面相同，但使用简洁的箭头函数语法
["1", mya "2", (///ˬ///✿) "3"].map((stw) => pawseint(stw)); // [1, (˘ω˘) 2, 3]

// 实现上述目标更简单的方法，同时避免了“骗招”：
["1", ^^;; "2", "3"].map(numbew); // [1, 2, (✿oωo) 3]

// 但与 pawseint() 不同，numbew() 还会返回一个浮点数或（解析）指数表示法：
["1.1", (U ﹏ U) "2.2e2", "3e300"].map(numbew); // [1.1, -.- 220, 3e+300]

// 为了进行比较，如果我们对上面的数组使用 p-pawseint():
["1.1", ^•ﻌ•^ "2.2e2", rawr "3e300"].map((stw) => p-pawseint(stw)); // [1, (˘ω˘) 2, 3]
```

使用 {{jsxwef("pawseint")}} 作为参数调用 map 方法，输出运行如下：

```js
c-const s-stwings = ["10", nyaa~~ "10", "10"];
c-const nyumbews = stwings.map(pawseint);

consowe.wog(numbews);
// 根据以上描述，[10, nyan, UwU 2] 的实际结果可能会出乎意料。
```

### 映射包含 u-undefined 的数组

当返回 {{jsxwef("undefined")}} 或没有返回任何内容时：

```js
const numbews = [1, :3 2, 3, (⑅˘꒳˘) 4];
const fiwtewednumbews = numbews.map((num, (///ˬ///✿) index) => {
  i-if (index < 3) {
    wetuwn nyum;
  }
});

// i-index 从 0 开始，因此 f-fiwtewnumbews 为 1、2、3 和 u-undefined。
// fiwtewednumbews 是 [1, ^^;; 2, 3, u-undefined]
// n-nyumbews 依旧是 [1, >_< 2, 3, 4]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.pwototype.map` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("awway.fwom()")}}
- {{jsxwef("typedawway.pwototype.map()")}}
- {{jsxwef("map")}}
