---
title: ::-moz-meter-bar
slug: Web/CSS/Reference/Selectors/::-moz-meter-bar
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

[CSS](/zh-CN/docs/Web/CSS) [伪元素](/zh-CN/docs/Glossary/Pseudo-element) **`::-moz-meter-bar`** 表示 {{HTMLElement("meter")}} 元素中的标量条。它用于选择并应用样式到 meter 元素内部的标量部分。

## 语法

```css
::-moz-meter-bar {
  /* ... */
}
```

## 示例

### HTML

```html
普通：<meter min="0" max="10" value="6">得分 6/10</meter>
<br />
样式化：&nbsp;&nbsp;<meter class="styled" min="0" max="10" value="6">
  得分 6/10
</meter>
```

### CSS

```css
meter {
  height: 20px;
  width: 200px;
  vertical-align: -0.4rem;
}

.styled::-moz-meter-bar {
  background: lime;
  box-shadow: 0 2px 3px grey inset;
  border-radius: 5px;
}
```

### 结果

{{ EmbedLiveSample('示例') }}

## 规范

不属于任何标准。

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("appearance")}}
- {{cssxref("accent-color")}}
