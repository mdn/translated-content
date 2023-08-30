---
title: Performance.now()
slug: Web/API/Performance/now
---

{{APIRef("High Resolution Timing")}}

**`performance.now()`** 方法返回一个精确到毫秒的 {{domxref("DOMHighResTimeStamp")}}。

> **警告：** 这个时间戳实际上并不是高精度的。为了降低像[Spectre](https://spectreattack.com/)这样的安全威胁，各类浏览器对该类型的值做了不同程度上的四舍五入处理。（Firefox 从 Firefox 59 开始四舍五入到 2 毫秒精度）一些浏览器还可能对这个值作稍微的随机化处理。这个值的精度在未来的版本中可能会再次改善；浏览器开发者还在调查这些时间测定攻击和如何更好的缓解这些攻击。

{{AvailableInWorkers}}

返回值表示为从[time origin](/zh-CN/docs/Web/API/DOMHighResTimeStamp#The_time_origin)之后到当前调用时经过的时间

牢记如下几点：

- 在以{{domxref("Window")}}上下文创建各个 worker 中，`performance.now()`的值要比在创建这些 worker 的 window 中的小。它原来等于 main 上下文的`t0`，但是现在不是了。
- 在共享 worker 或服务 worker 中，在 worker 中的值可能要比 main 上下文中高，因为 window 对象可能在这些 worker 之后创建。

## 语法

```
const t = window.performance.now();
```

## 示例

```js
const t0 = window.performance.now();
doSomething();
const t1 = window.performance.now();
console.log("doSomething 函数执行了" + (t1 - t0) + "毫秒。");
```

和 JavaScript 中其他可用的时间类函数（比如[`Date.now`](/zh-CN/docs/JavaScript/Reference/Global_Objects/Date/now)）不同的是，`window.performance.now()`返回的时间戳没有被限制在一毫秒的精确度内，相反，它们以浮点数的形式表示时间，精度最高可达微秒级。

另外一个不同点是，`window.performance.now()`是以一个恒定的速率慢慢增加的，它不会受到系统时间的影响（系统时钟可能会被手动调整或被 NTP 等软件篡改）。另外，`performance.timing.navigationStart + performance.now()` 约等于 `Date.now()`。

## 时间精度降低

为了提供对定时攻击和指纹的保护，performance.now() 的精度可能会根据浏览器的设置而被舍弃。
在 Firefox 中，privacy.reduceTimerPrecision 偏好是默认启用的，默认值为 1ms。

```
// 降低时间精度 (1ms) 在 Firefox 60
performance.now();
// 8781416
// 8781815
// 8782206
// ...


// 降低时间精度 当 `privacy.resistFingerprinting` 启用
performance.now();
// 8865400
// 8866200
// 8866700
// ...
```

在 Firefox 中，您还可以启用 `privacy.resistFingerprinting` 这将精度改为 100ms 或`privacy.resistFingerprinting.reduceTimerPrecision.microseconds` 的值，以较大者为准。

从 Firefox 79 开始，如果您使用{{HTTPHeader("Cross-Origin-Opener-Policy")}}和{{HTTPHeader("Cross-Origin-Embedder-Policy")}}头来跨源隔离您的文档，就可以使用高分辨率定时器。

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

这些头确保顶层文档不会与跨源文档共享浏览上下文组。COOP 过程——隔离你的文档，潜在的攻击者如果在弹出窗口中打开你的全局对象，就无法访问它，从而防止一组被称为 [XS-Leaks](https://github.com/xsleaks/xsleaks) 的跨源攻击。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [When milliseconds are not enough: performance.now()](http://updates.html5rocks.com/2012/08/When-milliseconds-are-not-enough-performance-now) from HTML5 Rocks
