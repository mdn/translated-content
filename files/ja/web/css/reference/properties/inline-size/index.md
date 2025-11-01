---
title: inline-size
slug: Web/CSS/Reference/Properties/inline-size
original_slug: Web/CSS/inline-size
l10n:
  sourceCommit: 883491d47f6b764563aa825d9d56f83fb80c6fb9
---

**`inline-size`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素のブロックにおける[インライン軸](/ja/docs/Glossary/Grid_Axis)方向の寸法を定義します。書字方向 ({{cssxref("writing-mode")}}) が横書きである場合、これは {{cssxref("width")}} に対応します。書字方向が縦書きである場合、 {{cssxref("height")}} プロパティに対応します。関連するプロパティは {{cssxref("block-size")}} であり、これは要素のもう一方の軸を定義します。

{{InteractiveExample("CSS デモ: inline-size")}}

```css interactive-example-choice
inline-size: 150px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
inline-size: 150px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
inline-size: auto;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
inline-size: auto;
writing-mode: vertical-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    このボックスは、インライン方向のサイズを変更できます。
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
inline-size: 300px;
inline-size: 25em;
inline-size: anchor-size(width);
inline-size: anchor-size(--myAnchor inline);

/* <percentage> 値 */
inline-size: 75%;

/* キーワード値 */
inline-size: max-content;
inline-size: min-content;
inline-size: fit-content;
inline-size: fit-content(20em);
inline-size: auto;

/* グローバル値 */
inline-size: inherit;
inline-size: initial;
inline-size: revert;
inline-size: revert-layer;
inline-size: unset;
```

### 値

`inline-size` プロパティは、{{cssxref("width")}} や {{cssxref("height")}} プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### インライン方向の寸法をピクセル単位で設定

#### HTML

```html
<p class="exampleText">テキストの例</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  inline-size: 110px;
}
```

#### 結果

{{EmbedLiveSample("Setting_inline_size_in_pixels")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 対応付けされる物理的プロパティ: {{cssxref("width")}} および {{cssxref("height")}}
- {{cssxref("writing-mode")}}
