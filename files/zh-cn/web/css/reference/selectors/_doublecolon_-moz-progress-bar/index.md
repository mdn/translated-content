---
title: ::-moz-progress-bar
slug: Web/CSS/Reference/Selectors/::-moz-progress-bar
l10n:
  sourceCommit: 469d7dd1064fb2911aca110e1d653e19f3438ca5
---

{{Non-standard_header}}

**`::-moz-progress-bar`** [CSS](/zh-CN/docs/Web/CSS) [伪元素](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-elements)是用于表示 {{HTMLElement("progress")}} 元素中的进度条（此进度条表示已完成的进度）的 [Mozilla 扩展](/zh-CN/docs/Web/CSS/Reference/Mozilla_extensions)。

如果你想在 Mozilla 中选择 {{HTMLElement("progress")}} 的未完成部分，请直接选择 {{HTMLElement("progress")}} 元素。

## 语法

```css
::-moz-progress-bar {
  /* ... */
}
```

## 示例

### HTML

```html
<progress value="30" max="100">30%</progress>
<progress max="100">未确定</progress>
```

### CSS

```css
::-moz-progress-bar {
  background-color: red;
}

/* 使不确定进度的进度条宽度强制设置为零 */
:indeterminate::-moz-progress-bar {
  width: 0;
}
```

### 结果

{{EmbedLiveSample('示例')}}

## 规范

不属于任何规范。

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("progress")}}
- {{ cssxref("::-webkit-progress-bar") }}
- {{ cssxref("::-webkit-progress-value") }}
- {{ cssxref("::-webkit-progress-inner-element") }}
