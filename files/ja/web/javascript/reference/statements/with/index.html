---
title: with
slug: Web/JavaScript/Reference/Statements/with
tags:
  - Deprecated
  - JavaScript
  - Language feature
  - Statement
translation_of: Web/JavaScript/Reference/Statements/with
---
<div class="warning">混乱させるバグや互換性問題の原因になり得るため、<code>with</code> 文の使用は推奨されません。詳しくは "説明" の章の "あいまい性の欠点" をご覧ください。</div>

<div>{{jsSidebar("Statements")}}</div>

<p><strong>with 文</strong>は、文に対するスコープチェーンを拡張します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">with (<var>expression</var>)
  <var>statement</var>
</pre>

<dl>
 <dt><code><var>expression</var></code></dt>
 <dd>文を評価するときに使われるスコープチェーンに、与えられたオブジェクトを追加します。オブジェクトの周りの括弧は必須です。</dd>
 <dt><code><var>statement</var></code></dt>
 <dd>任意の文。複数の文を実行するためには、それらの文をグループ化するために<a href="/ja/docs/Web/JavaScript/Reference/Statements/block">ブロック</a>文 ({ ... }) を使ってください。</dd>
</dl>

<h2 id="Description" name="Description">解説</h2>

<p>JavaScript は、スクリプトの実行コンテキストまたは非修飾名を含む関数の実行コンテキストに関連付けられたスコープチェーンを探索することにより、非修飾名を探します。 'with' 文は、その文本体の評価の間、このスコープチェーンの先頭に、与えられたオブジェクトを追加します。もし本体で使われた非修飾名がそのスコープチェーンの中のプロパティに一致するなら、その名前はそのプロパティとそのプロパティを含むオブジェクトとに結び付けられます。そうでなければ、 {{jsxref("ReferenceError")}} が発生します。</p>

<div class="note"><code>with</code> の利用は非推奨であり、ECMAScript 5 の<a href="/ja/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode">厳格モード</a>では禁止されています。推奨される代替案は、参照したいプロパティを持つオブジェクトを一時変数に代入することです。</div>

<h3 id="Performance_pro_contra" name="Performance_pro_contra">性能上の利点と欠点</h3>

<p><strong>利点:</strong> <code>with</code> 文 は、性能の悪化なしに、長ったらしいオブジェクトの参照を繰り返す必要性を減らすことにより、ファイルサイズの削減に役立ちます。'with' 文 により必要とされるスコープチェーンの変更は、計算コストが高いものではありません。'with' 文 の使用は、インタープリターが、繰り返されるオブジェクトの参照を解析するのを楽にするでしょう。しかしながら、多くの場合では、これによる利益は、望むオブジェクトへの参照を保存するための一時的な変数を使うことにより達成されるということに注意してください。</p>

<p><strong>欠点:</strong> <code>with</code> 文 は、すべての非修飾名の検索に対して、指定されたオブジェクトが最初に探索されることを強制します。それゆえに、関数の仮引数および宣言されたローカル変数名に一致するすべての識別子は、'with' 文 ブロックの中では見つかるのがより遅くなるでしょう。性能が重要な場所では、'with' 文 は、関数の引数および宣言されたローカル変数の識別子を使わないコードブロックを包み込むためだけに使われるのが適切でしょう。</p>

<h3 id="Ambiguity_contra" name="Ambiguity_contra">あいまい性の欠点</h3>

<p><strong>欠点:</strong> <code>with</code> 文 は、非修飾名がスコープチェーンの中で見つかるかどうか、もし見つかるならどのオブジェクトの中でかを、人間の読み手または JavaScript コンパイラーが決定するのを難しくします。つまり、以下の例を見てください。</p>

<pre class="brush: js notranslate">function f(x, o) {
  with (o) {
    console.log(x);
  }
}</pre>

<p><code>f</code> が呼び出されたときのみ、<code>x</code> が見つかるかどうか、もし見つかるなら、<code>o</code> の中でか、または (そのようなプロパティが存在しなければ) <code>f</code> のアクティベーションオブジェクト――そこで、<code>x</code> は最初の仮引数の名前です――の中でか、が決定されます。もし第 2 引数として渡したオブジェクトの中で <code>x</code> を定義するのを忘れた、または何らかの似たようなバグあるいは混乱があったのなら、エラーが起きることなく、ただ予期しない結果が得られるでしょう。</p>

<p><strong>欠点:</strong> <code>with</code> を使用したコードは前方互換性がない可能性があります。普通のオブジェクト以外のものと使用した場合に顕著です。以下の例で考えましょう。</p>

<div>
<pre class="brush:js notranslate">function f(foo, values) {
  with (foo) {
    console.log(values);
  }
}
</pre>

<p>ECMAScript 5 環境で <code>f([1,2,3], obj)</code> を呼び出すと、<code>with</code> 文の中にある <code>values</code> の参照先は <code>obj</code> に解決されます。ところが、ECMAScript 2015 では {{jsxref("Array.prototype")}} に <code>values</code> プロパティが導入されました (よって、すべての配列で使用できます)。従って ECMAScript 2015 に対応する JavaScript 環境では、 <code>with</code> 文の内部にある <code>values</code> の参照先は <code>[1,2,3].values</code> になります。ただし、この例に限って言えば、 {{jsxref("Array.prototype")}} では <code>values</code> が {{jsxref("Symbol.unscopables")}} オブジェクトの中に定義されています。もしそうでなければ、デバッグが困難な問題であることがわかります。</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_with" name="Using_with">with の使用</h3>

<p>次の <code>with</code> 文は、 {{jsxref("Math")}} オブジェクトが既定のオブジェクトであると指定しています。<code>with</code> 文内の複数の文は、オブジェクトを指定することなく、 {{jsxref("Math.PI", "PI")}} プロパティ、 {{jsxref("Math.cos", "cos")}} メソッド、および {{jsxref("Math.sin", "sin")}} メソッドを参照しています。JavaScript は、これらの参照に対して <code>Math</code> オブジェクトを仮定します。</p>

<pre class="brush:js notranslate">var a, x, y;
var r = 10;

with (Math) {
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-with-statement', 'with statement')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.statements.with")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Statements/block", "block", "", 1)}}</li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode">厳格モード</a></li>
 <li>{{jsxref("Symbol.unscopables")}}</li>
 <li>{{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}}</li>
</ul>
