---
title: :-moz-first-node
slug: Web/CSS/:-moz-first-node
---

{{Non-standard_header}}{{CSSRef}}

**`:-moz-first-node`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)是一个 [Mozilla 扩展](/zh-CN/docs/Web/CSS/Mozilla_Extensions)，表示任何作为某个其他元素的第一个子节点的元素。它与 {{Cssxref(":first-child")}} 不同，因为它不匹配在其前面有（非空白）文本的第一个子元素。

> [!NOTE]
> 在确定 `:-moz-first-node` 时忽略元素开头的任何空白字符。

## 语法

```css
:-moz-first-node {
  /* ... */
}
```

## 示例

### CSS

```css
span:-moz-first-node {
  background-color: lime;
}
```

### HTML

```html
<p>
  <span>This matches!</span>
  <span>This doesn't match.</span>
</p>

<p>
  Blahblah.
  <span>This doesn't match because it's preceded by text.</span>
</p>
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

不属于任何标准。

## 参见

- {{cssxref(":-moz-last-node")}}
- {{cssxref(":first-child")}}
