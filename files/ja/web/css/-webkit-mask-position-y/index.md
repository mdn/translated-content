---
title: '-webkit-mask-position-y'
slug: Web/CSS/-webkit-mask-position-y
tags:
  - CSS
  - CSS マスク
  - CSS プロパティ
  - 標準外
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.-webkit-mask-position-y
translation_of: Web/CSS/-webkit-mask-position-y
---
{{CSSRef}}{{Non-standard_header}}

`-webkit-mask-position-y` は CSS のプロパティで、マスク画像の初期の垂直方向の位置を設定します。

```css
/* キーワード値 */
-webkit-mask-position-y: top;
-webkit-mask-position-y: center;
-webkit-mask-position-y: bottom;

/* <percentage> 値 */
-webkit-mask-position-y: 100%;
-webkit-mask-position-y: -50%;

/* <length> 値 */
-webkit-mask-position-y: 50px;
-webkit-mask-position-y: -1cm;

/* 複数の値 */
-webkit-mask-position-y: 50px, 25%, -3em;

/* グローバル値 */
-webkit-mask-position-y: inherit;
-webkit-mask-position-y: initial;
-webkit-mask-position-y: unset;
```

{{cssinfo}}

## 構文

### 値

- `<length-percentage>`
  - : ボックスの上パディングの辺から見た画像の上端の位置を示す長さです。パーセント値の場合は、ボックスのパディング領域の垂直方向の寸法に対して計算されます。 `0%` という値は、画像の上端がボックスの上パディングの辺と一致していることを意味し、`100%` という値は、画像の下端がボックスの下パディングの辺と一致していることを意味します。
- **`top`**
  - : `0%` と同等です。
- **`bottom`**
  - : `100%` と同等です。
- **`center`**
  - : `50%` と同等です。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### マスク画像の垂直方向の位置指定

```css
.exampleOne {
  -webkit-mask-image: url(mask.png);
  -webkit-mask-position-y: bottom;
}

.exampleTwo {
  -webkit-mask-image: url(mask.png);
  -webkit-mask-position-y: 25%;
}
```

## 仕様書

標準には含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

{{cssxref("-webkit-mask-position")}}, {{cssxref("-webkit-mask-position-x")}}, {{cssxref("-webkit-mask-origin")}}, {{cssxref("-webkit-mask-attachment")}}
