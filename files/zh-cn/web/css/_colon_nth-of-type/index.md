---
title: ':nth-of-type'
slug: Web/CSS/:nth-of-type
---

{{CSSRef}}

**`:nth-of-type()`** 这个 [CSS 伪类](/zh-CN/docs/CSS/Pseudo-classes)是针对具有一组兄弟节点的标签，用 n 来筛选出在一组兄弟节点的位置。

```css
/* 在每组兄弟元素中选择第四个 <p> 元素 */
p:nth-of-type(4n) {
  color: lime;
}
```

## 语法

**`nth-of-type`**伪类指定一个实际参数，这个参数使用一种模式来匹配哪些元素应该被选中。

详细语法参见 {{Cssxref(":nth-child")}} 。

### 正式语法

{{csssyntax}}

## 示例

### Basic example

#### HTML

```html
<div>
  <div>这段不参与计数。</div>
  <p>这是第一段。</p>
  <p>这是第二段。</p>
  <div>这段不参与计数。</div>
  <p>这是第三段。</p>
  <p>这是第四段。</p>
</div>
```

#### CSS

```css
/* 奇数段 */
p:nth-of-type(2n+1) {
  color: red;
}

/* 偶数段 */
p:nth-of-type(2n) {
  color: blue;
}

/* 第一段 */
p:nth-of-type(1) {
  font-weight: bold;
}
```

#### 最终效果

{{EmbedLiveSample('Basic_example', 250, 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Cssxref(":nth-child")}}, {{Cssxref(":nth-last-of-type")}}
