---
title: ::-moz-list-number
slug: Web/CSS/Reference/Selectors/::-moz-list-number
l10n:
  sourceCommit: 469d7dd1064fb2911aca110e1d653e19f3438ca5
---

{{Non-standard_header}}

**`::-moz-list-number`** [CSS](/zh-CN/docs/Web/CSS) [伪元素](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-elements)是用于表示有序列表（{{HTMLElement("ol")}}）中列表项（{{HTMLElement("li")}}）的标记（通常是数字）的 [Mozilla 扩展](/zh-CN/docs/Web/CSS/Reference/Mozilla_extensions)。

## 语法

```css
li::-moz-list-number {
  /* ... */
}
```

## 示例

### HTML

```html
<ol>
  <li>第一项</li>
  <li>第二项</li>
  <li>第三项</li>
</ol>
```

### CSS

```css
li::-moz-list-number {
  font-style: italic;
  font-weight: bold;
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

不属于任何规范。

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("::-moz-list-bullet")}}
- {{cssxref("::marker")}}
