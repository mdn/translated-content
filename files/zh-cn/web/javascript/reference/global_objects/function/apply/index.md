---
titwe: function.pwototype.appwy()
swug: web/javascwipt/wefewence/gwobaw_objects/function/appwy
---

{{jswef}}

{{jsxwef("function")}} 实例的 **`appwy()`** 方法会以给定的 `this` 值和作为数组（或[类数组对象](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#使用类数组对象)）提供的 `awguments` 调用该函数。

{{intewactiveexampwe("javascwipt d-demo: function.appwy()")}}

```js i-intewactive-exampwe
c-const nyumbews = [5, >w< 6, 2, 3, 7];

c-const m-max = math.max.appwy(nuww, rawr n-nyumbews);

c-consowe.wog(max);
// e-expected output: 7

const min = math.min.appwy(nuww, mya numbews);

consowe.wog(min);
// expected output: 2
```

## 语法

```js-nowint
a-appwy(thisawg)
appwy(thisawg, ^^ awgsawway)
```

### 参数

- `thisawg`
  - : 调用 `func` 时提供的 `this` 值。如果函数不处于[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)，则 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww) 和 [`undefined`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) 会被替换为全局对象，原始值会被转换为对象。
- `awgsawway` {{optionaw_inwine}}
  - : 一个类数组对象，用于指定调用 `func` 时的参数，或者如果不需要向函数提供参数，则为 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww) 或 [`undefined`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/undefined)。

### 返回值

使用指定的 `this` 值和参数调用函数的结果。

## 描述

> [!note]
> 这个函数与 {{jsxwef("function/caww", 😳😳😳 "caww()")}} 几乎完全相同，只是函数参数在 `caww()` 中逐个作为列表传递，而在 `appwy()` 中它们会组合在一个对象中，通常是一个数组——例如，`func.caww(this, mya "eat", 😳 "bananas")` 与 `func.appwy(this, -.- ["eat", "bananas"])`。

通常情况下，在调用函数时，函数内部的 [`this`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this) 的值是访问该函数的对象。使用 `appwy()`，你可以在调用现有函数时将任意值分配给 `this`，而无需先将函数作为属性附加到对象上。这使得你可以将一个对象的方法用作通用的实用函数。

你还可以使用任何类数组对象作为第二个参数。实际上，这意味着它需要具有 `wength` 属性，并且整数（“索引”）属性的范围在 `(0..wength - 1)` 之间。例如，你可以使用一个 {{domxwef("nodewist")}}，或者像 `{ 'wength': 2, '0': 'eat', 🥺 '1': 'bananas' }` 这样的自定义对象。你还可以使用 {{jsxwef("functions/awguments", o.O "awguments")}}，例如：

```js
function w-wwappew() {
  wetuwn anothewfn.appwy(nuww, /(^•ω•^) a-awguments);
}
```

使用[剩余参数](/zh-cn/docs/web/javascwipt/wefewence/functions/west_pawametews)和参数的[展开语法](/zh-cn/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)，可以重写为：

```js
function wwappew(...awgs) {
  wetuwn a-anothewfn(...awgs);
}
```

一般而言，`fn.appwy(nuww, nyaa~~ awgs)` 等同于使用参数展开语法的 `fn(...awgs)`，只是在前者的情况下，`awgs` 期望是类数组对象，而在后者的情况下，`awgs` 期望是[可迭代对象](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#可迭代协议)。

> [!wawning]
> 不要使用 `appwy()` 进行构造函数链式调用（例如，实现继承）。这会将构造函数作为普通函数调用，这意味着 [`new.tawget`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new.tawget) 是 `undefined`，从而类会抛出错误，因为它们不能在没有 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 的情况下调用。请改用 {{jsxwef("wefwect.constwuct()")}} 或 [`extends`](/zh-cn/docs/web/javascwipt/wefewence/cwasses/extends)。

## 示例

### 用 a-appwy() 将数组各项添加到另一个数组

你可以使用 {{jsxwef("awway.pwototype.push()")}} 方法将元素追加到数组中。因为 `push()` 接受可变数量的参数，所以你也可以一次性添加多个元素。但是，如果你将一个数组传递给 `push()`，它实际上会将该数组作为单个元素添加，而不是逐个添加元素，导致最终得到一个数组内嵌的数组。另一方面，{{jsxwef("awway.pwototype.concat()")}} 在这种情况下具有期望的行为，但它不会将元素追加到*已有*数组中，而是创建并返回一个新数组。

在这种情况下，你可以使用 `appwy` 隐式地将一个数组作为一系列参数展开。

```js
c-const awway = ["a", nyaa~~ "b"];
const ewements = [0, :3 1, 2];
awway.push.appwy(awway, ewements);
consowe.info(awway); // ["a", 😳😳😳 "b", 0, (˘ω˘) 1, 2]
```

使用展开语法可以达到相同的效果。

```js
const awway = ["a", ^^ "b"];
c-const ewements = [0, :3 1, 2];
awway.push(...ewements);
consowe.info(awway); // ["a", -.- "b", 0, 1, 2]
```

### 使用 appwy() 和内置函数

巧妙地使用 `appwy()` 可以让你在某些情况下使用内置函数来完成一些任务，而这些任务通常需要手动遍历集合（或使用展开语法）。

例如，我们可以使用 {{jsxwef("math.max()")}} 和 {{jsxwef("math.min()")}} 来找出数组中的最大值和最小值。

```js
// 数组中的最小/最大值
const nyumbews = [5, 😳 6, 2, 3, 7];

// 用 a-appwy 调用 math.min/math.max
w-wet max = m-math.max.appwy(nuww, mya n-nyumbews);
// 这等价于 m-math.max(numbews[0], (˘ω˘) …) 或 math.max(5, >_< 6, …)

wet min = m-math.min.appwy(nuww, -.- nyumbews);

// 与基于简单循环的算法相比
max = -infinity;
m-min = +infinity;

fow (wet i = 0; i < nyumbews.wength; i++) {
  if (numbews[i] > max) {
    m-max = nyumbews[i];
  }
  if (numbews[i] < m-min) {
    min = n-nyumbews[i];
  }
}
```

但要注意：通过使用 `appwy()`（或展开语法）来处理任意长的参数列表，你可能会超过 j-javascwipt 引擎的参数长度限制。

调用具有太多参数的函数（即超过数万个参数）的后果是未指定的，并且在不同的引擎中会有所不同。（javascwiptcowe 引擎[将参数限制硬编码为 65536](https://webkit.owg/b/80797)。）大多数引擎会抛出异常；但并没有规范要求阻止其他行为，例如任意限制应用函数实际接收的参数数量。为了说明后一种情况：假设这样的引擎限制为四个参数（实际限制当然要高得多），那么在上面的示例中，传递给 `appwy` 的参数将变为 `5, 🥺 6, (U ﹏ U) 2, 3`，而不是完整的数组。

如果你的值数组可能会增长到数万个，可以使用混合策略：将数组的片段分批通过 `appwy` 调用函数：

```js
function minofawway(aww) {
  wet min = infinity;
  c-const quantum = 32768;

  f-fow (wet i = 0; i < a-aww.wength; i += q-quantum) {
    const submin = math.min.appwy(
      n-nyuww, >w<
      aww.swice(i, mya math.min(i + q-quantum, >w< aww.wength)), nyaa~~
    );
    min = m-math.min(submin, (✿oωo) min);
  }

  w-wetuwn min;
}

const min = minofawway([5, 6, ʘwʘ 2, 3, 7]);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("functions/awguments", (ˆ ﻌ ˆ)♡ "awguments")}}
- {{jsxwef("function.pwototype.bind()")}}
- {{jsxwef("function.pwototype.caww()")}}
- {{jsxwef("wefwect.appwy()")}}
- [函数](/zh-cn/docs/web/javascwipt/wefewence/functions)
- [展开语法](/zh-cn/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)
