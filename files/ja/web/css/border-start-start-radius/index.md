---
title: border-start-start-radius
slug: Web/CSS/border-start-start-radius
tags:
  - CSS
  - CSS 論理的プロパティ
  - CSS プロパティ
  - 実験的
  - リファレンス
  - border-start-start-radius
  - recipe:css-property
  - 書字方向
browser-compat: css.properties.border-start-start-radius
translation_of: Web/CSS/border-start-start-radius
---
{{CSSRef}}

**`border-start-start-radius`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的な境界の半径を定義します。これは要素の {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} に応じて、物理的な境界の半径に対応づけられます。これは[テキストの方向](/ja/docs/Web/CSS/text-orientation)や[書字方向](/ja/docs/Web/CSS/CSS_Writing_Modes)に依存せずにスタイルを構築する際に便利です。

```css
/* <length> 値 */
/* 値 1 つの場合は角を円にする */
border-start-start-radius: 10px;
border-start-start-radius: 1em;

/* 値 2 つの場合は角を楕円にする */
border-start-start-radius: 1em 2em;

/* グローバル値 */
border-start-start-radius: inherit;
border-start-start-radius: initial;
border-start-start-radius: revert;
border-start-start-radius: unset;
```

このプロパティは、要素の block-start と inline-start の間の角に影響します。すなわち、書字方向が `horizontal-tb` で `ltr` の方向であれば、 {{CSSxRef("border-top-left-radius")}} プロパティに対応します。

## 構文

### 値

- `<length-percentage>`
  - : 円の半径または楕円の長半径及び短半径を示します。絶対的な長さの場合は、 CSS の {{cssxref("&lt;length&gt;")}} データ型で表現することができます。水平軸のパーセント値はボックスの幅、垂直軸のパーセント値はボックスの高さに対する値です。負の数は無効です。

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
  border-start-start-radius: 10px;
}

.exampleText {
  writing-mode: vertical-rl;
  padding: 10px;
  background-color: #fff;
  border-start-start-radius: 10px;
}
```

#### 結果

{{EmbedLiveSample("Border_radius_with_vertical_text", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 対応する物理的プロパティ: {{CSSxRef("border-top-left-radius")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
