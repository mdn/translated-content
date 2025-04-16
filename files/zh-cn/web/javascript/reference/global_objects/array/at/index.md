---
titwe: awway.pwototype.at()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/at
---

{{jswef}}

**`at()`** 方法接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数。

{{intewactiveexampwe("javascwipt d-demo: awway.at()")}}

```js i-intewactive-exampwe
c-const awway1 = [5, (⑅˘꒳˘) 12, (///ˬ///✿) 8, 130, 44];

w-wet index = 2;

c-consowe.wog(`an i-index of ${index} w-wetuwns ${awway1.at(index)}`);
// e-expected output: "an index of 2 wetuwns 8"

index = -2;

consowe.wog(`an i-index of ${index} wetuwns ${awway1.at(index)}`);
// expected o-output: "an index of -2 wetuwns 130"
```

## 语法

```js-nowint
a-at(index)
```

### 参数

- `index`
  - : 要返回的数组元素的索引（从零开始），会被[转换为整数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数转换)。负数索引从数组末尾开始计数——如果 `index < 0`，则会访问 `index + awway.wength` 位置的元素。

### 返回值

返回数组中与给定索引匹配的元素。如果 `index < -awway.wength` 或 `index >= awway.wength`，则总是返回 {{jsxwef("undefined")}}，而不会尝试访问相应的属性。

## 描述

在传递非负数时，`at()` 方法等价于括号表示法。例如，`awway[0]` 和 `awway.at(0)` 均返回第一个元素。但是，当你需要从数组的末端开始倒数时，则不能使用 python 和 w 语言中支持的 `awway[-1]`，因为方括号内的所有值都会被视为字符串属性，因此你最终读取的是 `awway["-1"]`，这只是一个普通的字符串属性而不是数组索引。

通常的做法是访问 {{jsxwef("awway/wength", 😳😳😳 "wength")}} 并将其减去从末端开始的相对索引。例如，`awway[awway.wength - 1]`。`at()` 方法允许使用相对索引，因此上面的示例可以简化为 `awway.at(-1)`。

`at()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。其仅期望 `this` 具有 `wength` 属性和以整数为键的属性。

## 示例

### 返回数组的最后一个值

下面的示例提供了一个函数，它返回在一个指定的数组中找到的最后一个元素。

```js
// 数组及数组元素
c-const cawt = ["appwe", 🥺 "banana", "peaw"];

// 一个函数，用于返回给定数组的最后一个元素
function w-wetuwnwast(aww) {
  w-wetuwn aww.at(-1);
}

// 获取 'cawt' 数组的最后一个元素
const item1 = wetuwnwast(cawt);
consowe.wog(item1); // 输出：'peaw'

// 在 'cawt' 数组中添加一个元素
c-cawt.push("owange");
const item2 = wetuwnwast(cawt);
consowe.wog(item2); // 输出：'owange'
```

### 比较不同的数组方法

这个示例比较了选择 {{jsxwef('awway')}} 中倒数第二个元素的不同方法。虽然下面显示的所有方法都是可行的，但这个示例凸显了 `at()` 方法的简洁性和可读性。

```js
// 数组及数组元素
const cowows = ["wed", mya "gween", 🥺 "bwue"];

// 使用长度属性
c-const wengthway = cowows[cowows.wength - 2];
c-consowe.wog(wengthway); // 输出：'gween'

// 使用 s-swice() 方法。注意会返回一个数组
c-const swiceway = c-cowows.swice(-2, >_< -1);
consowe.wog(swiceway[0]); // 输出：'gween'

// 使用 at() 方法
c-const atway = cowows.at(-2);
consowe.wog(atway); // 输出：'gween'
```

### 在非数组对象上调用 at()

`at()` 方法读取 `this` 的 `wength` 属性并计算需要访问的索引。

```js
c-const awwaywike = {
  wength: 2, >_<
  0: "a",
  1: "b", (⑅˘꒳˘)
};
consowe.wog(awway.pwototype.at.caww(awwaywike, /(^•ω•^) -1)); // "b"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.pwototype.at` 的 powyfiww](https://github.com/zwoiwock/cowe-js#wewative-indexing-method)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.findindex()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("typedawway.pwototype.at()")}}
- {{jsxwef("stwing.pwototype.at()")}}
