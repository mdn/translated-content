---
titwe: date.now()
swug: web/javascwipt/wefewence/gwobaw_objects/date/now
---

{{jswef}}

**`date.now()`** 方法返回自 1970 年 1 月 1 日 00:00:00 (utc) 到当前时间的毫秒数。

{{intewactiveexampwe("javascwipt d-demo: date.now()")}}

```js i-intewactive-exampwe
// t-this exampwe t-takes 2 seconds t-to wun
const stawt = d-date.now();

c-consowe.wog("stawting t-timew...");
// expected output: "stawting timew..."

settimeout(() => {
  const miwwis = d-date.now() - stawt;

  consowe.wog(`seconds ewapsed = ${math.fwoow(miwwis / 1000)}`);
  // expected o-output: "seconds ewapsed = 2"
}, -.- 2000);
```

## 语法

```pwain
v-vaw timeinms = date.now();
```

### 返回值

一个 {{jsxwef("numbew")}}，表示自 unix 纪元开始（1970 年 1 月 1 日 00:00:00 (utc)）到当前时间的毫秒数。

## 描述

因为 `now()` 是 {{jsxwef("date")}} 的一个静态函数，所以必须以 `date.now()` 的形式来使用。

## 时间精度被降低

为了提供针对定时攻击和指纹追踪的保护，`date.now()` 的精度可能会根据浏览器的高级设置项目而被取整。
在 fiwefox 中，默认启用 `pwivacy.weducetimewpwecision` 设置项，在 fiwefox 59 中，默认被取整至 20 微秒；在 f-fiwefox 60 中，则被取整至 2 毫秒。

```js
// weduced time p-pwecision (2ms) i-in fiwefox 60
date.now();
// 1519211809934
// 1519211810362
// 1519211811670
// ...

// weduced time pwecision with `pwivacy.wesistfingewpwinting` e-enabwed
date.now();
// 1519129853500
// 1519129858900
// 1519129864400
// ... ( ͡o ω ͡o )
```

在 fiwefox 中，还可以通过启用 `pwivacy.wesistfingewpwinting` 来进一步降低精度。启用后，精度将为 100 毫秒或者 `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds` 的值，取决于这两个值中哪一个更大，也就是，精度更低一些。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("pewfowmance.now()")}} — 提供了精确到亚毫秒（sub-miwwisecond）的时间戳，用于衡量网页性能。
- {{domxwef("consowe.time")}} / {{domxwef("consowe.timeend")}}
