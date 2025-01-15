---
title: hwb()
slug: Web/CSS/color_value/hwb
l10n:
  sourceCommit: 0121647f4ef17c1e9cf31e9f27535f0c29f3c84f
---

{{CSSRef}}

**`hwb()`** 関数記法は、指定された色を色相、白色度、黒色度による {{glossary("RGB", "sRGB")}} 色によって表現します。オプションのアルファ成分は、その色の透明度を表します。

{{EmbedInteractiveExample("pages/css/function-hwb.html")}}

## 構文

```css
hwb(194 0% 0%) /* #00c3ff */
hwb(194 0% 0% / .5) /* #00c3ff with 50% opacity */
```

### 値

- 関数記法: `hwb(H W B[ / A])`

- `H`

  - : 色相角を表す {{CSSXref("&lt;number&gt;")}} または {{CSSXref("&lt;angle&gt;")}}、またはキーワード `none`。この型の詳細は {{CSSXref("&lt;hue&gt;")}} のリファレンスにあります。

- `W`, `B`

  - : {{CSSXref("&lt;percentage&gt;")}} またはキーワード `none` であり、それぞれ白色度と黒色度を表します。これらは白と黒が混合される量を、 `0%` （白色度または黒色度なし）から `100%` （白色度または黒色度が最高）で指定します。

    `W + B = 100%` グレーの濃淡を定義します。 `W + B > 100%` である場合、 `W` および `B` はそれぞれ `W / (W + B)` および `B / (W + B)` で正規化されます。

- `A` {{optional_inline}}

  - : {{CSSXref("&lt;alpha-value&gt;")}} またはキーワード `none` です。 `1` は `100%` （完全に不透明）に対応します。

> [!NOTE]
> この関数記法は sRGB 値に直列化され、赤、緑、青の成分の値は直列化の際に丸められる可能性があります。

> **メモ:** `none` の効果については[色成分の欠落](/ja/docs/Web/CSS/color_value#色成分の欠落)を参照してください。

### 形式文法

{{csssyntax}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSXref("&lt;color&gt;")}}: すべての色記法の一覧
- {{CSSXref("&lt;hue&gt;")}}: 色の色相角を表すデータ型
