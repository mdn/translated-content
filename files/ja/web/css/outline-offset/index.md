---
title: outline-offset
slug: Web/CSS/outline-offset
tags:
  - CSS
  - CSS 輪郭線
  - CSS プロパティ
  - Reference
  - recipe:css-property
browser-compat: css.properties.outline-offset
translation_of: Web/CSS/outline-offset
---
{{CSSRef}}

CSS の **`outline-offset`** プロパティは、要素の辺や境界線と[輪郭線](/ja/docs/Web/CSS/outline)との空間の量を設定します。

{{EmbedInteractiveExample("pages/css/outline-offset.html")}}

## 構文

```css
/* <length> 値 */
outline-offset: 3px;
outline-offset: 0.2em;

/* グローバル値 */
outline-offset: inherit;
outline-offset: initial;
outline-offset: revert;
outline-offset: unset;
```

### 値

- `{{cssxref("&lt;length&gt;")}}`
  - : 要素とその輪郭線との空間の幅です。負の値を指定すると輪郭線は要素の内側に表示されます。 `0` を指定すると輪郭線は要素との隙間を置かずに表示されます。

## 解説

輪郭線 (outline) は要素の周囲、境界線 (border) の外側に描かれる線です。要素とその輪郭線の間は透明です。つまり、親要素の背景と同じになります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_outline_offset_in_pixels">輪郭線のオフセットをピクセル数で設定</h3>

#### HTML

```html
<p>Gallia est omnis divisa in partes tres.</p>
```

#### CSS

```css
p {
  outline: 1px dashed red;
  outline-offset: 10px;
  background: yellow;
  border: 1px solid blue;
  margin: 15px;
}
```

#### 結果

{{EmbedLiveSample('Setting_outline_offset_in_pixels')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("outline")}}
- {{cssxref("outline-color")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-width")}}
