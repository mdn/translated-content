---
title: max-inline-size
slug: Web/CSS/Reference/Properties/max-inline-size
original_slug: Web/CSS/max-inline-size
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`max-inline-size`** は [CSS](/ja/docs/Web/CSS) のプロパティで、書字方向に応じて要素ブロックの水平または垂直方向の最大の寸法を定義します。これは {{cssxref("max-width")}} または {{cssxref("max-height")}} のどちらかのプロパティと、 {{cssxref("writing-mode")}} の値に応じて対応します。

書字方向が垂直方向であった場合、 `max-inline-size` の値は要素の最大の高さに対応します。そうでなければ、要素の最大幅に対応します。関連プロパティとして、 {{cssxref("max-block-size")}} が要素のもう一方の寸法を定義します。

{{InteractiveExample("CSS デモ: max-inline-size")}}

```css interactive-example-choice
max-inline-size: 150px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
max-inline-size: 150px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
max-inline-size: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
max-inline-size: 75%;
writing-mode: vertical-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    これは、max-inline-size を変更できるボックスです。
  </div>
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
max-inline-size: 300px;
max-inline-size: 25em;
max-inline-size: anchor-size(width);
max-inline-size: anchor-size(--myAnchor self-block, 200px);

/* <percentage> 値 */
max-inline-size: 75%;

/* キーワード値 */
max-inline-size: none;
max-inline-size: max-content;
max-inline-size: min-content;
max-inline-size: fit-content;
max-inline-size: fit-content(20em);

/* グローバル値 */
max-inline-size: inherit;
max-inline-size: initial;
max-inline-size: revert;
max-inline-size: revert-layer;
max-inline-size: unset;
```

### 値

`max-inline-size` プロパティは {{cssxref("max-width")}} および {{cssxref("max-height")}} の各プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### インライン方向の最大寸法をピクセル単位で設定

#### HTML

```html
<p class="exampleText">テキストの例</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 100%;
  max-inline-size: 200px;
}
```

#### 結果

{{EmbedLiveSample("インライン方向の最大寸法をピクセル単位で設定")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 対応付けされる物理的プロパティ: {{cssxref("max-width")}} および {{cssxref("max-height")}}
- {{cssxref("writing-mode")}}
