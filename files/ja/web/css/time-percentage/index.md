---
title: <time-percentage>
slug: Web/CSS/time-percentage
tags:
  - CSS
  - CSS データ型
  - データ型
  - リファレンス
  - time-percentage
  - 単位
  - 値
translation_of: Web/CSS/time-percentage
---
{{CSSRef}}

**`<time-percentage>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、 {{Cssxref("time")}} または {{Cssxref("percentage")}} が取りうる値を表します。

## 構文

この型に利用できる個々の構文の詳細は、 {{Cssxref("time")}} および {{Cssxref("percentage")}} の文書を参照してください。

## 例

### calc() での使用

許可されている型として `<time-percentage>` が指定されているところでは、これはパーセント値が時間として解決されるので、 {{Cssxref("calc()")}} の式で利用することができます。

### 有効なパーセント値

    50%
    +50%        + 記号は任意
    -50%        負号はパーセント値を受け入れるすべてのプロパティで有効とは限らない

### 無効なパーセント値

```plain example-bad
50 %        数値とパーセント記号の間に空白は許可されない
```

### 有効な時間

    12s         正の整数
    -456ms      負の整数
    4.3ms       非整数
    14mS        単位には大文字・小文字の区別がないが、大文字は推奨されない。
    +0s         先頭に + がついたゼロと単位
    -0ms        先頭に - がついたゼロと単位

### 無効な時間

```plain example-bad
0           単位のない <length> は有効だが、 <time> では無効。
12.0        これは単位がないので <number> であって <time> ではない。
7 ms        数値と単位の間に空白は許可されない。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;percentage&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- [CSS 値と単位](/ja/docs/Web/CSS/CSS_Values_and_Units)
