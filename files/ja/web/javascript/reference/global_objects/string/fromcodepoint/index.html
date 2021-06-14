---
title: String.fromCodePoint()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
---
<div>{{JSRef}}</div>

<p><strong><code>String.fromCodePoint()</code></strong> 静的メソッドは指定されたコードポイントのシーケンスを使って生成された文字列を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/string-fromcodepoint.html")}}</div>



<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><code>String.fromCodePoint(<var>num1</var>[, ...[, <var>numN</var>]])</code></pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>num1, ..., num<em>N</em></code></dt>
 <dd>コードポイントのシーケンスです。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>指定されたコードポイントのシーケンスを使って生成された文字列です。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<ul>
 <li>無効な Unicode コードポイントを与えられた場合、{{jsxref("Errors/Not_a_codepoint", "RangeError")}} （例: "RangeError: NaN is not a valid code point" ）がスローされます。</li>
</ul>

<h2 id="Description" name="Description">説明</h2>

<p>このメソッドは {{jsxref("String")}} オブジェクトではなく文字列を返します。</p>

<p><code>fromCodePoint()</code> メソッドは {{jsxref("String")}} の静的なメソッドなので、自ら生成した {{jsxref("String")}} オブジェクトのメソッドとしてではなく、常に <code>String.fromCodePoint()</code> として使用してください。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_fromCharCode" name="Using_fromCharCode"><code>fromCodePoint()</code> を使う</h3>

<pre class="brush: js">String.fromCodePoint(42);       // "*"
String.fromCodePoint(65, 90);   // "AZ"
String.fromCodePoint(0x404);    // "\u0404"
String.fromCodePoint(0x2F804);  // "\uD87E\uDC04"
String.fromCodePoint(194564);   // "\uD87E\uDC04"
String.fromCodePoint(0x1D306, 0x61, 0x1D307) // "\uD834\uDF06a\uD834\uDF07"

String.fromCodePoint('_');      // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1);       // RangeError
String.fromCodePoint(3.14);     // RangeError
String.fromCodePoint(3e-2);     // RangeError
String.fromCodePoint(NaN);      // RangeError
</pre>

<pre class="brush: js">// String.fromCharCode() alone cannot get the character at such a high code point
// The following, on the other hand, can return a 4-byte character as well as the
// usual 2-byte ones (i.e., it can return a single character which actually has
// a string length of 2 instead of 1!)
console.log(String.fromCodePoint(0x2F804)); // or 194564 in decimal
</pre>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p><code>String.fromCodePoint</code> メソッドは ECMAScript 2015 で追加されました。まだすべての Web ブラウザーや環境でサポートされていないかもしれません。互換性のために次のコードを使用してください。</p>

<pre class="brush: js">if (!String.fromCodePoint) (function(stringFromCharCode) {
    var fromCodePoint = function(_) {
      var codeUnits = [], codeLen = 0, result = "";
      for (var index=0, len = arguments.length; index !== len; ++index) {
        var codePoint = +arguments[index];
        // correctly handles all cases including `NaN`, `-Infinity`, `+Infinity`
        // The surrounding `!(...)` is required to correctly handle `NaN` cases
        // The (codePoint&gt;&gt;&gt;0) === codePoint clause handles decimals and negatives
        if (!(codePoint &lt; 0x10FFFF &amp;&amp; (codePoint&gt;&gt;&gt;0) === codePoint))
          throw RangeError("Invalid code point: " + codePoint);
        if (codePoint &lt;= 0xFFFF) { // BMP code point
          codeLen = codeUnits.push(codePoint);
        } else { // Astral code point; split in surrogate halves
          // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
          codePoint -= 0x10000;
          codeLen = codeUnits.push(
            (codePoint &gt;&gt; 10) + 0xD800,  // highSurrogate
            (codePoint % 0x400) + 0xDC00 // lowSurrogate
          );
        }
        if (codeLen &gt;= 0x3fff) {
          result += stringFromCharCode.apply(null, codeUnits);
          codeUnits.length = 0;
        }
      }
      return result + stringFromCharCode.apply(null, codeUnits);
    };
    try { // IE 8 only supports `Object.defineProperty` on DOM elements
      Object.defineProperty(String, "fromCodePoint", {
        "value": fromCodePoint, "configurable": true, "writable": true
      });
    } catch(e) {
      String.fromCodePoint = fromCodePoint;
    }
}(String.fromCharCode));
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-string.fromcodepoint', 'String.fromCodePoint')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>初期定義</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.fromcodepoint', 'String.fromCodePoint')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<p>{{Compat("javascript.builtins.String.fromCodePoint")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("String.fromCharCode()")}}</li>
 <li>{{jsxref("String.prototype.charAt()")}}</li>
 <li>{{jsxref("String.prototype.codePointAt()")}}</li>
 <li>{{jsxref("String.prototype.charCodeAt()")}}</li>
</ul>
