---
title: border-end-start-radius
slug: Web/CSS/border-end-start-radius
tags:
  - CSS
  - CSS 論理的プロパティ
  - CSS プロパティ
  - 実験的
  - リファレンス
  - border-end-start-radius
  - recipe:css-property
  - 書字方向
browser-compat: css.properties.border-end-start-radius
translation_of: Web/CSS/border-end-start-radius
---
{{CSSRef}}

**`border-end-start-radius`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的な境界の半径を定義します。これは要素の {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} に応じて、物理的な境界の半径に対応づけられます。これは[テキストの方向](/ja/docs/Web/CSS/text-orientation)や[書字方向](/ja/docs/Web/CSS/CSS_Writing_Modes)に依存せずにスタイルを構築する際に便利です。

```css
/* <length> 値 */
/* 値 1 つの場合は角を円にする */
border-end-start-radius: 10px;
border-end-start-radius: 1em;

/* 値 2 つの場合は角を楕円にする */
border-end-start-radius: 1em 2em;

/* グローバル値 */
border-end-start-radius: inherit;
border-end-start-radius: initial;
border-end-start-radius: revert;
border-end-start-radius: unset;
```

このプロパティは、要素の block-end と inline-start の間の角に影響します。すなわち、書字方向が `horizontal-tb` で `ltr` の方向であれば、 {{CSSxRef("border-bottom-left-radius")}} プロパティに対応します。

## 構文

### 値

- `<length-percentage>`
  - : 円の半径または楕円の長半径および短半径を示します。絶対的な長さの場合は、 CSS の {{cssxref("&lt;length&gt;")}} データ型で表現することができます。水平軸のパーセント値はボックスの幅、垂直軸のパーセント値はボックスの高さに対する値です。負の数は無効です。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

<h3 id="Border_radius_with_vertical_text">縦書きの時の境界の丸め</h3>

#### HTML

```html
<div>
  <p class="exampleText">Example</p>
</div>
```

#### CSS

```css
div {
  background-color: rebeccapurple;
  width: 120px;
  height: 120px;
  border-end-start-radius: 10px;
}

.exampleText {
  writing-mode: vertical-rl;
  padding: 10px;
  background-color: #fff;
  border-end-start-radius: 10px;
}
```

#### 結果

{{EmbedLiveSample("Border_radius_with_vertical_text", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 対応する物理的プロパティ: {{CSSxRef("border-top-right-radius")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
