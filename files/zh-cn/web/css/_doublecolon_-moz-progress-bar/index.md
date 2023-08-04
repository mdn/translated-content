---
title: "::-moz-progress-bar"
slug: Web/CSS/::-moz-progress-bar
---

{{CSSRef}}{{Non-standard_header}}

[CSS](/zh-CN/docs/Web/CSS)[伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements) **`::-moz-progress-bar`** 是{{HTMLElement("progress")}} 元素中，Mozilla 独有的特性（[Mozilla extension](/zh-CN/docs/Web/CSS/Mozilla_Extensions)），用于对进度条完成的部分进行选择。

如果你想选择未完成的部分，请直接选择 {{HTMLElement("progress")}} 。

## 语法

{{csssyntax}}

## 示例

### HTML

```html
<progress value="30" max="100">30%</progress>
<progress max="100">Indeterminate</progress>
```

### CSS

```css
::-moz-progress-bar {
  background-color: red;
}

/* Force indeterminate bars to have zero width */
:indeterminate::-moz-progress-bar {
  width: 0;
}
```

### 结果

{{EmbedLiveSample('示例')}}

## 参见

- {{HTMLElement("progress")}}
- {{ cssxref("::-ms-fill") }}
- {{ cssxref("::-webkit-progress-bar") }}
- {{ cssxref("::-webkit-progress-value") }}
- {{ cssxref("::-webkit-progress-inner-element") }}
