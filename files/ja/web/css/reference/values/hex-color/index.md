---
title: <hex-color>
slug: Web/CSS/Reference/Values/hex-color
original_slug: Web/CSS/hex-color
l10n:
  sourceCommit: ea76241c56cb4cc61dbd2898866f47cf60c745c1
---

**`<hex-color>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)で、[sRGB](/ja/docs/Glossary/RGB) 色の原色成分（赤、緑、青）を 16 進数で記述し、その透明度も記述する記法です。

`<hex-color>` 値は、 [`<color>`](/ja/docs/Web/CSS/Reference/Values/color_value) が使用できるところならどこでも使用することができます。

## 構文

```plain
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
  - : 色のアルファ成分であり、`0` から `ff` (255) までの間の 16 進数で、大文字小文字を区別しません。数値が 1 つだけの場合は `e` が `ee` になるように複製されます。 `0` または `00` は完全に透明な色で、 `f` または `ff` は完全に不透明な色です。

> [!NOTE]
> 構文は大文字小文字の区別がなく、 `#00ff00` は `#00FF00` と同じです。

## 例

### 完全に不透明なホットピンクの 16 進構文

#### HTML

```html
<span>
  #f09
  <div class="c1"></div>
</span>
<span>
  #F09
  <div class="c2"></div>
</span>
<span>
  #ff0099
  <div class="c3"></div>
</span>
<span>
  #FF0099
  <div class="c4"></div>
</span>
```

#### CSS

```css hidden
body {
  display: flex;
  justify-content: space-evenly;
}
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

#### 結果

{{EmbedLiveSample("完全に不透明なホットピンクの_16_進構文", "100%", 100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`<color>`](/ja/docs/Web/CSS/Reference/Values/color_value): 色のデータ型
- [`rgb()`](/ja/docs/Web/CSS/Reference/Values/color_value/rgb): 色の 3 成分および透明度を 10 進数で使用するように設定する関数
- [CSS 色](/ja/docs/Web/CSS/Guides/Colors)モジュール
