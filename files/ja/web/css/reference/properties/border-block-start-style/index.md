---
title: CSS `border-block-start-style` プロパティ
short-title: border-block-start-style
slug: Web/CSS/Reference/Properties/border-block-start-style
l10n:
  sourceCommit: e9c03ba87f9ff4123150d8f7dc457bd546bdab83
---

**`border-block-start-style`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的なブロック方向先頭側の境界線のスタイルを定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界線のスタイルに対応づけられます。これは {{cssxref("border-top-style")}}、{{cssxref("border-right-style")}}、{{cssxref("border-bottom-style")}}、{{cssxref("border-left-style")}} のいずれかに対応し、どれに対応するかは {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}} で定義された値によって決まります。

{{InteractiveExample("CSS デモ: border-block-start-style")}}

```css interactive-example-choice
border-block-start-style: dotted;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-start-style: dotted;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-start-style: groove;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-start-style: dashed;
writing-mode: vertical-lr;
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
border-block-start-style: dashed;
border-block-start-style: dotted;
border-block-start-style: groove;

/* グローバル値 */
border-block-start-style: inherit;
border-block-start-style: initial;
border-block-start-style: revert;
border-block-start-style: revert-layer;
border-block-start-style: unset;
```

関連するプロパティとしては、{{cssxref("border-block-end-style")}}、{{cssxref("border-inline-start-style")}}、{{cssxref("border-inline-end-style")}} が要素の他の境界線のスタイルを定義します。

### 値

- {{cssxref("&lt;line-style&gt;")}}
  - : 境界線のスタイルです。{{cssxref("border-style")}} を参照してください。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 縦書きテキストでの破線の境界線

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
  border-block-start-style: dashed;
}
```

#### 結果

{{EmbedLiveSample("縦書きテキストでの破線の境界線", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)
- このプロパティは物理的な境界プロパティである {{cssxref("border-top-style")}}、{{cssxref("border-right-style")}}、{{cssxref("border-bottom-style")}}、{{cssxref("border-left-style")}} のいずれかに対応します。
- {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}}
