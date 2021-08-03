---
title: String.raw()
slug: Web/JavaScript/Reference/Global_Objects/String/raw
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/raw
---
<div>{{JSRef}}</div>

<p><span class="seoSummary"><strong><code>String.raw()</code></strong> 静的メソッドは、<a href="/ja/docs/Web/JavaScript/Reference/template_strings">文字列リテラル</a>のためのタグ関数です。この関数は Python の文字列リテラルの <code>r</code> 接頭辞や C# の文字列リテラルの <code>@</code> 接頭辞に似ています (それでも違いがあります。<a href="https://bugs.chromium.org/p/v8/issues/detail?id=5016">この問題に関するスレッド</a>の説明を参照してください)。この関数は、テンプレート文字列の生の文字列形式を取得するために使用されます。つまり、置換 (例えば <code>${foo}</code>) は行われますが、エスケープ (例えば <code>\n</code>) は実行されません。</span></p>

<div>{{EmbedInteractiveExample("pages/js/string-raw.html")}}</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><code>String.raw(<var>callSite</var>, <var>...substitutions</var>)

String.raw`<var>templateString</var>`
</code></pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>callSite</var></code></dt>
 <dd><code>{ raw: 'string' }</code> のような、よく形成されたテンプレート呼び出しサイトオブジェクトです。</dd>
 <dt><code><var>...substitutions</var></code></dt>
 <dd>置換される値が含まれます。</dd>
 <dt><code><var>templateString</var></code></dt>
 <dd>{{jsxref("template_strings", "テンプレート文字列", "", 1)}}です。必要に応じて置換します (<code>${...}</code>)。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>与えられたテンプレート文字列の生の文字列形式です。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt>{{jsxref("TypeError")}}</dt>
 <dd>第1 引数が正常に形成されていないオブジェクトの場合、{{jsxref("TypeError")}} が発生します。</dd>
</dl>

<h2 id="Description" name="Description">説明</h2>

<p>ほとんどの場合、<code>String.raw()</code> はテンプレート文字列とともに使用されます。上記の最初の構文は、JavaScript エンジンが (他の<a href="/ja/docs/Web/JavaScript/Reference/template_strings#Tagged_template_strings">タグ関数</a>のように) 適切な引数で呼び出すので、実際に使用されます。</p>

<p><code>String.raw()</code> はテンプレート文字列の唯一の組込みタグ関数です。既定のテンプレート関数のように動作し、連結を行います。通常の JavaScript コードで再実装することができます。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_String.raw" name="Using_String.raw">String.raw() の使用</h3>

<pre class="brush: js notranslate">String.raw`Hi\n${2+3}!`;
// 'Hi\n5!', the character after 'Hi'
// is not a newline character,
// '\' and 'n' are two characters.

String.raw`Hi\u000A!`;
// 'Hi\u000A!', same here, this time we will get the
//  \, u, 0, 0, 0, A, 6 characters.
// All kinds of escape characters will be ineffective
// and backslashes will be present in the output string.
// You can confirm this by checking the .length property
// of the string.

let name = 'Bob';
String.raw`Hi\n${name}!`;
// 'Hi\nBob!', substitutions are processed.

// Normally you would not call String.raw() as a function,
// but to simulate `foo${2 + 3}bar${'Java' + 'Script'}baz` you can do:
String.raw({
  raw: ['foo', 'bar', 'baz']
}, 2 + 3, 'Java' + 'Script'); // 'foo5barJavaScriptbaz'
// Notice the first argument is an object with a 'raw' property,
// whose value is an iterable representing the separated strings
// in the template literal.
// The rest of the arguments are the substitutions.

// The first argument’s 'raw' value can be any iterable, even a string!
// For example, 'test' is treated as ['t', 'e', 's', 't'].
// The following is equivalent to
// `t${0}e${1}s${2}t`:
String.raw({ raw: 'test' }, 0, 1, 2); // 't0e1s2t'
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
   <td>{{SpecName('ESDraft', '#sec-string.raw', 'String.raw')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.String.raw")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/template_strings">テンプレート文字列</a></li>
 <li>{{jsxref("String")}}</li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Lexical_grammar">字句文法</a></li>
</ul>
