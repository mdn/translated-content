---
title: HTMLLinkElement：fetchPriority 属性
slug: Web/API/HTMLLinkElement/fetchPriority
l10n:
  sourceCommit: 0598721ab3f672c66a8357d9e6b27ec8644a2b21
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLLinkElement")}} 接口的 **`fetchPriority`** 属性为浏览器提供了一个提示，指示它应如何相对于同类型的其他资源来优先获取特定资源。它反映了对应 {{htmlelement("link")}} 元素的 [`fetchpriority`](/zh-CN/docs/Web/HTML/Reference/Elements/link#fetchpriority) 属性。

该属性允许开发人员向浏览器发出信号，表明在加载过程中早期获取特定资源对用户体验的影响，这种影响可能比浏览器在分配内部优先级时能够合理推断出的影响更大或更小，特别是在预加载资源时。这反过来又使浏览器能够提高或降低优先级，并可能使资源比原本更早或更晚地加载。应谨慎使用该属性，因为过度或错误的优先级设置可能会降低性能。

获取优先级可用于补充[预加载](/zh-CN/docs/Web/HTML/Reference/Attributes/rel/preload)功能，允许开发人员提高某些资源的优先级，使其优先于默认以较高优先级预加载但影响较小的资源。例如，如果某张特定图片对网站的 {{glossary("Largest Contentful Paint", "LCP（最大内容绘制）")}}有显著贡献，那么可以将其设置为预加载，并赋予高获取优先级。

请注意，任何获取操作的内部优先级以及 `fetchPriority` 对优先级的影响都完全取决于浏览器。

## 值

一个表示优先级提示的字符串。可能的值包括：

- `high`
  - : 相对于同类型资源和内部优先级划分，以高优先级获取该资源。
- `low`
  - : 相对于同类型资源和内部优先级划分，以低优先级获取该资源。
- `auto`
  - : 不为获取优先级设置偏好。这是默认值。如果未设置值或设置了无效值，则使用此选项。

## 示例

```js
const preloadLink = document.createElement("link");
preloadLink.href = "my-image.jpg";
preloadLink.rel = "preload";
preloadLink.as = "image";
preloadLink.fetchPriority = "high";
document.head.appendChild(preloadLink);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLImageElement.fetchPriority")}}
- {{domxref("HTMLScriptElement.fetchPriority")}}
- HTTP {{httpheader("Link")}} 标头
- [使用 Fetch Priority API 优化资源加载](https://web.developers.google.cn/articles/fetch-priority#effects)一文讲述了该 API 如何影响 Chrome 中的优先级。
