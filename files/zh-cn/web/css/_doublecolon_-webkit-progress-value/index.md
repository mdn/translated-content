---
title: "::-webkit-progress-value"
slug: Web/CSS/::-webkit-progress-value
---

{{CSSRef}}{{Non-standard_header}}

**`::-webkit-progress-value`** [CSS](/zh-CN/docs/Web/CSS) [伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements) 代表的是{{HTMLElement("progress")}} 元素中进度条未完成的部分。它是{{cssxref("::-webkit-progress-bar")}} 伪元素的子元素。

> **备注：** 为了使 `::-webkit-progress-value` 生效， `<progress>` 元素的{{cssxref("-webkit-appearance")}} 需要设置为 `none`。

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

::-webkit-progress-value {
  background-color: orange;
}
```

### 结果

{{EmbedLiveSample("示例", 200, 50)}}

应用了上述样式的进度条如下：

![](progress-value.png)

## 规范

不属于任何规范。这是 WebKit/Blink 专有的一个伪元素。

## 浏览器兼容性

{{Compat}}

## 参见

- WebKit/Blink 使用的用来修改{{HTMLElement("progress")}}元素其他部分样式的伪元素：

  - {{ cssxref("::-webkit-progress-bar") }}
  - {{ cssxref("::-webkit-progress-inner-element") }}

- {{ cssxref("::-moz-progress-bar") }}
- {{ cssxref("::-ms-fill") }}
