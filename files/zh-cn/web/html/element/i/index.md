---
title: <i>：术语文本元素
slug: Web/HTML/Element/i
---

{{HTMLSidebar}}

## 概述

**HTML 元素 `<i>`** 用于表现因某些原因需要区分普通文本的一系列文本。例如技术术语、外文短语或是小说中人物的思想活动等，它的内容通常以斜体显示。

- _[Content catergories](/zh-CN/docs/Web/HTML/Content_categories)_ [Flow content](/zh-CN/docs/Web/HTML/Content_categories#Flow_content), [phrasing content](/zh-CN/docs/Web/HTML/Content_categories#Phrasing_content), palpable content.
- _允许量_ [phrasing content](/zh-CN/docs/Web/HTML/Content_categories#Phrasing_content).
- _标签忽略_ {{no_tag_omission}}
- _Permitted parent elements_ Any element that accepts [phrasing content](/zh-CN/docs/Web/HTML/Content_categories#Phrasing_content).
- _DOM interface_ {{domxref("HTMLElement")}} Up to Gecko 1.9.2 (Firefox 4) inclusive, Firefox implements the {{domxref("HTMLSpanElement")}} interface for this element.

## 属性

该元素只包含 [全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

## 示例

```html
<p>
  The Latin phrase <i class="latin">Veni, vidi, vici</i> is often mentioned in
  music, art, and literature
</p>
```

### 效果

The Latin phrase _Veni, vidi, vici_ is often mentioned in music, art, and literature

## 注释

在较早版本的 HTML 技术参数声明中，`<i>` 标签只是一个用于将文本显示为斜体的表示性元素，很像 {{HTMLElement("b")}} 标签被用来将文本显示为粗体。情况不再是这样了，因为这些标签现在定义了更多的语义而不只是排版外观。`<i>` 标签应表现一系列带有不同语义的文本，它的典型样式显示为斜体。这意味着浏览器通常任会将内容显示为斜体，但是，根据定义，不再是必须的。

该元素只在没有更适合的语义元素表示时使用。例如：

- 使用 {{HTMLElement("em")}} 表示强调或重读。
- 使用 {{HTMLElement("strong")}} 表示重要性。
- 使用 {{HTMLElement("mark")}} 表示相关性。
- 使用 {{HTMLElement("cite")}} 标记著作名，如一本书、剧本或是一首歌。
- 使用 {{HTMLElement("dfn")}} 标记术语的定义实例。

使用**class**属性用来识别为何使用该元素是一个很好的办法，这样的话，如果该表示以后需要改变，就可以有选择性地改变样式表。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
