---
title: padding-inline-end
slug: Web/CSS/Reference/Properties/padding-inline-end
original_slug: Web/CSS/padding-inline-end
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`padding-inline-end`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的なインライン方向の末尾側のパディングを定義し、それが要素の書字方向やテキストの方向に応じて物理的なパディングに対応づけられます。

{{InteractiveExample("CSS デモ: padding-inline-end")}}

```css interactive-example-choice
padding-inline-end: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
padding-inline-end: 20px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
padding-inline-end: 5em;
writing-mode: horizontal-tb;
direction: rtl;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    <div class="box">
      Far out in the uncharted backwaters of the unfashionable end of the
      western spiral arm of the Galaxy lies a small unregarded yellow sun.
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 10px solid #ffc129;
  overflow: hidden;
  text-align: left;
}

.box {
  border: dashed 1px;
  unicode-bidi: bidi-override;
}
```

## 構文

```css
/* <length> 値 */
padding-inline-end: 10px; /* 絶対的な長さ */
padding-inline-end: 1em; /* テキストの大きさに対する相対値 */

/* <percentage> 値 */
padding-inline-end: 5%; /* ブロックコンテナーの幅に対する割合のパディング */

/* グローバル値 */
padding-inline-end: inherit;
padding-inline-end: initial;
padding-inline-end: revert;
padding-inline-end: revert-layer;
padding-inline-end: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : パディングの寸法を固定値で指定します。負の値は指定できません。
- {{cssxref("&lt;percentage&gt;")}}
  - : パディングの寸法を[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)の[インラインサイズ](/ja/docs/Web/CSS/Guides/Display/Block_and_inline_layout)（横書き言語の場合は _width_）に対するパーセント値で示したものです。負の数であってはいけません。

## 解説

`padding-inline-end` プロパティは、{{cssxref("padding-top")}} プロパティと同じ値を取ります。しかし、このプロパティは {{cssxref("padding-right")}}, {{cssxref("padding-left")}}, `padding-top`, {{cssxref("padding-bottom")}} のいずれかと同等になります。これは {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} に設定された値によって決まります。

関連プロパティとして、要素の他のマージンを定義する {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}} があります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 縦書きテキストにおけるインライン方向の末尾のパディングの設定

#### HTML

```html
<div>
  <p class="exampleText">テキストの例</p>
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
  writing-mode: vertical-lr;
  padding-inline-end: 20px;
  background-color: #c8c800;
}
```

#### 結果

{{EmbedLiveSample("縦書きテキストにおけるインライン方向の末尾のパディングの設定", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)
- 対応づけ先の物理的プロパティ: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
