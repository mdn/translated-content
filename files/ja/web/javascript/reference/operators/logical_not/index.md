---
title: 論理否定 (!)
slug: Web/JavaScript/Reference/Operators/Logical_NOT
tags:
  - JavaScript
  - Language feature
  - Logical Operator
  - Operator
  - Reference
  - 演算子
  - 言語機能
  - 論理演算子
translation_of: Web/JavaScript/Reference/Operators/Logical_NOT
---
<div>{{jsSidebar("Operators")}}</div>

<p>論理否定 (<code>!</code>) 演算子 (論理反転、否定) は、真値を取ると偽値になり、その逆も同様です。これは通常 {{jsxref("Boolean")}} (論理型) の値に使用されます。論理型以外の値に使用した場合、単一のオペランドが <code>true</code> に変換できる場合は <code>false</code> を返し、それ以外は <code>true</code> を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-logical-not.html", "shorter")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">!<var>expr</var>
</pre>

<h2 id="Description" name="Description">解説</h2>

<p>単一のオペランドが <code>true</code> に変換できる場合は <code>false</code> を返し、それ以外は <code>true</code> を返します。</p>

<p>ある値が <code>true</code> に変換できる場合、その値は真値 ({{Glossary("truthy")}}) と呼ばれます。ある値が <code>false</code> に変換できる場合、その値は偽値 ({{Glossary("falsy")}}) と呼ばれます。</p>

<p>false に変換することができる式の例を示します。</p>

<ul>
 <li><code>null</code></li>
 <li><code>NaN</code></li>
 <li><code>0</code></li>
 <li>空文字列 (<code>""</code> または <code>''</code> または <code>``</code>)</li>
 <li><code>undefined</code></li>
</ul>

<p><code>!</code> 演算子は論理値以外のオペランドに対して使用することができますが、返値が常に <a href="/ja/docs/Web/JavaScript/Data_structures#Boolean_type">boolean プリミティブ</a>に変換することが可能であるため、論理演算子と見なすことができます。返値 (または一般的な式) を対応する論理値に明示的に変換するには、二重の<a href="/ja/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_NOT">否定演算子</a>または {{jsxref("Global_Objects/Boolean/Boolean", "Boolean")}} コンストラクターを使用してください。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_NOT" name="Using_NOT">否定の使用</h3>

<p>以下のコードは <code>!</code> (論理否定) 演算子の例を示しています。</p>

<pre class="brush: js notranslate">n1 = !true               // !t returns false
n2 = !false              // !f returns true
n3 = !''                 // !f returns true
n4 = !'Cat'              // !t returns false</pre>

<h3 id="Double_NOT_!!" name="Double_NOT_!!">二重否定 (<code>!!</code>)</h3>

<p>複数の否定演算子を連続して使用することで、明示的にあらゆる値を対応する<a href="/ja/docs/Web/JavaScript/Data_structures#Boolean_type">論理型プリミティブ</a>に変換することができます。変換は値の「真値性」または「偽値性」に基づいて行われます ({{Glossary("truthy")}} および {{Glossary("falsy")}} を参照)。</p>

<p>同じ変換は {{jsxref("Global_Objects/Boolean/Boolean", "Boolean")}} 関数を通じて行うこともできます。</p>

<pre class="brush: js notranslate">n1 = !!true                   // !!truthy returns true
n2 = !!{}                     // !!truthy returns true: <strong>any</strong> object is truthy...
n3 = !!(new Boolean(false))   // ...even Boolean objects with a false <em>.valueOf()</em>!
n4 = !!false                  // !!falsy returns false
n5 = !!""                     // !!falsy returns false
n6 = !!Boolean(false)         // !!falsy returns false</pre>

<h3 id="Converting_between_NOTs" name="Converting_between_NOTs">否定同士の変換</h3>

<p>以下の操作を<strong>論理値</strong>で行った場合、</p>

<pre class="brush: js notranslate">!!bCondition</pre>

<p>常に以下のものと等しくなります。</p>

<pre class="brush: js notranslate">bCondition</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#prod-LogicalORExpression', 'Logical OR expression')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.operators.logical_or")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Boolean")}}</li>
 <li>{{Glossary("Truthy")}}</li>
 <li>{{Glossary("Falsy")}}</li>
</ul>
