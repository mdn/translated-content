---
title: Date.now()
slug: Web/JavaScript/Reference/Global_Objects/Date/now
---

{{JSRef}}

**`Date.now()`** 方法返回自 1970 年 1 月 1 日 00:00:00 (UTC) 到当前时间的毫秒数。

{{EmbedInteractiveExample("pages/js/date-now.html")}}

## 语法

```plain
var timeInMs = Date.now();
```

### 返回值

一个 {{jsxref("Number")}}，表示自 UNIX 纪元开始（1970 年 1 月 1 日 00:00:00 (UTC)）到当前时间的毫秒数。

## 描述

因为 `now()` 是 {{jsxref("Date")}} 的一个静态函数，所以必须以 `Date.now()` 的形式来使用。

## 时间精度被降低

为了提供针对定时攻击和指纹追踪的保护，`Date.now()` 的精度可能会根据浏览器的高级设置项目而被取整。
在 Firefox 中，默认启用 `privacy.reduceTimerPrecision` 设置项，在 Firefox 59 中，默认被取整至 20 微秒；在 Firefox 60 中，则被取整至 2 毫秒。

```js
// reduced time precision (2ms) in Firefox 60
Date.now();
// 1519211809934
// 1519211810362
// 1519211811670
// ...

// reduced time precision with `privacy.resistFingerprinting` enabled
Date.now();
// 1519129853500
// 1519129858900
// 1519129864400
// ...
```

在 Firefox 中，还可以通过启用 `privacy.resistFingerprinting` 来进一步降低精度。启用后，精度将为 100 毫秒或者 `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` 的值，取决于这两个值中哪一个更大，也就是，精度更低一些。

## Polyfill

该方法在 ECMA-262 第五版中被标准化，可以通过下面的代码端来兼容那些不支持该方法的引擎：

```js
if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Performance.now()")}} — 提供了精确到亚毫秒（sub-millisecond）的时间戳，用于衡量网页性能。
- {{domxref("console.time")}} / {{domxref("console.timeEnd")}}
