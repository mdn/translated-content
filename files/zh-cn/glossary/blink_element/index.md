---
title: blink 元素（<blink> 标签）
slug: Glossary/blink_element
l10n:
  sourceCommit: c5c84b62f3f1fbd46f77c940fa0cbfff649c46a1
---

**`<blink>` 元素**（blink 标签）是一个已过时的 HTML 特性，现代网页浏览器已不再支持该标签，MDN 也不再继续保留其文档信息。这一标签曾用于让文本内容持续闪烁（明灭交替）。

`<blink>` 元素的用法如下：

```html example-bad
<blink>在古老的浏览器中，我可能会闪烁</blink>
```

## 简史

在 Web 的早期（90 年代初至中期），用于网页样式的特性非常有限。[CSS](/zh-CN/docs/Web/CSS) 规范（第 1 版）于 1996 年首次发布，但在很长一段时间后才得到浏览器的普遍支持。在 CSS 出现之前，浏览器尝试了多种方法让特定文本突出显示以吸引用户注意力。`<blink>` 元素就是其中之一，最早出现在 [Netscape Navigator](/zh-CN/docs/Glossary/Netscape_Navigator) 的早期版本中；[Internet Explorer](/zh-CN/docs/Glossary/Microsoft_Internet_Explorer) 的 {{htmlelement("marquee")}} 元素也是类似的尝试。

据说 `<blink>` 元素的诞生源于 Netscape 工程师 [Lou Montulli](https://en.wikipedia.org/wiki/Lou_Montulli) 和同事们在山景城一家酒吧的对话。第二天早上他到公司时，发现有同事熬夜把它实现了（[故事原文](https://web.archive.org/web/20220331020029/http://www.montulli.org/theoriginofthe%3Cblink%3Etag)）。

虽然 `<blink>` 元素一度流行，但由于被滥用而饱受诟病，许多人觉得它很烦人。更重要的是，它会降低可读性，对有视觉障碍或[认知障碍](/zh-CN/docs/Web/Accessibility/Guides/Cognitive_accessibility)（如癫痫或多动症）用户尤其不友好，甚至可能[诱发癫痫发作](/zh-CN/docs/Web/Accessibility/Guides/Seizure_disorders)。

`<blink>` 元素从未被正式规范化，也未获得主流浏览器的广泛支持。它可以被视为 Web 历史的一部分。

## 替代方案

- CSS 的 {{cssxref("text-decoration-line")}} 属性有一个 `blink` 值，理论上能产生一样的效果，但现代浏览器基本都忽略了它。
- JavaScript 的 {{jsxref("String.blink()")}} 方法会将字符串包裹在 `<blink></blink>` 标签中，但如前文所述，这个标签不再被任何地方支持。
- 你仍可用 [CSS 动画](/zh-CN/docs/Web/CSS/Guides/Animations)实现闪烁文本。但出于上述原因，不建议在网页中使用闪烁文本。

## 参见

- 维基百科上的 [Blink 元素](https://en.wikipedia.org/wiki/Blink_element)
- [WCAG 2.2.2：暂停、停止、隐藏](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide)
- [WCAG 2.3.1：三次闪烁或低于阈值](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold)
