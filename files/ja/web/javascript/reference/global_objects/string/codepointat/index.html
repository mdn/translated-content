---
title: String.prototype.codePointAt()
slug: Web/JavaScript/Reference/Global_Objects/String/codePointAt
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/codePointAt
---
<div>{{JSRef}}</div>

<p><strong><code>codePointAt()</code></strong> メソッドは、 Unicode コードポイント値である負ではない整数を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/string-codepointat.html","shorter")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>str</var>.codePointAt(<var>pos</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>pos</var></code></dt>
 <dd>コードポイント値を返す <code><var>str</var></code> の中の要素の位置です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>与えられた <code><var>pos</var></code> の位置にあるコードポイント値を表す数値です。 <code>pos</code> の位置に要素がない場合は {{jsxref("undefined")}} を返します。</p>

<h2 id="Description" name="Description">解説</h2>

<p>指定された位置に要素が存在しない場合は {{jsxref("undefined")}} を返します。 <code><var>pos</var></code> の位置から UTF-16 サロゲートペアが始まらない場合は、 <code><var>pos</var></code> の位置のコードユニットを返します。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_codePointAt" name="Using_codePointAt">codePointAt() の使用</h3>

<pre class="brush: js notranslate">'ABC'.codePointAt(1)           // 66
'\uD800\uDC00'.codePointAt(0)  // 65536

'XYZ'.codePointAt(42)          // undefined
</pre>

<h3 id="Looping_with_codePointAt" name="Looping_with_codePointAt">codePointAt() の繰り返し</h3>

<pre class="brush: js notranslate">for (let codePoint of '\ud83d\udc0e\ud83d\udc71\u2764') {
   console.log(codePoint.codePointAt(0).toString(16))
}
// '1f40e', '1f471', '2764'
</pre>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p>次のプログラムは、 ECMAScript 2015 で定義された <code>codePointAt()</code> をネイティブで対応していないブラウザーで利用できるよう String を拡張します。</p>

<pre class="brush: js notranslate">/*! https://mths.be/codepointat v0.2.0 by @mathias */
if (!String.prototype.codePointAt) {
  (function() {
    'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
    var defineProperty = (function() {
      // IE 8 only supports `Object.defineProperty` on DOM elements
      try {
        var object = {};
        var $defineProperty = Object.defineProperty;
        var result = $defineProperty(object, object, object) &amp;&amp; $defineProperty;
      } catch(error) {}
      return result;
    }());
    var codePointAt = function(position) {
      if (this == null) {
        throw TypeError();
      }
      var string = String(this);
      var size = string.length;
      // `ToInteger`
      var index = position ? Number(position) : 0;
      if (index != index) { // better `isNaN`
        index = 0;
      }
      // Account for out-of-bounds indices:
      if (index &lt; 0 || index &gt;= size) {
        return undefined;
      }
      // Get the first code unit
      var first = string.charCodeAt(index);
      var second;
      if ( // check if it’s the start of a surrogate pair
        first &gt;= 0xD800 &amp;&amp; first &lt;= 0xDBFF &amp;&amp; // high surrogate
        size &gt; index + 1 // there is a next code unit
      ) {
        second = string.charCodeAt(index + 1);
        if (second &gt;= 0xDC00 &amp;&amp; second &lt;= 0xDFFF) { // low surrogate
          // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
          return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
        }
      }
      return first;
    };
    if (defineProperty) {
      defineProperty(String.prototype, 'codePointAt', {
        'value': codePointAt,
        'configurable': true,
        'writable': true
      });
    } else {
      String.prototype.codePointAt = codePointAt;
    }
  }());
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
   <td>{{SpecName('ESDraft', '#sec-string.prototype.codepointat', 'String.prototype.codePointAt')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.String.codePointAt")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("String.fromCodePoint()")}}</li>
 <li>{{jsxref("String.fromCharCode()")}}</li>
 <li>{{jsxref("String.prototype.charCodeAt()")}}</li>
 <li>{{jsxref("String.prototype.charAt()")}}</li>
</ul>
