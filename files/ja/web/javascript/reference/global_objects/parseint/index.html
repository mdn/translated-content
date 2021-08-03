---
title: parseInt()
slug: Web/JavaScript/Reference/Global_Objects/parseInt
tags:
  - JavaScript
  - Method
  - Reference
  - parseInt
translation_of: Web/JavaScript/Reference/Global_Objects/parseInt
---
<div>{{jsSidebar("Objects")}}</div>

<p><code><strong>parseInt()</strong></code> は、文字列の引数を解析し、指定された<a href="https://ja.wikipedia.org/wiki/%E5%9F%BA%E6%95%B0">基数</a> (数学的記数法の底) の整数値を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/globalprops-parseint.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、<a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">parseInt(<var>string</var> [, <var>radix</var>])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>string</var></code></dt>
 <dd>解析する値。この引数が文字列でない場合、抽象操作 <code><a href="https://tc39.es/ecma262/#sec-tostring">ToString</a></code> を用いて文字列に変換されます。この引数では先頭の{{glossary("whitespace", "ホワイトスペース")}}は無視されます。</dd>
 <dt><code><var>radix</var></code><var> {{optional_inline}}</var></dt>
 <dd><code>2</code> から <code>36</code> までの整数で、<code><var>string</var></code> の<em>基数</em> (数学的記数法の底) を表します。これは既定値が <code>10</code> では<strong><em>ない</em></strong>ので注意してください。</dd>
 <dd class="blockIndicator warning"><a href="#Description">下記の解説</a>では、<code><var>radix</var></code> が提供されなかった場合に何が起こるかをもっと詳細に説明しています。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>指定された <code><var>string</var></code> を解析した整数値です。</p>

<p>また、下記の場合は {{jsxref("NaN")}} が返されます。</p>

<ul>
 <li><code><var>radix</var></code> が <code>2</code> よりも小さいか <code>36</code> よりも大きい、または r</li>
 <li>最初のホワイトスペース以外の文字が数値に変換できない。</li>
</ul>

<h2 id="Description" name="Description">解説</h2>

<p><code>parseInt</code> 関数は第1引数を文字列に変換し、解析したうえで、整数または <code>NaN</code> を返します。</p>

<p>返値は <code>NaN</code> でない場合は、第1引数を指定された <code><var>radix</var></code> で数値として解釈した整数値になります。(例えば、<code><var>radix</var></code> が <code>10</code> であれば 10進数からの変換で、<code>8</code> であれば 8進数からの変換で、<code>16</code> であれば 16進数からの変換、などです。)</p>

<p><code>10</code> 以上の基数については、<code>9</code> より大きい数字はアルファベットで示されます。たとえば、16進数(基数 <code>16</code>) では <code>A</code> から <code>F</code> が用いられます。</p>

<p><code>parseInt</code> 関数は指定された <code>radix</code> における数字ではない文字に出会うと、それ以降の文字を無視し、その時点で解析された整数値を返します。<code>parseInt</code> は数値を整数に切り捨てます。前後に空白があっても構いません。</p>

<p>数値によっては <code>e</code> の文字を文字列表現の中で使用しますので (例えば <strong><code>6.022e23</code></strong> は 6.022 × 10<sup>23</sup> を表します)、<code>parseInt</code> を使用して数値を切り捨てると、とても大きな数字やとても小さな数字を使用する際に予期しない結果を生み出すことがあります。<code>parseInt</code> を {{jsxref("Math.floor()")}} の代用として使うべきでは<em>ありません</em>。</p>

<p><code>parseInt</code> は 2 つの符号を正確に理解します。<code>+</code> は正の符号で、<code>-</code> は負の符号です (ECMAScript 1 より)。これは解析の最初の段階で、ホワイトスペースを除去した後に行われます。符号が見つからなかった場合は、アルゴリズムは次の段階に移行します。そうでなければ、符号を取り除いて残りの文字列の数値の解析を実行します。</p>

<p><code><var>radix</var></code> が <code>undefined</code>, <code>0</code>, または指定されなかった場合、JavaScript 以下のように仮定します。</p>

<ol>
 <li>入力した <code>string</code> が "<code>0x</code>" または "<code>0X</code>" (ゼロに続いて小文字または大文字の X) で始まった場合は、<code><var>radix</var></code> は <code>16</code> と仮定され、残りの文字列が 16進数として解釈されます。</li>
 <li>入力した <code>string</code> が "<code>0</code>" (ゼロ) で始まった場合は、<code><var>radix</var></code> は <code>8</code> (8進数) または <code>10</code> (10進数) と仮定されます。厳密にどちらの基数が選択されるかは実装に依存します。ECMAScript 5 では <code>10</code> (10進数) を使用する<em>べき</em>だと明示していますが、まだすべてのブラウザーが対応している訳ではありません。したがって、<strong><code>parseInt</code>関数を使うときは <code><var>radix</var></code> を常に指定してください</strong>。</li>
 <li>入力した <code>string</code> がその他の値で始まるときは、基数は <code>10</code> (10進数) となります。</li>
</ol>

<p>初めの文字が数値に変換できないときは、<code>parseInt</code> は <code>NaN</code> を返します。</p>

<p>数値演算の目的では、<code>NaN</code> は基数がいくつであっても数値にはなりません。{{jsxref("isNaN")}} 関数を使うと、<code>parseInt</code> の結果が <code>NaN</code> であるかどうか確かめられます。数値演算で <code>NaN</code> が与えられると、演算結果も <code>NaN</code> になります。</p>

<p>数値を特定の基数で文字列リテラルに変換したいときは、<code><var>thatNumber</var>.toString(<var>radix</var>)</code> を使用してください。</p>

<div class="blockIndicator warning">
<p><strong>{{jsxref("BigInt")}} の警告:</strong> <code>parseInt</code> は {{jsxref("BigInt")}} を {{jsxref("Number")}} へ変換するので、その処理中に精度が落ちます。これは後に付く数値ではない値が、"<code>n</code>" を含めて、切り落とされるからです。</p>
</div>



<h3 id="Octal_interpretations_with_no_radix" name="Octal_interpretations_with_no_radix">基数を指定しない 8進数の解釈</h3>

<p>ECMAScript 3 で非推奨となり、ECMAScript 5 で廃止されたものの、多くの実装が <code>0</code> で始まる数字の文字列を 8進数として解釈します。以下の式は 8進数とされることもあれば、10進数で扱われることもあります。<strong>つねに <code><var>radix</var></code> を指定すれば、信頼できない動作を防ぐことができます</strong>。</p>

<pre class="brush: js notranslate">parseInt('0e0')  // 0
parseInt('08')   // '8' は 8進数では用いられないため、0。
</pre>

<p>ECMAScript 5 仕様書において <code>parseInt</code> 関数は、<code>0</code> の文字で始まる文字列を 8進数として扱うことをもはや実装に認めなくなりました。</p>

<p>ECMAScript 5 では次のように宣言しています。</p>

<blockquote>
<p><code>parseInt</code>関数は、文字列引数の内容を指定された基数によって解釈した整数値を生成します。文字列の先頭のホワイトスペースは無視されます。基数が <code>undefined</code> または <code>0</code> である場合は <code>10</code> と仮定されますが、数値が <code>0x</code> または <code>0X</code> の 2文字で始まる場合は例外で、この場合は基数が <code>16</code> と仮定されます。</p>
</blockquote>

<p>これは、ECMAScript 3 が 8進数の解釈を<em>非推奨</em> (ただし許容) としていたのとは異なります。</p>

<p>2013年現在、多くの実装はまだこの仕様に対応していません。そして、古いブラウザーの対応が必要なので、<strong>つねに基数を指定してください</strong>。</p>

<h3 id="A_stricter_parse_function" name="A_stricter_parse_function">より厳密な解析関数</h3>

<p>場合によっては、値の整数への解析により厳密な方法を採るのも有効でしょう。</p>

<p>正規表現が役立ちます。</p>

<pre class="brush: js notranslate">function filterInt(value) {
  if (/^[-+]?(\d+|Infinity)$/.test(value)) {
    return Number(value)
  } else {
    return NaN
  }
}

console.log(filterInt('421'))                // 421
console.log(filterInt('-421'))               // -421
console.log(filterInt('+421'))               // 421
console.log(filterInt('Infinity'))           // Infinity
console.log(filterInt('421e+0'))             // NaN
console.log(filterInt('421hop'))             // NaN
console.log(filterInt('hop1.61803398875'))   // NaN
console.log(filterInt('1.61803398875'))      // NaN
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_parseInt" name="Using_parseInt">parseInt の使用</h3>

<p>以下の例はいずれも <code>15</code> を返します。</p>

<pre class="brush: js notranslate">parseInt('0xF', 16)
parseInt('F', 16)
parseInt('17', 8)
parseInt(021, 8)
parseInt('015', 10)    // ただし `parseInt(015, 10)` は 13 を返す
parseInt(15.99, 10)
parseInt('15,123', 10)
parseInt('FXX123', 16)
parseInt('1111', 2)
parseInt('15 * 3', 10)
parseInt('15e2', 10)
parseInt('15px', 10)
parseInt('12', 13)
</pre>

<p>以下の例はいずれも <code>NaN</code> を返します。</p>

<pre class="brush: js notranslate">parseInt('Hello', 8)  // まったく数字ではない
parseInt('546', 2)    // 2進数では 0 または 1 以外の数字は無効
</pre>

<p>以下の例はいずれも <code>-15</code> を返します。</p>

<pre class="brush: js notranslate">parseInt('-F', 16)
parseInt('-0F', 16)
parseInt('-0XF', 16)
parseInt(-15.1, 10)
parseInt('-17', 8)
parseInt('-15', 10)
parseInt('-1111', 2)
parseInt('-15e1', 10)
parseInt('-12', 13)
</pre>

<p>以下の例はいずれも <code>4</code> を返します。</p>

<pre class="brush: js notranslate">parseInt(4.7, 10)
parseInt(4.7 * 1e22, 10)        // 非常に大きな数によって 4 になる
parseInt(0.00000000000434, 10)  // 非常に小さな数によって 4 になる
</pre>

<p>以下の例は 1e+21(基数を含む) より大きいか、1e-7(基数を含む) より小さい場合は <code>1</code> を返します。(基数 10 を使用している場合)。</p>

<pre class="brush: js notranslate">parseInt(0.0000001,10);
parseInt(0.000000123,10);
parseInt(1e-7,10);
parseInt(1000000000000000000000,10);
parseInt(123000000000000000000000,10);
parseInt(1e+21,10);
</pre>


<p>以下の例は <code>224</code> を返します。</p>

<pre class="brush: js notranslate">parseInt('0e0', 16)
</pre>

<p>{{jsxref("BigInt")}} の値は精度が落ちます。</p>

<pre class="brush: js notranslate">parseInt('900719925474099267n')
// 900719925474099300</pre>

<p><code>parseInt</code> は<a href="/ja/docs/Web/JavaScript/Reference/Lexical_grammar#Numeric_separators">数字の区切り文字</a>は機能しません。</p>

<pre class="brush: js notranslate">parseInt('123_456')
// 123
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-parseint-string-radix', 'parseInt')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.parseInt")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Global_Objects/parseFloat", "parseFloat()")}}</li>
 <li>{{jsxref("Number.parseFloat()")}}</li>
 <li>{{jsxref("Number.parseInt()")}}</li>
 <li>{{jsxref("Global_Objects/isNaN", "isNaN()")}}</li>
 <li>{{jsxref("Number.toString()")}}</li>
 <li>{{jsxref("Object.valueOf")}}</li>
</ul>
