---
title: Function() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Function/Function
tags:
  - Constructor
  - Function
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Function/Function
---
<div>{{JSRef}}</div>

<p><span class="seoSummary"><strong><code>Function</code> コンストラクター</strong>は、新しい <code>Function</code> <strong>オブジェクト</strong>を生成します。コンストラクターを直接呼び出すと動的に関数を生成することができますが、セキュリティや、 {{jsxref("eval")}} と似た性能の (ただし、はるかに重要性の低い) 問題を抱えます。ただし eval とは異なり、 <code>Function</code> コンストラクターはグローバルスコープで実行される関数のみを生成します。</span></p>

<div>{{EmbedInteractiveExample("pages/js/function-constructor.html","shorter")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><code>new Function([<var>arg1 </var>[, <var>arg2 </var>[, ...<var>argN</var>]] ,] <var>functionBody</var>)</code></pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>arg1</var>, <var>arg2</var>, ... <var>argN</var></code></dt>
 <dd>仮引数の名前として関数で用いるための名前。各々は、妥当な JavaScript の識別子と一致する文字列か、カンマで区切られた文字列などのリストでなければなりません。例えば、 "<code>x</code>", "<code>theValue</code>", "<code>x,theValue</code>" などです。</dd>
 <dt><code><var>functionBody</var></code></dt>
 <dd>関数定義を形成する JavaScript の文を含む文字列。</dd>
</dl>

<h2 id="Description" name="Description">解説</h2>

<p><code>Function</code> コンストラクターで生成された <code>Function</code> オブジェクトは、関数が作成されたときに解釈されます。これは、関数を{{jsxref("Operators/function", "関数式", "", 1)}}や{{jsxref("Statements/function", "関数文", "", 1)}}を使って定義してコード内で呼び出した場合に比べ、コードの他の部分と一緒に解釈されるため、効率が落ちます。</p>

<p>関数に渡されるすべての引数は、関数のパラメーター識別名として、渡される順番どおりに作成されます。引数を省略すると、その引数の値は <code>undefined</code> になります。</p>

<p>(<code>new</code> 演算子を用いずに) 関数として、<code>Function</code> コンストラクターを実行することは、コンストラクターとして実行することと同じです。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Specifying_arguments_with_the_Function_constructor" name="Specifying_arguments_with_the_Function_constructor">Function コンストラクターに引数を指定する</h3>

<p>以下のコードは二つの引数を取る <code>Function</code> オブジェクトを生成します。</p>

<pre class="brush: js notranslate">// この例は JavaScript コンソールで直接実行することができます

// 二つの引数を取り、その合計を返す関数を生成します
const adder = new Function('a', 'b', 'return a + b');

// 関数を呼び出します
adder(2, 6);
// 8
</pre>

<p>引数 "<code>a</code>" および "<code>b</code>" は関数の本体 "<code>return a + b</code>" の中で使用される形式的な引数名です。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-function-constructor', 'Function constructor')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Function")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Functions", "関数と関数スコープ", "", 1)}}</li>
 <li>{{jsxref("Statements/function", "function")}} 文</li>
 <li>{{jsxref("Operators/function", "function")}} 式</li>
 <li>{{jsxref("Statements/function*", "function*")}} 文</li>
 <li>{{jsxref("Operators/function*", "function*")}} 式</li>
 <li>{{jsxref("AsyncFunction")}}</li>
 <li>{{jsxref("GeneratorFunction")}}</li>
</ul>
