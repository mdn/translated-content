---
title: aria-details
slug: Web/Accessibility/ARIA/Attributes/aria-details
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

全局 `aria-details` 属性用于识别提供与对象相关的额外信息的元素（或元素）。

## 描述

`aria-details` 属性可用于为对象提供额外的信息或复杂的描述。它用于通过提供更深入的信息来告知辅助技术用户相关内容，无论这些内容是在当前文档中还是链接到其他资源。

还有其他 HTML 和 WAI-ARIA 属性具有类似的目的。HTML 的 {{HTMLElement('label')}} 元素以及 [`aria-label`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-label) 和 [`aria-labelledby`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) 属性用于为对象提供简短的标签。HTML 的 `title` 属性以及 [`aria-description`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-description) 和 [`aria-describedby`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) 属性提供对象的较长纯文本描述。然而，当需要并且可用与对象相关的额外信息、复杂描述或可导航内容时，应使用 `aria-details` 属性。

`aria-details` 属性的作用类似于 HTML 的未完全支持的 `longdesc` 属性——一个指向替代元素内容的长描述的 URL，该属性因缺乏支持和误用而被弃用。

`aria-details` 属性将元素的 [`id`](/zh-CN/docs/Web/HTML/Global_attributes#id) 或空格分隔的 `id` 列表作为值，以获取更详细的信息。当在元素上包含 `aria-details` 时，辅助技术会告知用户扩展信息的可用性，使用户能够导航到引用的内容。

通过 `aria-details` 引用的元素应包含比通常通过 [`aria-describedby`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) 提供的更多信息。

通过 `aria-details` 引用的元素应对所有用户可见。`aria-details` 通知那些可能无法快速扫描屏幕以识别可用解释内容的用户。

> **备注：** `aria-details` 对无障碍描述没有影响。

与 `aria-describedby` 不同，通过 `aria-details` 引用的元素不会用于可访问描述，也不会在向辅助技术用户呈现时转换为纯字符串。如果关联的内容不太长，并且将引用元素的内容扁平化为简单文本字符串不会导致信息丢失，请考虑使用 `aria-describedby`。不过，一个元素可以同时拥有 `aria-details` 和通过 `aria-describedby` 或 `aria-description` 指定的描述。

## 示例

在定义和术语角色方面，`aria-details` 应包含在 [`term`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/term_role) 元素上，引用的 `id` 为具有 [`definition`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/definition_role) 角色的元素。

```html
<p>
  该 <strong>cubic-bezier()</strong> 函数符号定义了一个立方
  <span role="term" aria-details="bezier bezImg">贝塞尔（Bézier）曲线</span
  >。由于
  这些曲线是连续的，因此通常用于平滑曲线的开始和结束，因此有时称为缓和函数。
</p>

<p role="definition" id="bezier">
  一个 <strong>贝塞尔（Bézier）曲线</strong>， (发音 \ ˈbe-zē-ˌā \)
  <i aria-description="英语发音">BEH-zee-ay</i
  >）是用于计算机图形和动画的数学描述曲线。该曲线由一组控制点定义，至少有两个。与
  Web 相关的图形和动画使用立方贝塞尔曲线，它们是具有四个控制点
  P<sub>0</sub>、P<sub>1</sub>、P<sub>2</sub> 和 P<sub>3</sub> 的曲线。
</p>

<a
  href="bezierExplanation.html"
  id="bezImg"
  aria-label="CSS 缓和函数中的贝塞尔曲线说明">
  <img alt="动画贝塞尔曲线显示4个控制点。" src="bezier.gif" />
</a>
```

## 值

- ID 引用列表
  - : 一个 `id` 或空格分隔的元素 `id` 列表，提供或链接到附加相关信息。

## 相关角色

在**所有**角色中使用。

## 规范

{{Specifications}}

## 参见

- HTML [id](/zh-CN/docs/Web/HTML/Global_attributes/id) 属性
- [`aria-labelledby`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-describedby`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
- [`aria-description`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-description)
- [图像 `alt` 属性](/zh-CN/docs/Web/API/HTMLImageElement/alt)
- HTML [title](/zh-CN/docs/Web/HTML/Global_attributes/title) 属性
