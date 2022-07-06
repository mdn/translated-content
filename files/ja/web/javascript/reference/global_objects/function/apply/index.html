---
title: Function.prototype.apply()
slug: Web/JavaScript/Reference/Global_Objects/Function/apply
tags:
  - Function
  - JavaScript
  - Method
  - apply
translation_of: Web/JavaScript/Reference/Global_Objects/Function/apply
---
<div>{{JSRef}}</div>

<p><code><strong>apply()</strong></code> メソッドは、 <code>this</code> 値を指定して関数を呼び出し、 <code>arguments</code> は配列 (または<a href="/ja/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects">配列風オブジェクト</a>) として提供します。</p>

<div>{{EmbedInteractiveExample("pages/js/function-apply.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="notranslate"><code><var>func</var></code>.apply(<var>thisArg,</var> [ <var>argsArray</var>])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>thisArg</var></code></dt>
 <dd>
 <p><code>this</code> の値で、 <code><var>func</var></code> の呼び出しで提供されます。</p>

 <p>このメソッドで指定した <code>this</code> が必ず呼び出したメソッドで参照されるわけではないことに注意してください。もし呼び出したメソッドが{{jsxref("Strict_mode", "厳格モードではない", "", 1)}}コード内の関数であれば、ここで渡した値が {{jsxref("null")}} もしくは {{jsxref("undefined")}} であった場合はグローバルオブジェクトに置き換えられ、プリミティブ型の変数はボックス化されます。この引数は必須です。</p>
 </dd>
 <dt><code><var>argsArray</var></code> {{optional_inline}}</dt>
 <dd>
 <p>1 つの配列風のオブジェクトであり、 <code><var>func</var></code> 関数が呼ぶことになる引数を列挙したものです。関数に引数が渡されない場合は {{jsxref("null")}} または {{jsxref("undefined")}} となります。</p>

 <p>ECMAScript 5 以降ではこれらの値は配列ではなく配列風のオブジェクトを用いる事になりました。後述の<a href="#browser_compatibility">ブラウザーの互換性</a>を参照してください。</p>
 </dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>指定した <code><strong>this</strong></code> と引数で関数を呼び出した結果が返ります。</p>

<h2 id="Description" name="Description">解説</h2>

<div class="note">
<p><strong>注:</strong> 関数の構文は {{jsxref("Function.call", "call()")}} メソッドとほぼ同じですが、根本的な違いは <code>call()</code> メソッドは<strong>連続した引数のリスト</strong>を受け取るのに対して、 <code>apply()</code> メソッドが<strong>引数の配列を 1 つだけ</strong>受け取るという点です。</p>
</div>

<div class="note">
<p><strong>注:</strong> 最初の引数が undefined または null の場合、配列の<a href="/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax">スプレッド構文</a>を使用して同様の結果を得ることができます。</p>
</div>

<p>存在する関数を呼び出す時は通常と異なる <code>this</code> オブジェクトを渡すことができます。<code>this</code> はカレントオブジェクト、呼び出したオブジェクトを参照します。<code>apply</code> を用いることで、新たなオブジェクトのためにそのメソッドを書き直すことなく継承させることができます。</p>

<p><code>apply</code> は、対応する引数の型を除けば {{jsxref("Function.call", "call()")}} によく似ています。引数のリストの代わりに引数の配列を用いることができます。<code>apply</code> は配列リテラルを引数に用いることもできます。例えば <code><em>func</em>.apply(this, ['eat', 'bananas'])</code> のように利用でき、同様に配列オブジェクトを <code><em>func</em>.apply(this, new Array('eat', 'bananas'))</code> のように利用できます。</p>

<p><code>argsArray</code> で {{jsxref("Functions/arguments", "arguments")}} を利用することもできます。<code>arguments</code> は関数内のローカル変数です。これは、呼び出されたオブジェクトの不特定の引数すべてに対して用いることができます。つまり、 <code>apply</code> メソッドを使うにあたって呼び出されたオブジェクトの引数について知る必要がないのです。<code>arguments</code> を利用することで、引数のすべてを呼び出されたオブジェクトに渡すことができます。引数の扱いは、呼び出されたオブジェクトが受け持ちます。</p>

<p>ECMAScript 第5版以降では、配列風のオブジェクトも使えます。具体的には、<code>length</code> プロパティとその範囲 (0 から length-1 まで) の整数の名称のプロパティを持った、あらゆる種類のオブジェクトの利用を認めています。例えば、{{domxref("NodeList")}} や <code>{ 'length': 2, '0': 'eat', '1': 'bananas' }</code> のような独自のオブジェクトを利用できます。</p>

<div class="note">
<p><strong>注:</strong> Chrome 14 や Internet Explorer 9 などのブラウザーでは、配列風オブジェクトを扱えずに例外が発生します。</p>
</div>

<h2 id="例">例</h2>

<h3 id="Using_apply_to_append_an_array_to_another" name="Using_apply_to_append_an_array_to_another">apply で配列を別の配列に追加する</h3>

<p><code>push</code> で 1 つの要素を配列に追加できます。そして、<code>push</code> は可変長引数に対応しているので、複数の要素を一度に追加することもできます。</p>

<p>しかし <code>push</code> に配列を渡すと、配列の要素ごとにではなく配列全体を 1 つの要素として追加してしまいます。配列の中に配列が入るだけなのです。</p>

<p>それを望まない場合はどうすればいいのでしょう？ <code>concat</code> ならば望みの結果を得られます。しかし、<em>既存</em>の配列に追加するのではなく、新しい配列を生成して返します。</p>

<p>既存の配列に追加したいのに... では、どうすれば？ループ文を書きますか？おことわりですよね？</p>

<p><code>apply</code> が救ってくれます！</p>

<pre class="brush: js notranslate">const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
</pre>

<h3 id="Using_apply_and_built-in_functions" name="Using_apply_and_built-in_functions"><code>apply</code> をビルトイン関数と共に利用する</h3>

<p><code>apply</code> を賢く使うと、本来なら配列のためにループ文を書かなくてはならないような処理に対して、ビルトイン関数をそのまま使えるようになります。</p>

<p>下記の例では、配列の最大値・最小値を求めるために <code>Math.max</code>/<code>Math.min</code> を使っています。</p>

<pre class="brush: js notranslate">// 最小値・最大値を求めたい配列
const numbers = [5, 6, 2, 3, 7];

// Math.min/Math.max と apply を使う
let max = Math.max.apply(null, numbers);
// これは右と同じ Math.max(numbers[0], ...)
// または Math.max(5, 6, ...)

let min = Math.min.apply(null, numbers);

// 対して、ループ文を使うとこうなる
max = -Infinity, min = +Infinity;

for (let i = 0; i &lt; numbers.length; i++) {
  if (numbers[i] &gt; max) {
    max = numbers[i];
  }
  if (numbers[i] &lt; min) {
    min = numbers[i];
  }
}
</pre>

<p>しかし注意してください。この方法で <code>apply</code> を使う場合、 JavaScript エンジンの引数の長さ上限を超えてしまう危険があります。多すぎる (おおよそ数万個以上だと思って下さい) 引数を与えた結果は、その上限が特に決まっていない (本当に任意の巨大なデータのかたまりに対してさえ) ためエンジンによって (JavaScriptCore ライブラリでは<a class="link-https" href="https://bugs.webkit.org/show_bug.cgi?id=80797">引数の上限は 65536 である</a>とハードコーディングされています) 異なります。</p>

<p>これは、その限界 (実際には、過剰に大きなスタックの挙動の性質さえも) が不特定であるためです。例外を投げるエンジンも存在します。さらに酷い場合では、関数へ実際に渡す引数の数を勝手に制限するものもあります。後者について詳しく解説しますと、そのエンジンの引数の上限が 4 つの場合 (実際の上限値は当然もっと上です)、上の例では、完全な配列でなく <code>5, 6, 2, 3</code> が <code>apply</code> へ渡されたかのような動作をします。</p>

<p>もし実装しているコードで利用する配列の変数の数が数万を超えそうなときは、以下に示すように一度に apply に渡す配列を分割して利用する方法を併用すべきでしょう。</p>

<pre class="brush: js notranslate">function minOfArray(arr) {
  let min = Infinity;
  let QUANTUM = 32768;

  for (var i = 0, len = arr.length; i &lt; len; i += QUANTUM) {
    var submin = Math.min.apply(null,
                                arr.slice(i, Math.min(i+QUANTUM, len)));
    min = Math.min(submin, min);
  }

  return min;
}

let min = minOfArray([5, 6, 2, 3, 7]);
</pre>

<h3 id="Using_apply_to_chain_constructors" name="Using_apply_to_chain_constructors">apply を利用したコンストラクターチェーン</h3>

<p><code>apply</code> を利用して、Java のように {{jsxref("Operators/new", "constructors")}} の連結を行なうことができます。</p>

<p>以下に示す例ではグローバルな <code>construct</code> という名称の {{jsxref("Function")}} オブジェクトを作成し、引数のリストの代わりに配列風オブジェクトをコンストラクターと共に利用できるようになります。</p>

<pre class="brush: js notranslate">Function.prototype.construct = function(aArgs) {
  let oNew = Object.create(this.prototype);
  this.apply(oNew, aArgs);
  return oNew;
};
</pre>

<div class="note" style="height: 250px; overflow: auto;">
<p><strong>注:</strong> 上記で使用している <code>Object.create()</code> メソッドは比較的新しいです。代わりの方法として、以下の例を検討してください。</p>

<p>{{jsxref("Object/__proto__", "Object.__proto__")}} を利用:</p>

<pre class="brush: js notranslate">Function.prototype.construct = function (aArgs) {
  let oNew = {};
  oNew.__proto__ = this.prototype;
  this.apply(oNew, aArgs);
  return oNew;
};
</pre>

<p><a href="/ja/docs/Web/JavaScript/Closures">クロージャ</a>を利用:</p>

<pre class="brush: js notranslate">Function.prototype.construct = function(aArgs) {
  let fConstructor = this, fNewConstr = function() {
    fConstructor.apply(this, aArgs);
  };
  fNewConstr.prototype = fConstructor.prototype;
  return new fNewConstr();
};</pre>

<p>{{jsxref("Function")}} コンストラクターを利用:</p>

<pre class="brush: js notranslate">Function.prototype.construct = function (aArgs) {
  let fNewConstr = new Function("");
  fNewConstr.prototype = this.prototype;
  let oNew = new fNewConstr();
  this.apply(oNew, aArgs);
  return oNew;
};
</pre>
</div>

<p>使用例:</p>

<pre class="brush: js notranslate">function MyConstructor() {
  for (let nProp = 0; nProp &lt; arguments.length; nProp++) {
    this['property' + nProp] = arguments[nProp];
  }
}

let myArray = [4, 'Hello world!', false];
let myInstance = MyConstructor.construct(myArray);

console.log(myInstance.property1);                // logs 'Hello world!'
console.log(myInstance instanceof MyConstructor); // logs 'true'
console.log(myInstance.constructor);              // logs 'MyConstructor'
</pre>

<div class="note">
<p><strong>注:</strong> この非ネイティブな <code>Function.construct</code> メソッドはいくつかのネイティブ実装されたコンストラクタ (例えば {{jsxref("Date")}} のような物) と併用できません。このようなケースにおいては {{jsxref("Function.bind")}} メソッドを利用する必要があります。</p>

<p>例えば <code>[2012, 11, 4]</code> のような配列を {{jsxref("Global_Objects/Date", "Date")}} コンストラクターに利用する事を考えてみてください。この場合では <code>new (Function.prototype.bind.apply(Date, [null].concat([2012, 11, 4])))()</code> のように書く必要があります。</p>

<p>いずれにせよこれは最適な選択肢とは言えず、実用上はいかなる状況でも用いるべきではないでしょう)</p>
</div>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-function.prototype.apply', 'Function.prototype.apply')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Function.apply")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Functions/arguments", "arguments")}} オブジェクト</li>
 <li>{{jsxref("Function.prototype.bind()")}}</li>
 <li>{{jsxref("Function.prototype.call()")}}</li>
 <li>{{jsxref("Functions", "関数と関数スコープ", "", 1)}}</li>
 <li>{{jsxref("Reflect.apply()")}}</li>
 <li>{{jsxref("Operators/Spread_syntax", "スプレッド構文", "", 1)}}</li>
</ul>
