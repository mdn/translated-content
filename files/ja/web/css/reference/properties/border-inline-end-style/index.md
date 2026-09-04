---
title: CSS `border-inline-end-style` プロパティ
short-title: border-inline-end-style
slug: Web/CSS/Reference/Properties/border-inline-end-style
l10n:
  sourceCommit: e9c03ba87f9ff4123150d8f7dc457bd546bdab83
---

**`border-inline-end-style`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的なインライン方向末尾側の境界線のスタイルを定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界線のスタイルに対応づけられます。これは {{cssxref("border-top-style")}}、{{cssxref("border-right-style")}}、{{cssxref("border-bottom-style")}}、{{cssxref("border-left-style")}} のいずれかに対応し、どれに対応するかは {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}} で定義された値によって決まります。

{{InteractiveExample("CSS デモ: border-inline-end-style")}}

```css interactive-example-choice
border-inline-end-style: dotted;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-end-style: dotted;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-end-style: groove;
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
  background-color: #eeeeee;
  color: black;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## 構文

```css
/* キーワード値 */
border-inline-end-style: dashed;
border-inline-end-style: dotted;
border-inline-end-style: groove;

/* グローバル値 */
border-inline-end-style: inherit;
border-inline-end-style: initial;
border-inline-end-style: revert;
border-inline-end-style: revert-layer;
border-inline-end-style: unset;
```

関連するプロパティとしては、{{cssxref("border-block-start-style")}}、{{cssxref("border-block-end-style")}}、{{cssxref("border-inline-start-style")}} が要素の他の境界線のスタイルを定義します。

### 値

- {{cssxref("&lt;line-style&gt;")}}
  - : 境界線のスタイルです。{{cssxref("border-style")}} を参照してください。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### inline-end-style の設定

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
  border: 5px solid blue;
  border-inline-end-style: dashed;
}
```

#### 結果

{{EmbedLiveSample("inline-end-style の設定", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)
- このプロパティは物理的な境界プロパティである {{cssxref("border-top-style")}}、{{cssxref("border-right-style")}}、{{cssxref("border-bottom-style")}}、{{cssxref("border-left-style")}} のいずれかに対応します。
- {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}}
