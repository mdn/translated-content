---
title: border-left-style
slug: Web/CSS/Reference/Properties/border-left-style
original_slug: Web/CSS/border-left-style
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

**`border-left-style`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の左側の境界線 ({{cssxref("border")}}) のスタイルを設定します。

{{InteractiveExample("CSS デモ: border-left-style")}}

```css interactive-example-choice
border-left-style: none;
```

```css interactive-example-choice
border-left-style: dotted;
```

```css interactive-example-choice
border-left-style: dashed;
```

```css interactive-example-choice
border-left-style: solid;
```

```css interactive-example-choice
border-left-style: groove;
```

```css interactive-example-choice
border-left-style: inset;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a border around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eee;
  color: #000;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}

body {
  background-color: #fff;
}
```

> [!NOTE]
> 仕様書では、異なるスタイルの境界線を角でどの様に接続するかを定義していません。

## 構文

```css
/* キーワード値 */
border-left-style: none;
border-left-style: hidden;
border-left-style: dotted;
border-left-style: dashed;
border-left-style: solid;
border-left-style: double;
border-left-style: groove;
border-left-style: ridge;
border-left-style: inset;
border-left-style: outset;

/* グローバル値 */
border-left-style: inherit;
border-left-style: initial;
border-left-style: revert;
border-left-style: revert-layer;
border-left-style: unset;
```

`border-left-style` プロパティは、単一の {{cssxref("line-style")}} キーワード値で指定します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### border-left-style の設定

#### HTML

```html live-sample___examples
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

```css live-sample___examples
/* 表の外見を定義 */
table {
  border-width: 2px;
  background-color: #52e385;
}
tr,
td {
  padding: 3px;
}

/* border-left-style の例のクラス */
.b1 {
  border-left-style: none;
}
.b2 {
  border-left-style: hidden;
}
.b3 {
  border-left-style: dotted;
}
.b4 {
  border-left-style: dashed;
}
.b5 {
  border-left-style: solid;
}
.b6 {
  border-left-style: double;
}
.b7 {
  border-left-style: groove;
}
.b8 {
  border-left-style: ridge;
}
.b9 {
  border-left-style: inset;
}
.b10 {
  border-left-style: outset;
}
```

#### 結果

{{ EmbedLiveSample('Examples', 300, 200) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他のスタイルに関する境界のプロパティ: {{Cssxref("border-bottom-style")}}, {{Cssxref("border-right-style")}}, {{Cssxref("border-top-style")}}, {{Cssxref("border-style")}}
- その他の左側の境界に関するプロパティ: {{Cssxref("border-left")}}, {{Cssxref("border-left-color")}}, {{Cssxref("border-left-width")}}
