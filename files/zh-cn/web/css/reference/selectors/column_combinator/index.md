---
title: 列组合器
slug: Web/CSS/Reference/Selectors/Column_combinator
l10n:
  sourceCommit: bc761c19c07b875eb889d4aad87b18d8443da339
---

{{SeeCompatTable}}

**列组合器**（`||`）可置于两个 CSS 选择器之间。只有那些由第二个选择器匹配到的元素，且属于第一个选择器匹配到的列元素，才会被匹配。

```css
/* 属于“selected”列的表格单元格 */
col.selected||td {
  background: gray;
}
```

## 语法

```css-nolint
/* 围绕 || 组合器的空格是可选的，但建议使用。 */
column-selector || cell-selector {
  /* 样式属性 */
}
```

## 示例

### HTML

```html
<table border="1">
  <colgroup>
    <col span="2" />
    <col class="selected" />
  </colgroup>
  <tbody>
    <tr>
      <td>A</td>
      <td>B</td>
      <td>C</td>
    </tr>

    <tr>
      <td colspan="2">D</td>
      <td>E</td>
    </tr>
    <tr>
      <td>F</td>
      <td colspan="2">G</td>
    </tr>
  </tbody>
</table>
```

### CSS

```css
col.selected||td {
  background: gray;
  color: white;
  font-weight: bold;
}
```

### 结果

{{EmbedLiveSample("示例", "100%")}}

## 规范

{{Specifications}}

## 浏览器兼容性

目前，没有任何浏览器支持该特性。

## 参见

- {{HTMLElement("col")}}
- {{HTMLElement("colgroup")}}
- {{CSSxRef("grid")}}
- {{CSSxRef(":nth-of-type")}}
- {{CSSxRef(":nth-last-of-type")}}
- [CSS 选择器](/zh-CN/docs/Web/CSS/Guides/Selectors)模块
