---
title: Function.prototype.bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
tags:
  - ECMAScript 2015
  - ECMAScript 5
  - Function
  - JavaScript
  - Method
  - polyfill
browser-compat: javascript.builtins.Function.bind
translation_of: Web/JavaScript/Reference/Global_Objects/Function/bind
---
<div>{{JSRef}}</div>

<p><span class="seoSummary"><code><strong>bind()</strong></code> メソッドは、呼び出された際に <code>this</code> キーワードに指定された値が設定される新しい関数を生成します。この値は新しい関数が呼び出されたとき、一連の引数の前に置かれます。</span></p>

<div>{{EmbedInteractiveExample("pages/js/function-bind.html", "taller")}}</div>


<h2 id="Syntax">構文</h2>

<pre class="brush: js">
bind(thisArg)
bind(thisArg, arg1)
bind(thisArg, arg1, arg2)
bind(thisArg, arg1, ... , argN)
</pre>

<h3 id="Parameters">引数</h3>

<dl>
  <dt><code><var>thisArg</var></code></dt>
  <dd>バインドされた関数が呼び出される際、 <code>this</code> 引数としてターゲット関数 <code><var>func</var></code> に渡される値です。バインドされた関数が {{jsxref("Operators/new", "new")}} 演算子によって構築された場合、この引数は無視されます。 <code>bind</code> を使用して <code>setTimeout</code> の中で (コールバックとして提供する) 関数を生成する場合、 <code><var>thisArg</var></code> として渡されたプリミティブ値はオブジェクトに変換されます。引数が <code>bind</code> に提供されなかった場合、または <code><var>thisArg</var></code> が <code><var>null</var></code> または <code><var>undefined</var></code> であった場合は、実行スコープの <code>this</code> は新しい関数のための <code><var>thisArg</var></code> として扱われます。</dd>
  <dt><code><var>arg1</var>, <var>arg2</var>, ...<var>argN</var></code> {{optional_inline}}</dt>
  <dd><code><var>func</var></code> を呼び出す時、バインドされた関数に与えられる引数の前に付けて渡す引数。</dd>
</dl>

<h3 id="Return_value">返値</h3>

<p><code>this</code> の値と初期の引数を指定された関数のコピーです。</p>

<h2 id="Description">解説</h2>

<p><strong>bind()</strong> 関数は、新しい<strong>バインドされた関数</strong>、すなわち元の関数オブジェクトをラップする<em><ruby>特殊関数オブジェクト<rp> (</rp><rt>exotic function object</rt><rp>) </rp></ruby></em> (ECMAScript 2015 からの用語) を生成します。バインドされた関数を呼び出すと、通常はラップされた関数が実行される結果になります。</p>

<p>バインドされた関数は、以下の内部プロパティを持ちます。</p>

<dl>
  <dt><strong><code>[[BoundTargetFunction]]</code></strong></dt>
  <dd>ラップされた関数オブジェクト</dd>
  <dt><code><strong>[[BoundThis]]</strong></code></dt>
  <dd>ラップされた関数を呼び出す時に常に <strong>this</strong> に渡される値。</dd>
  <dt><code><strong>[[BoundArguments]]</strong></code></dt>
  <dd>ラップされた関数を呼び出す時に、その要素が第1引数として使われる値のリスト。</dd>
  <dt><code><strong>[[Call]]</strong></code></dt>
  <dd>オブジェクトに関連する実行コード。関数呼び出し式を通じて実行される。内部メソッドへの引数は <code>this</code> 値と呼び出し式によって関数に渡される引数を含むリスト。</dd>
</dl>

<p>バインドされた関数が呼び出されると、内部メソッド <code>[[Call]]</code> を <code>[[BoundTargetFunction]]</code> 上で、 <code>Call(<var>boundThis</var>, ...<var>args</var>)</code> の引数で呼び出します。ここで <code><var>boundThis</var></code> は <code>[[BoundThis]]</code>、 <code><var>args</var></code> は <code>[[BoundArguments]]</code> で、その後に関数呼び出しで渡された引数が続きます。</p>

<p>バインドされた関数は {{jsxref("Operators/new", "new")}} 演算子でも生成されます。これを行うとターゲット関数が代わりに生成されたようになります。与えられた <code>this</code> の値は無視され、追加された引数はエミュレートされた関数に提供されます。</p>

<h2 id="Examples">例</h2>

<h3 id="Creating_a_bound_function">バインドされた関数の生成</h3>

<p>最もシンプルな <code>bind()</code> の使い方は、どのように呼び出された場合でも特定の <code>this</code> 値を持つ関数を生成することです。</p>

<p>初心者の JavaScript プログラマーがよくやる間違いは、あるオブジェクトからメソッドを取り出し、後でその関数を呼び出すとき、その内側の <code>this</code> 値が元のオブジェクトになると考えてしまうことです (例えば、そのメソッドをコールバック関数に使う場合)。</p>

<p>特に配慮しなければ、ふつうは元のオブジェクトが見えなくなります。その関数に元々のオブジェクトを <code>bind()</code> してバインドされた関数を生成すれば、この問題をきちんと解決することができます。</p>

<pre class="brush: js">this.x = 9;    // 'this' はここではブラウザーのグローバルな 'window' オブジェクト
const module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX();
// 81 を返します

const retrieveX = module.getX;
retrieveX();
// 9 を返します。この関数はグローバルスコープで呼び出されるためです。

// 'this' を module に結びつけた新しい関数を生成
// 初心者のプログラマーはグローバル変数の x と
// モジュールプロパティの x とを混同するかもしれません。
const boundGetX = retrieveX.bind(module);
boundGetX();
// 81 を返します
</pre>

<h3 id="Partially_applied_functions">部分的に適用された関数</h3>

<p>次にシンプルな <code>bind()</code> の使い方は、あらかじめ引数が指定された関数を生成することです。</p>

<p>これらの引数は、<code>this</code> 値の後に続けます (指定しないことも可能)。すると、バインドされた関数がいつ呼ばれても、この指定された引数を先頭にしてバインドされた関数の引数がターゲット関数に渡されます。</p>

<pre class="brush: js">function list() {
  return Array.prototype.slice.call(arguments);
}

function addArguments(arg1, arg2) {
  return arg1 + arg2;
}

const list1 = list(1, 2, 3);
//  [1, 2, 3]

const result1 = addArguments(1, 2);
//  3

// 先頭の引数が設定済みの関数を生成します。
const leadingThirtysevenList = list.bind(null, 37);

// 第一引数が設定済みの関数を生成します。
const addThirtySeven = addArguments.bind(null, 37);

const list2 = leadingThirtysevenList();
//  [37]

const list3 = leadingThirtysevenList(1, 2, 3);
//  [37, 1, 2, 3]

const result2 = addThirtySeven(5);
//  37 + 5 = 42

const result3 = addThirtySeven(5, 10);
//  37 + 5 = 42
//  (the second argument is ignored)
</pre>

<h3 id="With_setTimeout"><code>setTimeout</code> での利用</h3>

<p>既定では、 {{domxref("WindowOrWorkerGlobalScope.setTimeout()", "window.setTimeout()")}} 内部の <code>this</code> キーワードは {{domxref("window")}} (または <code>global</code> オブジェクト) に設定されます。クラスインスタンスを参照する <code>this</code> が必要なクラスメソッドを使う場合、 <code>this</code> をコールバック関数と明確に結びつけて (バインドして)、インスタンスを維持することができます。</p>

<pre class="brush: js">function LateBloomer() {
  this.petalCount = Math.floor(Math.random() * 12) + 1;
}

// 1 秒遅延させてから bloom を宣言する
LateBloomer.prototype.bloom = function() {
  window.setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function() {
  console.log(`I am a beautiful flower with ${this.petalCount} petals!`);
};

const flower = new LateBloomer();
flower.bloom();
//  after 1 second, calls 'flower.declare()'
</pre>

<h3 id="Bound_functions_used_as_constructors">コンストラクターとして使用するバインドされた関数</h3>

<div class="warning">
<p><strong>警告</strong>: この節では、 JavaScript の機能性を実演するため、 <code>bind()</code> メソッドの極端な例を説明しています。</p>

<p>以下の方法は何かを実現するのに最適な方法ではなく、むしろ本番環境では使用するべきでない方法です。</p>
</div>

<p>バインドされた関数は自動的に、 {{jsxref("Operators/new", "new")}} 演算子を使ってターゲット関数の新しいインスタンスを構築できるようになっています。新たな値を構築するためにバインドされた関数を使った場合、 <code>this</code> を与えても無視されます。</p>

<p>しかし、同時に与える引数はコンストラクター呼び出しの先頭部分に挿入されます。</p>

<pre class="brush: js">function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return `${this.x},${this.y}`;
};

const p = new Point(1, 2);
p.toString();
// '1,2'

//  以下のポリフィルには対応していません。

//  ネイティブの bind ではうまく動作します。

const YAxisPoint = Point.bind(null, 0/*x*/);

const emptyObj = {};
const YAxisPoint = Point.bind(emptyObj, 0/*x*/);

const axisPoint = new YAxisPoint(5);
axisPoint.toString();                    // '0,5'

axisPoint instanceof Point;              // true
axisPoint instanceof YAxisPoint;         // true
new YAxisPoint(17, 42) instanceof Point; // true
</pre>

<p>バインドされた関数を {{jsxref("Operators/new", "new")}} で使えるように生成するのに特別なことをする必要は無いので注意してください。</p>

<p>当然、普通に呼び出されるバインドされた関数を生成する際も特別なことは必要ありません。もしその関数を {{jsxref("Operators/new", "new")}} 演算子とともに呼び出すことにしか使いたくないと思っても、普通に呼び出すことはできてしまいます。</p>

<pre class="brush: js">// この例は JavaScript コンソールで直接実行できます
// ...上の例のつづき

// 普通の関数としても実行できます
// (あまり必要にはなりませんが)
YAxisPoint(13);

`${emptyObj.x},${emptyObj.y}`;
// &gt;  '0,13'
</pre>

<p>バインドされた関数を {{jsxref("Operators/new", "new")}} でしか使えないように制限したい場合、または通常の呼び出しだけに制限したい場合には、ターゲット関数がその制限を強制するようにしなければなりません。</p>

<h3 id="Creating_shortcuts">ショートカットの作成</h3>

<p><code>bind()</code> は、特定の <code>this</code> を必要とするような関数のショートカットを作成するのにも便利です。</p>

<p>例として、{{jsxref("Array.prototype.slice()")}} を取り上げます。この関数は、配列に似たオブジェクトを本物の配列へ変換するために使えます。まず、次のようにショートカットを作成するとします。</p>

<pre class="brush: js">const slice = Array.prototype.slice;

// ...

slice.apply(arguments);
</pre>

<p><code>bind()</code> を使うと、さらにシンプルにできます。</p>

<p>次のコードでは、 <code>slice()</code> が {{jsxref("Function")}} の {{jsxref("Function.prototype.apply()", "apply()")}} 関数に結びつけられた関数になり、その内側の <code>this</code> 値は {{jsxref("Array.prototype")}} の{{jsxref("Array.prototype.slice()", "slice()")}} 関数にセットされます。こうすると、いちいち <code>apply()</code> を呼び出す必要がなくなります。</p>

<pre class="brush: js">// ひとつ前の例の "slice" と同じ
const unboundSlice = Array.prototype.slice;
const slice = Function.prototype.apply.bind(unboundSlice);

// ...

slice(arguments);
</pre>

<h2 id="Polyfill">ポリフィル</h2>

<p>古いブラウザーは一般的に遅いブラウザーでもあるので、古いブラウザーでの閲覧を少しでも悪くなくすために、性能の良いポリフィルを作成することは、多くの人が認識しているよりもはるかに重要なことです。</p>

<p>したがって、 <code>Function.prototype.bind()</code> のポリフィルの選択肢を二つ示します。</p>

<ol>
 <li>最初の方の方がずっと小さくて性能が良いのですが、 <code>new</code> 演算子を使うとうまくいきません。</li>
 <li>2 番目の方が大きくて性能が低いですが、<code>new</code> 演算子を使ってバインドされた関数を使用することができます。</li>
</ol>

<p>一般的に、ほとんどのコードでは、バインドされた関数で <code>new</code> が使用されることはとても稀なので、一般的には最初の選択肢を使用するのがベストです。</p>

<pre class="brush: js">//  Does not work with `new (funcA.bind(thisArg, args))`
if (!Function.prototype.bind) (function(){
  var slice = Array.prototype.slice;
  Function.prototype.bind = function() {
    var thatFunc = this, thatArg = arguments[0];
    var args = slice.call(arguments, 1);
    if (typeof thatFunc !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - ' +
             'what is trying to be bound is not callable');
    }
    return function(){
      var funcArgs = args.concat(slice.call(arguments))
      return thatFunc.apply(thatArg, funcArgs);
    };
  };
})();</pre>

<p>以下のコードをスクリプトの先頭に挿入すれば、その状況をいくらか変えることができます。ネイティブで対応されていない実装において、 <code>bind()</code> の多くの機能を使えるようになります。</p>

<pre class="brush: js">//  Yes, it does work with `new (funcA.bind(thisArg, args))`
if (!Function.prototype.bind) (function(){
  var ArrayPrototypeSlice = Array.prototype.slice;
  Function.prototype.bind = function(otherThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var baseArgs= ArrayPrototypeSlice.call(arguments, 1),
        baseArgsLength = baseArgs.length,
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          baseArgs.length = baseArgsLength; // reset to default base arguments
          baseArgs.push.apply(baseArgs, arguments);
          return fToBind.apply(
                 fNOP.prototype.isPrototypeOf(this) ? this : otherThis, baseArgs
          );
        };

    if (this.prototype) {
      // Function.prototype doesn't have a prototype property
      fNOP.prototype = this.prototype;
    }
    fBound.prototype = new fNOP();

    return fBound;
  };
})();
</pre>

<p>このアルゴリズムと仕様上のアルゴリズムとの間には、いくつか大きな違いがあります (真剣に網羅することを目指したわけではないので、他にも差はあるかもしれません)。</p>

<ul>
 <li>この部分的な実装は、 {{jsxref("Array.prototype.slice()")}}, {{jsxref("Array.prototype.concat()")}}, {{jsxref("Function.prototype.call()")}}, {{jsxref("Function.prototype.apply()")}} という、それぞれオリジナルの値を持つ組み込みメソッドに依存している。</li>
 <li>この不完全な実装では、不変の「毒薬」のような {{jsxref("Function.caller", "caller")}} および <code>arguments</code> プロパティを作成し、取得、設定、削除の際に {{jsxref("Global_Objects/TypeError", "TypeError")}} を発生させます。 (これは実装が ({{jsxref("Object.defineProperty")}} に対応している場合は追加され、 {{jsxref("Object.__defineGetter__", "__defineGetter__")}} と {{jsxref("Object.__defineSetter__", "__defineSetter__")}} に対応している実装では部分的に [削除時に例外を発生しない形で] 実装されています。)</li>
 <li>この部分的な実装では、 (正規のバインドされた関数には存在しない) <code>prototype</code> プロパティを持つ関数を生成します。</li>
 <li>この部分的な実装では、 {{jsxref("Function.length", "length")}} プロパティが ECMA-262 で示されているものと一致しないバインドされた関数を生成します。これは <code>length</code> が <code>0</code> である関数を生成します。完全な実装では、ターゲット関数の長さとあらかじめ定義された引数の数によりますが、 length が 0 でないものを返すことがあります。</li>
 <li>この部分的な実装では、生成されたバインドされた関数の {{jsxref("Function.name", "name")}} プロパティが元の関数名から派生したものではありません。 ECMA-262 によれば、返されるバインドされた関数の名前は "bound " + ターゲット関数の名前です (空白文字に注意してください)。</li>
</ul>

<p>この部分的な実装を使用することを選択した場合、 <strong>ECMA-262 第 5 版から動作が逸脱している場合には、それに頼ってはいけません!</strong> ありがたいことに、このような仕様からの逸脱は、ほとんどのコーディングの状況では (今までにも) ほとんど出てきません。上記の仕様からの逸脱を理解していない場合は、この特定のケースでは、これらの非準拠の逸脱の詳細を気にしないのが安全です。</p>

<p>どうしても必要で、性能が気にならない場合は、はるかに遅い (しかし、より仕様に準拠した) 解決法が <a href="https://github.com/Raynos/function-bind">https://github.com/Raynos/function-bind</a> にあります。</p>

<h2 id="Specifications">仕様書</h2>

{{Specifications}}

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
  <li>{{jsxref("Function.prototype.apply()")}}</li>
  <li>{{jsxref("Function.prototype.call()")}}</li>
  <li>{{jsxref("Functions", "Functions", "", 1)}}</li>
</ul>
