---
title: String.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/String/includes
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/includes
---
<div>{{JSRef}}</div>

<p><strong><code>includes()</code></strong> メソッドは、1 つの文字列を別の文字列の中に見出すことができるかどうかを判断し、必要に応じて <code>true</code> か <code>false</code> を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/string-includes.html", "shorter")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><var>str</var>.includes(<var>searchString</var>[, <var>position</var>])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>searchString</var></code></dt>
 <dd><code><var>str</var></code> 内で検索される文字列。</dd>
 <dt><code><var>position</var></code> {{optional_inline}}</dt>
 <dd>文字列内で <code>searchString</code> を検索し始める位置。既定値は 0 です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>文字列が検索値を含む場合、<strong><code>true</code></strong>。含まなければ、<strong><code>false</code></strong>。</p>

<h2 id="Description" name="Description">解説</h2>

<p>このメソッドによってある文字列内に別の文字列を含んでいるかどうか判断できます。</p>

<h3 id="Case-sensitivity" name="Case-sensitivity">大文字・小文字の区別</h3>

<p><code>includes()</code> メソッドは大文字と小文字が区別します。例えば、次のコードでは <code>false</code> を返します:</p>

<pre class="brush: js">'Blue Whale'.includes('blue')  // returns false
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_includes" name="Using_includes"><code>includes()</code>を使う</h3>

<pre class="brush: js">const str = 'To be, or not to be, that is the question.'

console.log(str.includes('To be'))        // true
console.log(str.includes('question'))     // true
console.log(str.includes('nonexistent'))  // false
console.log(str.includes('To be', 1))     // false
console.log(str.includes('TO BE'))        // false
console.log(str.includes(''))             // true
</pre>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p>このメソッドは ECMAScript 2015 で追加されました。まだ、すべての JavaScript の実装で利用できるとは限りません。</p>

<p>しかしながら、このメソッドを簡単にエミュレートできます。</p>

<pre class="brush: js">if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';

    if (search instanceof RegExp) {
      throw TypeError('first argument must not be a RegExp');
    }
    if (start === undefined) { start = 0; }
    return this.indexOf(search, start) !== -1;
  };
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
   <td>{{SpecName('ESDraft', '#sec-string.prototype.includes', 'String.prototype.includes')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.String.includes")}}</p>

<h2 id="String.prototype.contains">String.prototype.contains</h2>

<p>Firefox 18–39 では、このメソッドの名称は <code>contains()</code> でした。以下の理由により、 <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1102219">bug 1102219</a> で <code>includes()</code> に名称が変更されました。</p>

<p><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=789036">報告</a>されたところによると、 MooTools 1.2 を使用したいくつかのウェブサイトが Firefox 17 で壊れました。この版の MooTools は、 <code>String.prototype.contains()</code> が存在するかどうか調べ、存在しない場合は MooTools が独自の関数を追加するようになっています。</p>

<p>この関数が Firefox 17 で導入されたことで、このチェックの動作が変わり、 MooTools の <code>String.prototype.contains()</code> の実装に基づくコードが壊れることになりました。結果的に、 Firefox 17 では実装が<a href="https://hg.mozilla.org/releases/mozilla-aurora/rev/086db97198a8">無効化</a>され、 <code>String.prototype.contains()</code> が利用できるようになったのは一つ後のバージョンである Firefox 18 で、 <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=789036#c32">MooTools への働きかけ</a>によって <a href="http://mootools.net/blog/2013/02/19/mootools-1-2-6-released">MooTools バージョン 1.2.6 がリリース</a>されてからでした。</p>

<p>MooTools 1.3 では <code>String.prototype.contains()</code> を強制的に自分自身のものに強制したため、これに依存するウェブサイトは壊れません。しかし、このメソッドに対する <a href="http://mootools.net/core/docs/1.3.2/Types/String#String-method:-contains">MooTools 1.3 のシグニチャ</a> と ECMAScript 2015 のシグニチャでは (第 2 引数に) 違いがあることに注意して下さい。後に、 <a href="https://github.com/mootools/mootools-core/blob/master/Docs/Types/String.md#note">MooTools 1.5 以降で ES2015 仕様に一致させるためにシグニチャを変更しました。</a></p>

<p>Firefox 48 で、<code>String.prototype.contains()</code> は削除されました。 <code>String.prototype.includes()</code> だけを使用してください。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Array.prototype.includes()")}}</li>
 <li>{{jsxref("TypedArray.prototype.includes()")}}</li>
 <li>{{jsxref("String.prototype.indexOf()")}}</li>
 <li>{{jsxref("String.prototype.lastIndexOf()")}}</li>
 <li>{{jsxref("String.prototype.startsWith()")}}</li>
 <li>{{jsxref("String.prototype.endsWith()")}}</li>
</ul>
