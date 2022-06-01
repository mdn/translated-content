---
title: '-webkit-mask-composite'
slug: Web/CSS/-webkit-mask-composite
tags:
  - '-webkit-mask-composite'
  - CSS
  - CSS マスク
  - CSS プロパティ
  - CSS:WebKit 拡張
  - 標準外
  - リファレンス
  - mask-composite
  - recipe:css-property
browser-compat: css.properties.-webkit-mask-composite
translation_of: Web/CSS/-webkit-mask-composite
---
{{CSSRef}}{{Non-standard_header}}

**`webkit-mask-composite`** プロパティは、同じ要素に適用された複数のマスク画像を互いに合成する方法を指定します。マスク画像は、{{CSSxRef("-webkit-mask-image")}} プロパティで宣言された順序とは逆に合成されます。

```css
/* キーワード値 */
-webkit-mask-composite: clear;
-webkit-mask-composite: copy;
-webkit-mask-composite: source-over;
-webkit-mask-composite: source-in;
-webkit-mask-composite: source-out;
-webkit-mask-composite: source-atop;
-webkit-mask-composite: destination-over;
-webkit-mask-composite: destination-in;
-webkit-mask-composite: destination-out;
-webkit-mask-composite: destination-atop;
-webkit-mask-composite: xor;

/* グローバル値 */
-webkit-mask-composite: inherit;
-webkit-mask-composite: initial;
-webkit-mask-composite: unset;
```

> **Note:** この標準外のプロパティの一部を別のキーワードでカバーする、標準化された {{CSSxRef("mask-composite")}} プロパティがあります。

## 構文

### 値

- `clear`
  - : 元のマスク画像と合成用マスク画像の重なり合ったピクセルがクリアされます。
- `copy`
  - : コピー元のマスク画像をコピー先のマスク画像に置き換えます。
- `source-over`
  - : 元のマスク画像を合成用のマスク画像の上にレンダリングします。
- `source-in`
  - : 元のマスク画像と合成用マスク画像の重なり合ったピクセルが、元のマスク画像のピクセルで置き換えられ、それ以外のピクセルはクリアされます。
- `source-out`
  - : 元のマスク画像と合成用マスク画像の重なり合ったピクセルがクリアされ、元のマスク画像の残りのピクセルがすべてレンダリングされます。
- `source-atop`
  - : 合成用マスク画像のピクセルがレンダリングされます。元のマスク画像のピクセルは、合成用マスク画像の非透過部分と重なっている場合にのみレンダリングされます。これにより、元のマスク画像の効果はありません。
- `destination-over`
  - : 合成用マスク画像は、元のマスク画像の上にレンダリングされます。
- `destination-in`
  - : 元のマスク画像と合成用マスク画像で重複するピクセルは、合成用マスク画像のピクセルのままとなり、それ以外のピクセルはクリアされます。
- `destination-out`
  - : 元のマスク画像と合成用マスク画像の重なり合ったピクセルはクリアされ、元のマスク画像の残りのピクセルはすべてレンダリングされます。
- `destination-atop`
  - : 元のマスク画像のピクセルがレンダリングされます。合成用マスク画像のピクセルは、合成用マスク画像の非透過部分と重なっている場合にのみレンダリングされます。これにより、合成用マスク画像は何の影響も受けません。
- `xor`
  - : 元のマスク画像と合成用マスク画像の重なっているピクセルは、両者が完全に不透明であれば完全に透明になります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### XOR で合成する

```css
.example {
  -webkit-mask-image: url(mask1.png), url('mask2.png');
  -webkit-mask-composite: xor, source-over;
}
```

## 仕様書

標準には含まれていません。このプロパティは {{CSSxRef("mask-composite")}} として異なる値で定義されています。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("mask-composite")}}
