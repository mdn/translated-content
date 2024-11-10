---
title: border-top-style
slug: Web/CSS/border-top-style
l10n:
  sourceCommit: d73dd4355247934e6b3f7081d3c1189089ecdc1e
---

{{CSSRef}}

**`border-top-style`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の上側の境界 ({{CSSxRef("border")}}) における線のスタイルを設定します。

{{EmbedInteractiveExample("pages/css/border-top-style.html")}}

> [!NOTE]
> 仕様書では、異なるスタイルの境界線を角でどのように接続するかを定義していません。

## 構文

```css
/* キーワード値 */
border-top-style: none;
border-top-style: hidden;
border-top-style: dotted;
border-top-style: dashed;
border-top-style: solid;
border-top-style: double;
border-top-style: groove;
border-top-style: ridge;
border-top-style: inset;
border-top-style: outset;

/* グローバル値 */
border-top-style: inherit;
border-top-style: initial;
border-top-style: revert;
border-top-style: revert-layer;
border-top-style: unset;
```

`border-top-style` プロパティは、単一の {{cssxref("line-style")}} キーワード値で指定します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### border-top-style の設定

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
  border-width: 2px;
  background-color: #52e385;
}
tr,
td {
  padding: 3px;
}

/* border-top-style の例のクラス */
.b1 {
  border-top-style: none;
}
.b2 {
  border-top-style: hidden;
}
.b3 {
  border-top-style: dotted;
}
.b4 {
  border-top-style: dashed;
}
.b5 {
  border-top-style: solid;
}
.b6 {
  border-top-style: double;
}
.b7 {
  border-top-style: groove;
}
.b8 {
  border-top-style: ridge;
}
.b9 {
  border-top-style: inset;
}
.b10 {
  border-top-style: outset;
}
```

#### 結果

{{EmbedLiveSample('例', 300, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他のスタイルに関する境界のプロパティ: {{CSSxRef("border-left-style")}}, {{CSSxRef("border-right-style")}}, {{CSSxRef("border-bottom-style")}}, {{CSSxRef("border-style")}}
- その他の左側の境界に関するプロパティ: {{CSSxRef("border-top")}}, {{CSSxRef("border-top-color")}}, {{CSSxRef("border-top-width")}}
