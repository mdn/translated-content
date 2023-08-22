---
title: <hex-color>
slug: Web/CSS/hex-color
l10n:
  sourceCommit: 84cb4980e4de52fa685e824e6cba44d7887c7a27
---

{{CSSRef}}

**`<hex-color>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、[sRGB](/ja/docs/Glossary/RGB) 色の原色成分（赤、緑、青）を 16 進数で記述し、その透明度も記述する記法です。 [`<color>`](/ja/docs/Web/CSS/color_value) 型が使用できるところならどこでも使用することができます。

`<hex-color>` 値は、 [`<color>`](/ja/docs/Web/CSS/color_value) が使用できるところならどこでも使用することができます。

## 構文

```
#RGB        // 値 3 つの構文
#RGBA       // 値 4 つの構文
#RRGGBB     // 値 6 つの構文
#RRGGBBAA   // 値 8 つの構文
```

### 値

- `R` または `RR`
  - : 色の赤の成分であり、`0` から `ff` (255) までの間の 16 進数で、大文字小文字を区別しません。数値が 1 つだけの場合は `1` が `11` になるように複製されます。
- `G` または `GG`
  - : 色の緑の成分であり、`0` から `ff` (255) までの間の 16 進数で、大文字小文字を区別しません。数値が 1 つだけの場合は `c` が `cc` になるように複製されます。
- `B` または `BB`
  - : 色の青の成分であり、`0` から `ff` (255) までの間の 16 進数で、大文字小文字を区別しません。数値が 1 つだけの場合は `9` が `99` になるように複製されます。
- `A` または `AA` {{optional_inline}}
  - : 色のアルファ成分であり、`0` から `ff` (255) までの間の 16 進数で、大文字小文字を区別しません。数値が 1 つだけの場合は `e` が `ee` になるように複製されます。 `0` は完全に透明な色で、 `ff` は完全に不透明な色です。

> **メモ:** 構文は大文字小文字の区別がなく、 `#00ff00` は `#00FF00` と同じです。

## 例

```html
<p>Hexadecimal syntax for a fully opaque hot pink</p>

#f09
<div class="c1"></div><br />
#F09
<div class="c2"></div><br />
#ff0099
<div class="c3"></div><br />
#FF0099
<div class="c4"></div><br />
```

```css
div {
  width: 40px;
  height: 40px;
}
.c1 {
  background: #f09;
}
.c2 {
  background: #f09;
}
.c3 {
  background: #ff0099;
}
.c4 {
  background: #ff0099;
}
```

{{EmbedLiveSample("Examples", "100%", "450")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`<color>`](/ja/docs/Web/CSS/color_value) は、これらの値が所属するデータ型です。
- [`rgb()`](/ja/docs/Web/CSS/color_value/rgb) は、色の 3 成分および透明度を 10 進数で使用するように設定する関数です。
