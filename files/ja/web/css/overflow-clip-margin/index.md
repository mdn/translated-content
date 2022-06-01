---
title: overflow-clip-margin
slug: Web/CSS/overflow-clip-margin
tags:
  - CSS
  - CSS Overflow
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.overflow-clip-margin
translation_of: Web/CSS/overflow-clip-margin
---
{{CSSRef}}

**`overflow-clip-margin`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 [`overflow: clip`](/ja/docs/Web/CSS/overflow) を持つ要素がクリップされる前に、要素の辺からどれだけ外側に描画できるかを指定します。

## 構文

```css
overflow-clip-margin: 20px;
overflow-clip-margin: 1em;

/* グローバル値 */
overflow-clip-margin: inherit;
overflow-clip-margin: initial;
overflow-clip-margin: revert;
overflow-clip-margin: unset;
```

`overflow-clip-margin` プロパティは長さで指定します。負の値は許可されていません。

> **Note:** `overflow: clip` を持たない要素では、このプロパティは無視されます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### HTML

```html
<div class="box">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</div>
```

### CSS

```css
.box {
  border: 3px solid black;
  width:  250px;
  height: 100px;
  overflow: clip;
  overflow-clip-margin: 20px;
}
```

### 例

{{EmbedLiveSample("Examples", "100%", "280")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する CSS プロパティ: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow")}}, {{Cssxref("overflow-inline")}}, {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}, {{Cssxref("clip")}}, {{Cssxref("display")}}
