---
title: parseInt()
slug: Web/JavaScript/Reference/Global_Objects/parseInt
tags:
  - Global method
  - parseInt
  - 整數
  - 進位制
translation_of: Web/JavaScript/Reference/Global_Objects/parseInt
---
<div>{{jsSidebar("Objects")}}</div>

<p><code><strong>parseInt()</strong></code> 函式能將輸入的字串轉成整數。</p>

<div>{{EmbedInteractiveExample("pages/js/globalprops-parseint.html")}}</div>

<h2 id="語法">語法</h2>

<pre class="syntaxbox">parseInt(<em>string</em>, <em>radix</em>);</pre>

<h3 id="參數">參數</h3>

<dl>
 <dt><code>string</code></dt>
 <dd>待轉成數字的字串。若 <code>string</code> 參數類型不是字串的話，會先將其轉成字串（相當於先執行 <code><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-tostring">ToString</a></code> 再執行 <code>parseInt</code>）空白值會被忽略。</dd>
 <dt><code>radix</code></dt>
 <dd>從 2 到 36，能代表該進位系統的數字。例如說指定 <code>10</code> 就等於指定十進位。<strong>一定要定義這個參數</strong>以避免他人的困惑、也好預估函式的行為。如果沒有指定 radix 的話，給出的結果會按照實做不同而異，請注意，通常預設值<strong>不是</strong> 10 進位。</dd>
</dl>

<h3 id="回傳值">回傳值</h3>

<p>藉由給定字串作轉換後的數字。若第一個字符無法轉換為數字，則回傳 {{jsxref("NaN")}}。</p>

<h2 id="說明">說明</h2>

<p><code>parseInt</code> 函式會把第一個參數變成字串、解析它、再回傳整數或是 <code>NaN</code>。如果不是 <code>NaN</code>，回傳值會把第一個參數，參照指定的 <var>radix</var> 後，以十進位表示。例如，<var>radix</var> 指定為 10 的話，它會以十進位為單位轉換、8 是八進位、16 是十六進位，依此類推。For radices above <code>10</code>, the letters of the alphabet indicate numerals greater than <code>9</code>. For example, for hexadecimal numbers (base 16), <code>A</code> through <code>F</code> are used.</p>

<p>如果說 <code>parseInt</code> 碰上了無法被 radix 指定的進位制所轉換的字元，它會忽略該字元、以及其後所有字元，並只回傳至該位置為止的解析數值結果。<code>parseInt</code> 將數字擷取、轉換成整數數值。 可以接受字串首尾出現空白。</p>

<p>Because some numbers include the <code>e</code> character in their string representation (e.g. <strong><code>6.022e23</code></strong>), using <code>parseInt</code> to truncate numeric values will produce unexpected results when used on very large or very small numbers. <code>parseInt</code> should not be used as a substitute for {{jsxref("Math.floor()")}}.</p>

<p>如果 <var>radix</var> 是 <code>undefined</code> 或 0（或留空）的話，JavaScript 會：</p>

<ul>
 <li>如果 <code>string</code> 由 "0x" 或 "0X" 開始，<var>radix</var> 會變成代表十六進位的 16，並解析字串的餘數。</li>
 <li>如果 <code>string</code> 由 0 開始，則 <var>radix</var> 會變成代表八進位的 8 或十進位的 10，但到底會變成 8 還是 10 則取決於各實做。ECMAScript 規定用代表十進位的 10，但也不是所有瀏覽器都支持。因此，<strong>使用 <code>parseInt</code> 時一定要指定 radix</strong>。</li>
 <li>如果 <code>string</code> 由其他字串開始，radix 就會是十進位的 10。</li>
</ul>

<p>如果第一個字串無法被解析為任何數字，<code>parseInt</code> 會回傳 <code>NaN</code>。</p>

<p>For arithmetic purposes, the <code>NaN</code> value is not a number in any radix. You can call the {{jsxref("isNaN")}} function to determine if the result of <code>parseInt</code> is <code>NaN</code>. If <code>NaN</code> is passed on to arithmetic operations, the operation results will also be <code>NaN</code>.</p>

<p>若想將數字轉成特定的進位制，可使用 <code>intValue.toString(radix)</code>。</p>

<h2 id="範例">範例</h2>

<h3 id="使用_parseInt">使用 <code>parseInt</code></h3>

<p>以下的範例，回傳的值均為 <strong><code>15</code></strong>：</p>

<pre class="brush: js">parseInt(" 0xF", 16);
parseInt(" F", 16);
parseInt("17", 8);
parseInt(021, 8);
parseInt("015", 10); // parseInt(015, 10); will return 15
parseInt(15.99, 10);
parseInt("15,123", 10);
parseInt("FXX123", 16);
parseInt("1111", 2);
parseInt("15*3", 10);
parseInt("15e2", 10);
parseInt("15px", 10);
parseInt("12", 13);
</pre>

<p>以下均回傳 <strong><code>NaN</code></strong>：</p>

<pre class="brush: js">parseInt("Hello", 8); // 根本不是數字
parseInt("546", 2);   // 在二進位無效
</pre>

<p>以下的範例，回傳的值均為 <strong><code>-15</code></strong>：</p>

<pre class="brush: js">parseInt("-F", 16);
parseInt("-0F", 16);
parseInt("-0XF", 16);
parseInt(-15.1, 10)
parseInt(" -17", 8);
parseInt(" -15", 10);
parseInt("-1111", 2);
parseInt("-15e1", 10);
parseInt("-12", 13);
</pre>

<p>下例會回傳 <strong><code>4</code></strong>：</p>

<pre class="brush: js">parseInt(4.7, 10);
parseInt(4.7 * 1e22, 10); // Very large number becomes 4
parseInt(0.00000000000434, 10); // Very small number becomes 4
</pre>

<p>下例會回傳 <strong><code>224</code></strong>:</p>

<pre class="brush: js">parseInt("0e0", 16);
</pre>

<h2 id="無_radix_情況下的八進制">無 radix 情況下的八進制</h2>

<p>雖說已在 ECMAScript 3 提議並於 ECMAScript 5 禁用，但部分 javascript 編譯器仍會在特殊情況下，將 str 視作八進位數字（當數字以 <code>0</code> 開頭時）。以下為可能發生這種問題的情況：（<strong>永遠要宣告 radix 以避開這不可靠的行為</strong>）</p>

<pre class="brush: js">parseInt("0e0"); // 0
parseInt("08"); // 0, '8' is not an octal digit.
</pre>

<h3 id="ECMAScript_5_移除八進位轉譯（octal_interpretation）">ECMAScript 5 移除八進位轉譯（octal interpretation）</h3>

<p>The ECMAScript 5 specification of the function <code>parseInt</code> no longer allows implementations to treat Strings beginning with a <code>0</code> character as octal values. ECMAScript 5 states:</p>

<p>The <code>parseInt</code> function produces an integer value dictated by interpretation of the contents of the string argument according to the specified radix. Leading white space in string is ignored. If radix is undefined or <code>0</code>, it is assumed to be <code>10</code> except when the number begins with the character pairs <code>0x</code> or <code>0X</code>, in which case a radix of 16 is assumed.</p>

<p>This differs from ECMAScript 3, which discouraged but allowed octal interpretation.</p>

<p>Many implementations have not adopted this behavior as of 2013, and because older browsers must be supported, <strong>always specify a radix</strong>.</p>

<h2 id="嚴謹的解析_function">嚴謹的解析 function</h2>

<p>有的時候，使用更嚴謹的 code 能夠更精確地轉換整數值。 Regular expressions 可以幫你：</p>

<pre class="brush: js">filterInt = function (value) {
  if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
    return Number(value);
  return NaN;
}

console.log(filterInt('421'));               // 421
console.log(filterInt('-421'));              // -421
console.log(filterInt('+421'));              // 421
console.log(filterInt('Infinity'));          // Infinity
console.log(filterInt('421e+0'));            // NaN
console.log(filterInt('421hop'));            // NaN
console.log(filterInt('hop1.61803398875'));  // NaN
console.log(filterInt('1.61803398875'));     // NaN
</pre>

<h2 id="規範">規範</h2>

{{Specifications}}

<h2 id="瀏覽器相容性">瀏覽器相容性</h2>



<p>{{Compat("javascript.builtins.parseInt")}}</p>

<h2 id="延伸閱讀">延伸閱讀</h2>

<ul>
 <li>{{jsxref("Global_Objects/parseFloat", "parseFloat()")}}</li>
 <li>{{jsxref("Number.parseFloat()")}}</li>
 <li>{{jsxref("Number.parseInt()")}}</li>
 <li>{{jsxref("Global_Objects/isNaN", "isNaN()")}}</li>
 <li>{{jsxref("Number.toString()")}}</li>
 <li>{{jsxref("Object.valueOf")}}</li>
</ul>
