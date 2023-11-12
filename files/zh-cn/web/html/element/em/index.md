---
title: <em>
slug: Web/HTML/Element/em
---

## 简介

**HTML 着重元素** (**`<em>`**) 标记出需要用户着重阅读的内容， `<em>` 元素是可以嵌套的，嵌套层次越深，则其包含的内容被认定为越需要着重阅读。

> **备注：** 通常地，该元素会被浏览器展示为斜体文本，但是，它不应该仅仅用于应用斜体样式；为此目的，请使用 CSS 样式。使用 {{HTMLElement("cite")}} 元素标记作品的标题（书籍，戏剧，歌曲等）；它通常也采用斜体样式，但具有不同的含义。使用 {{HTMLElement("strong")}} 元素标记比周围文本更重要的文本。

- _内容类别_
  流内容，推辞内容，可触及内容
- _Permitted content_ [Phrasing content](/zh-CN/docs/Web/HTML/Content_categories#Phrasing_content).
- _Tag omission_ {{no_tag_omission}}
- _Permitted parent elements_ Any element that accepts [phrasing content](/zh-CN/docs/Web/HTML/Content_categories#Phrasing_content).
- _DOM interface_ {{domxref("HTMLElement")}} Up to Gecko 1.9.2 (Firefox 4) inclusive, Firefox implements the {{domxref("HTMLSpanElement")}} interface for this element.

## 属性

此元素只包括[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

## 示例

`<em>` 元素通常被用于指示一个隐式或显式的对比。

```html
<p>
  In HTML 5, what was previously called <em>block-level</em> content is now
  called <em>flow</em> content.
</p>
```

### 结果

In HTML 5, what was previously called _block-level_ content is now called _flow_ content.

## \<i> vs. \<em>

新的开发人员看到多个元素产生相似的效果，经常被混淆。`<em>` 和 `<i>` 就是一对常见的例子，因为它们都对文字斜体化。它们的区别是什么？应该使用哪一个？

在默认情况下，它们的视觉效果是一样的。但语义是不同的。 `<em>` 标签表示其内容的着重强调，而 `<i>` 标签表示从正常散文中区分出的文本，例如外来词，虚构人物的思想，或者当文本指的是一个词语的定义，而不是其语义含义。（作品的标题，例如书籍或电影的名字，应该使用 `<cite>`。）

这意味着，正确使用哪一个取决于具体的场景。两者都不是纯粹为了装饰的目的，那是 CSS 样式所做的。

一个 `<em>` 的例子可能是："Just _do_ it already!"，或："We _had_ to do something about it"。人或软件在阅读文本时，会对斜体字的发音使用重读强调。

一个 `<i>` 的例子可能是："The _Queen Mary_ sailed last night"。在这里，没有对 "Queen Mary" 这个词添加强调或重要性。它只是表明，谈论的对象不是一个名叫玛丽的女王，而是一艘名字叫玛丽的船。另一个 `<i>` 的例子可能是："The word _the_ is an article"。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 了解更多

- {{HTMLElement("i")}}

{{HTMLSidebar}}
