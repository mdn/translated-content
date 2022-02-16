---
title: arguments.callee
slug: Web/JavaScript/Reference/Functions/arguments/callee
tags:
- Deprecated
- Functions
- JavaScript
- Property
- arguments
- プロパティ
  - 関数
translation_of: Web/JavaScript/Reference/Functions/arguments/callee
---
<div>{{jsSidebar("Functions")}}</div>

<p><strong><code>arguments.callee</code></strong> プロパティは現在実行中の関数を示します。</p>

<h2 id="Description">解説</h2>

<p><code>callee</code> は <code>arguments</code> オブジェクトのプロパティです。関数の本体の内部で現在実行中の関数を参照するために使用します。これは関数名が不明であるとき、たとえば名前のない関数式 （「無名関数」） の内部などで便利です。</p>

<div class="warning"><strong>警告:</strong> ECMAScript 第 5 版では、 <a href="/ja/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode">strict モード</a>における <code>arguments.callee()</code> の使用を禁止しています。関数式に名前を付けるか、関数が自身を呼び出す必要がある場合に関数宣言を使用するかして <code>arguments.callee()</code> の使用を避けてください。</div>

<h3 id="Why_was_arguments.callee_removed_from_ES5_strict_mode">なぜ <code>arguments.callee</code> は ES5 strict モードで削除されたのか</h3>

<p>(<a href="http://stackoverflow.com/a/235760/578288">olliej による Stack Overflow の回答</a>によれば)</p>

<p>古いバージョンの JavaScript では名前付きの関数式が利用できず、このため再帰の関数式を作成することができませんでした。</p>

<p>例えば、以下の構文は動作しました。</p>

<pre class="brush: js">function factorial (n) {
    return !(n &gt; 1) ? 1 : factorial(n - 1) * n;
}

[1, 2, 3, 4, 5].map(factorial);</pre>

<p>しかし、</p>

<pre class="brush: js">[1, 2, 3, 4, 5].map(function(n) {
    return !(n &gt; 1) ? 1 : /*ここでどうする？*/ (n - 1) * n;
});</pre>

<p>とは書けませんでした。回避策としてこの <code>arguments.callee</code> が追加され、以下のようなことができるようになりました。</p>

<pre class="brush: js">[1, 2, 3, 4, 5].map(function(n) {
    return !(n &gt; 1) ? 1 : arguments.callee(n - 1) * n;
});</pre>

<p>しかし、これは実際には本当に悪い解決法でした。これは (他の <code>arguments</code>、<code>callee</code>、<code>caller</code> の問題と組み合わさって)、一般的な場合に、インライン化と末尾再帰が不可能になるからです (特定のケースではトレースなどを通じて実現できますが、最高のコードでも、不要な検査が入るために最適ではありません)。他の大きな問題として、再帰呼び出しにおいては <code>this</code> の値が別のものになるというものがあります。例を示します。</p>

<pre class="brush: js">var global = this;

var sillyFunction = function(recursed) {
    if (!recursed) { return arguments.callee(true); }
    if (this !== global) {
        alert('This is: ' + this);
    } else {
        alert('This is the global');
    }
}

sillyFunction();</pre>

<p>ECMAScript 3 では、以下のように名前付き関数式を許可することでこれらの問題を解決しました。</p>

<pre class="brush: js">[1, 2, 3, 4, 5].map(function factorial(n) {
    return !(n &gt; 1) ? 1 : factorial(n - 1)*n;
});</pre>

<p>これには多くの利点があります。</p>

<ul>
 <li>他の関数と同様に、コード内の他のところから呼び出すことができる</li>
 <li>外側のスコープに変数を作らない (<a href="http://kangax.github.io/nfe/#example_1_function_expression_identifier_leaks_into_an_enclosing_scope">IE 8 以下を除く</a>)</li>
 <li>arguments オブジェクトにアクセスするよりもパフォーマンスが良い</li>
</ul>

<p>もう一つ非推奨になった機能として <code>arguments.callee.caller</code>、より具体的には <code>Function.caller</code> がありました。これはなぜでしょうか。どの時点でも、スタック上で任意の関数の最も深い呼び出し元を見つけることができますが、前述のように、コールスタックを見ることは、一つの大きな影響があります。これによって数多くの最適化が不可能になったり、はるかに困難になったりするのです。例えば、例えば、関数 <code>f</code> が未知の関数を呼び出さないことを保証できない場合、 <code>f</code> をインライン化することはできません。基本的には些細なことでインライン化できたかもしれない呼び出し箇所に、大量の防護壁が積み重なるということです。</p>

<pre class="brush: js">function f(a, b, c, d, e) { return a ? b * c : d * e; }</pre>

<p>JavaScript インタープリターは、呼び出しが行われた時点で提供されたすべての引数が数字であることを保証できない場合、インライン化されたコードの前ですべての引数のチェックを挿入するか、関数をインライン化できないようにする必要があります。この場合は、賢いインタープリタであれば、チェックをより最適な形に組み替え、使われない値はチェックしないようにできるはずです。しかし、多くの場合それは不可能であり、したがってインライン化することは不可能になります。</p>

<h2 id="Examples">例</h2>

<h3 id="Using_arguments.callee_in_an_anonymous_recursive_function">無名再帰関数内での <code>arguments.callee</code> の使用</h3>

<p>再帰関数は自分自身を参照する必要があります。ふつう、関数が自分自身を参照するには関数名を使用します。しかし、無名関数には名前がありません。さらにその無名関数を参照するアクセス可能な変数もない (関数がどの変数にも代入されていない) 場合、その関数には自分自身を参照する手段がありません (無名関数は<a href="/ja/docs/Web/JavaScript/Reference/Operators/function">関数式</a>または <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function"><code>Function</code> コンストラクター</a>によって作成できます)。したがって、これを参照するためのアクセス可能な変数がない場合、関数が自分自身を参照できる唯一の方法が <code>arguments.callee</code> による方法になります。</p>

<p>次の例は関数を定義し、その関数内でさらに階乗関数を定義して返しています。この例はあまり実用的ではなく、<a href="/ja/docs/Web/JavaScript/Reference/Operators/function">名前付き関数式</a>で同じ結果が得られない場合はほとんどありません。</p>

<pre class="brush: js">function create() {
   return function(n) {
      if (n &lt;= 1)
         return 1;
      return n * arguments.callee(n - 1);
   };
}

var result = create()(5); // 120 (5 * 4 * 3 * 2 * 1) を返す</pre>

<h3 id="A_use_of_arguments.callee_with_no_good_alternative">良い代替手段がない場合の <code>arguments.callee</code> の使用</h3>

<p>ただし、次のような場合は <code>arguments.callee</code> に代わるものが無いため、非推奨にしたことはバグである可能性があります (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=725398">bug 725398</a> を参照)。</p>

<pre class="brush: js">function createPerson(sIdentity) {
    var oPerson = new Function('alert(arguments.callee.identity);');
    oPerson.identity = sIdentity;
    return oPerson;
}

var john = createPerson('John Smith');

john();</pre>

<h2 id="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-arguments-exotic-objects', 'Arguments Exotic Objects')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.functions.arguments.callee")}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Function")}}</li>
</ul>
