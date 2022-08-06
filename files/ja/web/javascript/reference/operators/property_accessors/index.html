---
title: プロパティアクセサー
slug: Web/JavaScript/Reference/Operators/Property_Accessors
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Property_Accessors
---
<div>{{jsSidebar("Operators")}}</div>

<p><span class="seoSummary"><strong>プロパティアクセサー</strong>はオブジェクトのプロパティへのアクセスを提供するもので、ドット表記法またはブラケット表記法を使用します。</span></p>

<div>{{EmbedInteractiveExample("pages/js/expressions-propertyaccessors.html", "taller")}}
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: js"><var>object</var>.<var>property</var>
<var>object</var>['<var>property</var>']
</pre>

<h2 id="Description">解説</h2>

<p>オブジェクトは実際には<em>連想配列</em> (別名 <em>map</em>、 <em>dictionary</em>、 <em>hash</em>、 <em>lookup table</em>) とみなすことができます。この配列における<em>キー</em>はオブジェクトのプロパティ名です。</p>

<p>一般的に、オブジェクトのプロパティについて説明する際には、プロパティとメソッドを区別します。しかし、プロパティとメソッドの区別は慣習的なものにすぎません。メソッドは呼び出すことができるプロパティです (例えば、値として {{jsxref("Function")}} インスタンスへの参照を持っているようなものです)。</p>

<p>プロパティにアクセスするには、<em>ドット表記法</em>と<em>ブラケット表記法</em>の 2 通りがあります。</p>

<h3 id="Dot_notation">ドット表記法</h3>

<p><code><var>object.property</var></code> の構文では、 <code>property</code> は有効な JavaScript の <a href="/ja/docs/Glossary/Identifier">識別子</a>でなければなりません。 (ECMAScript 標準では、プロパティの名前は技術的には "IdentifierNames" であり、 "Identifiers" ではないので、予約語を使用することができますがお勧めしません)。例えば、 <code><var>object</var>.$1</code> は有効であるのに対し、 <code><var>object</var>.1</code> は有効ではありません。</p>

<pre class="brush: js">const variable = <var>object</var>.<var>property_name;</var>

<var>object</var>.<var>property_name</var> = value;
</pre>

<pre class="brush: js">const object = {};

object.$1 = 'foo';
console.log(object.$1);  // 'foo'

object.1 = 'bar';        // SyntaxError
console.log(object.1);   // SyntaxError
</pre>

<p>ここで、 <code>createElement</code> というメソッドを <code>document</code> から取得し、呼び出します。</p>

<pre class="brush: js">document.createElement('pre')
</pre>

<p>数値リテラルに対してメソッドを使用する場合で、その数値リテラルに指数や小数点がない場合、メソッド呼び出しをするドットの前に<a href="/ja/docs/Glossary/Whitespace">ホワイトスペース</a>を入れることで、ドットが小数点とみなされることを防ぐことができます。</p>

<pre class="brush: js">77 .toExponential();
// or
77
.toExponential()
// or
;(77).toExponential()
// or
77..toExponential()
// or
77.0.toExponential()
// because 77. === 77.0, no ambiguity</pre>

<h3 id="Bracket_notation">ブラケット表記法</h3>

<p><code>object[property_name]</code> の構文では、 <code><var>property_name</var></code> は文字列または<a href="/ja/docs/Glossary/Symbol">シンボル</a>です。ですから、これは任意の文字列、例えば <code>'1foo'</code>、<code>'!bar!'</code>、または <code>' '</code> (空白) であっても構いません。</p>

<pre class="brush: js">const variable = <var>object</var>[<var>property_name</var>]
<var>object</var>[<var>property_name</var>] = value;</pre>

<p>これは前の例とまったく同じです。</p>

<pre class="brush: js">document['createElement']('pre')
</pre>

<p>ブラケット表記法の前には空白を入れることができます。</p>

<pre class="brush: js">document ['createElement']('pre')</pre>

<h3 id="Property_names">プロパティ名</h3>

<p>プロパティ名は文字列または<a href="/ja/docs/Glossary/Symbol">シンボル</a>です。それ以外の値は、数値を含めて、文字列へ強制変換されます。これは <code>'value'</code> を出力します。 <code>1</code> が <code>'1'</code> に強制変換されるからです。</p>

<pre class="brush: js">let object = {}
object['1'] = 'value'
console.log(object[1])
</pre>

<p>こちらも <code>'value'</code> を出力します。<code><var>foo</var></code> と <code><var>bar</var></code> は同じ文字列に変換されるからです。</p>

<pre class="brush: js">let foo = {unique_prop: 1}, bar = {unique_prop: 2}, object = {};
object[foo] = 'value'
console.log(object[bar])
</pre>

 <p><a href="/ja/docs/Mozilla/Projects/SpiderMonkey">SpiderMonkey</a> JavaScript エンジンでは、この文字列は "<code>[object Object]</code>" となります。</p>

<h3 id="Method_binding">メソッドのバインド</h3>

<p>メソッドは、そのメソッドが所属するオブジェクトにバインドされているわけではありません。特に、 <code>this</code> はメソッド内で固定されていません。つまり、 <code>this</code> は必ずしもそのメソッドを含んでいるオブジェクトを参照しているとは限りません。 <code>this</code> は関数呼び出し時に「渡される」ものです。<a href="/ja/docs/Web/JavaScript/Reference/Operators/this#method_binding">メソッドのバインド</a>を参照してください。</p>

<h2 id="Examples">例</h2>

<h3 id="Bracket_notation_vs._eval">ブラケット表記法と <code>eval</code></h3>

<p>JavaScript 初心者はしばしば、代わりにブラケット表記法を使えるところで {{jsxref("eval", "eval()")}} を使用してしまう間違いを犯します。</p>

<p>例えば、以下のような構文がたくさんのスクリプトで見られます。</p>

<pre class="brush: js">x = eval('document.forms.form_name.elements.' + strFormControl + '.value')
</pre>

<p><code>eval()</code> は低速であり、可能な限り避けるべきです。また、 <code>strFormControl</code> は ID を必要としますが、フォームコントロールの名前と <code>id</code> は必須ではありません。代わりにブラケット表記法を使った方が良いでしょう。</p>

<pre class="brush: js">x = document.forms['form_name'].elements[strFormControl].value
</pre>

<h2 id="Specifications">仕様書</h2>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">仕様書</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName('ESDraft', '#sec-property-accessors', 'Property Accessors')}}</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.operators.property_accessors")}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
  <li>{{jsxref("Object")}}</li>
  <li>{{jsxref("Object.defineProperty()")}}</li>
  <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Optional_chaining">オプショナルチェイニング</a></li>
</ul>
