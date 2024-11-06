---
title: border-spacing
slug: Web/CSS/border-spacing
---

{{CSSRef}}

**`border-spacing`** は [CSS](/ja/docs/Web/CSS) のプロパティで、{{htmlelement("table")}} における隣り合うセルの境界同士の間隔を定めます。このプロパティは {{cssxref("border-collapse")}} が `separate` のときのみ適用されます。

{{EmbedInteractiveExample("pages/css/border-spacing.html")}}

`border-spacing` の値は、表の外周部分にも使用され、表の境界線と最初/最後の列または行との間の距離は、 (縦または横の) 対応する `border-spacing` と、表の対応する側 (上下左右のいずれか) の {{cssxref("padding")}} の合計になります。

> **メモ:** `border-spacing` プロパティは、`<table>` 要素における非推奨の `cellspacing` 属性と同等ですが、任意で 2 つ目の値を指定して、水平方向と垂直方向に異なる間隔を設定することができる点が異なります。

## 構文

```css
/* <length> */
border-spacing: 2px;

/* 左右の <length> | 上下の <length> */
border-spacing: 1cm 2em;

/* グローバル値 */
border-spacing: inherit;
border-spacing: initial;
border-spacing: revert;
border-spacing: unset;
```

`border-spacing` プロパティは 1 つまたは 2 つの値で指定することができます。

- **1 つ**の `<length>` 値が指定された場合は、セル間の左右方向と上下方向の両方の間隔を定義します。
- **2 つ**の `<length>` 値が指定された場合は、最初の値がセル間の左右方向の間隔 (つまり、隣り合う*列*の間隔) を定義し、2 番目の値がセル間の上下方向の間隔 (つまり、隣り合う*行*の間隔) を定義します。

### 値

- {{cssxref("&lt;length&gt;")}}
  - : 固定値による間隔の大きさです。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Spacing_and_padding_table_cells">表のセルの余白とパディング</h3>

この例では表のセル間において、垂直方向に `.5em`、水平方向に `1em` の間隔を適用します。なお、外の辺においては、表の `padding` の値が `border-spacing` の値に追加されます。

#### HTML

```html
<table>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
  </tr>
  <tr>
    <td>4</td>
    <td>5</td>
    <td>6</td>
  </tr>
  <tr>
    <td>7</td>
    <td>8</td>
    <td>9</td>
  </tr>
</table>
```

#### CSS

```css
table {
  border-spacing: 1em 0.5em;
  padding: 0 2em 1em 0;
  border: 1px solid orange;
}

td {
  width: 1.5em;
  height: 1.5em;
  background: #d2d2d2;
  text-align: center;
  vertical-align: middle;
}
```

#### 結果

{{ EmbedLiveSample('Spacing_and_padding_table_cells', 400, 200) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("border-collapse")}}, {{cssxref("border-style")}}
- `border-spacing` プロパティは HTML の {{htmlelement("table")}} 要素の出現方法を変更します。
