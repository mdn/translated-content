---
title: border-block-color
slug: Web/CSS/border-block-color
---

{{CSSRef}}

**`border-block-end-color`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的なブロックの終端側の境界色を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界色に対応づけられます。これは {{cssxref("border-top-color")}} および {{cssxref("border-bottom-color")}}、または {{cssxref("border-right-color")}} および {{cssxref("border-left-color")}} のどちらかに対応し、どちらに対応するかは {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値によって決まります。

{{EmbedInteractiveExample("pages/css/border-block-color.html")}}

他の方向の境界については、 {{cssxref("border-block-color")}} によって、 {{cssxref("border-block-start-color")}} と {{cssxref("border-block-end-color")}} の両方を設定することができます。

### 構文

```css
border-block-color: yellow;
border-block-color: #f5f6f7;

/* グローバル値 */
border-block-color: inherit;
border-block-color: initial;
border-block-color: revert;
border-block-color: unset;
```

### 値

- `<'color'>`
  - : 境界の色です。 {{cssxref("color")}} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Border_with_vertical_text">縦書きテキストの境界</h3>

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
  border: 10px solid blue;
  border-block-color: red;
}
```

#### 結果

{{EmbedLiveSample("Border_with_vertical_text", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティは {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, {{cssxref("border-left-color")}} のうちの一つに対応します
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
