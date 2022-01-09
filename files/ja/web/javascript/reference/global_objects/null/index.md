---
title: 'null'
slug: Web/JavaScript/Reference/Global_Objects/null
tags:
  - JavaScript
  - Language feature
  - Literal
  - Primitive
translation_of: Web/JavaScript/Reference/Global_Objects/null
---
<div>{{jsSidebar("Objects")}}</div>

<p><code>null</code> という値は、意図的にオブジェクトの値が存在しないことを表します。これは JavaScript の<a href="/ja/docs/Glossary/Primitive">プリミティブ値</a>の 1 つであり、ブール演算では <a href="/ja/docs/Glossary/Falsy">falsy</a> として扱われます。</p>

<div>{{EmbedInteractiveExample("pages/js/globalprops-null.html")}}</div>



<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><code>null</code></pre>

<h2 id="Description" name="Description">説明</h2>

<p><code>null</code> 値は <code>null</code> というリテラルです。{{jsxref("Global_Objects/undefined","undefined")}} のようなグローバルオブジェクトのプロパティではありません。代わりに、 <code>null</code> は識別の欠如を表し、変数がオブジェクトを指してないことを示します。API においては、通常はオブジェクトが返されるところで、関連したオブジェクトがない場合に <code>null</code> がよく渡されます。</p>

<pre class="syntaxbox notranslate">// foo が存在せず、定義も初期化もされていない場合:
foo; //ReferenceError: foo is not defined</pre>

<pre class="syntaxbox notranslate">// foo が存在しているが、型も値も持たない場合:
var foo = null;
foo; //null
</pre>

<h3 id="Difference_between_null_and_undefined" name="Difference_between_null_and_undefined"><code>null</code> と <code>undefined</code> の違い</h3>

<p><code>null</code> か <code>undefined</code> をチェックする際は、<a href="/ja/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">等価 (==) と 厳密等価 (===) 演算子の違い</a> に注意してください（前者では型変換が行われます）。</p>

<pre class="brush: js notranslate">typeof null          // "object" (歴史的な理由で "null" ではありません<code>)
typeof undefined     // "undefined"
null === undefined   // false
null  == undefined   // true
null === null        // true
null == null         // true
!null                // true
isNaN(1 + null)      // false
isNaN(1 + undefined) // true</code></pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-null-value', 'null value')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



<p>{{Compat("javascript.builtins.null")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("undefined")}}</li>
 <li>{{jsxref("NaN")}}</li>
 <li>
  <p>{{jsxref("Operators/void", "void operator")}}</p>
 </li>
</ul>
