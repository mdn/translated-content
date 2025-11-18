---
title: HTML 属性：fetchpriority
short-title: fetchpriority
slug: Web/HTML/Reference/Attributes/fetchpriority
l10n:
  sourceCommit: 1889aacdd5cb4dd3e6e5a5ef2f305fda0985c89b
---

**`fetchpriority`** 属性允许开发者向浏览器发出信号：在加载过程中提前获取特定图片对用户体验的影响程度，可能与浏览器在分配内部优先级时合理推断的结果存在差异。浏览器据此可相应提高或降低该图片的优先级，从而可能比默认情况更早或更晚地加载该图片。

此属性可以应用于 {{HTMLElement("img")}}、{{HTMLElement("link")}} 和 {{HTMLElement("script")}} 元素，它还拥有一个 [SVG 对应版本](/zh-CN/docs/Web/SVG/Reference/Attribute/fetchpriority)。

获取优先级可与[预加载](/zh-CN/docs/Web/HTML/Reference/Attributes/rel/preload)属性配合使用，使开发者能够提升资源的优先级，使其优先于那些默认优先级较高但影响较小的资源。例如，若开发者确认某张图片对网站的{{glossary("Largest Contentful Paint", "最大内容绘制")}}（LCP）指标贡献显著，可为该图片添加 [`<link rel="preload">`](/zh-CN/docs/Web/HTML/Reference/Attributes/rel/preload)，再通过 `fetchpriority` 属性进一步提升其优先级。

请注意，任何获取操作的内部优先级以及 `fetchpriority` 对优先级的影响，完全取决于浏览器。

此属性为[枚举](/zh-CN/docs/Glossary/Enumerated)属性，可以具有以下值之一：

- `high`
  - : 以高于其他外部资源的优先级获取外部资源。
- `low`
  - : 以低于其他外部资源的优先级获取外部资源。
- `auto`
  - : 不设置获取优先级的偏好。当未设置值或设置了无效值时使用此选项。这是默认值。

## 使用说明

该属性应谨慎使用，因为过度或错误的优先级设置会降低性能。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- SVG [`fetchpriority`](/zh-CN/docs/Web/SVG/Reference/Attribute/fetchpriority) 属性
