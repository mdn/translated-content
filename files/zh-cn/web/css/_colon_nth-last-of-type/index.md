---
title: :nth-last-of-type
slug: Web/CSS/:nth-last-of-type
---

{{CSSRef}}

**`:nth-last-of-type()`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)基于元素在相同类型（标签名）的兄弟元素中相对最后一个元素的位置来匹配元素。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-nth-last-of-type.html", "tabbed-shorter")}}

## 语法

`nth-last-of-type` 伪类通过单个参数来指定元素的匹配模式，从元素列表的末尾开始计数。

请参见 {{Cssxref(":nth-last-child")}} 以获取更详细的语法说明。

```css-nolint
:nth-last-of-type(<an-plus-b> | even | odd) {
  /* ... */
}
```

## 示例

### HTML

```html
<div>
  <span>这是一个 span。</span>
  <span>这是另一个 span。</span>
  <em>这是起强调作用的。</em>
  <span>哇，这个 span 元素变成了绿色！！！</span>
  <del>这里被删除了。</del>
  <span>这是最后一个 span。</span>
</div>
```

### CSS

```css
span:nth-last-of-type(2) {
  background-color: lime;
}
```

### 结果

{{EmbedLiveSample('示例','100%', '60')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Cssxref(":nth-last-child")}}、{{Cssxref(":nth-of-type")}}
