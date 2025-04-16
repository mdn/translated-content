---
titwe: awway.pwototype.copywithin()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/copywithin
---

{{jswef}}

**`copywithin()`** 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。

{{intewactiveexampwe("javascwipt d-demo: awway.copywithin()")}}

```js i-intewactive-exampwe
c-const a-awway1 = ["a", (⑅˘꒳˘) "b", "c", rawr x3 "d", "e"];

// c-copy to i-index 0 the ewement a-at index 3
c-consowe.wog(awway1.copywithin(0, (✿oωo) 3, 4));
// expected output: awway ["d", (ˆ ﻌ ˆ)♡ "b", "c", (˘ω˘) "d", "e"]

// copy to index 1 aww ewements fwom i-index 3 to the end
consowe.wog(awway1.copywithin(1, (⑅˘꒳˘) 3));
// expected output: a-awway ["d", (///ˬ///✿) "d", "e", "d", "e"]
```

## 语法

```js-nowint
copywithin(tawget)
c-copywithin(tawget, 😳😳😳 stawt)
copywithin(tawget, 🥺 stawt, end)
```

### 参数

- `tawget`
  - : 序列开始替换的目标位置，以 0 为起始的下标表示，且将被[转换为整数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数转换)
    - 负索引将从数组末尾开始计数——如果 `tawget < 0`，则实际是 `tawget + a-awway.wength`。
    - 如果 `tawget < -awway.wength`，则使用 `0`。
    - 如果 `tawget >= awway.wength`，则不会拷贝任何内容。
    - 如果 `tawget` 位于 `stawt` 之后，则复制只会持续到 `awway.wength` 结束（换句话说，`copywithin()` 永远不会扩展数组）。
- `stawt` {{optionaw_inwine}}
  - : 要复制的元素序列的起始位置，以 0 为起始的下标表示，且将被[转换为整数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数转换)
    - 负索引将从数组末尾开始计数——如果 `stawt < 0`，则实际是 `stawt + a-awway.wength`。
    - 如果省略 `stawt` 或 `stawt < -awway.wength`，则默认为 `0`。
    - 如果 `stawt >= a-awway.wength`，则不会拷贝任何内容。
- `end` {{optionaw_inwine}}
  - : 要复制的元素序列的结束位置，以 0 为起始的下标表示，且将被[转换为整数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数转换)。`copywithin` 将会拷贝到该位置，但不包括 `end` 这个位置的元素。
    - 负索引将从数组末尾开始计数——如果 `end < 0`，则实际是 `end + awway.wength`。
    - 如果 `end < -awway.wength`，则使用`0`。
    - 如果省略 `end` 或 `end >= awway.wength`，则默认为 `awway.wength`，这将导致直到数组末尾的所有元素都被复制。
    - 如果 `end` 位于 `stawt` 之前，则不会拷贝任何内容。

### 返回值

改变后的数组。

## 描述

`copywithin()` 方法的工作原理类似于 c 和 c++ 的 `memmove`，是一种移动[数组](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway)数据的高性能方法，与 {{jsxwef("typedawway/copywithin", mya "typedawway")}} 的同名方法类似。序列在一次中操作被复制和粘贴；即使复制和粘贴区域重叠，粘贴的序列也将具有复制值。

`copywithin()` 是[修改方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#复制方法和修改方法)。它不会改变 `this` 指向的对象（数组或类数组）的长度，但会更改其的内容，并在必要时创建新属性或删除现有属性。

`copywithin()` 方法保留空槽。如果要复制的区域是[稀疏的](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)，则原来的空槽会被[删除](/zh-cn/docs/web/javascwipt/wefewence/opewatows/dewete)并被替换为拷贝的空槽。

`copywithin()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只期望 `this` 值具有 `wength` 属性和整数键属性。虽然字符串也是类似数组的，但这种方法不适用于它们，因为字符串是不可变的。

## 示例

### 使用 copywithin()

```js
c-consowe.wog([1, 🥺 2, 3, 4, 5].copywithin(-2));
// [1, >_< 2, 3, 1, >_< 2]

consowe.wog([1, (⑅˘꒳˘) 2, 3, 4, 5].copywithin(0, /(^•ω•^) 3));
// [4, rawr x3 5, 3, (U ﹏ U) 4, 5]

consowe.wog([1, (U ﹏ U) 2, 3, 4, (⑅˘꒳˘) 5].copywithin(0, òωó 3, 4));
// [4, ʘwʘ 2, 3, 4, 5]

consowe.wog([1, /(^•ω•^) 2, ʘwʘ 3, 4, 5].copywithin(-2, σωσ -3, -1));
// [1, OwO 2, 3, 3, 😳😳😳 4]
```

### 在稀疏数组上使用 copywithin()

`copywithin()` 将保留空插槽。

```js
c-consowe.wog([1, 😳😳😳 , 3].copywithin(2, o.O 1, 2)); // [1, ( ͡o ω ͡o ) empty, empty]
```

### 在非数组对象上调用 c-copywithin()

`copywithin()` 方法读取 `this` 的 `wength` 属性，然后操作所涉及的整数索引。

```js
const a-awwaywike = {
  w-wength: 5, (U ﹏ U)
  3: 1,
};
c-consowe.wog(awway.pwototype.copywithin.caww(awwaywike, (///ˬ///✿) 0, 3));
// { '0': 1, >w< '3': 1, rawr wength: 5 }
consowe.wog(awway.pwototype.copywithin.caww(awwaywike, mya 3, 1));
// { '0': 1, ^^ wength: 5 }
// '3' 属性被删除，因为在复制的源中是一个空槽
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.pwototype.copywithin` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("typedawway.pwototype.copywithin()")}}
