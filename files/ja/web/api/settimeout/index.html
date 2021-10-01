---
title: WindowOrWorkerGlobalScope.setTimeout()
slug: Web/API/setTimeout
tags:
  - API
  - HTML DOM
  - Intervals
  - JavaScript timers
  - MakeBrowserAgnostic
  - Method
  - NeedsCompatTable
  - NeedsMarkupWork
  - NeedsUpdate
  - Reference
  - Timers
  - WindowOrWorkerGlobalScope
  - setTimeout
translation_of: Web/API/WindowOrWorkerGlobalScope/setTimeout
original_slug: Web/API/WindowOrWorkerGlobalScope/setTimeout
---
<div>{{APIRef("HTML DOM")}}</div>

<p><strong><code>setTimeout()</code></strong> は {{domxref("WindowOrWorkerGlobalScope")}} ミックスインのメソッド (および <code>Window.setTimeout()</code> の後継) で、時間切れになると関数または指定されたコードの断片を実行するタイマーを設定します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <var>timeoutID</var> = <var>scope</var>.setTimeout(<var>function</var>[, <var>delay</var>, <var>arg1</var>, <var>arg2</var>, ...]);
var <var>timeoutID</var> = <var>scope</var>.setTimeout(<var>function</var>[, <var>delay</var>]);
var <var>timeoutID</var> = <var>scope</var>.setTimeout(<var>code</var>[, <var>delay</var>]);
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>function</var></code></dt>
 <dd>タイマーが満了した後に実行したい {{jsxref("function", "関数")}}。</dd>
 <dt><code><var>code</var></code></dt>
 <dd>関数の代わりに文字列を含める代替構文も許容されており、タイマーが満了したときに文字列をコンパイルして実行します。 {{jsxref("Global_Objects/eval", "eval()")}} の使用にリスクがあるのと同じ理由で、この構文は<strong>推奨しません</strong>。</dd>
 <dt><code><var>delay</var></code> {{optional_inline}}</dt>
 <dd>指定した関数やコードを実行する前に待つタイマーの時間をミリ秒 (1/1000 秒) 単位で指定します。この引数を省略すると値 0 を使用しますので "直ちに" 実行する、より正確に言えばできるだけ早く実行することを意味します。どちらの場合も、実際の遅延が想定より長くなることがあります。後述する {{anch("Reasons for delays longer than specified", "遅延が指定値より長い理由")}} をご覧ください。</dd>
 <dt><code><var>arg1</var>, ..., <var>argN</var></code> {{optional_inline}}</dt>
 <dd>タイマーが満了したときに、 <code><var>function</var></code> で指定された関数に渡す追加の引数です。</dd>
</dl>

<div class="note">
<p><strong>注</strong>: Internet Explorer 9 およびそれ以前のバージョンでは、最初の構文で関数に渡す追加の引数は動作しないことに注意してください。同様の機能を実現させるには、ポリフィルを使用してください。({{anch("Polyfill", "ポリフィル")}} を参照)。</p>
</div>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>返される <code><var>timeoutID</var></code> は正の整数値で、 <code>setTimeout()</code> を呼び出して作成したタイマーを識別します。この値を {{domxref("WindowOrWorkerGlobalScope.clearTimeout","clearTimeout()")}} へ渡すことで、タイムアウトを取り消すことができます。</p>

<p><code>setTimeout()</code> と {{domxref("WindowOrWorkerGlobalScope.setInterval", "setInterval()")}} は同じ ID プールを共有しており、さらに <code>clearTimeout()</code> と {{domxref("WindowOrWorkerGlobalScope.clearInterval", "clearInterval()")}} は技術的に入れ替えて使用できることを意識すると役に立つかもしれません。ただし明確さのために、コードを整備するときは混乱を避けるため、常に一致させるようにするべきです。</p>

<p>同じオブジェクト (ウィンドウやワーカー) では、後に <code>setTimeout()</code> や <code>setInterval()</code> を呼び出しても タイムアウト ID を再使用しないことが保証されています。ただし、別なオブジェクトでは別の ID プールを使用します。</p>

<h2 id="Example" name="Example">例</h2>

<p>以下の例はウェブページに 2 つのシンプルなボタンを置いており、<code>setTimeout()</code> および <code>clearTimeout()</code> のルーチンを実行します。1 番目のボタンを押下すると 2 秒後にアラートダイアログを呼び出すタイムアウトを設定して、<code>clearTimeout()</code> で使用するタイムアウト ID を保存します。2 番目のボタンを押下すると、このタイムアウトをキャンセルできます。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;Live Example&lt;/p&gt;
&lt;button onclick="delayedAlert();"&gt;2秒後にアラートボックスを表示する&lt;/button&gt;
&lt;p&gt;&lt;/p&gt;
&lt;button onclick="clearAlert();"&gt;アラートを事前にキャンセルする&lt;/button&gt;
</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">var timeoutID;

function delayedAlert() {
  timeoutID = window.setTimeout(window.alert, 2*1000, '本当に遅い！');
}

function clearAlert() {
  window.clearTimeout(timeoutID);
}
</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample('Example')}}</p>

<p><a href="/ja/docs/Web/API/WindowTimers/clearTimeout#Example"><code>clearTimeout()</code> の例</a> もご覧ください。</p>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p>コールバック関数に 1 つ以上の引数を渡す必要があるが、<code>setTimeout()</code> や <code>setInterval()</code> を使用して追加の引数を渡す機能に対応していないブラウザー (例えば Internet Explorer 9 以前) で動作しなければならない場合は、HTML5 標準の引数渡し機能を可能にする以下のポリフィルを追加するとよいでしょう。このコードをスクリプトの先頭に追加してください。</p>

<pre class="brush: js">/*\
|*|
|*|  Polyfill which enables the passage of arbitrary arguments to the
|*|  callback functions of JavaScript timers (HTML5 standard syntax).
|*|
|*|  https://developer.mozilla.org/en-US/docs/DOM/window.setInterval
|*|
|*|  Syntax:
|*|  var timeoutID = window.setTimeout(func, delay[, arg1, arg2, ...]);
|*|  var timeoutID = window.setTimeout(code, delay);
|*|  var intervalID = window.setInterval(func, delay[, arg1, arg2, ...]);
|*|  var intervalID = window.setInterval(code, delay);
|*|
\*/

(function() {
  setTimeout(function(arg1) {
    if (arg1 === 'test') {
      // feature test is passed, no need for polyfill
      return;
    }
    var __nativeST__ = window.setTimeout;
    window.setTimeout = function(vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */ ) {
      var aArgs = Array.prototype.slice.call(arguments, 2);
      return __nativeST__(vCallback instanceof Function ? function() {
        vCallback.apply(null, aArgs);
      } : vCallback, nDelay);
    };
  }, 0, 'test');

  var interval = setInterval(function(arg1) {
    clearInterval(interval);
    if (arg1 === 'test') {
      // feature test is passed, no need for polyfill
      return;
    }
    var __nativeSI__ = window.setInterval;
    window.setInterval = function(vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */ ) {
      var aArgs = Array.prototype.slice.call(arguments, 2);
      return __nativeSI__(vCallback instanceof Function ? function() {
        vCallback.apply(null, aArgs);
      } : vCallback, nDelay);
    };
  }, 0, 'test');
}())
</pre>

<h3 id="IE-only_fix" name="IE-only_fix">IE 限定の修正</h3>

<p>IE 9 およびそれ以前を含む、他のすべてのモバイルブラウザーやデスクトップブラウザーで完全に目立たない修正が必要である場合は、以下の JavaScript 条件付きコメントを使用できます。</p>

<pre class="brush: js">/*@cc_on
  // conditional IE &lt; 9 only fix
  @if (@_jscript_version &lt;= 9)
  (function(f){
     window.setTimeout = f(window.setTimeout);
     window.setInterval = f(window.setInterval);
  })(function(f){return function(c,t){var a=[].slice.call(arguments,2);return f(function(){c instanceof Function?c.apply(this,a):eval(c)},t)}});
  @end
@*/
</pre>

<p>あるいは IE の HTML 条件機能による、とてもクリーンな方法を使用します:</p>

<pre class="brush: html">&lt;!--[if lte IE 9]&gt;&lt;script&gt;
(function(f){
window.setTimeout=f(window.setTimeout);
window.setInterval=f(window.setInterval);
})(function(f){return function(c,t){
var a=[].slice.call(arguments,2);return f(function(){c instanceof Function?c.apply(this,a):eval(c)},t)}
});
&lt;/script&gt;&lt;![endif]--&gt;
</pre>

<h3 id="Workarounds" name="Workarounds">回避策</h3>

<p>もうひとつの方法は、コールバックに無名関数を使用することです。ただし、この方法は少し多くコストがかかります。例:</p>

<pre class="brush: js">var intervalID = setTimeout(function() { myFunc('one', 'two', 'three'); }, 1000);
</pre>

<p>上記の例は、<a href="/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions">アロー関数</a> を使用して以下のように記述できます。</p>

<pre class="brush: js">var intervalID = setTimeout(() =&gt; { myFunc('one', 'two', 'three'); }, 1000);
</pre>

<p>さらに、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind">関数の <code>bind</code></a> を使用する方法もあります。例:</p>

<pre class="brush: js">setTimeout(function(arg1){}.bind(undefined, 10), 1000);
</pre>

<h2 id="The_this_problem" name="The_this_problem">"this" 問題</h2>

<p><code>setTimeout()</code> にメソッド (そういうことならほかの関数も) を渡すとき、コードが実行される際の <code>this</code> の値が想定とは異なるかもしれません。この問題は <a href="/ja/docs/Web/JavaScript/Reference/Operators/this#As_an_object_method">JavaScript リファレンス</a> でより詳細に説明されています。</p>

<h3 id="Explanation" name="Explanation">説明</h3>

<p><code>setTimeout()</code> によって実行されるコードは、 <code>setTimeout</code> が呼び出された関数とは別の実行コンテキスト内から呼び出されます。呼び出された関数に <code>this</code> キーワードを設定する通常の規則を適用して、呼び出しあるいは <code>bind</code> で <code>this</code> を設定しなければ、非 strict モードでは <code>global</code> (または <code>window</code>)、strict モードでは undefined になります。これは、<code>setTimeout</code> が呼び出された関数の <code>this</code> 値と同じにはなりません。</p>

<div class="note">
<p><strong>注:</strong> <code>setTimeout</code> コールバックの既定の <code>this</code> の値は、厳格モードであっても <code>undefined</code> ではなく、 <code>window</code> オブジェクトです。</p>
</div>

<p>以下の例をご覧ください。</p>

<pre class="brush: js">myArray = ['zero', 'one', 'two'];
myArray.myMethod = function (sProperty) {
  alert(arguments.length &gt; 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"</pre>

<p><code>myMethod</code> を呼び出したときに、呼び出しによって <code>this</code> が <code>myArray</code> に設定されますので、関数内で <code>this[sProperty]</code> は <code>myArray[sProperty]</code> と等価です。しかし、以下のコードでは動作が異なります。</p>

<pre class="brush: js">setTimeout(myArray.myMethod, 1.0*1000); // 1秒後に "[object Window]" と表示
setTimeout(myArray.myMethod, 1.5*1000, '1'); // 1.5秒後に "undefined" と表示</pre>

<p><code>myArray.myMethod</code> 関数を <code>setTimeout</code> に渡しており、関数が呼び出されると <code>this</code> が前のように設定されず、既定値の <code>window</code> オブジェクトになります。Array の forEach や reduce などのメソッドにあるような、<code>thisArg</code> を setTimeout に渡すオプションもありません。また以下のように、<code>this</code> を設定するために <code>call</code> を使用する方法も動作しません。</p>

<pre class="brush: js">setTimeout.call(myArray, myArray.myMethod, 2.0*1000); // error: "NS_ERROR_XPC_BAD_OP_ON_WN_PROTO: Illegal operation on WrappedNative prototype object"
setTimeout.call(myArray, myArray.myMethod, 2.5*1000, 2); // same error
</pre>

<h3 id="Possible_solutions" name="Possible_solutions">考えられる解決策</h3>

<p>この問題の一般的な解決策は、<code>this</code> に必要な値を設定するラッパー関数を使用することです:</p>

<pre class="brush: js">setTimeout(function(){myArray.myMethod()}, 2.0*1000); // prints "zero,one,two" after 2 seconds
setTimeout(function(){myArray.myMethod('1')}, 2.5*1000); // prints "one" after 2.5 seconds</pre>

<p>代わりにアロー関数も使用できます。</p>

<pre class="brush: js">setTimeout(() =&gt; {myArray.myMethod()}, 2.0*1000); // prints "zero,one,two" after 2 seconds
setTimeout(() =&gt; {myArray.myMethod('1')}, 2.5*1000); // prints "one" after 2.5 seconds</pre>

<p>他に考えられる "<code>this</code>" 問題の解決策として、本来の <code>setTimeout()</code> および <code>setInterval()</code> グローバル関数を、<code>this</code> オブジェクトを渡せるようにして、コールバックで <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/call"><code>Function.prototype.call</code></a> を使用して設定するように置き換える方法があります。例えば:</p>

<pre class="brush: js">// Enable setting 'this' in JavaScript timers

var __nativeST__ = window.setTimeout,
    __nativeSI__ = window.setInterval;

window.setTimeout = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
  var oThis = this,
      aArgs = Array.prototype.slice.call(arguments, 2);
  return __nativeST__(vCallback instanceof Function ? function () {
    vCallback.apply(oThis, aArgs);
  } : vCallback, nDelay);
};

window.setInterval = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
  var oThis = this,
      aArgs = Array.prototype.slice.call(arguments, 2);
  return __nativeSI__(vCallback instanceof Function ? function () {
    vCallback.apply(oThis, aArgs);
  } : vCallback, nDelay);
};</pre>

<div class="note"><strong>注</strong>: これら 2 つの置き換えにより、IE のタイマーで HTML5 標準の、コールバック関数に任意の引数を渡すことも可能になります。よって、ポリフィルとしても使用できます。<a href="#Callback_arguments">Callback arguments</a> の節をご覧ください。</div>

<p>新機能のテスト:</p>

<pre class="brush: js">myArray = ['zero', 'one', 'two'];
myArray.myMethod = function (sProperty) {
    alert(arguments.length &gt; 0 ? this[sProperty] : this);
};

setTimeout(alert, 1500, 'Hello world!'); // the standard use of setTimeout and setInterval is preserved, but...
setTimeout.call(myArray, myArray.myMethod, 2.0*1000); // prints "zero,one,two" after 2 seconds
setTimeout.call(myArray, myArray.myMethod, 2.5*1000, 2); // prints "two" after 2.5 seconds
</pre>

<div class="note"><strong>注</strong>: JavaScript 1.8.5 で、関数のすべての呼び出しに対して <code>this</code> の値を設定する <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind">Function.prototype.bind()</a></code> メソッドを導入しました。これにより、コールバックで <code>this</code> の値を設定するためにラッパー関数を使用しなければならない状況を回避できます。</div>

<p><code>bind()</code> の使用例:</p>

<pre class="brush: js">myArray = ['zero', 'one', 'two'];
myBoundMethod = (function (sProperty) {
    console.log(arguments.length &gt; 0 ? this[sProperty] : this);
}).bind(myArray);

myBoundMethod(); // prints "zero,one,two" because 'this' is bound to myArray in the function
myBoundMethod(1); // prints "one"
setTimeout(myBoundMethod, 1.0*1000); // still prints "zero,one,two" after 1 second because of the binding
setTimeout(myBoundMethod, 1.5*1000, "1"); // prints "one" after 1.5 seconds
</pre>

<h2 id="Notes" name="Notes">注</h2>

<p>タイムアウトは {{domxref("WindowOrWorkerGlobalScope.clearTimeout","clearTimeout()")}} を使って中止することができます。</p>

<p>もし関数を繰返し (例えば、 N ミリ秒ごとに) 呼び出したいなら、 {{domxref("WindowOrWorkerGlobalScope.setInterval()","setInterval()")}} を使うことを検討してください。</p>

<h3 id="Passing_string_literals" name="Passing_string_literals">文字列リテラルの使用</h3>

<p>関数の代わりに文字列を <code>setTimeout()</code> に渡すと、<code><a href="/ja/docs/JavaScript/Reference/Global_Objects/eval#Don.27t_use_eval.21">eval</a> を使うのと同様の問題が発生します。</code></p>

<pre class="brush: js">// 推奨
window.setTimeout(function() {
  alert('Hello World!');
}, 500);

// 非推奨
window.setTimeout("alert('Hello World!');", 500);
</pre>

<p><code>setTimeout</code> に渡した文字列はグローバルコンテキストで評価されます。そのため、<code>setTimeout()</code> が呼び出されたコンテキストのローカルシンボルは、文字列を評価したコードからは利用できません。</p>

<h3 id="Reasons_for_delays_longer_than_specified" name="Reasons_for_delays_longer_than_specified">遅延が指定値より長い理由</h3>

<p>タイムアウトが満了するまでに予想より長い時間がかかる理由は複数あります。このセクションでは、もっとも一般的な理由を説明します。</p>

<h4 id="Timeouts_throttled_to_≥_4ms" name="Timeouts_throttled_to_≥_4ms">タイムアウトを 4ms 以上に制限する</h4>

<p>現代のブラウザーは、<code>setTimeout()</code> や {{domxref("WindowOrworkerGlobalScope.setInterval","setInterval()")}} がコールバックのネスト (ネストの深さが少なくとも数段階ある) によって連続的に呼び出された、あるいは連続的なインターバルが数回発生した後に呼び出されたときに、少なくとも 4 ミリ秒ごとに呼び出されるように制限をかけます。例えば:</p>

<pre class="brush: js">function cb() { f(); setTimeout(cb, 0); }
setTimeout(cb, 0);
setInterval(f, 0);</pre>

<p>Chrome および Firefox では、5 回目の連続的なコールバックの呼び出しで制限をかけます。また Safar は 6 回目、Edge は 3 回目で制限をかけます。Gecko は <a href="/ja/docs/Mozilla/Firefox/Releases/56">バージョン 56</a> で、<code>setInterval()</code> で制限を始めました (後述のとおり <code>setTimeout()</code> は以前から行っていました)。</p>

<p><a href="http://code.google.com/p/chromium/issues/detail?id=792#c10">歴史的に</a> 一部のブラウザー (例えば Firefox) は、あらゆる場所から呼び出された <code>setInterval()</code>、あるいはネストの深さが少なくとも数段階ある <code>setTimeout()</code> が呼び出されたときの制限を、若干異なる動作で実装しています。。</p>

<p>0 ms タイマーをモダンブラウザーで実装するには、<a href="http://dbaron.org/log/20100309-faster-timeouts">ここで説明されている</a> {{domxref("window.postMessage()")}} を利用できます。</p>

<div class="note">
<p><strong>注</strong>: 最小遅延である <code>DOM_MIN_TIMEOUT_VALUE</code> は 4 ms (Firefox の <code>dom.min_timeout_value</code> の設定に保存されています) であり、<code>DOM_CLAMP_TIMEOUT_NESTING_LEVEL</code> は 5 です。</p>
</div>

<div class="note">
<p><strong>注</strong>: 4 ms は <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#timers">HTML5 の仕様で標準化されています</a>。 そして、2010 年以降にリリースされたブラウザー間で一貫しています。{{geckoRelease("5.0")}} 以前では、ネストされた setTimeout の最小値は 10 ms でした。</p>
</div>

<h4 id="Timeouts_in_inactive_tabs_throttled_to_≥_1000ms" name="Timeouts_in_inactive_tabs_throttled_to_≥_1000ms">非アクティブタブのタイムアウトは 1000 ms 以上に制限される</h4>

<p>バックグラウンドのタブによる負荷 (およびバッテリー消費) を軽減するため、アクティブ状態でないタブでのタイマーの呼び出しは、1 秒 (1,000 ms) あたり 1 回までとなります。</p>

<p>Firefox はこの動作をバージョン 5 ({{bug(633421)}} を参照。1000 ms の定数は設定項目 <code>dom.min_background_timeout_value</code> で変更できます) から、Chrome はこの動作をバージョン 11 (<a href="http://crbug.com/66078">crbug.com/66078</a>) から実装しています。</p>

<p>Android 版 Firefox は {{bug(736602)}} によって、 Firefox 14 からバックグラウンドタブで 15 分のタイムアウト値を使用しており、またバックグラウンドタブを完全にアンロードすることもできます。</p>

<div class="note">
<p>Firefox 50 では、 Web Audio API の {{domxref("AudioContext")}} が音声を再生中であればバックグラウンドタブの制限を行いません。さらに Firefox 51 では、音声を再生していなくても {{domxref("AudioContext")}} を提供していれば、バックグラウンドタブの制限を行わないように改良しました。これによりタブがバックグラウンドであるときに、楽譜を基に音楽を再生するアプリで拍子が合わない、あるいは音楽が正しく同期しないといった問題が解決します。</p>
</div>

<h4 id="Throttling_of_tracking_timeout_scripts" name="Throttling_of_tracking_timeout_scripts">トラッキングスクリプトのタイムアウトを制限する</h4>

<p>Firefox 55 より、トラッキングスクリプト (例えば Google Analytics や、<a href="https://wiki.mozilla.org/Security/Tracking_protection#Lists">TP リスト</a> によって Firefox がトラッキングスクリプトであると認識するスクリプトの URL) にさらなる制限を課します。フォアグラウンドで実行しているとき、最小遅延の制限は 4ms のままです。しかしバックグラウンドのタブでは、最小遅延を 10,000ms または 10 秒に制限します。これはドキュメントが最初に読み込まれてから 30 秒後に発効します。</p>

<p>この動作を制御する設定項目は以下のとおりです。</p>

<ul>
 <li><code>dom.min_tracking_timeout_value</code>: 4</li>
 <li><code>dom.min_tracking_background_timeout_value</code>: 10000</li>
 <li><code>dom.timeout.tracking_throttling_delay</code>: 30000</li>
</ul>

<h4 id="Late_timeouts" name="Late_timeouts">タイムアウトの遅延</h4>

<p>前出の "制限" に加えて、ページ内 (またはOSやブラウザー自身) の他のタスクの処理に時間がかかると、タイムアウトは遅れます。注目すべき重要なケースとして、<code>setTimeout()</code> を呼び出したスレッドが終了するまで関数やコードスニペットを実行できないことが挙げられます。例えば:</p>

<pre class="brush: js">function foo() {
  console.log('foo has been called');
}
setTimeout(foo, 0);
console.log('After setTimeout');</pre>

<p>このコードは、コンソールへ以下のように出力します。</p>

<pre>After setTimeout
foo has been called</pre>

<p>これは <code>setTimeout</code> を遅延 0 で呼び出したとしても、直ちに実行するのではなくキューに載せて、次の機会に実行するようスケジューリングされるためです。現在実行中のコードはキューにある関数を実行する前に完了しなければならず、このために実行結果の順序が想定どおりにならない場合があります。</p>

<h3 id="WebExtension_のバックグラウンドページとタイマー">WebExtension のバックグラウンドページとタイマー</h3>

<p><a href="/ja/docs/Mozilla/Add-ons/WebExtensions">WebExtension</a> のバックグラウンドページでは、タイマーが正しく動作しません。これはバックグラウンドページが実際には常にロードされたままではないからです。ブラウザ－は使用されていない場合はアンロードし、必要なときに復元することができます。これは拡張機能にはほとんど透過的ですが、いくつかのもの (JS タイマーを含む) はアンロード/リストアサイクル全体では動作しないので、バックグラウンドページは代わりにアラームを使うことを推奨します。これについての詳細は <a href="https://developer.chrome.com/extensions/background_migration">Migrate to Event Driven Background Scripts</a> にあります。</p>

<p>この記事の執筆時点では、 Chrome だけが上記の挙動を示していました - Firefox はまだアンロード/リストアの挙動をしていないので、タイマーは動作するでしょう。しかし、いくつかの理由から WebExtensions でタイマーを使わないようにするのはまだ良い考えです。</p>

<ol>
 <li>Chrome との互換性のため</li>
 <li>将来、動作が変更された場合に問題が発生する可能性があるため</li>
</ol>

<h3 id="Maximum_delay_value" name="Maximum_delay_value">最大遅延時間</h3>

<p>Internet Explorer、Chrome、Safari、Firefox を含むブラウザーは、内部で遅延時間を 32 ビット符号付き整数値で保存します。このため 2,147,483,647 ms (約 24.8 日) より大きな遅延時間を使用すると整数値がオーバーフローして、その結果直ちに実行されるタイムアウトになります。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'webappapis.html#dom-settimeout', 'WindowOrWorkerGlobalScope.setTimeout()')}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td>最新の仕様で、メソッドを <code>WindowOrWorkerGlobalScope</code> ミックスインに移動。</td>
  </tr>
  <tr>
   <td>{{SpecName("HTML WHATWG", "webappapis.html#dom-settimeout", "WindowTimers.setTimeout()")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td>初回定義 (DOM Level 0)</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.WindowOrWorkerGlobalScope.setTimeout")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/Add-ons/Code_snippets/Timers">JavaScript timers</a></li>
 <li><a href="/ja/docs/Mozilla/JavaScript_code_modules/Timer.jsm">Timer.jsm</a></li>
 <li>{{domxref("WindowOrWorkerGlobalScope.clearTimeout")}}</li>
 <li>{{domxref("WindowOrWorkerGlobalScope.setInterval")}}</li>
 <li>{{domxref("window.requestAnimationFrame")}}</li>
 <li><a href="/ja/Add-ons/Code_snippets/Timers/Daemons"><em>Daemons</em> management</a></li>
</ul>
