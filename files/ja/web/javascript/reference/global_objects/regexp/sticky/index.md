---
title: RegExp.prototype.sticky
slug: Web/JavaScript/Reference/Global_Objects/RegExp/sticky
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
  - プロパティ
  - 正規表現
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/sticky
---
<div>{{JSRef}}</div>

<p><strong><code>sticky</code></strong> プロパティは、検索が<ruby>粘着的<rp> (</rp><rt>sticky</rt><rp>) </rp></ruby>である (文字列内の検索を、この正規表現の {{jsxref("RegExp.lastIndex", "lastIndex")}} プロパティで示されたインデックスからのみ開始する) かどうかを表します。 <code>sticky</code> は個々の正規表現オブジェクトが持つ読み取り専用のプロパティです。</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-sticky.html", "taller")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<div>{{js_property_attributes(0, 0, 1)}}</div>

<h2 id="Description" name="Description">解説</h2>

<p><code>sticky</code> の値は {{jsxref("Boolean")}} で、 true ならば "<code>y</code>" フラグが使われており、 false はそれ以外を表します。 "<code>y</code>" フラグは対象文字列において、この正規表現の {{jsxref("RegExp.lastIndex", "lastIndex")}} プロパティで示されたインデックスからのみ一致することを示しています (そしてそれ以降のインデックスから一致を調べようとはしません)。 <code>sticky</code> と <code>global</code> の両方が定義された正規表現では、 <code>global</code> フラグは無視されます。</p>

<p>このプロパティを直接変更することはできません。これは読み取り専用です。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_a_regular_expression_with_the_sticky_flag" name="Using_a_regular_expression_with_the_sticky_flag">sticky フラグのついた正規表現の使用</h3>

<pre class="brush: js">var str = '#foo#';
var regex = /foo/y;

regex.lastIndex = 1;
regex.test(str); // true
regex.lastIndex = 5;
regex.test(str); // false (lastIndex is taken into account with sticky flag)
regex.lastIndex; // 0 (reset after match failure)
</pre>

<h3 id="Anchored_sticky_flag" name="Anchored_sticky_flag">アンカーになる sticky フラグ</h3>

<p>Firefox の SpiderMonkey エンジンのいくつかのバージョンでは <code>^</code> 指定に関する<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=773687">バグ</a>があり、 <code>^</code> アサーションで始まり、 sticky フラグを使うことで一致しない式を許可していました。このバグは Firefox 3.6 以降 (それ以前は sticky が実装されていてもバグはありませんでした) で発生し、2015年に修正されました。 ES2015 の仕様では、おそらくこのバグのために、以下のとおり定められています。</p>

<blockquote>
<p>パターンとともに <code>y</code> フラグが使用された場合、 ^ は常に入力の始まりにのみ一致するか、 (<code>multiline</code> が <code>true</code> の場合) 最初の行に一致します。</p>
</blockquote>

<p>以下は正しい挙動の例です。</p>

<pre class="brush: js">var regex = /^foo/y;
regex.lastIndex = 2;
regex.test('..foo');   // false - index 2 is not the beginning of the string

var regex2 = /^foo/my;
regex2.lastIndex = 2;
regex2.test('..foo');  // false - index 2 is not the beginning of the string or line
regex2.lastIndex = 2;
regex2.test('.\nfoo'); // true - index 2 is the beginning of a line
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-get-regexp.prototype.sticky', 'RegExp.prototype.sticky')}}</td>
  </tr>
 </thead>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.RegExp.sticky")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("RegExp.lastIndex")}}</li>
 <li>{{jsxref("RegExp.prototype.global")}}</li>
 <li>{{jsxref("RegExp.prototype.ignoreCase")}}</li>
 <li>{{jsxref("RegExp.prototype.multiline")}}</li>
 <li>{{jsxref("RegExp.prototype.source")}}</li>
</ul>
