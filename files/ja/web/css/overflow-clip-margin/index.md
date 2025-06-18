---
title: overflow-clip-margin
slug: Web/CSS/overflow-clip-margin
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

**`overflow-clip-margin`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 [`overflow: clip`](/ja/docs/Web/CSS/overflow) を持つ要素がクリップされる前に、要素の辺からどれだけ外側に描画できるかを指定します。 このプロパティで定義される境界は、ボックスのオーバーフロークリップ枠と呼ばれます。

## 構文

```css
/* <length> 値 */
overflow-clip-margin: 20px;
overflow-clip-margin: 1em;

/* <visual-box> | <length> */
overflow-clip-margin: content-box 5px;

/* グローバル値 */
overflow-clip-margin: inherit;
overflow-clip-margin: initial;
overflow-clip-margin: revert;
overflow-clip-margin: revert-layer;
overflow-clip-margin: unset;
```

`<visual-box>` 値（既定値は `padding-box`）は、オーバーフロークリップ枠の原点として使用するボックス枠を指定します。 `overflow-clip-margin` で指定する {{cssxref("&lt;length&gt;")}} の値は負の値であってはなりません。

> **メモ:** `overflow: clip` を持たない要素では、このプロパティは無視されます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### HTML

```html
<div class="box">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur.
</div>
```

### CSS

```css
.box {
  border: 3px solid black;
  width: 250px;
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
