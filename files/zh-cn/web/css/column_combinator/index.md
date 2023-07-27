---
title: Column combinator
slug: Web/CSS/Column_combinator
---

{{CSSRef("Selectors")}}{{SeeCompatTable}}

通过**列合并符** (`||`) 链接两个元素时，它只会匹配被第二个 CSS 选择器匹配的元素，且此元素属于被第一个 CSS 选择器匹配的列元素。

```css
/* 属于"被选择"列的表单元格 */
col.selected||td {
  background: gray;
}
```

## 语法

```plain
column-selector || cell-selector {
  /* style properties */
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

{{Compat}}

## 参见

- {{HTMLElement("col")}}
- {{HTMLElement("colgroup")}}
- {{CSSxRef("grid")}}
