---
title: 接续兄弟组合器
slug: Web/CSS/Next-sibling_combinator
---

{{CSSRef}}

**接续兄弟选择器**（`+`）介于两个选择器之间，当第二个元素*紧跟在*第一个元素之后，并且两个元素都是属于同一个父{{DOMxRef("element", "元素", "", 1)}}的子元素，则第二个元素将被选中。

```css
/* 图片后面紧跟着的段落将被选中 */
img + p {
  font-weight: bold;
}
```

## 语法

```css
former_element + target_element { style properties }
```

## 示例

### CSS

```css
li:first-of-type + li {
  color: red;
}
```

### HTML

```html
<ul>
  <li>One</li>
  <li>Two!</li>
  <li>Three</li>
</ul>
```

### 结果

{{EmbedLiveSample("示例", "100%", 100)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [后续兄弟组合器](/zh-CN/docs/Web/CSS/Subsequent-sibling_combinator)
