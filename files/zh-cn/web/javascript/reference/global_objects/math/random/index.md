---
title: Math.random()
slug: Web/JavaScript/Reference/Global_Objects/Math/random
---

{{JSRef}}**`Math.random()`** 函数返回一个浮点数，伪随机数在范围从**0 到**小于**1**，也就是说，从 0（包括 0）往上，但是不包括 1（排除 1），然后您可以缩放到所需的范围。实现将初始种子选择到随机数生成算法;它不能被用户选择或重置。

{{EmbedInteractiveExample("pages/js/math-random.html")}}

> **备注：** `Math.random()` *不能*提供像密码一样安全的随机数字。不要使用它们来处理有关安全的事情。使用 Web Crypto API 来代替，和更精确的{{domxref("RandomSource.getRandomValues()", "window.crypto.getRandomValues()")}} 方法。

## 语法

```plain
Math.random()
```

### 返回值

一个浮点型伪随机数字，在`0`（包括 0）和`1`（不包括）之间。

## 示例

请注意，由于 JavaScript 中的数字是 IEEE 754 浮点数字，具有最近舍入（round-to-nearest-even）的行为，因此以下函数的范围 (不包括`Math.random()` 本身) 并不准确。如果选择了非常大的边界 (2^53 或更高), 在极罕见的情况下会计算通常 - 排除（usually-excluded）的上界。（注：round-to-nearest-even 采用最近舍入的去偶数舍入的方式，对.5 的舍入上，采用取偶数的方式）

### 得到一个大于等于 0，小于 1 之间的随机数

```js
function getRandom() {
  return Math.random();
}
```

### 得到一个两数之间的随机数

这个例子返回了一个在指定值之间的随机数。这个值不小于 `min`（有可能等于），并且小于（不等于）`max`。

```js
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

### 得到一个两数之间的随机整数

这个例子返回了一个在指定值之间的随机整数。这个值不小于 `min` （如果 `min` 不是整数，则不小于 `min` 的向上取整数），且小于（不等于）`max`。

```js
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}
```

> **备注：** 也许很容易想到用 `Math.round()` 来实现，但是这会导致你的随机数处于一个不均匀的分布，这可能不符合你的需求。

### 得到一个两数之间的随机整数，包括两个数在内

上一个例子提到的函数 `getRandomInt()` 结果范围包含了最小值，但不含最大值。如果你的随机结果需要同时包含最小值和最大值，怎么办呢？`getRandomIntInclusive()` 函数可以实现。

```js
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [`window.crypto.getRandomValues()`](/zh-CN/docs/Web/API/RandomSource/getRandomValues)
