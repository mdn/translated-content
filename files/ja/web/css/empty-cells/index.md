---
title: empty-cells
slug: Web/CSS/empty-cells
tags:
  - CSS
  - CSS プロパティ
  - CSS 表
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.empty-cells
translation_of: Web/CSS/empty-cells
---
{{CSSRef}}

**`empty-cells`** は CSS のプロパティで、{{htmlelement("table", "表")}}のセルが目に見える内容を持たない場合に、周囲の境界と背景を{{glossary("user agent", "ユーザーエージェント")}}がどのように描画するかを指定します。

{{EmbedInteractiveExample("pages/css/empty-cells.html")}}

このプロパティは、 {{cssxref("border-collapse")}} プロパティが `separate` であった場合のみ効果があります。

## 構文

```css
/* キーワード値 */
empty-cells: show;
empty-cells: hide;

/* グローバル値 */
empty-cells: inherit;
empty-cells: initial;
empty-cells: unset;
```

`empty-cells` プロパティは、以下のキーワード値のうちの一つで指定します。

### 値

- `show`
  - : 通常のセルのように、境界や背景を描くことを示すキーワードです。
- `hide`
  - : 境界や背景を描かないことを示すキーワードです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Showing_and_hiding_empty_table_cells">表の空のセルの表示・非表示</h3>

#### HTML

```html
<table class="table_1">
  <tr>
    <td>Moe</td>
    <td>Larry</td>
  </tr>
  <tr>
    <td>Curly</td>
    <td></td>
  </tr>
</table>
<br>
<table class="table_2">
  <tr>
    <td>Moe</td>
    <td>Larry</td>
  </tr>
  <tr>
    <td>Curly</td>
    <td></td>
  </tr>
</table>
```

#### CSS

```css
.table_1 {
  empty-cells: show;
}

.table_2 {
  empty-cells: hide;
}

td,
th {
  border: 1px solid gray;
  padding: 0.5rem;
}
```

#### 結果

{{ EmbedLiveSample('Showing_and_hiding_empty_table_cells', '100%', '200') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("border-collapse")}}
- [表のスタイル付け](/ja/docs/Learn/CSS/Building_blocks/Styling_tables)
