---
title: ::-moz-list-bullet
slug: Web/CSS/::-moz-list-bullet
l10n:
  sourceCommit: 469d7dd1064fb2911aca110e1d653e19f3438ca5
---

{{CSSRef}}{{Non-standard_header}}

**`::-moz-list-bullet`** [CSS](/zh-CN/docs/Web/CSS) [伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)是用于表示无序列表（{{htmlelement("ul")}}）中的列表项（{{htmlelement("li")}}）的标记（通常是项目符号）的 [Mozilla 扩展](/zh-CN/docs/Web/CSS/Mozilla_Extensions)。

## 语法

```css
li::-moz-list-bullet {
  /* ... */
}
```

## 示例

### 列表项标记的样式

#### HTML

```html
<ul>
  <li>项 1</li>
  <li>项 2</li>
  <li>项 3</li>
</ul>
```

#### CSS

```css
::-moz-list-bullet {
  color: red;
  font-size: 1.5em;
}
```

#### 结果

{{EmbedLiveSample('列表项标记的样式')}}

## 规范

不属于任何规范。

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("::-moz-list-number")}}
- {{cssxref("::marker")}}
