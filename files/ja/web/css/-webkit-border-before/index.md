---
title: "-webkit-border-before"
slug: Web/CSS/-webkit-border-before
---

{{CSSRef}}{{Non-standard_header}}

**`-webkit-border-before`** は [CSS](/ja/docs/Web/CSS) のプロパティで、個々の論理ブロックの境界の先頭側のプロパティ値をスタイルシートの一箇所で設定するための一括指定プロパティです。

```css
/* border の値 */
-webkit-border-before: 1px;
-webkit-border-before: 2px dotted;
-webkit-border-before: medium dashed blue;

/* グローバル値 */
-webkit-border-before: inherit;
-webkit-border-before: initial;
-webkit-border-before: unset;
```

`-webkit-border-before` は {{cssxref("-webkit-border-before-width")}}, {{cssxref("-webkit-border-before-style")}}, {{cssxref("-webkit-border-before-color")}} のうちの 1 つ以上の値で設定することができます。これはその要素の書字方向やテキストの向きに応じて、物理的な境界に対応付けられます。これは {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, {{cssxref("border-left")}} の各プロパティに、 {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値に基づいて対応付けられます。

これは要素の他の境界を定義する {{cssxref("-webkit-border-after")}}, {{cssxref("-webkit-border-start")}}, {{cssxref("-webkit-border-end")}} に関連しています。

このプロパティは {{cssxref("border-block-start")}} として標準化過程にあります。

## 構文

### 値

以下のものを 1 つ以上、任意の順で指定します。

- `<'border-width'>`
  - : See {{cssxref("border-width")}}
- `<'border-style'>`
  - : See {{cssxref("border-style")}}
- `<'color'>`
  - : See {{cssxref("color")}}

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 縦書きテキストに境界を適用

#### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-rl;
  -webkit-border-before: 5px dashed blue;
}
```

#### 結果

{{EmbedLiveSample("Applying_a_border_with_vertical_text", 140, 140)}}

## 仕様書

標準には含まれていませんが、標準化過程にある {{cssxref("border-block-start")}} プロパティに関連しています。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("border-block-start")}}
- 対応付けられる物理的プロパティ: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, {{cssxref("border-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
