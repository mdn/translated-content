---
title: CSS `border-block-width` プロパティ
short-title: border-block-width
slug: Web/CSS/Reference/Properties/border-block-width
l10n:
  sourceCommit: e9c03ba87f9ff4123150d8f7dc457bd546bdab83
---

**`border-block-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的なブロック方向の境界の幅を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界の幅に対応づけられます。これは {{cssxref("border-top-width")}} と {{cssxref("border-bottom-width")}}、または {{cssxref("border-left-width")}} と {{cssxref("border-right-width")}} の組み合わせのどちらかに対応し、どちらに対応するかは {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}} で定義された値によって決まります。

他の方向の境界の幅は {{cssxref("border-inline-width")}} で設定でき、これは {{cssxref("border-inline-start-width")}} および {{cssxref("border-inline-end-width")}} を設定します。

{{InteractiveExample("CSS デモ: border-block-width")}}

```css interactive-example-choice
border-block-width: thick;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-width: thick;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-width: 4px;
writing-mode: horizontal-tb;
direction: rtl;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    これは周囲に境界線があるボックスです。
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: palegreen;
  color: black;
  border: 0 solid crimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## 構文

```css
/* <'line-width'> 値 */
border-block-width: 5px;
border-block-width: thick;

/* グローバル値 */
border-block-width: inherit;
border-block-width: initial;
border-block-width: revert;
border-block-width: revert-layer;
border-block-width: unset;
```

### 値

- {{cssxref("&lt;line-width&gt;")}}
  - : 境界線の幅を、非負の値 {{cssxref("&lt;length&gt;")}} を明示的に指定するか、キーワード `thin`、`medium`、`thick` のいずれかで定義します。デフォルトは `medium` です。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 縦書きテキストの境界線の幅

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
  border: 1px solid blue;
  border-block-width: 5px;
}
```

#### 結果

{{EmbedLiveSample("縦書きテキストの境界線の幅", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)
- このプロパティは、物理的な境界プロパティである {{cssxref("border-top-width")}}、{{cssxref("border-right-width")}}、{{cssxref("border-bottom-width")}}、{{cssxref("border-left-width")}} のいずれかに対応します。
- {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}}
