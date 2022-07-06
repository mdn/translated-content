---
title: <frequency-percentage>
slug: Web/CSS/frequency-percentage
tags:
  - CSS
  - CSS データ型
  - データ型
  - リファレンス
  - frequency-percentage
  - 単位
  - 値
browser-compat: css.types.frequency-percentage
translation_of: Web/CSS/frequency-percentage
---
{{CSSRef}}{{SeeCompatTable}}

**`<frequency-percentage>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、 {{Cssxref("frequency")}} または {{Cssxref("percentage")}} が取りうる値を表します。周波数の値、例えば音声の高さは、現在どの CSS プロパティでも使用されていません。

## 構文

`<frequency-percentage>` の値は {{Cssxref("frequency")}} または {{Cssxref("percentage")}} です。それぞれの構文についての詳細はそれぞれのリファレンスページを参照してください。

## 解説

### calc() での使用

許可されている型として `<frequency-percentage>` が指定されているところでは、これはパーセント値が周期として解決されるので、 [`calc()`](/ja/docs/Web/CSS/calc()) の式で利用することができます。

## 例

### 有効なパーセント値

``` plain example-good
90% 正のパーセント値
+90% 先頭に + が付いた正のパーセント値
-90% 負のパーセント値 — パーセント値を使用するすべてのプロパティで有効とは限らない
```

### 無効なパーセント値

```plain example-bad
90 % 数値と単位の間に空白を入れてはいけない。
```

### 有効な周波数値

``` plain example-good
12Hz     正の整数
4.3Hz    整数以外
14KhZ    単位は大文字小文字の区別がないが、 SI 以外の大文字小文字の使い分けは推奨しない。
+0Hz     先頭に + が付いた単位付きのゼロ
-0kHz    先頭に - が付いた単位付きのゼロ
```

### 無効な周波数値

```plain example-bad
12.0     これは単位がないため <number> であり <frequency> ではない。
7 Hz     数値と単位の間に空白を入れてはいけない。
0        単位のないゼロは <length> では許可されることがあるが、<frequency> では無効。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS データ型](/ja/docs/Web/CSS/CSS_Types)
- [CSS 値と単位](/ja/docs/Web/CSS/CSS_Values_and_Units)
- 関連する CSS データ型:

  - {{cssxref("frequency", "&lt;frequency&gt;")}}
  - {{cssxref("percentage", "&lt;percentage&gt;")}}
