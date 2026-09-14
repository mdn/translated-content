---
title: CSS `-webkit-mask-position-x` プロパティ
short-title: -webkit-mask-position-x
slug: Web/CSS/Reference/Properties/-webkit-mask-position-x
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{Non-standard_header}}

`-webkit-mask-position-x` は CSS のプロパティで、マスク画像の初期の水平方向の位置を設定します。

## 構文

```css
/* キーワード値 */
-webkit-mask-position-x: left;
-webkit-mask-position-x: center;
-webkit-mask-position-x: right;

/* <percentage> 値 */
-webkit-mask-position-x: 100%;
-webkit-mask-position-x: -50%;

/* <length> 値 */
-webkit-mask-position-x: 50px;
-webkit-mask-position-x: -1cm;

/* 複数の値 */
-webkit-mask-position-x:
  50px,
  25%,
  -3em;

/* グローバル値 */
-webkit-mask-position-x: inherit;
-webkit-mask-position-x: initial;
-webkit-mask-position-x: revert;
-webkit-mask-position-x: revert-layer;
-webkit-mask-position-x: unset;
```

### 値

- `<length-percentage>`
  - : ボックスの左パディングの辺から見た画像の左端の位置を示す長さです。パーセント値の場合は、ボックスのパディング領域の水平方向の寸法に対して計算されます。つまり、 `0%` という値は、画像の左端がボックスの左パディングの辺と一致していることを意味し、`100%` という値は、画像の右端がボックスの右パディングの辺と一致していることを意味します。
- **`left`**
  - : `0%` と同等です。
- **`center`**
  - : `50%` と同等です。
- **`right`**
  - : `100%` と同等です。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntaxRaw(`-webkit-mask-position-x = [ <length-percentage> | left | center | right ]#`)}}

## 例

### マスク画像の水平方向の位置指定

```css
.exampleOne {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-position-x: right;
}

.exampleTwo {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-position-x: 25%;
}
```

## 仕様書

標準には含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

{{cssxref("mask-position", "-webkit-mask-position")}}, {{cssxref("-webkit-mask-position-y")}}, {{cssxref("mask-origin", "-webkit-mask-origin")}}
