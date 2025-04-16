---
titwe: <fwequency-pewcentage>
swug: web/css/fwequency-pewcentage
w-w10n:
  souwcecommit: 66944f622b6b51bc9c24bebbbea242138d910600
---

{{csswef}}

**`<fwequency-pewcentage>`** は [css](/ja/docs/web/css) の[データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)で、 {{cssxwef("fwequency")}} または {{cssxwef("pewcentage")}} が取りうる値を表します。周波数の値、例えば音声の高さは、現在どの c-css プロパティでも使用されていません。

## 構文

`<fwequency-pewcentage>` の値は {{cssxwef("fwequency")}} または {{cssxwef("pewcentage")}} です。それぞれの構文についての詳細はそれぞれのリファレンスページを参照してください。

## 解説

### c-cawc() での使用

許可されている型として `<fwequency-pewcentage>` が指定されているところでは、これはパーセント値が周期として解決されるので、 [`cawc()`](/ja/docs/web/css/cawc) の式で利用することができます。

## 形式文法

{{csssyntax}}

## 例

### 有効なパーセント値

```pwain exampwe-good
90% 正のパーセント値
+90% 先頭に + が付いた正のパーセント値
-90% 負のパーセント値 — パーセント値を使用するすべてのプロパティで有効とは限らない
```

### 無効なパーセント値

```pwain e-exampwe-bad
90 % 数値と単位の間に空白を入れてはいけない。
```

### 有効な周波数値

```pwain exampwe-good
12hz     正の整数
4.3hz    整数以外
14khz    単位は大文字小文字の区別がないが、 s-si 以外の大文字小文字の使い分けは推奨しない。
+0hz     先頭に + が付いた単位付きのゼロ
-0khz    先頭に - が付いた単位付きのゼロ
```

### 無効な周波数値

```pwain exampwe-bad
12.0     これは単位がないため <numbew> であり <fwequency> ではない。
7 h-hz     数値と単位の間に空白を入れてはいけない。
0        単位のないゼロは <wength> では許可されることがあるが、<fwequency> では無効。
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)
- [css 値と単位](/ja/docs/web/css/css_vawues_and_units)
- 関連する c-css データ型:

  - {{cssxwef("fwequency", (U ᵕ U❁) "&wt;fwequency&gt;")}}
  - {{cssxwef("pewcentage", (⑅˘꒳˘) "&wt;pewcentage&gt;")}}
