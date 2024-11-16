---
title: border-bottom-style
slug: Web/CSS/border-bottom-style
l10n:
  sourceCommit: d73dd4355247934e6b3f7081d3c1189089ecdc1e
---

{{CSSRef}}

**`border-bottom-style`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の下側の境界線 ({{cssxref("border")}}) のスタイルを設定します。

{{EmbedInteractiveExample("pages/css/border-bottom-style.html")}}

> [!NOTE]
> 仕様書では、異なるスタイルの境界線を角でどの様に接続するかを定義していません。

## 構文

```css
/* キーワード値 */
border-bottom-style: none;
border-bottom-style: hidden;
border-bottom-style: dotted;
border-bottom-style: dashed;
border-bottom-style: solid;
border-bottom-style: double;
border-bottom-style: groove;
border-bottom-style: ridge;
border-bottom-style: inset;
border-bottom-style: outset;

/* グローバル値 */
border-bottom-style: inherit;
border-bottom-style: initial;
border-bottom-style: revert;
border-bottom-style: revert-layer;
border-bottom-style: unset;
```

`border-bottom-style` プロパティは、単一の {{cssxref("line-style")}} キーワード値で指定します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### すべての境界線のスタイルのデモ

#### HTML

```html
<table>
  <tr>
    <td class="b1">none</td>
    <td class="b2">hidden</td>
    <td class="b3">dotted</td>
    <td class="b4">dashed</td>
  </tr>
  <tr>
    <td class="b5">solid</td>
    <td class="b6">double</td>
    <td class="b7">groove</td>
    <td class="b8">ridge</td>
  </tr>
  <tr>
    <td class="b9">inset</td>
    <td class="b10">outset</td>
  </tr>
</table>
```

#### CSS

```css
/* 表の外見を定義 */
table {
  border-width: 3px;
  background-color: #52e385;
}
tr,
td {
  padding: 3px;
}

/* border-bottom-style の例のクラス */
.b1 {
  border-bottom-style: none;
}
.b2 {
  border-bottom-style: hidden;
}
.b3 {
  border-bottom-style: dotted;
}
.b4 {
  border-bottom-style: dashed;
}
.b5 {
  border-bottom-style: solid;
}
.b6 {
  border-bottom-style: double;
}
.b7 {
  border-bottom-style: groove;
}
.b8 {
  border-bottom-style: ridge;
}
.b9 {
  border-bottom-style: inset;
}
.b10 {
  border-bottom-style: outset;
}
```

#### 結果

{{ EmbedLiveSample('すべての境界線のスタイルのデモ', 300, 200) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他のスタイルに関する境界のプロパティ: {{ Cssxref("border-left-style") }}, {{ Cssxref("border-right-style") }}, {{ Cssxref("border-top-style") }}, {{ Cssxref("border-style") }}
- その他の下境界に関するプロパティ: {{ Cssxref("border-bottom") }}, {{ Cssxref("border-bottom-color") }}, {{ Cssxref("border-bottom-width") }}
