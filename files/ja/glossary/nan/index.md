---
title: NaN (非数)
slug: Glossary/NaN
tags:
  - CodingScripting
  - Computing
  - Glossary
  - NaN
  - 用語集
  - 非数
translation_of: Glossary/NaN
---
<p>非数(英語：Not a Number)とは未定義な値か、特に<span class="text">浮動小数点数の計算の結果で、</span>表すことができない数値({{Glossary("Type", "データ型")}})のことを言います。</p>

<p>例えば、無限、０で<span class="text">割<span>り</span>算された結果、未定義、</span>負数の平方根 (浮動小数点数は実数ですが、これは虚数です) などは非数と言います。</p>

<p>かんたんに言うと、{{glossary("JavaScript")}} プログラムで、2つの変数で割り算を行うと、結果が NaN (JavaScript では "undefined" と定義されています)になる可能性があるとします。この場合、この割り算はプログラムを壊す可能性があります。ここで、この計算が大きなアルゴリズムの小さな一部分である場合、実際どこに問題があったかを理解するのはとても苦痛です。幸いにも、計算結果が NaN となり、除数が 0 を取りえることがわかるため、最初にそうした計算を防ぐためのテスト条件を設けることや、起こったあとに通知することができます。</p>

<h2 id="もっと学ぶ" style="line-height: 30px;">もっと学ぶ</h2>

<h3 id="一般的な知識" style="line-height: 24px;">一般的な知識</h3>

<ul>
 <li>Wikipedia による{{Interwiki("wikipedia", "NaN")}}</li>
</ul>

<h3 id="Technical_information" name="Technical_information">技術情報</h3>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/NaN">JavaScript での非数</a></li>
</ul>
