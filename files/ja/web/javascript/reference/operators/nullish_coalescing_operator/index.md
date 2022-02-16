---
title: Null 合体 (??)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
  - nullish coalescing
translation_of: Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
---
<p>{{JSSidebar("Operators")}}</p>

<p><strong>Null 合体演算子 (<code>??</code>)</strong> は論理演算子の一種です。この演算子は左辺が {{jsxref("null")}} または {{jsxref("undefined")}} の場合に右の値を返し、それ以外の場合に左の値を返します。</p>

<p><a href="/ja/docs/Web/JavaScript/Reference/Operators/Logical_Operators">OR 演算子 (<code>||</code>)</a> と違い、<code>null</code> と <code>undefined</code> 以外の <em><a href="/ja/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Description">falsy</a></em> な値のときには左の値を返します。つまり、左辺が <code>''</code> や <code>0</code> の場合は左の値を評価して返します。その他の例については以下を参照してください。</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-nullishcoalescingoperator.html")}}</div>

<p class="hidden">The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> and send us a pull request.<br>
 See <a href="https://github.com/mdn/interactive-examples/pull/1482#issuecomment-553841750">PR #1482</a> regarding the addition of this example.</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>leftExpr</var> ?? <var>rightExpr</var>
</pre>

<h2 id="Description" name="Description">説明</h2>

<p>Null 合体演算子は左辺が {{jsxref("null")}} または {{jsxref("undefined")}} の場合に右辺の値を返します。</p>

<h3 id="Assigning_a_default_value_to_a_variable" name="Assigning_a_default_value_to_a_variable">変数にデフォルト値を代入する</h3>

<p>以前は、変数にデフォルト値を代入したい場合、一般的なパターンは OR 演算子 (<code><a href="/ja/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_OR_2">||</a></code>) を使用することでした:</p>

<pre class="brush: js notranslate">let foo;

//  foo is never assigned any value so it is still undefined
let someDummyText = foo || 'Hello!';</pre>

<p>しかし、<code>||</code> が論理演算子であるため、左辺の値は評価によって強制的にブール値になり、falsy な値 (<code>0</code>, <code>''</code>, <code>NaN</code>, <code>null</code>, <code>undefined</code>) が返されることはありません。この動作は、<code>0</code> や <code>''</code>, <code>NaN</code> を有効な値と考えている場合、予期せぬ結果を引き起こす可能性があります。</p>

<pre class="brush: js notranslate">let count = 0;
let text = "";

let qty = count || 42;
let message = text || "hi!";
console.log(qty);     // 42 and not 0
console.log(message); // "hi!" and not ""
</pre>

<p>Null 合体演算子は、左辺の値が <code>null</code> もしくは <code>undefined</code> のどちらか (その他の falsy な値は含みません) に評価された場合にのみ右辺の値を返すことで、この潜在的な危険を回避します:</p>

<pre class="brush: js notranslate">let myText = ''; // An empty string (which is also a falsy value)

let notFalsyText = myText || 'Hello world';
console.log(notFalsyText); // Hello world

let preservingFalsy = myText ?? 'Hi neighborhood';
console.log(preservingFalsy); // '' (as myText is neither undefined nor null)
</pre>

<h3 id="Short-circuiting" name="Short-circuiting">短絡評価</h3>

<p>OR 演算子や AND 演算子と同様に、左辺が <code>null</code> でも <code>undefined</code> でもないことが証明された場合、右辺の式は評価されません。</p>

<pre class="brush: js notranslate">function A() { console.log('A was called'); return undefined;}
function B() { console.log('B was called'); return false;}
function C() { console.log('C was called'); return "foo";}

console.log( A() ?? C() );
// logs "A was called" then "C was called" and then "foo"
// as A() returned undefined so both expressions are evaluated

console.log( B() ?? C() );
// logs "B was called" then "false"
// as B() returned false (and not null or undefined), the right
// hand side expression was not evaluated
</pre>

<h3 id="No_chaining_with_AND_or_OR_operators" name="No_chaining_with_AND_or_OR_operators">AND 演算子、OR 演算子とつなげて使わない</h3>

<p>AND 演算子 (<code>&amp;&amp;</code>) と OR 演算子 (<code>||</code>) を直接 <code>??</code> とつなげて使うことはできません。このような場合 <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError">SyntaxError</a></code> が発生します。</p>

<pre class="brush: js example-bad notranslate">null || undefined ?? "foo"; // raises a SyntaxError
true || undefined ?? "foo"; // raises a SyntaxError</pre>

<p>ただし、カッコを付けて明示的に優先順位を示すのは正しいやり方です。</p>

<pre class="brush: js example-good notranslate">(null || undefined) ?? "foo"; // returns "foo"
</pre>

<h3 id="Relationship_with_the_optional_chaining_operator_." name="Relationship_with_the_optional_chaining_operator_.">オプショナルチェイニング演算子 (<code>?.</code>) との関係</h3>

<p>Null 合体演算子は、<code>null</code> と <code>undefined</code> を特定の値として扱いますが、<a href="/ja/docs/Web/JavaScript/Reference/Operators/Optional_chaining">オプショナルチェイニング演算子 (<code>?.</code>)</a> も同様の扱いをします。この演算子は、<code>null</code> または <code>undefined</code> である可能性のあるオブジェクトのプロパティにアクセスするのに便利です。</p>

<pre class="brush: js notranslate">let foo = { someFooProp: "hi" };

console.log(foo.someFooProp?.toUpperCase());  // "HI"
console.log(foo.someBarProp?.toUpperCase()); // undefined
</pre>

<h2 id="Examples" name="Examples">例</h2>

<p>次の例では、デフォルト値を設定していますが、<code>null</code> や <code>undefined</code> 以外の値は保持されます。</p>

<pre class="brush: js notranslate">const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;

const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? 0;

console.log(valA); // "default for A"
console.log(valB); // "" (as the empty string is not null or undefined)
console.log(valC); // 42
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>
    <p>{{SpecName('ESDraft', '#prod-Nulli', 'nullish coalescing expression')}}</p>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<p>{{Compat("javascript.operators.nullish_coalescing")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Optional_chaining">オプショナルチェイニング演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Logical_Operators">論理 OR (<code>||</code>) 演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters">デフォルト引数</a></li>
</ul>
