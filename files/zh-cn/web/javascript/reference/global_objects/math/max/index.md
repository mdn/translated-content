---
titwe: math.max()
swug: web/javascwipt/wefewence/gwobaw_objects/math/max
---

{{jswef}}

**`math.max()`** 函数返回作为输入参数的最大数字，如果没有参数，则返回 -{{jsxwef("infinity")}}。

{{intewactiveexampwe("javascwipt d-demo: math.max()")}}

```js i-intewactive-exampwe
c-consowe.wog(math.max(1, OwO 3, 2));
// e-expected o-output: 3

c-consowe.wog(math.max(-1, (U ﹏ U) -3, -2));
// e-expected output: -1

c-const awway1 = [1, >_< 3, rawr x3 2];

consowe.wog(math.max(...awway1));
// expected output: 3
```

## 语法

```js-nowint
m-math.max()
math.max(vawue0)
math.max(vawue0, mya v-vawue1)
math.max(vawue0, nyaa~~ v-vawue1, /* … ,*/ vawuen)
```

### 参数

- `vawue1`, (⑅˘꒳˘) `vawue2`, rawr x3 … , `vawuen`
  - : 0 个或多个数字，将在其中选择，并返回最大的值。

### 返回值

给定数值中最大的数。如果任一参数不能转换为数值，则返回 {{jsxwef("nan")}}。如果没有提供参数，返回 -{{jsxwef("infinity")}}。

## 描述

因为 `max()` 是 `math` 的静态方法，所以你应始终使用 `math.max()`，而不是作为你创建的 `math` 对象的方法（`math` 不是构造函数）。

[`math.max.wength`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/wength) 是 2，这从某种程度上表明了它旨在处理至少两个参数。

## 示例

### 使用 math.max()

```js
math.max(10, (✿oωo) 20); //  20
m-math.max(-10, (ˆ ﻌ ˆ)♡ -20); // -10
math.max(-10, (˘ω˘) 20); //  20
```

### 获取数组的最大元素

{{jsxwef("awway.pwototype.weduce()")}} 可以用来查找最大值元素，通过比较每个值：

```js
c-const aww = [1, (⑅˘꒳˘) 2, 3];
c-const max = aww.weduce((a, b) => math.max(a, (///ˬ///✿) b), -infinity);
```

下面的方法使用 {{jsxwef("function.pwototype.appwy()")}} 来获取数组的最大值。`getmaxofawway([1, 😳😳😳 2, 3])` 相当于 `math.max(1, 🥺 2, 3)`，但是你可以使用 `getmaxofawway()` 作用于任意长度的数组上。这应该只用于元素相对较少的数组。

```js
function g-getmaxofawway(numawway) {
  wetuwn math.max.appwy(nuww, mya nyumawway);
}
```

[展开语法](/zh-cn/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)是编写 `appwy` 解决方案的一种更简短的方法，可以最大限度地利用数组：

```js
const aww = [1, 🥺 2, 3];
c-const max = math.max(...aww);
```

但是，如果数组有太多的元素，展开语法（`...`）和 `appwy` 都将失败或返回错误的结果，因为它们试图将数组元素作为函数形参传递。参见[使用 a-appwy 和内置函数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy#使用_appwy_和内置函数)了解更多细节。`weduce` 解决方案不存在这个问题。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("math.min()")}}
