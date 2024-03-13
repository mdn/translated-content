---
title: "-webkit-mask-attachment"
slug: Web/CSS/-webkit-mask-attachment
---

{{CSSRef}}{{Non-standard_Header}}

{{CSSxRef("mask-image")}} が指定されている場合、 `-webkit-mask-attachment` はそのマスク画像の位置をビューポート内で固定するか、それとも包含ブロックと共にスクロールするかを指定します。

```css
/* キーワード値 */
-webkit-mask-attachment: scroll;
-webkit-mask-attachment: fixed;
-webkit-mask-attachment: local;

/* 複数の値 */
-webkit-mask-attachment: scroll, local;
-webkit-mask-attachment: fixed, local, scroll;

/* グローバル値 */
-webkit-mask-attachment: inherit;
-webkit-mask-attachment: initial;
-webkit-mask-attachment: unset;
```

## 構文

### 値

- scroll
  - : `scroll` が指定された場合、マスク画像はマスク画像を含むブロックと共にビューポート内でスクロールします。
- fixed
  - : `fixed` が指定された場合、マスク画像は包含する要素と共にスクロールせず、ビューポート内の一定の場所に残ります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### ビューポートにマスク画像を固定

```css
body {
  -webkit-mask-image: url("images/mask.png");
  -webkit-mask-attachment: fixed;
}
```

## 仕様書

Not part of any standard.

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("mask")}}
- {{CSSxRef("mask-clip")}}
- {{CSSxRef("-webkit-mask-box-image")}}
- {{CSSxRef("mask-origin")}}
- {{CSSxRef("mask-image")}}
- {{CSSxRef("-webkit-mask-composite")}}
- {{CSSxRef("mask-repeat")}}
