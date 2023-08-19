---
title: 列結合子
slug: Web/CSS/Column_combinator
---

{{CSSRef("Selectors")}}{{SeeCompatTable}}

**列結合子** (column combinator, `||`) は、2 つの CSS セレクターの間に配置されます。前者のセレクターに一致する列要素に所属する、後者のセレクターに一致する要素に一致します。

```css
/* 表の "selected" クラスの列に所属するセル */
col.selected||td {
  background: gray;
}
```

## 構文

```css
column-selector||cell-selector {
  /* スタイルプロパティ */
}
```

## 例

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

### 結果

{{EmbedLiveSample("Examples", "100%")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("col")}}
- {{HTMLElement("colgroup")}}
- {{CSSxRef("grid")}}
- {{CSSxRef(":nth-col")}}
- {{CSSxRef(":nth-last-col")}}
