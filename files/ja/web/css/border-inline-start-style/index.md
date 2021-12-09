---
title: border-inline-start-style
slug: Web/CSS/border-inline-start-style
tags:
  - CSS
  - CSS 論理的プロパティ
  - CSS プロパティ
  - 実験的
  - リファレンス
  - border-inline
  - border-inline-start
  - border-inline-start-style
  - border-inline-style
  - recipe:css-property
browser-compat: css.properties.border-inline-start-style
translation_of: Web/CSS/border-inline-start-style
---
{{CSSRef}}

**`border-inline-start-style`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的なブロックの先頭側の境界のスタイルを定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界のスタイルに対応づけられます。これは {{cssxref("border-top-style")}}、{{cssxref("border-right-style")}}、{{cssxref("border-bottom-style")}}、{{cssxref("border-left-style")}} の何れかに対応し、どれに対応するかは {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}} で定義された値によって決まります。

{{EmbedInteractiveExample("pages/css/border-inline-start-style.html")}}

## 構文

```css
/* <'border-style'> 値 */
border-inline-start-style: dashed;
border-inline-start-style: dotted;
border-inline-start-style: revert;
border-inline-start-style: groove;
```

関連するプロパティとしては、 {{cssxref("border-block-start-style")}}、{{cssxref("border-block-end-style")}}、{{cssxref("border-inline-end-style")}} が要素の他の境界のスタイルを定義します。

{{cssinfo}}

### 値

- `<'border-style'>`
  - : 境界の線のスタイルです。 {{cssxref("border-style")}} を参照してください。

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
  border-inline-start-style: dashed;
}
```

{{EmbedLiveSample("Examples", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティは {{cssxref("border-top-style")}}、{{cssxref("border-right-style")}}、{{cssxref("border-bottom-style")}}、{{cssxref("border-left-style")}} のうちの 1 つに対応づけられます
- {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}}
