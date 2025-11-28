---
title: border-end-start-radius
slug: Web/CSS/Reference/Properties/border-end-start-radius
original_slug: Web/CSS/border-end-start-radius
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`border-end-start-radius`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的な境界の半径を定義します。これは要素の {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} に応じて、物理的な境界の半径に対応づけられます。これは[テキストの方向](/ja/docs/Web/CSS/Reference/Properties/text-orientation)や[書字方向](/ja/docs/Web/CSS/Guides/Writing_modes)に依存せずにスタイルを構築する際に便利です。

{{InteractiveExample("CSS デモ: border-end-start-radius")}}

```css interactive-example-choice
border-end-start-radius: 80px 80px;
```

```css interactive-example-choice
border-end-start-radius: 250px 100px;
direction: rtl;
```

```css interactive-example-choice
border-end-start-radius: 50%;
writing-mode: vertical-lr;
```

```css interactive-example-choice
border-end-start-radius: 50%;
writing-mode: vertical-rl;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    このボックスは、左下の角が丸くなっています。
  </div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #5b6dcd;
  color: white;
  padding: 10px;
}
```

このプロパティは、要素の block-end と inline-start の間の角に影響します。すなわち、書字方向が `horizontal-tb` で `ltr` の方向であれば、 {{CSSxRef("border-bottom-left-radius")}} プロパティに対応します。

## 構文

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
border-end-start-radius: revert-layer;
border-end-start-radius: unset;
```

### 値

- `<length-percentage>`
  - : 円の半径または楕円の長半径および短半径を示します。絶対的な長さの場合は、 CSS の {{cssxref("&lt;length&gt;")}} データ型で表現することができます。水平軸のパーセント値はボックスの幅、垂直軸のパーセント値はボックスの高さに対する値です。負の数は無効です。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### 縦書きの時の境界の丸め

#### HTML

```html
<div>
  <p class="exampleText">角丸の例</p>
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

{{EmbedLiveSample("縦書きの時の境界の丸め", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)
- 対応する物理的プロパティ: {{CSSxRef("border-top-right-radius")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
