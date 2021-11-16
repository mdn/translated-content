---
title: border-block-start-style
slug: Web/CSS/border-block-start-style
tags:
  - CSS
  - CSS 論理的プロパティ
  - CSS プロパティ
  - 実験的
  - リファレンス
  - border-block
  - border-block-start
  - border-block-start-style
  - border-block-style
  - recipe:css-property
browser-compat: css.properties.border-block-start-style
translation_of: Web/CSS/border-block-start-style
---
{{CSSRef}}

**`border-block-start-style`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的なブロックの先頭側の境界のスタイルを定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界のスタイルに対応づけられます。これは {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, {{cssxref("border-left-style")}} の何れかに対応し、どれに対応するかは {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値によって決まります。

{{EmbedInteractiveExample("pages/css/border-block-start-style.html")}}

## 構文

```css
/* <'border-style'> 値 */
border-block-start-style: dashed;
border-block-start-style: dotted;
border-block-start-style: groove;

/* グローバル値 */
border-block-start-style: inherit;
border-block-start-style: initial;
border-block-start-style: revert;
border-block-start-style: unset;
```

関連するプロパティとしては、 {{cssxref("border-block-end-style")}}, {{cssxref("border-inline-start-style")}}, {{cssxref("border-inline-end-style")}} が要素の他の境界のスタイルを定義します。

{{cssinfo}}

### 値

- `<'border-style'>`
  - : 境界の線のスタイルです。 {{cssxref("border-style")}} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Dashed_border_with_vertical_text">縦書きテキストでの破線の境界線</h3>

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
  writing-mode: vertical-lr;
  border: 5px solid blue;
  border-block-start-style: dashed;
}
```

#### 結果

{{EmbedLiveSample("Dashed_border_with_vertical_text", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティは {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, {{cssxref("border-left-style")}} のうちの一つに対応づけられます
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
