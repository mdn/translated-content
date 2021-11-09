---
title: mask-type
slug: Web/CSS/mask-type
tags:
  - CSS
  - CSS マスク
  - CSS プロパティ
  - リファレンス
  - SVG
  - recipe:css-property
browser-compat: css.properties.mask-type
translation_of: Web/CSS/mask-type
---
{{CSSRef}}

**`mask-type`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 SVG の {{svgElement("mask")}} 要素を*輝度*マスクと*アルファ*マスクのどちらとして扱うかを設定します。これは `<mask>` 要素自身に設定します。

```css
/* キーワード値 */
mask-type: luminance;
mask-type: alpha;

/* グローバル値 */
mask-type: inherit;
mask-type: initial;
mask-type: revert;
mask-type: unset;
```

このプロパティは、マスクが使用される要素に適用され、同じ効果を持つ {{cssxref("mask-mode")}} プロパティによって上書きされることがあります。アルファマスクは全般的に表示が高速です。

## 構文

`mask-type` プロパティは以下に示すキーワード値のうちの一つで指定します。

### 値

- `luminance`
  - : 関連付けられたマスク画像が輝度マスクであることを示すキーワードです。すなわち、適用時に[相対輝度](https://en.wikipedia.org/wiki/Luminance_%28relative%29)値が使用されます。
- `alpha`
  - : 関連付けられたマスク画像がアルファマスクであることを示すキーワードです。すなわち、適用時に[アルファチャネル](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%AB%E3%83%95%E3%82%A1%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB)値が使用されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_an_alpha_mask">アルファマスクの設定</h3>

#### HTML

```html
<div class="redsquare"></div>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0">
  <defs>
    <mask id="m" maskContentUnits="objectBoundingBox"
      style="mask-type:alpha">
      <rect x=".1" y=".1" width=".8" height=".8"
          fill="red" fill-opacity="0.7"/>
    </mask>
  </defs>
</svg>
```

#### CSS

```css
.redsquare {
  height: 100px;
  width: 100px;
  background-color: rgb(128, 128, 128);
  border: solid 1px black;
  mask: url("#m");
}
```

#### 結果

{{EmbedLiveSample('Setting_an_alpha_mask', '100%', '102')}}

<h3 id="Setting_a_luminance_mask">輝度マスクの設定</h3>

#### HTML

```html
<div class="redsquare"></div>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0">
  <defs>
    <mask id="m" maskContentUnits="objectBoundingBox"
      style="mask-type:luminance">
      <rect x=".1" y=".1" width=".8" height=".8"
          fill="red" fill-opacity="0.7"/>
    </mask>
  </defs>
</svg>
```

#### CSS

```css
.redsquare {
  height: 100px;
  width: 100px;
  background-color: rgb(128, 128, 128);
  border: solid 1px black;
  mask: url("#m");
}
```

#### 結果

{{EmbedLiveSample('Setting_a_luminance_mask', '100%', '102')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他のマスクに関するプロパティ: {{cssxref("mask")}}, {{cssxref("mask-mode")}}
