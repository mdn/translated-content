---
title: "::-webkit-progress-inner-element"
slug: Web/CSS/::-webkit-progress-inner-element
---

{{CSSRef}}{{Non-standard_header}}

**`::-webkit-progress-inner-element`** [CSS](/zh-CN/docs/Web/CSS) 伪元素选择了 {{HTMLElement("progress")}} 元素。他是 {{cssxref("::-webkit-progress-bar")}} 伪元素的父元素。

> **备注：** 为了使 `::-webkit-progress-value` 生效， `<progress>` 元素的{{cssxref("-webkit-appearance")}} 需要设置为 `none` 。

## 示例

### HTML

```html
<progress value="10" max="50"></progress>
```

### CSS

```css
progress {
  -webkit-appearance: none;
}

::-webkit-progress-inner-element {
  border: 2px solid black;
}
```

### 结果

{{EmbedLiveSample("示例", 200, 50)}}

应用了上述样式的进度条如下：

![](-webkit-progress-inner-element_example.png)

## 规范

不属于任何规范。这是 WebKit/Blink 专有的一个伪元素。

## 浏览器兼容性

{{Compat}}

## 参考

- The pseudo-elements used by WebKit/Blink to style other parts of a {{HTMLElement("progress")}} element:

  - {{cssxref("::-webkit-progress-bar")}}
  - {{cssxref("::-webkit-progress-value")}}

- {{cssxref("::-moz-progress-bar")}}
- {{cssxref("::-ms-fill")}}
