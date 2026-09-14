---
title: CSS `border-inline-width` プロパティ
short-title: border-inline-width
slug: Web/CSS/Reference/Properties/border-inline-width
l10n:
  sourceCommit: e9c03ba87f9ff4123150d8f7dc457bd546bdab83
---

**`border-inline-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的なインライン方向の境界の幅を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界の幅に対応づけられます。これは {{cssxref("border-top-width")}} と {{cssxref("border-bottom-width")}}、または {{cssxref("border-left-width")}} と {{cssxref("border-right-width")}} の組み合わせのどちらかに対応し、どちらに対応するかは {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}} で定義された値によって決まります。

他の方向の境界の幅は {{cssxref("border-block-width")}} で設定でき、これは {{cssxref("border-block-start-width")}} および {{cssxref("border-block-end-width")}} を設定します。

{{InteractiveExample("CSS デモ: border-inline-width")}}

```css interactive-example-choice
border-inline-width: thick;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-width: thick;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-width: 4px;
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
border-inline-width: 5px 10px;
border-inline-width: 5px;
border-inline-width: thick;

/* グローバル値 */
border-inline-width: inherit;
border-inline-width: initial;
border-inline-width: revert;
border-inline-width: revert-layer;
border-inline-width: unset;
```

### 値

- {{cssxref("&lt;line-width&gt;")}}
  - : 境界線の幅を、非負の値 {{cssxref("&lt;length&gt;")}} を明示的に指定するか、キーワード `thin`、`medium`、`thick` のいずれかで定義します。デフォルトは `medium` です。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### HTML

```html
<div>
  <p class="exampleText">テキストの例</p>
</div>
```

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  border: 1px solid blue;
  border-inline-width: 5px 10px;
}
```

{{EmbedLiveSample("例", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)
- このプロパティは、物理的な境界プロパティである {{cssxref("border-top-width")}}、{{cssxref("border-right-width")}}、{{cssxref("border-bottom-width")}}、{{cssxref("border-left-width")}} のいずれかに対応します。
- {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}}
