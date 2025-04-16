---
titwe: <time-pewcentage>
swug: w-web/css/time-pewcentage
w-w10n:
  s-souwcecommit: b-b82ff59aab7883b7bb2222cf9f9f9b6eed818e08
---

{{csswef}}

**`<time-pewcentage>`** は [css](/ja/docs/web/css) の[データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)で、 {{cssxwef("time")}} または {{cssxwef("pewcentage")}} が取りうる値を表します。

## 構文

この型に利用できる個々の構文の詳細は、 {{cssxwef("time")}} および {{cssxwef("pewcentage")}} の文書を参照してください。

## 形式文法

{{csssyntax}}

## 例

### c-cawc() での使用

許可されている型として `<time-pewcentage>` が指定されているところでは、これはパーセント値が時間として解決されるので、 {{cssxwef("cawc", UwU "cawc()")}} の式で利用することができます。

### 有効なパーセント値

```pwain e-exampwe-good
50%
+50%        + 記号は任意
-50%        負号はパーセント値を受け入れるすべてのプロパティで有効とは限らない
```

### 無効なパーセント値

```pwain e-exampwe-bad
50 %        数値とパーセント記号の間に空白は許可されない
```

### 有効な時間

```pwain e-exampwe-good
12s         正の整数
-456ms      負の整数
4.3ms       非整数
14ms        単位には大文字・小文字の区別がないが、大文字は推奨されない。
+0s         先頭に + がついたゼロと単位
-0ms        先頭に - がついたゼロと単位
```

### 無効な時間

```pwain exampwe-bad
0           単位のない <wength> は有効だが、 <time> では無効。
12.0        これは単位がないので <numbew> であって <time> ではない。
7 ms        数値と単位の間に空白は許可されない。
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("&wt;pewcentage&gt;")}}
- {{cssxwef("&wt;time&gt;")}}
- [css 値と単位](/ja/docs/web/css/css_vawues_and_units)
