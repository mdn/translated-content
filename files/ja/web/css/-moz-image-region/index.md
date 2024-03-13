---
title: "-moz-image-region"
slug: Web/CSS/-moz-image-region
---

{{CSSRef}}{{Non-standard_Header}}

{{CSSxRef("list-style-image")}} プロパティの画像を使用している特定の XUL 要素や擬似要素では、このプロパティは画像全体の代わりに使用される画像の領域を指定します。これにより、要素は同じ画像の異なる部分を使用してパフォーマンスを向上させることができます。

```css
/* キーワード値 */
-moz-image-region: auto;

/* <shape> 値 */
-moz-image-region: rect(0, 8px, 4px, 4px);

/* グローバル値 */
-moz-image-region: inherit;
-moz-image-region: initial;
-moz-image-region: unset;
```

構文は {{CSSxRef("clip")}} プロパティと似ています。4 つの値はすべて、画像の左上隅を基準にしています。

> **メモ:** 背景画像で動作する仕組みについては、 {{CSSxRef("-moz-image-rect")}} を参照してください。

## 構文

### 値

- `auto`
  - : 使用する画像の領域を自動的に定義します。
- [`<shape>`](/ja/docs/Web/CSS/shape)
  - : 使用する部分画像を定義する図形です。関数 `rect()` は、形状として使用する長方形を定義します。その引数は、画像の上、右、下、左の辺のオフセットを、この順番で定義します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### 画像の切り抜き

```css
#example-button {
  /* この画像の左上から 4x4 の領域のみを表示する */
  list-style-image: url("chrome://example/skin/example.png");
  -moz-image-region: rect(0px, 4px, 4px, 0px);
}
#example-button:hover {
  /* 最初のボタンの右にある 4x4 の領域を、ホバーされたボタンに使用します。 */
  -moz-image-region: rect(0px, 8px, 4px, 4px);
}
```

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("-moz-image-rect")}}
