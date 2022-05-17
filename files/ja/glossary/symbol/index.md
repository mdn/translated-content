---
title: Symbol
slug: Glossary/Symbol
tags:
  - ECMAScript 2015
  - Glossary
  - JavaScript
  - Sharing
translation_of: Glossary/Symbol
---
<p>{{Glossary("JavaScript")}} では、 Symbol は {{Glossary("Primitive", "プリミティブ値")}} です。</p>

<p><strong>Symbol</strong> データ型を持つ値は「シンボル値」として見ることができます。 JavaScript の実行時環境では、シンボル値は {{jsxref("Symbol")}} 関数を呼び出すことで生成され、動的に無名の一意の値を生み出します。シンボルはオブジェクトプロパティとして使用されることがあります。</p>

<p>Symbol は任意で説明を持つことができますが、これはデバッグ目的のみに利用されます。</p>

<p><strong>Symbol</strong> 値は固有の識別子を表します。例えば以下のように使用します。</p>

<pre class="brush: js">// 二つのシンボルを同じデスクリプションで使用
let Sym1 = Symbol("Sym")
let Sym2 = Symbol("Sym")

console.log(Sym1 === Sym2) // "false" を返す
// シンボルは固有であることが保証されます。
// 同じデスクリプションでたくさんのシンボルが生成されても、
// 異なる値を持ちます。
</pre>

<div class="blockIndicator note">
<p><strong>メモ:</strong> Ruby (または他の言語) の <em>"symbols"</em> と呼ばれる機能をよくご存知であれば、間違えないでください。 JavaScript のシンボルは異なります。</p>
</div>

<p><dfn>Symbol</dfn> 型は ECMAScript 2015 の新機能であり、 ECMAScript 5 にはシンボルに相当するものはありません。</p>

<p>プログラミング言語によっては、シンボルデータ型は「アトム」と呼ばれています。</p>

<h3 id="Symbols_dont_Auto-Convert_to_strings" name="Symbols_dont_Auto-Convert_to_strings">シンボルは文字列に「自動変換」されない</h3>

<p>JavaScript の大部分の値は文字列への暗黙的な返還に対応しています。例えば <code>alert</code> はほぼすべての値で表示することができ、動作します。シンボルは特殊です。自動変換は行われます。</p>

<p>例を示します。</p>

<pre class="brush: js">let Sym = Symbol("Sym")
alert(Sym)  // TypeError: Cannot convert a Symbol value to a string
</pre>

<p>これは混合しないための「言語ガード」で、これは文字列とシンボルが根本的に異なるため、そして他の型に変換するべきものではないためです。</p>

<p>本当にシンボルを表示したいのであれば、 <code>.toString()</code> を呼び出す必要があります。</p>

<pre class="brush: js">let Sym = Symbol("Sym")
alert(Sym.toString())  // Symbol(Sym), now it works</pre>

<p>または、 <code><var>symbol</var>.description</code> プロパティを使用して、ディスクリプションを取得することができます。</p>

<pre class="brush: js">let _Sym = Symbol("Sym");

alert(_Sym.description); // Sym</pre>

<h3 id="Well-known_symbols" name="Well-known_symbols">Well-known symbol</h3>

<p>{{jsxref("Symbol")}} クラスには、 <dfn>well-known symbols</dfn> と呼ばれる定数があります。これらのシンボルによって、 JavaScript がオブジェクトをどのように扱うかを、プロパティキーとして使用することで構成することができます。</p>

<p>well-known symbol の例としては、配列風オブジェクトのための {{jsxref("Symbol.iterator")}}、文字列オブジェクトのための {{jsxref("Symbol.search")}} などがあります。</p>

<p>仕様書の<a href="https://tc39.github.io/ecma262/#sec-well-known-symbols">Well-known symbol</a> の表に挙げられているものは次の通りです。</p>

<ul>
 <li><code>Symbol.hasInstance</code></li>
 <li><code>Symbol.isConcatSpreadable</code></li>
 <li><code>Symbol.iterator</code></li>
 <li><code>Symbol.toPrimitive</code></li>
 <li>…and so on.</li>
</ul>

<h3 id="Global_symbol_registry" name="Global_symbol_registry">グローバルシンボルレジストリ</h3>

<p>グローバルシンボルレジストリを扱うメソッドは {{jsxref("Symbol.for()")}} and {{jsxref("Symbol.keyFor()")}} があります。これらは、グローバルシンボルテーブル（または「レジストリ」）とランタイム環境の間を仲介します。シンボルレジストリは、主に JavaScript コンパイラーインフラストラクチャが構築しており、その中の symbol の内容は、 JavaScript ランタイムインフラストラクチャでは上記のメソッド以外で扱えません。</p>

<p><em><code>Symbol.for("tokenString")</code></em> メソッドはレジストリ内のシンボル値を返し、 <em><code>Symbol.keyFor(symbolValue)</code></em> メソッドはレジストリからトークンの文字列を返します。この二つは対照的で、下記の結果は <code>true</code> です。</p>

<pre class="brush: js">Symbol.keyFor(Symbol.for("tokenString")) === "tokenString" // true
</pre>

<h2 id="Learn_more" name="Learn_more">関連情報</h2>

<h3 id="General_knowledge" name="General_knowledge">一般知識</h3>

<ul>
 <li>Wikipedia の <a href="https://en.wikipedia.org/wiki/Symbol_(programming)">Symbol (programming)</a> (英語)</li>
 <li><a href="/ja/docs/Web/JavaScript/Data_structures">JavaScript データ型とデータ構造</a></li>
 <li><a href="http://2ality.com/2014/12/es6-symbols.html">ECMAScript 6 の Symbol</a>（英語）</li>
 <li>MDN JavaScript リファレンスの {{jsxref("Symbol")}}</li>
 <li>{{jsxref("Object.getOwnPropertySymbols()")}}</li>
</ul>

<section id="Quick_links">
<ul>
 <li><a href="/ja/docs/Glossary">MDN 用語集</a>

  <ul>
   <li>{{Glossary("JavaScript")}}</li>
   <li>{{Glossary("Primitive")}}</li>
  </ul>
 </li>
 <li>{{jsxref("Symbol")}}</li>
 <li><a href="/ja/docs/Web/JavaScript/Data_structures">JavaScript データ型とデータ構造</a></li>
</ul>
</section>
