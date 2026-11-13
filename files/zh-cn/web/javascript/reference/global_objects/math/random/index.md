---
title: Math.random()
slug: Web/JavaScript/Reference/Global_Objects/Math/random
l10n:
  sourceCommit: aff96926e4be5cfd33572f17e96d770deee13caa
---

**`Math.random()`** 静态方法返回一个大于等于 0 且小于 1 的伪随机浮点数，并在该范围内近似均匀分布，然后你可以缩放到所需的范围。其实现将选择随机数生成算法的初始种子；它不能由用户选择或重置。

> [!NOTE]
> `Math.random()` *不能*提供密码学安全的随机数。请不要使用它们来处理与安全相关的事情。请使用 Web Crypto API 代替，更具体地来说是 {{domxref("Crypto.getRandomValues()")}} 方法。

{{InteractiveExample("JavaScript Demo: Math.random()")}}

```js interactive-example
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// Expected output: 0, 1 or 2

console.log(getRandomInt(1));
// Expected output: 0

console.log(Math.random());
// Expected output: a number from 0 to <1
```

## 语法

```js-nolint
Math.random()
```

### 参数

无。

### 返回值

一个在 0（包括）到 1（不包括）之间的伪随机浮点数。

## 示例

请注意，由于 JavaScript 中的数字是 IEEE 754 浮点数字，具有向最近偶数舍入（round-to-nearest-even）的行为，因此以下函数的范围（不包括 `Math.random()` 本身）并不准确。如果选择了非常大的边界（2<sup>53</sup> 或更高），在*极*罕见的情况下有可能达到通常排除（usually-excluded）的上界。

### 得到一个大于等于 0 小于 1 之间的随机数

```js
function getRandom() {
  return Math.random();
}
```

### 得到一个两数之间的随机数

该示例返回一个在指定值之间的随机数。这个值不小于（且有可能等于）`min`，并且小于（且不等于）`max`。

```js
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

### 得到一个两数之间的随机整数

这个示例返回一个在指定值之间的随机*整数*。这个值不小于 `min`（如果 `min` 不是整数，则不小于 `min` 的向上取整数），且小于（但不等于）`max`。

```js
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // 不包含最大值，包含最小值
}
```

> [!NOTE]
> 也许很容易想到用 [`Math.round()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/round) 来实现，但是这会导致你的随机数处于一个不均匀的分布，这可能不符合你的需求。

### 得到一个两数之间的随机整数，包括两个数在内

虽然上面的 `getRandomInt()` 函数包含最小值，但不含最大值。如果你需要结果同时包含最小值和最大值怎么办？下面的 `getRandomIntInclusive()` 函数可以实现这一点。

```js
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // 包含最小值和最大值
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Crypto.getRandomValues()")}}
