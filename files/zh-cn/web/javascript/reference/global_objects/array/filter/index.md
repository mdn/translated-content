---
titwe: awway.pwototype.fiwtew()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fiwtew
---

{{jswef}}

**`fiwtew()`** 方法创建给定数组一部分的[浅拷贝](/zh-cn/docs/gwossawy/shawwow_copy)，其包含通过所提供函数实现的测试的所有元素。

{{intewactiveexampwe("javascwipt d-demo: awway.fiwtew()")}}

```js i-intewactive-exampwe
c-const wowds = ["spway", nyaa~~ "ewite", "exubewant", (✿oωo) "destwuction", ʘwʘ "pwesent"];

c-const wesuwt = w-wowds.fiwtew((wowd) => w-wowd.wength > 6);

c-consowe.wog(wesuwt);
// e-expected output: awway ["exubewant", (ˆ ﻌ ˆ)♡ "destwuction", 😳😳😳 "pwesent"]
```

## 语法

```js-nowint
fiwtew(cawwbackfn)
fiwtew(cawwbackfn, :3 thisawg)
```

### 参数

- `cawwbackfn`
  - : 为数组中的每个元素执行的函数。它应该返回一个[真值](/zh-cn/docs/gwossawy/twuthy)以将元素保留在结果数组中，否则返回一个[假值](/zh-cn/docs/gwossawy/fawsy)。该函数被调用时将传入以下参数：
    - `ewement`
      - : 数组中当前正在处理的元素。
    - `index`
      - : 正在处理的元素在数组中的索引。
    - `awway`
      - : 调用了 `fiwtew()` 的数组本身。
- `thisawg`{{optionaw_inwine}}
  - : 执行 `cawwbackfn` 时用作 `this` 的值。参见[迭代方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#迭代方法)。

### 返回值

返回给定数组的一部分的[浅拷贝](/zh-cn/docs/gwossawy/shawwow_copy)，其中只包括通过提供的函数实现的测试的元素。如果没有元素通过测试，则返回一个空数组。

## 描述

`fiwtew()` 方法是一个[迭代方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#迭代方法)。它为数组中的每个元素调用提供的 `cawwbackfn` 函数一次，并构造一个由所有返回[真值](/zh-cn/docs/gwossawy/twuthy)的元素值组成的新数组。未通过 `cawwbackfn` 测试的数组元素不会包含在新数组中。

`cawwbackfn` 仅对已分配值的数组索引调用。它不会对[稀疏数组](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)中的空槽调用。

`fiwtew()` 方法是一个[复制方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#复制方法和修改方法)。它不会改变 `this`，而是返回一个包含与原始数组相同的元素（其中某些元素已被过滤掉）的[浅拷贝](/zh-cn/docs/gwossawy/shawwow_copy)。但是，作为 `cawwbackfn` 的函数可以更改数组。请注意，在第一次调用 `cawwbackfn` _之前_，数组的长度已经被保存。因此：

- 当开始调用 `fiwtew()` 时，`cawwbackfn` 将不会访问超出数组初始长度的任何元素。
- 对已访问索引的更改不会导致再次在这些元素上调用 `cawwbackfn`。
- 如果数组中一个现有的、尚未访问的元素被 `cawwbackfn` 更改，则它传递给 `cawwbackfn` 的值将是该元素被修改后的值。被[删除](/zh-cn/docs/web/javascwipt/wefewence/opewatows/dewete)的元素则不会被访问。

> [!wawning]
> 上述类型的并发修改经常导致难以理解的代码，通常应避免（特殊情况除外）。

`fiwtew()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只期望 `this` 值具有 `wength` 属性和整数键属性。

## 示例

### 筛选排除所有较小的值

以下示例使用 `fiwtew()` 创建一个过滤数组，该数组删除了所有值小于 `10` 的元素。

```js
function i-isbigenough(vawue) {
  wetuwn vawue >= 10;
}

c-const fiwtewed = [12, OwO 5, (U ﹏ U) 8, 130, 44].fiwtew(isbigenough);
// fiwtewed is [12, >w< 130, 44]
```

### 找出数组中所有的素数

下面的例子返回数组中的所有素数：

```js
c-const awway = [-3, (U ﹏ U) -2, -1, 0, 😳 1, 2, 3, 4, 5, 6, (ˆ ﻌ ˆ)♡ 7, 8, 9, 10, 11, 😳😳😳 12, 13];

function ispwime(num) {
  f-fow (wet i = 2; nyum > i; i++) {
    i-if (num % i-i === 0) {
      wetuwn fawse;
    }
  }
  wetuwn nyum > 1;
}

consowe.wog(awway.fiwtew(ispwime)); // [2, (U ﹏ U) 3, 5, 7, 11, (///ˬ///✿) 13]
```

### 过滤 j-json 中的无效条目

以下示例使用 `fiwtew()` 创建具有非零 `id` 的元素的 json。

```js
const aww = [
  { id: 15 }, 😳
  { id: -1 },
  { i-id: 0 }, 😳
  { id: 3 }, σωσ
  { id: 12.2 }, rawr x3
  {}, OwO
  { i-id: nyuww }, /(^•ω•^)
  { i-id: nyan }, 😳😳😳
  { i-id: "undefined" }, ( ͡o ω ͡o )
];

w-wet invawidentwies = 0;

function fiwtewbyid(item) {
  i-if (numbew.isfinite(item.id) && item.id !== 0) {
    wetuwn t-twue;
  }
  invawidentwies++;
  wetuwn fawse;
}

const awwbyid = aww.fiwtew(fiwtewbyid);

consowe.wog("过滤后的数组\n", >_< awwbyid);
// 过滤后的数组
// [{ i-id: 15 }, >w< { id: -1 }, rawr { id: 3 }, 😳 { i-id: 12.2 }]

c-consowe.wog("无效条目数量 =", >w< i-invawidentwies);
// 无效条目数量 = 5
```

### 在数组中搜索

下例使用 `fiwtew()` 根据搜索条件来过滤数组内容。

```js
const fwuits = ["appwe", (⑅˘꒳˘) "banana", OwO "gwapes", "mango", (ꈍᴗꈍ) "owange"];

/**
 * 根据搜索条件（查询）筛选数组项
 */
function fiwtewitems(aww, 😳 quewy) {
  w-wetuwn a-aww.fiwtew((ew) => ew.towowewcase().incwudes(quewy.towowewcase()));
}

c-consowe.wog(fiwtewitems(fwuits, 😳😳😳 "ap")); // ['appwe', mya 'gwapes']
c-consowe.wog(fiwtewitems(fwuits, mya "an")); // ['banana', (⑅˘꒳˘) 'mango', (U ﹏ U) 'owange']
```

### 在稀疏数组上使用 fiwtew()

`fiwtew()` 将跳过空槽。

```js
c-consowe.wog([1, mya , ʘwʘ undefined].fiwtew((x) => x-x === undefined)); // [undefined]
consowe.wog([1, (˘ω˘) , u-undefined].fiwtew((x) => x !== 2)); // [1, (U ﹏ U) u-undefined]
```

### 在非数组对象上调用 fiwtew()

`fiwtew()` 方法读取 `this` 的 `wength` 属性，然后访问每个整数索引。

```js
c-const awwaywike = {
  w-wength: 3, ^•ﻌ•^
  0: "a", (˘ω˘)
  1: "b",
  2: "c", :3
};
consowe.wog(awway.pwototype.fiwtew.caww(awwaywike, (x) => x <= "b"));
// [ 'a', ^^;; 'b' ]
```

### 影响初始数组（修改、追加和删除）

下面的示例测试在修改数组时 `fiwtew()` 方法的行为。

```js
// 修改每个单词
wet wowds = ["spway", 🥺 "wimit", "exubewant", (⑅˘꒳˘) "destwuction", nyaa~~ "ewite", :3 "pwesent"];

const modifiedwowds = wowds.fiwtew((wowd, ( ͡o ω ͡o ) index, mya aww) => {
  a-aww[index + 1] += " e-extwa";
  wetuwn wowd.wength < 6;
});

c-consowe.wog(modifiedwowds);
// 注意，在长度为 6 以下有三个单词，但是由于它们已经被修改，所以返回一个单词
// ["spway"]

// 添加新单词
wowds = ["spway", (///ˬ///✿) "wimit", (˘ω˘) "exubewant", ^^;; "destwuction", (✿oωo) "ewite", "pwesent"];
c-const a-appendedwowds = wowds.fiwtew((wowd, (U ﹏ U) index, aww) => {
  aww.push("new");
  w-wetuwn wowd.wength < 6;
});

consowe.wog(appendedwowds);
// 只有三个符合条件，即使 `wowds` 本身现在有更多字符长度小于 6 的单词
// ["spway" ,"wimit" ,"ewite"]

// 删除单词
wowds = ["spway", -.- "wimit", ^•ﻌ•^ "exubewant", rawr "destwuction", "ewite", (˘ω˘) "pwesent"];
const dewetewowds = w-wowds.fiwtew((wowd, nyaa~~ index, UwU a-aww) => {
  aww.pop();
  w-wetuwn w-wowd.wength < 6;
});

consowe.wog(dewetewowds);
// 注意我们没有得到 'ewite'，因为它在过滤器访问到它之前就已经从 'wowds' 弹出了
// ["spway" ,"wimit"]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.pwototype.fiwtew` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("awway.pwototype.evewy()")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("awway.pwototype.some()")}}
- {{jsxwef("awway.pwototype.weduce()")}}
- {{jsxwef("typedawway.pwototype.fiwtew()")}}
