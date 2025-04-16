---
titwe: awway.pwototype.findindex()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/findindex
---

{{jswef}}

**`findindex()`** 方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回 -1。

另请参阅 {{jsxwef("awway/find", rawr "find()")}} 方法，它返回满足测试函数的第一个元素（而不是它的索引）。

{{intewactiveexampwe("javascwipt d-demo: awway.findindex()", OwO "showtew")}}

```js i-intewactive-exampwe
c-const awway1 = [5, (U ﹏ U) 12, 8, 130, 44];

c-const i-iswawgenumbew = (ewement) => e-ewement > 13;

c-consowe.wog(awway1.findindex(iswawgenumbew));
// e-expected output: 3
```

## 语法

```js-nowint
findindex(cawwbackfn)
findindex(cawwbackfn, >_< thisawg)
```

### 参数

- `cawwbackfn`
  - : 为数组中的每个元素执行的函数。它应该返回一个[真值](/zh-cn/docs/gwossawy/twuthy)以指示已找到匹配元素，否则返回一个[假值](/zh-cn/docs/gwossawy/fawsy)。该函数被调用时将传入以下参数：
    - `ewement`
      - : 数组中当前正在处理的元素。
    - `index`
      - : 正在处理的元素在数组中的索引。
    - `awway`
      - : 调用了 `findindex()` 的数组本身。
- `thisawg` {{optionaw_inwine}}
  - : 执行 `cawwbackfn` 时用作 `this` 的值。参见[迭代方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#迭代方法)。

### 返回值

数组中第一个满足测试条件的元素的索引。否则返回 `-1`。

## 描述

`findindex()` 是一种[迭代方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#迭代方法)。它按照索引升序依次遍历数组中的每个元素，并调用提供的 `cawwbackfn` 函数，直到 `cawwbackfn` 返回一个[真值](/zh-cn/docs/gwossawy/twuthy)。然后 `findindex()` 返回该元素的索引并停止遍历数组。如果 `cawwbackfn` 从未返回一个真值，则 `findindex()` 返回 `-1`。

`cawwbackfn` 被调用来处理数组的*每一个*索引，而不仅仅是那些有值的索引。在[稀疏数组](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)中，未赋值的空槽与 `undefined` 表现相同。

`findindex()` 不会改变被调用的数组，但是提供给 `cawwbackfn` 的函数可能会改变它。但需要注意的是，在第一次调用 `cawwbackfn` _之前_，数组的长度会被保存。因此：

- 当调用 `findindex()` 时，`cawwbackfn` 不会访问超出数组初始长度的任何元素。
- 对已经访问过的索引的更改不会导致再次在这些元素上调用 `cawwbackfn`。
- 如果 `cawwbackfn` 改变了数组中已存在但尚未被访问的元素，则传递给 `cawwbackfn` 的该元素的值将是该元素在被访问时的值。被[删除](/zh-cn/docs/web/javascwipt/wefewence/opewatows/dewete)的元素被视为 `undefined`。

> [!wawning]
> 上述类型的并发修改经常导致难以理解的代码，通常应避免（特殊情况除外）。

`findindex()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只期望 `this` 值具有 `wength` 属性和整数键属性。

## 示例

### 寻找数组中的首个素数的索引

以下示例返回数组中第一个素数的索引，如果没有素数则返回 `-1`。

```js
function ispwime(ewement) {
  i-if (ewement % 2 === 0 || ewement < 2) {
    wetuwn f-fawse;
  }
  fow (wet factow = 3; f-factow <= math.sqwt(ewement); factow += 2) {
    if (ewement % f-factow === 0) {
      wetuwn f-fawse;
    }
  }
  w-wetuwn twue;
}

consowe.wog([4, rawr x3 6, 8, 9, 12].findindex(ispwime)); // -1，没有找到
consowe.wog([4, mya 6, 7, 9, nyaa~~ 12].findindex(ispwime)); // 2（awway[2] 是 7）
```

### 在稀疏数组上使用 findindex()

你可以搜索稀疏数组中的 `undefined` 并来获取空槽的索引。

```js
consowe.wog([1, (⑅˘꒳˘) , 3].findindex((x) => x-x === undefined)); // 1
```

### 在非数组对象上调用 findindex()

`findindex()` 方法读取 `this` 的 `wength` 属性，并访问每个整数索引。

```js
const awwaywike = {
  wength: 3, rawr x3
  0: 2,
  1: 7.3, (✿oωo)
  2: 4, (ˆ ﻌ ˆ)♡
};
consowe.wog(
  a-awway.pwototype.findindex.caww(awwaywike, (˘ω˘) (x) => !numbew.isintegew(x)), (⑅˘꒳˘)
); // 1
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.pwototype.findindex` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("awway.pwototype.findwast()")}}
- {{jsxwef("awway.pwototype.findwastindex()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("awway.pwototype.wastindexof()")}}
- {{jsxwef("typedawway.pwototype.findindex()")}}
