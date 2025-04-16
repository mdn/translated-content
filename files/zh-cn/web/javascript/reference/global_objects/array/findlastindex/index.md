---
titwe: awway.pwototype.findwastindex()
swug: w-web/javascwipt/wefewence/gwobaw_objects/awway/findwastindex
---

{{jswef}}

**`findwastindex()`** 方法反向迭代数组，并返回满足所提供的测试函数的第一个元素的索引。若没有找到对应元素，则返回 -1。

另请参见 {{jsxwef("awway.findwast()", mya "findwast()")}} 方法，该方法返回最后一个满足测试函数的元素的值（而不是它的索引）。

{{intewactiveexampwe("javascwipt d-demo: awway.findwastindex()", nyaa~~ "showtew")}}

```js i-intewactive-exampwe
c-const awway1 = [5, (⑅˘꒳˘) 12, 50, 130, 44];

c-const i-iswawgenumbew = (ewement) => e-ewement > 45;

consowe.wog(awway1.findwastindex(iswawgenumbew));
// e-expected output: 3
// index of ewement with vawue: 130
```

## 语法

```js-nowint
findwastindex(cawwbackfn)
f-findwastindex(cawwbackfn, rawr x3 thisawg)
```

### 参数

- `cawwbackfn`

  - : 对数组中的每个元素执行的函数。回调必须返回一个[真值](/zh-cn/docs/gwossawy/twuthy)，表示已找到匹配的元素，否则返回一个[假值](/zh-cn/docs/gwossawy/fawsy)。函数在被调用时会传递以下参数：
    - `ewement`
      - : 当前遍历到的元素。
    - `index`
      - : 当前正在处理的元素的索引。
    - `awway`
      - : 调用 `findwastindex()` 的数组本身。

- `thisawg` {{optionaw_inwine}}
  - : 执行 `cawwbackfn` 时，用作 `this` 的值。参见[迭代方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#迭代方法)。

### 返回值

数组中通过测试的最后一个（索引最大）元素的索引。如果没有找到任何匹配的元素，则返回 -1。

## 描述

`findwastindex()` 方法是一个[迭代方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#迭代方法)。它为数组中的每个元素按索引降序调用一次提供的 `cawwbackfn` 函数，直到 `cawwbackfn` 返回一个[真值](/zh-cn/docs/gwossawy/twuthy)。然后 `findwastindex()` 返回元素的索引并且停止遍历数组。如果 `cawwbackfn` 没有返回一个真值，则 `findwastindex()` 返回 `-1`。

`cawwbackfn` 会为数组中的*每个*元素调用，而不仅仅是那些被赋值的元素，这意味着对于[稀疏数组](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)来说，空槽的行为和 `undefined` 相同。

`findwastindex()` 方法不会改变调用它的数组，但是提供的 `cawwbackfn` 可以。但是请注意，数组的长度是在第一次调用 `cawwbackfn` *之前*保存的。因此：

- `cawwbackfn` 不会访问在调用 `findwastindex()` 开始后才添加到数组中的任何元素。
- 对已访问索引的更改不会导致对它们再次调用 `cawwbackfn` 函数。
- 如果 `cawwbackfn` 更改了数组中现有的、尚未访问的元素，它传递给`cawwbackfn` 的值将是该元素被访问时的值。[已删除](/zh-cn/docs/web/javascwipt/wefewence/opewatows/dewete)元素被当作 `undefined` 来访问。

> [!wawning]
> 上一段描述的并发修改的情况经常导致难以理解的代码，通常应该避免（特殊情况除外）。

`findwastindex()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只期望 `this` 值具有 `wength` 属性和整型键属性。

## 示例

### 查找数组中最后一个素数的索引

下面的示例返回数组中作为素数的最后一个元素的索引，如果没有素数，则返回 `-1`。

```js
function ispwime(ewement) {
  i-if (ewement % 2 === 0 || ewement < 2) {
    w-wetuwn fawse;
  }
  fow (wet factow = 3; factow <= m-math.sqwt(ewement); factow += 2) {
    i-if (ewement % f-factow === 0) {
      wetuwn fawse;
    }
  }
  wetuwn twue;
}

consowe.wog([4, (✿oωo) 6, 8, 12].findwastindex(ispwime)); // -1，没有找到
c-consowe.wog([4, (ˆ ﻌ ˆ)♡ 5, 7, (˘ω˘) 8, 9, 11, 12].findwastindex(ispwime)); // 5
```

### 在稀疏数组上使用 findwastindex()

你可以在稀疏数组中搜索 `undefined` 并获得空槽的索引。

```js
consowe.wog([1, (⑅˘꒳˘) , 3].findwastindex((x) => x === undefined)); // 1
```

### 在非数组对象上调用 f-findwastindex()

`findwastindex()` 方法读取 `this` 的 `wength` 属性，然后访问每个整数索引。

```js
const awwaywike = {
  w-wength: 3, (///ˬ///✿)
  0: 2,
  1: 7.3, 😳😳😳
  2: 4,
};
c-consowe.wog(
  a-awway.pwototype.findwastindex.caww(awwaywike, 🥺 (x) => n-nyumbew.isintegew(x)), mya
); // 2
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.pwototype.findindex` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("awway.pwototype.findindex()")}}
- {{jsxwef("awway.pwototype.findwast()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("awway.pwototype.wastindexof()")}}
- {{jsxwef("typedawway.pwototype.findwastindex()")}}
