---
title: <span>
slug: Web/HTML/Element/span
---

{{HTMLSidebar}}

**HTML `<span>`** 元素是短语内容的通用行内容器，并没有任何特殊语义。可以使用它来编组元素以达到某种样式意图（通过使用类或者 Id 属性），或者这些元素有着共同的属性，比如**lang**。应该在没有其他合适的语义元素时才使用它。`<span>` 与 {{HTMLElement("div")}} 元素很相似，但 {{HTMLElement("div")}} 是一个 [块元素](/zh-CN/docs/HTML/Block-level_elements) 而 `<span>` 则是 [行内元素](/zh-CN/docs/HTML/Inline_elements).

{{EmbedInteractiveExample("pages/tabbed/span.html", "tabbed-shorter")}}

- _[内容分类](/zh-CN/docs/HTML/Content_categories)_ [流内容](/zh-CN/docs/HTML/Content_categories#Flow_content), [表述内容](/zh-CN/docs/HTML/Content_categories#Phrasing_content).
- _允许的内容_[短语元素](/zh-CN/docs/Web/Guide/HTML/Content_categories#Phrasing_content)
- _标签省略_ 不允许，开始标签和结束标签都不能省略。
- *允许的父元素*任意可以包含 [表述内容](/zh-CN/docs/HTML/Content_categories#Phrasing_content) 或 [流内容](/zh-CN/docs/HTML/Content_categories#Flow_content) 的元素。
- _DOM 接口_{{domxref("HTMLSpanElement")}} (在 {{glossary("HTML5")}}, 之前是 {{domxref("HTMLElement")}})

## 属性

该元素仅包含 [全局属性](/zh-CN/docs/HTML/Global_attributes)。

## 例 1

```html
<p><span>一些文字</span></p>
```

### 结果

{{EmbedLiveSample('例 1')}}

## 例 2

```html
<li>
  <span>
    <a href="portfolio.html" target="_blank">See my portfolio</a>
  </span>
</li>
```

### CSS

```css
li span {
  background: gold;
}
```

### 结果

{{EmbedLiveSample('例 2')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- HTML {{HTMLElement("div")}} 元素
