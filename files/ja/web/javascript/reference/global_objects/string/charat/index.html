---
title: String.prototype.charAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charAt
tags:
  - JavaScript
  - Method
  - Reference
  - String
  - String Methods
translation_of: Web/JavaScript/Reference/Global_Objects/String/charAt
---
<div>{{JSRef}}</div>

<p><span class="seoSummary">{{jsxref("String")}} オブジェクトの <strong><code>charAt()</code></strong> メソッドは、文字列の中の指定された位置にある単一の UTF-16 コードユニットからなる新しい文字列を返します。</span></p>

<div>{{EmbedInteractiveExample("pages/js/string-charat.html", "shorter")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">let <var>character</var> = <var>str</var>.charAt(<var>index</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>index</var></code></dt>
 <dd><code>0</code> から <code><var>str</var>.length - 1</code> までの間の整数です。 <code><var>index</var></code> が整数に変換できない場合や <code><var>index</var></code> が指定されなかった場合、既定値は <code>0</code> となり、 <code><var>str</var></code> の最初の文字が返されます。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>与えられた <code><var>index</var></code> の位置にあるコードポイント値を表す数値です。 <code><var>index</var></code> の位置に要素がない場合は {{jsxref("Global_Objects/NaN", "NaN")}} を返します。</p>

<h2 id="Description" name="Description">解説</h2>

<p>文字列の中の文字は、左から右に向けてインデックス付けされています。最初の文字の添字は <code>0</code> であり、最後の文字の添字は— <code><var>stringName</var></code> という名前の文字列であれば— <code><var>stringName</var>.length - 1</code> です。提供した <code><var>index</var></code> がこの範囲を外れていた場合、 JavaScript は空文字列を返します。</p>

<p><code><var>index</var></code> が <code>charAt()</code> に提供されなかった場合の既定値は <code>0</code> です。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Displaying_characters_at_different_locations_in_a_string" name="Displaying_characters_at_different_locations_in_a_string">文字列の中の様々な位置の文字の表示</h3>

<p>次の例は、 "<code>Brave new world</code>" という文字列の中の様々な位置の文字を表示します。</p>

<pre class="brush: js notranslate">var anyString = 'Brave new world';
console.log("The character at index 0   is '" + anyString.charAt()   + "'");
// index が提供されなかった場合は、既定値として 0 が使われる

console.log("The character at index 0   is '" + anyString.charAt(0)   + "'");
console.log("The character at index 1   is '" + anyString.charAt(1)   + "'");
console.log("The character at index 2   is '" + anyString.charAt(2)   + "'");
console.log("The character at index 3   is '" + anyString.charAt(3)   + "'");
console.log("The character at index 4   is '" + anyString.charAt(4)   + "'");
console.log("The character at index 999 is '" + anyString.charAt(999) + "'");
</pre>

<p>これらの行は以下のように表示されます。</p>

<pre class="brush: js notranslate">The character at index 0   is 'B'

The character at index 0   is 'B'
The character at index 1   is 'r'
The character at index 2   is 'a'
The character at index 3   is 'v'
The character at index 4   is 'e'
The character at index 999 is ''
</pre>

<h3 id="Getting_whole_characters" name="Getting_whole_characters">文字全体の取得</h3>

<p>以下の例では、文字列に基本多言語面にない文字が含まれていた場合でも、ループで常に文字全体を取得することを保証する方法を紹介します。</p>

<pre class="brush: js notranslate">var str = 'A \uD87E\uDC04 Z'; // We could also use a non-BMP character directly
for (var i = 0, chr; i &lt; str.length; i++) {
  if ((chr = getWholeChar(str, i)) === false) {
    continue;
  }
  // Adapt this line at the top of each loop, passing in the whole string and
  // the current iteration and returning a variable to represent the
  // individual character

  console.log(chr);
}

function getWholeChar(str, i) {
  var code = str.charCodeAt(i);

  if (Number.isNaN(code)) {
    return ''; // Position not found
  }
  if (code &lt; 0xD800 || code &gt; 0xDFFF) {
    return str.charAt(i);
  }

  // High surrogate (could change last hex to 0xDB7F to treat high private
  // surrogates as single characters)
  if (0xD800 &lt;= code &amp;&amp; code &lt;= 0xDBFF) {
    if (str.length &lt;= (i + 1)) {
      throw 'High surrogate without following low surrogate';
    }
    var next = str.charCodeAt(i + 1);
      if (0xDC00 &gt; next || next &gt; 0xDFFF) {
        throw 'High surrogate without following low surrogate';
      }
      return str.charAt(i) + str.charAt(i + 1);
  }
  // Low surrogate (0xDC00 &lt;= code &amp;&amp; code &lt;= 0xDFFF)
  if (i === 0) {
    throw 'Low surrogate without preceding high surrogate';
  }
  var prev = str.charCodeAt(i - 1);

  // (could change last hex to 0xDB7F to treat high private
  // surrogates as single characters)
  if (0xD800 &gt; prev || prev &gt; 0xDBFF) {
    throw 'Low surrogate without preceding high surrogate';
  }
  // We can pass over low surrogates now as the second component
  // in a pair which we have already processed
  return false;
}
</pre>

<p>ECMAScript 2016 環境では分割代入が利用できるため、変数を自動的に増加させることができるもっと簡潔で柔軟な代替案を利用することができます (その文字がサロゲートペアであることを保証している場合)。</p>

<pre class="brush: js notranslate">let str = 'A\uD87E\uDC04Z'  // We could also use a non-BMP character directly
for (let i = 0, chr; i &lt; str.length; i++) {
  [chr, i] = getWholeCharAndI(str, i)

  // Adapt this line at the top of each loop, passing in the whole string and
  // the current iteration and returning an array with the individual character
  // and 'i' value (only changed if a surrogate pair)

  console.log(chr)
}

function getWholeCharAndI(str, i) {
  let code = str.charCodeAt(i)

  if (Number.isNaN(code)) {
    return ''  // Position not found
  }
  if (code &lt; 0xD800 || code &gt; 0xDFFF) {
    return [str.charAt(i), i]  // Normal character, keeping 'i' the same
  }

  // High surrogate (could change last hex to 0xDB7F to treat high private
  // surrogates as single characters)
  if (0xD800 &lt;= code &amp;&amp; code &lt;= 0xDBFF) {
    if (str.length &lt;= (i + 1)) {
      throw 'High surrogate without following low surrogate'
    }
    let next = str.charCodeAt(i + 1)
      if (0xDC00 &gt; next || next &gt; 0xDFFF) {
        throw 'High surrogate without following low surrogate'
      }
      return [str.charAt(i) + str.charAt(i + 1), i + 1]
  }

  // Low surrogate (0xDC00 &lt;= code &amp;&amp; code &lt;= 0xDFFF)
  if (i === 0) {
    throw 'Low surrogate without preceding high surrogate'
  }

  let prev = str.charCodeAt(i - 1)

  // (could change last hex to 0xDB7F to treat high private surrogates
  // as single characters)
  if (0xD800 &gt; prev || prev &gt; 0xDBFF) {
    throw 'Low surrogate without preceding high surrogate'
  }

  // Return the next character instead (and increment)
  return [str.charAt(i + 1), i + 1]
}
</pre>

<h3 id="Fixing_charAt_to_support_non-Basic-Multilingual-Plane_BMP_characters" name="Fixing_charAt_to_support_non-Basic-Multilingual-Plane_BMP_characters">charAt() を修正して、基本多言語面 (BMP) 以外の文字に対応させる</h3>

<p>前述の例は、 BMP 以外の文字に対応しなければならないプログラムの方が有用かもしれませんが (呼び出し元が BMP 以外の文字の出現場所を知る必要がないので)、インデックスで文字を選択する際に、文字列内のサロゲートペアをそれらが表す単一の文字として扱いたい場合には、以下のようにして使用できます。</p>

<pre class="brush: js notranslate">function fixedCharAt(str, idx) {
  let ret = ''
  str += ''
  let end = str.length

  let surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g
  while ((surrogatePairs.exec(str)) != null) {
    let lastIdx = surrogatePairs.lastIndex
    if (lastIdx - 2 &lt; idx) {
      idx++
    } else {
      break
    }
  }

  if (idx &gt;= end || idx &lt; 0) {
    return ''
  }

  ret += str.charAt(idx)

  if (/[\uD800-\uDBFF]/.test(ret) &amp;&amp; /[\uDC00-\uDFFF]/.test(str.charAt(idx + 1))) {
    // Go one further, since one of the "characters" is part of a surrogate pair
    ret += str.charAt(idx + 1)
  }
  return ret
}
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.charat', 'String.prototype.charAt')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.String.charAt")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("String.prototype.indexOf()")}}</li>
 <li>{{jsxref("String.prototype.lastIndexOf()")}}</li>
 <li>{{jsxref("String.prototype.charCodeAt()")}}</li>
 <li>{{jsxref("String.prototype.codePointAt()")}}</li>
 <li>{{jsxref("String.prototype.split()")}}</li>
 <li>{{jsxref("String.fromCodePoint()")}}</li>
 <li><a href="https://mathiasbynens.be/notes/javascript-unicode">JavaScript has a Unicode problem – Mathias Bynens</a></li>
</ul>
