---
title: 論理積 (&&)
slug: Web/JavaScript/Reference/Operators/Logical_AND
tags:
  - JavaScript
  - Language feature
  - Logical Operator
  - Operator
  - Reference
  - 演算子
  - 言語機能
  - 論理演算子
translation_of: Web/JavaScript/Reference/Operators/Logical_AND
---
<div>{{jsSidebar("Operators")}}</div>

<p>論理積 (<code>&amp;&amp;</code>) 演算子 (論理結合) をオペランドの組み合わせに対して使用すると、すべてのオペランドが true である場合に true になります。一般的には {{jsxref("Boolean")}} (論理) 値で使用されます。その場合は論理値を返します。ただし <code>&amp;&amp;</code> 演算子は実際には指定されたオペランドのうち一つの値を返すので、この演算子が論理値以外で使用された場合は、論理値以外の値を返すことになります。</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-logical-and.html", "shorter")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><em>expr1</em> &amp;&amp; <em>expr2</em>
</pre>

<h2 id="Description" name="Description">解説</h2>

<p><code>expr<strong>1</strong></code> が <code>true</code> に変換できる場合は <code>expr<strong>2</strong></code> を返し、それ以外の場合は <code>expr<strong>1</strong></code> を返します。</p>

<p>ある値が <code>true</code> に変換できる場合、その値は真値 ({{Glossary("truthy")}}) と呼ばれます。ある値が <code>false</code> に変換できる場合、その値は偽値 ({{Glossary("falsy")}}) と呼ばれます。</p>

<p>false に変換することができる式の例を示します。</p>

<ul>
 <li><code>null</code></li>
 <li><code>NaN</code></li>
 <li><code>0</code></li>
 <li>空文字列 (<code>""</code> または <code>''</code> または <code>``</code>)</li>
 <li><code>undefined</code></li>
</ul>

<p><code>&amp;&amp;</code> 演算子では論理値以外のオペランドを使用することができますが、返値が常に <a href="/ja/docs/Web/JavaScript/Data_structures#Boolean_type">boolean プリミティブ</a>に変換することが可能であるため、論理演算子と見なすことができます。返値 (または一般的な式) を対応する論理値に明示的に変換するには、二重の<a href="/ja/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_NOT">否定演算子</a>または {{jsxref("Global_Objects/Boolean/Boolean", "Boolean")}} コンストラクターを使用してください。</p>

<h3 id="Short-circuit_evaluation" name="Short-circuit_evaluation">短絡評価</h3>

<p>論理積の式は左から右へと評価され、下記の規則を使用して「短絡」評価が可能なように評価されます。</p>

<p><code>(偽値の式) &amp;&amp; <em>expr</em></code> は短絡評価で偽値の式に評価されます。</p>

<p>短絡とは、上記の <code><em>expr</em></code> の部分が<strong>評価されず</strong>、したがって、これを行うことの副作用が効果を及ぼさないことを意味します (例えば、 <code><em>expr</em></code> が関数呼び出しであった場合、この場所では呼び出されません)。これは、最初のオペランドが評価された時点で、すでに演算子の値が決定しているためです。例を示します。</p>

<pre class="brush: js notranslate">function A(){ console.log('called A'); return false; }
function B(){ console.log('called B'); return true; }

console.log( A() &amp;&amp; B() );
// 関数呼び出しによって "called A" がログ出力され、
// それから false (演算子の結果の値) が出力されます。
</pre>

<h3 id="Operator_precedence" name="Operator_precedence">演算子の優先順位</h3>

<p>以下の式は同じであるように見えるかもしれませんが、異なります。 <code>&amp;&amp;</code> 演算子は <code>||</code> 演算子よりも先に実行されるからです (<a href="/ja/docs/Web/JavaScript/Reference/Operators/Operator_Precedence">演算子の優先順位</a>を参照)。</p>

<pre class="brush: js notranslate">true || false &amp;&amp; false      // true を返す。 &amp;&amp; が先に実行されるため
(true || false) &amp;&amp; false    // false を返す。演算子の優先順位が適用されないため</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_AND" name="Using_AND">論理和の使用</h3>

<p>以下のコードは <code>&amp;&amp;</code> (論理積) 演算子の例を示しています。</p>

<pre class="brush: js notranslate">a1 = true  &amp;&amp; true       // t &amp;&amp; t returns true
a2 = true  &amp;&amp; false      // t &amp;&amp; f returns false
a3 = false &amp;&amp; true       // f &amp;&amp; t returns false
a4 = false &amp;&amp; (3 == 4)   // f &amp;&amp; f returns false
a5 = 'Cat' &amp;&amp; 'Dog'      // t &amp;&amp; t returns "Dog"
a6 = false &amp;&amp; 'Cat'      // f &amp;&amp; t returns false
a7 = 'Cat' &amp;&amp; false      // t &amp;&amp; f returns false
a8 = ''    &amp;&amp; false      // f &amp;&amp; f returns ""
a9 = false &amp;&amp; ''         // f &amp;&amp; f returns false</pre>

<h3 id="Conversion_rules_for_booleans" name="Conversion_rules_for_booleans">論理型の変換規則</h3>

<h4 id="AND_から_OR_への変換">AND から OR への変換</h4>

<p><strong>論理型</strong>に関する以下の操作は、</p>

<pre class="brush: js notranslate">bCondition1 &amp;&amp; bCondition2</pre>

<p>常に以下のものと等しくなります。</p>

<pre class="brush: js notranslate">!(!bCondition1 || !bCondition2)</pre>

<h4 id="Converting_OR_to_AND" name="Converting_OR_to_AND">OR から AND への変換</h4>

<p><strong>論理型</strong>に関する以下の操作は、</p>

<pre class="brush: js notranslate">bCondition1 || bCondition2</pre>

<p>常に以下のものと等しくなります。</p>

<pre class="brush: js notranslate">!(!bCondition1 &amp;&amp; !bCondition2)</pre>

<h3 id="Removing_nested_parentheses" name="Removing_nested_parentheses">入れ子になった括弧の除去</h3>

<p>論理式は左から右に評価されるので、いくつかのルールに従って複雑な式から括弧を削除することは常に可能です。</p>

<p>以下の<strong>論理型</strong>に関する複合操作は、</p>

<pre class="brush: js notranslate">bCondition1 || (bCondition2 &amp;&amp; bCondition3)</pre>

<p>常に以下のものと等しくなります。</p>

<pre class="brush: js notranslate">bCondition1 || bCondition2 &amp;&amp; bCondition3</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#prod-LogicalANDExpression', 'Logical AND expression')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.operators.logical_and")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Boolean")}}</li>
 <li>{{Glossary("Truthy")}}</li>
 <li>{{Glossary("Falsy")}}</li>
</ul>
