---
title: Document.timeline
slug: Web/API/Document/timeline
---

{{ SeeCompatTable() }}{{ APIRef("Web Animations") }}

{{domxref("Document")}} 接口的 `timeline` 只读属性表示当前文档的默认时间轴。此时间轴是 {{domxref("DocumentTimeline")}} 的一个特殊实例，它会在网页加载时自动创建。

此时间轴对于每个文档（`document`）来说都是唯一的，并在文档的生命周期中保持不变，包括调用 {{domxref("Document.open()")}}。

该时间线的时间值被计算为与全局时钟的固定偏移，使得零时间对应于{{domxref("PerformanceTiming.navigationStart", "navigationStart")}}时刻加上称为原始时间的带符号的 delta。在建立导航开始时刻之前，文档时间线是不活动的。

> **备注：** 与非活动文档相关联的文档时间轴也被视为是**不活动的**。

## 语法

```js
var pageTimeline = document.timeline;
var thisMoment = pageTimeline.currentTime;
```

### 值

一个 {{domxref("DocumentTimeline")}} 对象。

## 规则

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web Animations API](/zh-CN/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationTimeline")}}
- {{domxref("AnimationTimeline.currentTime")}}
- {{domxref("DocumentTimeline")}}
