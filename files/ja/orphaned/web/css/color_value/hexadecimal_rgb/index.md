---
title: 16 進カラー構文
slug: orphaned/Web/CSS/color_value/hexadecimal_rgb
tags:
  - Reference
  - color
translation_of: Web/CSS/color_value/hexadecimal_rgb
original_slug: Web/CSS/color_value/hexadecimal_rgb
browser-compat: css.types.color.rgb_hexadecimal_notation
---
{{CSSRef}}

**16 進カラー構文**は [sRGB](/ja/docs/Glossary/RGB) カラーを 16 進数で記述するための記法で、その原色成分（赤、緑、青）と透明度を記述します。[`<color>`](/ja/docs/Web/CSS/color_value) 型が許容される箇所であればどこでも使うことができます。

## 構文

```
#RGB        // 3 桁の構文
#RGBA       // 4 桁の構文
#RRGGBB     // 6 桁の構文
#RRGGBBAA   // 8 桁の構文
```

### 値

- `R` または `RR`
  - : 色の**赤**成分を `0` から `ff` (255) までの 16 進数（大文字と小文字を区別しない）で指定します。数字が 1 桁の場合は同じ数字 2 桁と解釈されます。`1` は `11` を意味します。
- `G` または `GG`
  - : 色の**緑**成分を `0` から `ff` (255) までの 16 進数（大文字と小文字を区別しない）で指定します。数字が 1 桁の場合は同じ数字 2 桁と解釈されます。`c` は `cc` を意味します。
- `B` または `BB`
  - : 色の**青**成分を `0` から `ff` (255) までの 16 進数（大文字と小文字を区別しない）で指定します。数字が 1 桁の場合は同じ数字 2 桁と解釈されます。`9` は `99` を意味します。
- `A` または `AA` {{optional_inline}}
  - : 色の透明度を示す**アルファ**成分を `0` から `ff` (255) までの 16 進数（大文字と小文字を区別しない）で指定します。数字が 1 桁の場合は同じ数字 2 桁と解釈されます。`e` は `ee` を意味します。`0` は完全な透明色を、`ff` は完全な不透明色を表します。

> **Note:** この構文は大文字と小文字を区別しないため `#00ff00` は `#00FF00` と同値です。

## 例

```html
/* 不透明な濃いピンク色の 16 進構文 */
#f09 <div class="c1"></div>
#F09 <div class="c2"></div>
#ff0099 <div class="c3"></div>
#FF0099 <div class="c4"></div>
```

```css
div {width: 40px; height: 40px;}
.c1 { background: #f09}
.c2 { background: #F09}
.c3 { background: #ff0099}
.c4 { background: #FF0099}
```

{{EmbedLiveSample("Examples", "100%", "450")}}

## 仕様書

{{Specifications}}

## ブラウザー互換性

{{Compat}}

## 関連情報

- [`<color>`](/ja/docs/Web/CSS/color_value) これらのキーワードが属するデータ型
- [`rgb()`](/ja/docs/Web/CSS/color_value/rgb) 色の三成分および透明度を 10 進数で設定する関数
