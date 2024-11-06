---
title: NaN (非数)
slug: Glossary/NaN
---

{{GlossarySidebar}}

非数(英語：Not a Number)とは未定義な値か、特に浮動小数点数の計算の結果で、表すことができない数値({{Glossary("Type", "データ型")}})のことを言います。

例えば、無限、０で割り算された結果、未定義、負数の平方根 (浮動小数点数は実数ですが、これは虚数です) などは非数と言います。

かんたんに言うと、{{glossary("JavaScript")}} プログラムで、2 つの変数で割り算を行うと、結果が NaN (JavaScript では "undefined" と定義されています)になる可能性があるとします。この場合、この割り算はプログラムを壊す可能性があります。ここで、この計算が大きなアルゴリズムの小さな一部分である場合、実際どこに問題があったかを理解するのはとても苦痛です。幸いにも、計算結果が NaN となり、除数が 0 を取りえることがわかるため、最初にそうした計算を防ぐためのテスト条件を設けることや、起こったあとに通知することができます。

## もっと学ぶ

### 一般的な知識

- Wikipedia による[NaN](https://ja.wikipedia.org/wiki/NaN)

### 技術情報

- [JavaScript での非数](/ja/docs/Web/JavaScript/Reference/Global_Objects/NaN)
