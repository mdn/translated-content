---
title: <integer>
slug: Web/CSS/integer
tags:
  - CSS
  - CSS データ型
  - リファレンス
  - ウェブ
translation_of: Web/CSS/integer
---
{{CSSRef}}

**`<integer>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、 {{cssxref("number")}} の特殊型であり、正と負の整数を表現します。整数は {{cssxref("column-count")}}, {{cssxref("counter-increment")}}, {{cssxref("grid-column")}}, {{cssxref("grid-row")}}, {{cssxref("z-index")}} など、数多くの CSS プロパティで使用することができます。

## 構文

`<integer>` データ型は 1 桁から数桁の 10 進数、 0 から 9 までを含み、任意でその前に単一の `+` または `-` の符号が付きます。整数に関連付けられた単位はありません。

> **Note:** 公式には、有効な `<integer>` 値の範囲は決められていません。 Opera では 2^15 - 1、 IE では2^20 - 1 まで、その他のブラウザーではそれ以上の値に対応しています。 CSS3 Values の策定中には対応すべき最小範囲について多くの議論がありました。 [LC 段階の 2012 年 4 月の最新の決定](https://lists.w3.org/Archives/Public/www-style/2012Apr/0633.html)では、 [-2^27 - 1; 2^27 - 1] でしたが、しかし 2^24 - 1 や 2^30 - 1 のような他の値も[提案されていました](https://lists.w3.org/Archives/Public/www-style/2012Apr/0530.html)。しかし、最新の仕様書では範囲を定めなくなりました。

## 補間

アニメーション時には、 `<integer>` データ型の値は離散的に整数を使用して補間されます。実数、すなわち浮動小数点で計算が行われた場合、離散値は [floor 関数](https://ja.wikipedia.org/wiki/%E5%BA%8A%E9%96%A2%E6%95%B0%E3%81%A8%E5%A4%A9%E4%BA%95%E9%96%A2%E6%95%B0)を使って求められます。補間の速度は、アニメーションに結びつけられた[タイミング関数](/ja/docs/Web/CSS/easing-function)で決められます。

## 例

### 有効な整数

    12          正の整数 (先頭の + なし)
    +123        正の整数 (先頭の + あり)
    -456        負の整数
    0           ゼロ
    +0          ゼロ、先頭の + つき
    -0          ゼロ、先頭の - なし

### 無効な整数

```plain example-bad
12.0        整数を表していますが、これは &lt;number&gt; であり、&lt;integer&gt; ではありません。
12.         小数点を含んではいけません。
+---12      先頭に置ける +/- は 1 つだけです。
ten         文字は使えません。
_5          記号は使えません。
\35         エスケープを使った Unicode 文字は、それが整数を表す場合でも (これは 5 です) 使えません。
\4E94       アラビア数字以外の数字は使えません (これは日本語の「五」です)。
3e4         指数表記は使えません。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;number&gt;")}}
