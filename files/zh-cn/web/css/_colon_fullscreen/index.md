---
title: ":fullscreen"
slug: Web/CSS/:fullscreen
---

{{CSSRef}}

**`:fullscreen`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)匹配当前处于全屏模式的所有元素。如果有多个元素被放置在全屏模式下，则此选择器将匹配所有这些元素。

## 语法

```css
:fullscreen {
  /* ... */
}
```

## 使用说明

当元素在全屏模式和正常模式之间切换时，`:fullscreen` 伪类允许你配置样式表以自动调整内容的大小、样式或布局。

## 示例

在这个示例中，按钮的颜色根据文档是否处于全屏模式而改变。这是在不需要使用 JavaScript 显式应用样式更改的情况下完成的。

### HTML

该页面的 HTML 如下所示：

```html
<h1>MDN Web 文档演示：:fullscreen 伪类</h1>

<p>
  此演示使用 <code>:fullscreen</code> 伪类完全使用 CSS
  来实现自动更改用于开启和关闭全屏模式的按钮的样式。
</p>

<button id="fs-toggle">切换全屏</button>
```

ID 为 `"fs-toggle"` 的 {{HTMLElement("button")}} 将根据文档是否处于全屏模式而在淡红色和淡绿色之间切换。

### CSS

CSS 中实现这一功能的关键在于两条规则。第一条规则用于在元素不处于全屏状态时设置“切换全屏模式”按钮的背景颜色。这里使用了 `:not(:fullscreen)` 伪类，以查找未应用 `:fullscreen` 伪类的元素。

```css
#fs-toggle:not(:fullscreen) {
  background-color: #afa;
}
```

当文档*处于*全屏模式时，将应用以下 CSS，将背景颜色设置为淡红色。

```css
#fs-toggle:fullscreen {
  background-color: #faa;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Fullscreen API](/zh-CN/docs/Web/API/Fullscreen_API)
- [Fullscreen API 指南](/zh-CN/docs/Web/API/Fullscreen_API/Guide)
- {{cssxref(":not")}}
- {{cssxref("::backdrop")}}
- DOM API：{{ domxref("Element.requestFullscreen()") }}、{{ domxref("Document.exitFullscreen()") }} 和 {{ domxref("Document.fullscreenElement") }}
- [`allowfullscreen`](/zh-CN/docs/Web/HTML/Element/iframe#allowfullscreen) 属性
