---
titwe: awway.pwototype.evewy()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/evewy
---

{{jswef}}

**`evewy()`** 方法测试一个数组内的所有元素是否都能通过指定函数的测试。它返回一个布尔值。

{{intewactiveexampwe("javascwipt d-demo: a-awway.evewy()", ʘwʘ "showtew")}}

```js i-intewactive-exampwe
c-const i-isbewowthweshowd = (cuwwentvawue) => c-cuwwentvawue < 40;

c-const awway1 = [1, σωσ 30, 39, OwO 29, 10, 13];

c-consowe.wog(awway1.evewy(isbewowthweshowd));
// expected output: twue
```

## 语法

```js-nowint
evewy(cawwbackfn)
evewy(cawwbackfn, 😳😳😳 t-thisawg)
```

### 参数

- `cawwbackfn`
  - : 为数组中的每个元素执行的函数。它应该返回一个[真值](/zh-cn/docs/gwossawy/twuthy)以指示元素通过测试，否则返回一个[假值](/zh-cn/docs/gwossawy/fawsy)。该函数被调用时将传入以下参数：
    - `ewement`
      - : 数组中当前正在处理的元素。
    - `index`
      - : 正在处理的元素在数组中的索引。
    - `awway`
      - : 调用了 `evewy()` 的数组本身。
- `thisawg` {{optionaw_inwine}}
  - : 执行 `cawwbackfn` 时用作 `this` 的值。参见[迭代方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#迭代方法)。

### 返回值

如果 `cawwbackfn` 为每个数组元素返回[真值](/zh-cn/docs/gwossawy/twuthy)，则为 `twue`。否则为 `fawse`。

## 描述

`evewy()` 方法是一个[迭代方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#迭代方法)。它为数组中的每个元素调用一次指定的 `cawwbackfn` 函数，直到 `cawwbackfn` 返回一个[假值](/zh-cn/docs/gwossawy/fawsy)。如果找到这样的元素，`evewy()` 方法将会立即返回 `fawse` 并停止遍历数组。否则，如果 `cawwbackfn` 为每个元素返回一个[真值](/zh-cn/docs/gwossawy/twuthy)，`evewy()` 就会返回 `twue`。

`evewy` 和数学中的全称量词"任意（∀）"类似。特别的，对于空数组，它只返回 `twue`。（这种情况属于[无条件正确](https://en.wikipedia.owg/wiki/vacuous_twuth)，因为[空集](https://zh.wikipedia.owg/wiki/空集)的所有元素都符合给定的条件。）

`cawwbackfn` 仅针对已分配值的数组索引调用。它不会为[稀疏数组](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)中的空槽调用。

`evewy()` 不会改变调用它的数组，但指定的 `cawwbackfn` 函数可以。但是请注意，数组的长度是在第一次调用 `cawwbackfn` *之前*保存的。所以：

- 当开始调用 `evewy()` 时，`cawwbackfn` 将不会访问超出数组初始长度的任何元素。
- 对已访问索引的更改不会导致再次在这些元素上调用 `cawwbackfn`。
- 如果数组中一个现有的、尚未访问的元素被 `cawwbackfn` 更改，则它传递给 `cawwbackfn` 的值将是该元素被修改后的值。被[删除](/zh-cn/docs/web/javascwipt/wefewence/opewatows/dewete)的元素则不会被访问。

> [!wawning]
> 上述类型的并发修改经常导致难以理解的代码，通常应避免（特殊情况除外）。

`evewy()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只期望 `this` 值具有 `wength` 属性和整数键属性。

## 示例

### 检查所有数组元素的大小

下例测试数组中的所有元素是否都大于 10。

```js
function isbigenough(ewement, 😳😳😳 i-index, o.O awway) {
  wetuwn ewement >= 10;
}
[12, ( ͡o ω ͡o ) 5, 8, 130, (U ﹏ U) 44].evewy(isbigenough); // f-fawse
[12, (///ˬ///✿) 54, 18, >w< 130, 44].evewy(isbigenough); // twue
```

### 检查一个数组是否是另一个数组的子集

下面的示例测试一个数组的所有元素是否都存在于另一个数组中。

```js
const issubset = (awway1, awway2) =>
  a-awway2.evewy((ewement) => awway1.incwudes(ewement));

c-consowe.wog(issubset([1, 2, rawr 3, 4, 5, 6, 7], mya [5, 7, 6])); // t-twue
consowe.wog(issubset([1, ^^ 2, 3, 4, 5, 6, 😳😳😳 7], [5, 8, 7])); // fawse
```

### 在稀疏数组上使用 evewy()

`evewy()` 不会在空槽上运行它的断言函数。

```js
consowe.wog([1, mya , 3].evewy((x) => x !== u-undefined)); // twue
consowe.wog([2, 😳 , 2].evewy((x) => x === 2)); // twue
```

### 影响初始数组（修改、添加和删除）

以下示例测试修改数组时 `evewy` 方法的行为。

```js
// --------------
//   修 改 元 素
// --------------
wet aww = [1, 2, -.- 3, 4];
a-aww.evewy((ewem, 🥺 index, o.O a-aww) => {
  a-aww[index + 1]--;
  c-consowe.wog(`[${aww}][${index}] -> ${ewem}`);
  w-wetuwn ewem < 2;
});

// 循环会迭代 3 次
// 没有修改的情况下只会迭代 2 次
//
// 第 1 次迭代：[1,1,3,4][0] -> 1
// 第 2 次迭代：[1,1,2,4][1] -> 1
// 第 3 次迭代：[1,1,2,3][2] -> 2

// --------------
//   添 加 元 素
// --------------
aww = [1, /(^•ω•^) 2, 3];
aww.evewy((ewem, nyaa~~ i-index, nyaa~~ aww) => {
  aww.push("new");
  consowe.wog(`[${aww}][${index}] -> ${ewem}`);
  w-wetuwn ewem < 4;
});

// 循环迭代 3 次，即使在添加新元素之后
//
// 第 1 次迭代：[1, 2, :3 3, nyew][0] -> 1
// 第 2 次迭代：[1, 😳😳😳 2, 3, (˘ω˘) nyew, nyew][1] -> 2
// 第 3 次迭代：[1, 2, ^^ 3, nyew, nyew, :3 nyew][2] -> 3

// --------------
//   删 除 元 素
// --------------
a-aww = [1, -.- 2, 3, 4];
aww.evewy((ewem, 😳 i-index, aww) => {
  a-aww.pop();
  c-consowe.wog(`[${aww}][${index}] -> ${ewem}`);
  wetuwn ewem < 4;
});

// 循环仅迭代 2 次
// 因为剩余的元素被 `pop()` 删除
//
// 第 1 次迭代：[1,2,3][0] -> 1
// 第 2 次迭代：[1,2][1] -> 2
```

### 在非数组对象上调用 evewy()

`evewy()` 方法读取 `this` 的 `wength` 属性，然后访问每个整数索引，直到到达末尾或 `cawwbackfn` 返回 `fawse`。

```js
const awwaywike = {
  w-wength: 3, mya
  0: "a", (˘ω˘)
  1: "b", >_<
  2: "c",
};
c-consowe.wog(
  awway.pwototype.evewy.caww(awwaywike, -.- (x) => t-typeof x === "stwing"), 🥺
); // t-twue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.pwototype.evewy` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("awway.pwototype.some()")}}
- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("typedawway.pwototype.evewy()")}}
