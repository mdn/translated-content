---
title: border-inline-style
slug: Web/CSS/border-inline-style
tags:
  - CSS
  - CSS 論理的プロパティ
  - CSS プロパティ
  - 実験的
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.border-inline-style
translation_of: Web/CSS/border-inline-style
---
{{CSSRef}}

**`border-inline-style`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的なインライン方向の境界のスタイルを定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界のスタイルに対応づけられます。これは {{cssxref("border-top-style")}} と {{cssxref("border-bottom-style")}}、または {{cssxref("border-left-style")}} と {{cssxref("border-right-style")}} の組み合わせのどちらかに対応し、どちらに対応するかは {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}} で定義された値によって決まります。

{{EmbedInteractiveExample("pages/css/border-inline-style.html")}}

他の方向の境界スタイルについては {{cssxref("border-block-style")}} で設定することができ、これは {{cssxref("border-block-start-style")}} および {{cssxref("border-block-end-style")}} を設定することができます。

## 構文

```css
/* <'border-style'> の値 */
border-inline-style: dashed;
border-inline-style: dotted;
border-inline-style: revert;
border-inline-style: groove;
```

### 値

- `<'border-style'>`
  - : 境界線のスタイルです。 {{ cssxref("border-style") }} を参照してください。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

<h2 id="Examples">例</h2>

### HTML

```html
<div>
  <p class="exampleText">Example text</p>
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
  border: 5px solid blue;
  border-inline-style: dashed;
}
```

{{EmbedLiveSample("Examples", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティは物理的な境界のプロパティ {{cssxref("border-top-style")}}、{{cssxref("border-right-style")}}、{{cssxref("border-bottom-style")}}、{{cssxref("border-left-style")}} のうちの 1 つに対応します
- {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}}
