---
title: LargestContentfulPaint
slug: Web/API/LargestContentfulPaint
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{APIRef("Performance API")}}

`LargestContentfulPaint` 接口提供网页视口内最大图像或文本元素在用户首次输入前的绘制时间信息。

## 描述

此 API 提供的关键时刻是{{Glossary("Largest Contentful Paint", "最大内容绘制（LCP）")}}指标。它提供视口内可见的最大图像或文本块的渲染时间（从页面首次开始加载时开始记录）。在确定 LCP 时，会考虑以下元素：

- {{HTMLElement("img")}} 元素。
- SVG 内的 [`<image>`](/zh-CN/docs/Web/SVG/Reference/Element/image) 元素。
- {{HTMLElement("video")}} 元素的海报帧图片。
- 具有 {{cssxref("background-image")}} 的元素。
- 文本节点组，比如 {{HTMLElement("p")}}。

要测量其他元素的渲染时间，请使用 {{domxref("PerformanceElementTiming")}} API。

{{domxref("PerformancePaintTiming")}} API 提供了其他关键绘制时刻：

- {{Glossary("First Paint", "首次绘制（FP）")}}：页面上首次渲染任何内容的时间。注意首次绘制的标记是可选的，并非所有用户代理都会报告。
- {{Glossary("First Contentful Paint", "首次内容绘制（FCP）")}}：首次渲染 DOM 文本或图像内容的时间。

`LargestContentfulPaint` 继承自 {{domxref("PerformanceEntry")}}。

{{InheritanceDiagram}}

## 实例属性

此接口通过限定和约束属性来扩展以下 {{domxref("PerformanceEntry")}} 属性，如下所示：

- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回 `"largest-contentful-paint"`。
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 始终返回空字符串。
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 如果该条目的 {{domxref("LargestContentfulPaint.renderTime", "renderTime")}} 不为 `0`，则返回该值，否则返回该条目的 {{domxref("LargestContentfulPaint.loadTime", "loadTime")}} 的值。
- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回 `0`, 因为 `duration` 不适用于此接口。

它还支持以下属性：

- {{domxref("LargestContentfulPaint.element")}} {{ReadOnlyInline}}
  - : 当前最大内容绘制的元素。
- {{domxref("LargestContentfulPaint.renderTime")}} {{ReadOnlyInline}}
  - : 元素渲染到屏幕的时间。如果元素是未使用 `Timing-Allow-Origin` 标头加载的跨源图像，则可能无法获取。
- {{domxref("LargestContentfulPaint.loadTime")}} {{ReadOnlyInline}}
  - : 元素加载时间。
- {{domxref("LargestContentfulPaint.size")}} {{ReadOnlyInline}}
  - : 以面积形式（宽度 \* 高度）返回元素的固有尺寸。
- {{domxref("LargestContentfulPaint.id")}} {{ReadOnlyInline}}
  - : 元素的 id。如果没有 id，此属性将返回空字符串。
- {{domxref("LargestContentfulPaint.url")}} {{ReadOnlyInline}}
  - : 如果该元素是图像，返回图像请求地址。

## 实例方法

_此接口还继承来自 {{domxref("PerformanceEntry")}} 的方法。_

- {{domxref("LargestContentfulPaint.toJSON()")}}
  - : 返回 `LargestContentfulPaint` 对象的 JSON 表示形式。

## 示例

### 观察最大内容绘制

以下示例中，注册了一个观察器，以在页面加载时获取最大内容绘制。`buffered` 标志用于访问观察器创建之前的数据。

LCP API 分析它找到的所有内容（包括从 DOM 中删除的内容）。当发现新的最大内容时，它会创建一个新条目。当滚动或输入事件发生时，它会停止查找更大的内容，因为这些事件可能会在网站上引入新内容。因此 LCP 是观察器报告的最后一个性能条目。

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // 使用最新的 LCP 候选值
  console.log("LCP:", lastEntry.startTime);
  console.log(lastEntry);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

### 跨源图像渲染时间

出于安全原因，如果资源是跨源请求，则 {{domxref("LargestContentfulPaint.renderTime", "renderTime")}} 属性初始值为 `0`。此时应使用 {{domxref("LargestContentfulPaint.loadTime", "loadTime")}} 属性作为备用值。

在这些情况下，浏览器[现在可能会暴露出稍微粗化的渲染时间](https://github.com/w3c/paint-timing/issues/104)。请查看[浏览器支持](#浏览器兼容性)。

要暴露更精确的跨源渲染时间信息，需要设置 {{HTTPHeader("Timing-Allow-Origin")}} HTTP 响应标头。

例如，要允许 `https://developer.mozilla.org` 看到精确的 `renderTime`，跨源资源应该发送：

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

如代码示例所示，你可以使用 {{domxref("PerformanceEntry.startTime", "startTime")}}，它在该条目的 {{domxref("LargestContentfulPaint.renderTime", "renderTime")}} 不为 `0` 时返回该值，否则返回 {{domxref("LargestContentfulPaint.loadTime", "loadTime")}} 的值。不过，建议设置 {{HTTPHeader("Timing-Allow-Origin")}} 标头以获取更精确的指标。

如果你使用 `startTime`，可以通过检查是否使用了 `renderTime` 来标记任何不精确的信息：

```js
const isAccurateLCP = Boolean(entry.renderTime);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Glossary("Largest Contentful Paint", "最大内容绘制")}}
- {{Glossary("First Contentful Paint", "首次内容绘制")}}
- {{Glossary("First Paint", "首次绘制")}}
