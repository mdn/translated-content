---
title: min-inline-size
slug: Web/CSS/Reference/Properties/min-inline-size
original_slug: Web/CSS/min-inline-size
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`min-inline-size`** は [CSS](/ja/docs/Web/CSS) のプロパティで、書字方向に応じて要素ブロックの水平または垂直方向の最小の寸法を定義します。これは {{cssxref("min-width")}} または {{cssxref("min-height")}} のどちらかのプロパティと、 {{cssxref("writing-mode")}} の値に応じて対応します。

{{InteractiveExample("CSS デモ: min-inline-size")}}

```css interactive-example-choice
min-inline-size: 200px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
min-inline-size: 200px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
min-inline-size: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
min-inline-size: 75%;
writing-mode: vertical-lr;
```

```html-nolint interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">min-inline-size を変更してください</div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  height: 80%;
  justify-content: center;
  color: #ffffff;
}
```

## 構文

```css
/* <length> 値 */
min-inline-size: 100px;
min-inline-size: 5em;
min-inline-size: anchor-size(width);

/* <percentage> 値 */
min-inline-size: 10%;

/* キーワード値 */
min-inline-size: max-content;
min-inline-size: min-content;
min-inline-size: fit-content;
min-inline-size: fit-content(20em);

/* グローバル値 */
min-inline-size: inherit;
min-inline-size: initial;
min-inline-size: revert;
min-inline-size: revert-layer;
min-inline-size: unset;
```

書字方向が垂直方向であった場合、 `min-inline-size` の値は要素の最小の高さに対応します。そうでなければ、要素の最小幅に対応します。関連プロパティの {{cssxref("min-block-size")}} が要素のもう一方の寸法を定義します。

### 値

`min-inline-size` プロパティは {{cssxref("min-width")}} および {{cssxref("min-height")}} の各プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 縦書きでインライン方向の最小寸法を設定

#### HTML

```html
<p class="exampleText">テキストの例</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 5%;
  min-inline-size: 200px;
}
```

#### 結果

{{EmbedLiveSample("縦書きでインライン方向の最小寸法を設定")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 対応付けされる物理的プロパティ: {{cssxref("min-width")}} および {{cssxref("min-height")}}
- {{cssxref("writing-mode")}}
