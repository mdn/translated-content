---
title: "::-moz-range-progress"
slug: Web/CSS/::-moz-range-progress
---

{{CSSRef}}{{Non-standard_header}}

The **`::-moz-range-progress`** [CSS](/zh-CN/docs/Web/CSS) [伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements) 是一个 [Mozilla 扩展](/zh-CN/docs/Web/CSS/Mozilla_Extensions)。它代表了指示器在其中滑动的轨道的下部（即凹槽）是一个 `type="range"` 类型的 {{HTMLElement("input")}} 。此部分对应的值低于揪揪当前选择的值（即虚拟旋钮）。

> **备注：** 在 `<input type="range">`上应用`::-moz-range-progress` 不会匹配任何元素，也不会有任何效果。

## 语法

{{csssyntax}}

## 示例

### HTML

```html
<input type="range" min="0" max="100" step="5" value="50" />
```

### CSS

```css
input[type="range"]::-moz-range-progress {
  background-color: green;
  height: 1em;
}
```

### 结果

{{EmbedLiveSample("示例", 300, 50)}}

使用了这个样式的进度条可能会看起来这样：

![](screen_shot_2015-12-04_at_20.14.48.png)

## 规范

无内容

## 浏览器兼容性

{{Compat}}

## 参见

- Gecko 用于设置范围输入的其他部分样式的伪元素：

  - {{cssxref("::-moz-range-thumb")}} 代表在凹槽中滑动的指示器
  - {{cssxref("::-moz-range-track")}} 代表有揪揪滑动的凹槽

- 其他浏览器使用的类似伪元素：

  - {{cssxref("::-ms-fill-upper")}}, Internet Explorer 和 Edge 支持的伪元素

- [CSS-Tricks：使用 CSS 设置跨浏览器兼容范围输入的样式](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode：样式和脚本滑块](http://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)
