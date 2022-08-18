---
title: Symbol() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Symbol/Symbol
tags:
  - Constructor
  - JavaScript
  - Reference
  - Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/Symbol
---
<div>{{JSRef}}</div>

<p><code>Symbol()</code> コンストラクターは <strong>symbol</strong> 型の値を返しますが、 "<code>new Symbol()</code>" という構文に対応しておらず、サブクラス化を意図していないため、コンストラクターとしては不完全です。 <code>class</code> 定義の <code><a href="/ja/docs/Web/JavaScript/Reference/Classes/extends">extends</a></code> 句の値として使用することもできますが、 <code><a href="/ja/docs/Web/JavaScript/Reference/Operators/super">super</a></code> の呼び出しを行うと例外が発生します。</p>

<div>{{EmbedInteractiveExample("pages/js/symbol-constructor.html", "taller")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Symbol([<var>description</var>])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>description</var></code> {{optional_inline}}</dt>
 <dd>文字列。デバッグには使用できるこのシンボルの説明ですが、シンボル自体にはアクセスできません。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Creating_symbols" name="Creating_symbols">シンボルの作成</h3>

<p>新しいプリミティブであるシンボルを生成するには、解説にあるように <code>Symbol()</code> を任意の文字列とともに書きます。</p>

<pre class="brush: js notranslate">let sym1 = Symbol()
let sym2 = Symbol('foo')
let sym3 = Symbol('foo')
</pre>

<p>上記のコードは3つの新しいシンボルを生成します。なお、 <code>Symbol("foo")</code> は <code>"foo"</code> と言う文字列を強制的に記号にするわけではないことに注意してください。毎回新しいシンボルを生成します。</p>

<pre class="brush: js notranslate">Symbol('foo') === Symbol('foo')  // false
</pre>

<h3 id="new_Symbol...">new Symbol(...)</h3>

<p>以下のように {{jsxref("Operators/new", "new")}} 演算子を伴う構文では、 {{jsxref("TypeError")}} が発生します。</p>

<pre class="brush: js notranslate">let sym = new Symbol()  // TypeError
</pre>

<p>このため、新しいシンボル値の代わりに明示的なシンボルラッパーオブジェクトを作成することができず、プリミティブなデータ型の周りに明示的なラッパーオブジェクトを作成することは一般的に可能です (例えば、 <code>new Boolean</code>, <code>new String</code>, <code>new Number</code> です)。</p>

<p>本当に <code>Symbol</code> のラッパーオブジェクトを生成したい場合は、 <code>Object()</code> 関数を使用することができます。</p>

<pre class="brush: js notranslate">let sym    = Symbol('foo');
let symObj = Object(sym);
typeof sym    // =&gt; "symbol"
typeof symObj // =&gt; "object"
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
   <td>{{SpecName('ESDraft', '#sec-symbol-constructor', 'Symbol constructor')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Symbol.Symbol")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Glossary/Symbol">用語集: Symbol データ型</a></li>
</ul>
