---
title: padding-inline
slug: Web/CSS/padding-inline
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

**`padding-inline`** は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)で、論理的なインライン方向の先頭と末尾のパディングを設定します。これは要素の書字方向やテキストの向きに応じて物理的なパディングに変換されます。

{{EmbedInteractiveExample("pages/css/padding-inline.html")}}

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`padding-inline-end`](/ja/docs/Web/CSS/padding-inline-end)
- [`padding-inline-start`](/ja/docs/Web/CSS/padding-inline-start)

## 構文

```css
/* <length> 値 */
padding-inline: 10px 20px; /* 絶対的な長さ */
padding-inline: 1em 2em; /* テキストの大きさに対する相対値 */
padding-inline: 10px; /* 先頭と末尾の両方を設定 */

/* <percentage> 値 */
padding-inline: 5% 2%; /* 直近のブロックコンテナーの幅に対する相対値 */

/* グローバル値 */
padding-inline: inherit;
padding-inline: initial;
padding-inline: revert;
padding-inline: revert-layer;
padding-inline: unset;
```

`padding-inline` プロパティでは、1 つまたは 2 つの値を指定できます。1 つの値が指定された場合は、 {{cssxref("padding-inline-start")}} と {{cssxref("padding-inline-end")}} の両方の値として使用されます。2 つの値が指定された場合、1 つ目の値が {{cssxref("padding-inline-start")}} に、2 つ目の値が {{cssxref("padding-inline-end")}} に使用されます。

### 値

- {{cssxref("&lt;length&gt;")}}
  - : パディングの寸法を固定値で指定します。負の値は指定できません。
- {{cssxref("&lt;percentage&gt;")}}
  - : パディングの寸法を[包含ブロック](/ja/docs/Web/CSS/Containing_block)のインラインサイズ（{{cssxref("writing-mode")}} で横書き言語と定義されている場合は _width_）に対するパーセント値で示したものです。負の数であってはいけません。

## 解説

これらの値は、 {{cssxref("padding-top")}} と {{cssxref("padding-bottom")}}、または {{cssxref("padding-right")}} と {{cssxref("padding-left")}} プロパティに、 {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値に従って対応します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 縦書きテキストにおけるインライン方向のパディングの設定

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
  padding-inline: 20px 40px;
  background-color: #c8c800;
}
```

#### 結果

{{EmbedLiveSample("縦書きテキストにおけるインライン方向のパディングの設定", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 論理的プロパティと値](/ja/docs/Web/CSS/CSS_logical_properties_and_values)
- 対応する物理的プロパティ: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
