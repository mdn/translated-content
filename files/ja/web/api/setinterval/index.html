---
title: WindowOrWorkerGlobalScope.setInterval()
slug: Web/API/setInterval
tags:
  - API
  - DOM
  - Gecko
  - Intervals
  - JavaScript timers
  - MakeBrowserAgnostic
  - Method
  - NeedsMarkupWork
  - Timers
  - WindowOrWorkerGlobalScope
  - setInterval
translation_of: Web/API/WindowOrWorkerGlobalScope/setInterval
original_slug: Web/API/WindowOrWorkerGlobalScope/setInterval
---
<div>{{APIRef("HTML DOM")}}</div>

<p>{{domxref("WindowOrWorkerGlobalScope")}} ミックスインの <strong><code>setInterval()</code></strong> メソッドは、一定の遅延間隔を置いて関数やコードスニペットを繰り返し呼び出します。これは、インターバルを一意に識別する <code>interval ID</code> を返します。よって {{domxref("WindowOrWorkerGlobalScope.clearInterval", "clearInterval()")}} を呼び出して、後でインターバルを削除できます。このメソッドは {{domxref("Window")}} および {{domxref("Worker")}} インターフェイスで提供します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><em>var intervalID</em> = scope.setInterval(<em>func</em>, <em>delay</em>[, <em>param1</em>, <em>param2</em>, ...]);
<em>var intervalID</em> = scope.setInterval(<em>code</em>, <em>delay</em>);
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>func</code></dt>
 <dd>ミリ秒単位の <code>delay</code> が経過するたびに実行する {{jsxref("function", "関数")}} です。関数には引数が渡されず、また戻り値を想定していません。</dd>
 <dt><code>code</code></dt>
 <dd>関数の代わりに文字列を含める構文も許容されており、ミリ秒単位の <code>delay</code> が経過するたびに文字列をコンパイルして実行します。{{jsxref("eval", "eval()")}} の使用にリスクがあるのと同じ理由で、この構文は <strong>推奨しません</strong>。</dd>
 <dt><code>delay</code></dt>
 <dd>指定した関数またはコードを実行する前にタイマーが待つべき時間をミリ秒 (1/1000 秒) 単位で指定します。引数が 10 より小さい場合は、10 を使用します。実際の遅延が長くなることがあります。例えば {{SectionOnPage("/ja/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout", "遅延が指定値より長い理由")}} をご覧ください。</dd>
 <dt><code>param1, ..., paramN</code> {{optional_inline}}</dt>
 <dd>タイマーが満了したときに、<em>func</em> で指定した関数に渡す追加の引数です。</dd>
</dl>

<div class="note">
<p><strong>注記</strong>: Internet Explorer 9 およびそれ以前のバージョンでは、最初の構文で <code>setInterval()</code> に渡す追加の引数は動作しないことに注意してください。同様の機能を実現させるには、ポリフィルを使用してください。(<a href="#Callback_arguments">コールバックの引数</a> を参照)。</p>
</div>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>戻り値 <code>intervalID</code> は、<code>setInterval()</code> を呼び出して作成したタイマーを識別する、0 ではない正の整数値です。この値は、インターバルをキャンセルするために {{domxref("WindowOrWorkerGlobalScope.clearInterval()")}} へ渡すことができます。</p>

<p><code>setInterval()</code> と {{domxref("WindowOrWorkerGlobalScope.setTimeout", "setTimeout()")}} は同じ ID プールを共有しており、さらに <code>clearInterval()</code> と {{domxref("WindowOrWorkerGlobalScope.clearTimeout", "clearTimeout()")}} は技術的に入れ替えて使用できることを意識すると役に立つでしょう。ただし明快さのために、コードを整備するときは混乱を避けるため、常に一致させるようにするべきです。</p>

<div class="note"><strong>注記</strong>: 引数 <code>delay</code> は、符号付き 32 ビット整数に変換されます。IDL における符号付き整数の定義によって、<code>delay</code> は事実上 2147483647ms に制限されます。</div>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Example_1_Basic_syntax" name="Example_1_Basic_syntax">例 1: 基本的な構文</h3>

<p>以下の例は、<code>setInterval()</code> の基本的な構文を示します。</p>

<pre class="brush:js notranslate">var intervalID = window.setInterval(myCallback, 500);

function myCallback() {
  // Your code here
}
</pre>

<h3 id="Example_2_Alternating_two_colors" name="Example_2_Alternating_two_colors">例 2: 2 つの色を切り替える</h3>

<p>以下の例は停止ボタンを押すまで、1 秒おきに <code>flashtext()</code> 関数を呼び出します。</p>

<pre class="brush:html notranslate">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8" /&gt;
  &lt;title&gt;setInterval/clearInterval example&lt;/title&gt;

  &lt;script&gt;
    var nIntervId;

    function changeColor() {
      nIntervId = setInterval(flashText, 1000);
    }

    function flashText() {
      var oElem = document.getElementById('my_box');
      oElem.style.color = oElem.style.color == 'red' ? 'blue' : 'red';
      // oElem.style.color == 'red' ? 'blue' : 'red' is a ternary operator.
    }

    function stopTextColor() {
      clearInterval(nIntervId);
    }
  &lt;/script&gt;
&lt;/head&gt;

&lt;body onload="changeColor();"&gt;
  &lt;div id="my_box"&gt;
    &lt;p&gt;Hello World&lt;/p&gt;
  &lt;/div&gt;

  &lt;button onclick="stopTextColor();"&gt;Stop&lt;/button&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h3 id="Example_3_Typewriter_simulation" name="Example_3_Typewriter_simulation">例 3: タイプライターのシミュレーション</h3>

<p>以下の例は始めに何もない状態から、指定したセレクターのグループにマッチする <a href="/ja/docs/DOM/NodeList"><code>NodeList</code></a> へ徐々にコンテンツを入力することによってタイプライターを模倣します。</p>

<pre class="brush:html notranslate">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset="UTF-8" /&gt;
&lt;title&gt;JavaScript Typewriter - MDN Example&lt;/title&gt;
&lt;script&gt;
  function Typewriter (sSelector, nRate) {

  function clean () {
    clearInterval(nIntervId);
    bTyping = false;
    bStart = true;
    oCurrent = null;
    aSheets.length = nIdx = 0;
  }

  function scroll (oSheet, nPos, bEraseAndStop) {
    if (!oSheet.hasOwnProperty('parts') || aMap.length &lt; nPos) { return true; }

    var oRel, bExit = false;

    if (aMap.length === nPos) { aMap.push(0); }

    while (aMap[nPos] &lt; oSheet.parts.length) {
      oRel = oSheet.parts[aMap[nPos]];

      scroll(oRel, nPos + 1, bEraseAndStop) ? aMap[nPos]++ : bExit = true;

      if (bEraseAndStop &amp;&amp; (oRel.ref.nodeType - 1 | 1) === 3 &amp;&amp; oRel.ref.nodeValue) {
        bExit = true;
        oCurrent = oRel.ref;
        sPart = oCurrent.nodeValue;
        oCurrent.nodeValue = '';
      }

      oSheet.ref.appendChild(oRel.ref);
      if (bExit) { return false; }
    }

    aMap.length--;
    return true;
  }

  function typewrite () {
    if (sPart.length === 0 &amp;&amp; scroll(aSheets[nIdx], 0, true) &amp;&amp; nIdx++ === aSheets.length - 1) { clean(); return; }

    oCurrent.nodeValue += sPart.charAt(0);
    sPart = sPart.slice(1);
  }

  function Sheet (oNode) {
    this.ref = oNode;
    if (!oNode.hasChildNodes()) { return; }
    this.parts = Array.prototype.slice.call(oNode.childNodes);

    for (var nChild = 0; nChild &lt; this.parts.length; nChild++) {
      oNode.removeChild(this.parts[nChild]);
      this.parts[nChild] = new Sheet(this.parts[nChild]);
    }
  }

  var
    nIntervId, oCurrent = null, bTyping = false, bStart = true,
    nIdx = 0, sPart = "", aSheets = [], aMap = [];

  this.rate = nRate || 100;

  this.play = function () {
    if (bTyping) { return; }
    if (bStart) {
      var aItems = document.querySelectorAll(sSelector);

      if (aItems.length === 0) { return; }
      for (var nItem = 0; nItem &lt; aItems.length; nItem++) {
        aSheets.push(new Sheet(aItems[nItem]));
        /* Uncomment the following line if you have previously hidden your elements via CSS: */
        // aItems[nItem].style.visibility = "visible";
      }

      bStart = false;
    }

    nIntervId = setInterval(typewrite, this.rate);
    bTyping = true;
  };

  this.pause = function () {
    clearInterval(nIntervId);
    bTyping = false;
  };

  this.terminate = function () {
    oCurrent.nodeValue += sPart;
    sPart = "";
    for (nIdx; nIdx &lt; aSheets.length; scroll(aSheets[nIdx++], 0, false));
    clean();
  };
}

/* usage: */
var oTWExample1 = new Typewriter(/* elements: */ '#article, h1, #info, #copyleft', /* frame rate (optional): */ 15);

/* default frame rate is 100: */
var oTWExample2 = new Typewriter('#controls');

/* you can also change the frame rate value modifying the "rate" property; for example: */
// oTWExample2.rate = 150;

onload = function () {
  oTWExample1.play();
  oTWExample2.play();
};
&lt;/script&gt;
&lt;style type="text/css"&gt;
span.intLink, a, a:visited {
  cursor: pointer;
  color: #000000;
  text-decoration: underline;
}

#info {
  width: 180px;
  height: 150px;
  float: right;
  background-color: #eeeeff;
  padding: 4px;
  overflow: auto;
  font-size: 12px;
  margin: 4px;
  border-radius: 5px;
  /* visibility: hidden; */
}
&lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;

&lt;p id="copyleft" style="font-style: italic; font-size: 12px; text-align: center;"&gt;CopyLeft 2012 by &lt;a href="https://developer.mozilla.org/" target="_blank"&gt;Mozilla Developer Network&lt;/a&gt;&lt;/p&gt;
&lt;p id="controls" style="text-align: center;"&gt;[&amp;nbsp;&lt;span class="intLink" onclick="oTWExample1.play();"&gt;Play&lt;/span&gt; | &lt;span class="intLink" onclick="oTWExample1.pause();"&gt;Pause&lt;/span&gt; | &lt;span class="intLink" onclick="oTWExample1.terminate();"&gt;Terminate&lt;/span&gt;&amp;nbsp;]&lt;/p&gt;
&lt;div id="info"&gt;
Vivamus blandit massa ut metus mattis in fringilla lectus imperdiet. Proin ac ante a felis ornare vehicula. Fusce pellentesque lacus vitae eros convallis ut mollis magna pellentesque. Pellentesque placerat enim at lacus ultricies vitae facilisis nisi fringilla. In tincidunt tincidunt tincidunt.
&lt;/div&gt;
&lt;h1&gt;JavaScript Typewriter&lt;/h1&gt;

&lt;div id="article"&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices dolor ac dolor imperdiet ullamcorper. Suspendisse quam libero, luctus auctor mollis sed, malesuada condimentum magna. Quisque in ante tellus, in placerat est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec a mi magna, quis mattis dolor. Etiam sit amet ligula quis urna auctor imperdiet nec faucibus ante. Mauris vel consectetur dolor. Nunc eget elit eget velit pulvinar fringilla consectetur aliquam purus. Curabitur convallis, justo posuere porta egestas, velit erat ornare tortor, non viverra justo diam eget arcu. Phasellus adipiscing fermentum nibh ac commodo. Nam turpis nunc, suscipit a hendrerit vitae, volutpat non ipsum.&lt;/p&gt;
&lt;form&gt;
&lt;p&gt;Phasellus ac nisl lorem: &lt;input type="text" /&gt;&lt;br /&gt;
&lt;textarea style="width: 400px; height: 200px;"&gt;Nullam commodo suscipit lacus non aliquet. Phasellus ac nisl lorem, sed facilisis ligula. Nam cursus lobortis placerat. Sed dui nisi, elementum eu sodales ac, placerat sit amet mauris. Pellentesque dapibus tellus ut ipsum aliquam eu auctor dui vehicula. Quisque ultrices laoreet erat, at ultrices tortor sodales non. Sed venenatis luctus magna, ultricies ultricies nunc fringilla eget. Praesent scelerisque urna vitae nibh tristique varius consequat neque luctus. Integer ornare, erat a porta tempus, velit justo fermentum elit, a fermentum metus nisi eu ipsum. Vivamus eget augue vel dui viverra adipiscing congue ut massa. Praesent vitae eros erat, pulvinar laoreet magna. Maecenas vestibulum mollis nunc in posuere. Pellentesque sit amet metus a turpis lobortis tempor eu vel tortor. Cras sodales eleifend interdum.&lt;/textarea&gt;&lt;/p&gt;
&lt;p&gt;&lt;input type="submit" value="Send" /&gt;
&lt;/form&gt;
&lt;p&gt;Duis lobortis sapien quis nisl luctus porttitor. In tempor semper libero, eu tincidunt dolor eleifend sit amet. Ut nec velit in dolor tincidunt rhoncus non non diam. Morbi auctor ornare orci, non euismod felis gravida nec. Curabitur elementum nisi a eros rutrum nec blandit diam placerat. Aenean tincidunt risus ut nisi consectetur cursus. Ut vitae quam elit. Donec dignissim est in quam tempor consequat. Aliquam aliquam diam non felis convallis suscipit. Nulla facilisi. Donec lacus risus, dignissim et fringilla et, egestas vel eros. Duis malesuada accumsan dui, at fringilla mauris bibStartum quis. Cras adipiscing ultricies fermentum. Praesent bibStartum condimentum feugiat.&lt;/p&gt;
&lt;p&gt;Nam faucibus, ligula eu fringilla pulvinar, lectus tellus iaculis nunc, vitae scelerisque metus leo non metus. Proin mattis lobortis lobortis. Quisque accumsan faucibus erat, vel varius tortor ultricies ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero nunc. Nullam tortor nunc, elementum a consectetur et, ultrices eu orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a nisl eu sem vehicula egestas.&lt;/p&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p><a href="/files/3997/typewriter.html">View this demo in action</a>. See also: <a href="/ja/docs/DOM/window.clearInterval"><code>clearInterval()</code></a>.</p>

<h2 id="Callback_arguments" name="Callback_arguments">コールバックの引数</h2>

<p>前述のとおり、Internet Explorer 9 およびそれ以前は、<code>setTimeout()</code> や <code>setInterval()</code> でコールバック関数に引数を渡す機能をサポートしません。以下の <strong>IE 専用</strong> コードは、この制限を克服する方法を説明します。使用方法は、スクリプトの先頭に以下のコードを追加するだけです。</p>

<pre class="brush:js notranslate">/*\
|*|
|*|  IE-specific polyfill that enables the passage of arbitrary arguments to the
|*|  callback functions of javascript timers (HTML5 standard syntax).
|*|
|*|  https://developer.mozilla.org/en-US/docs/Web/API/window.setInterval
|*|  https://developer.mozilla.org/User:fusionchess
|*|
|*|  Syntax:
|*|  var timeoutID = window.setTimeout(func, delay[, param1, param2, ...]);
|*|  var timeoutID = window.setTimeout(code, delay);
|*|  var intervalID = window.setInterval(func, delay[, param1, param2, ...]);
|*|  var intervalID = window.setInterval(code, delay);
|*|
\*/

if (document.all &amp;&amp; !window.setTimeout.isPolyfill) {
  var __nativeST__ = window.setTimeout;
  window.setTimeout = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
    var aArgs = Array.prototype.slice.call(arguments, 2);
    return __nativeST__(vCallback instanceof Function ? function () {
      vCallback.apply(null, aArgs);
    } : vCallback, nDelay);
  };
  window.setTimeout.isPolyfill = true;
}

if (document.all &amp;&amp; !window.setInterval.isPolyfill) {
  var __nativeSI__ = window.setInterval;
  window.setInterval = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
    var aArgs = Array.prototype.slice.call(arguments, 2);
    return __nativeSI__(vCallback instanceof Function ? function () {
      vCallback.apply(null, aArgs);
    } : vCallback, nDelay);
  };
  window.setInterval.isPolyfill = true;
}
</pre>

<p>もうひとつの方法は、コールバックに無名関数を使用することです。ただし、この方法は少し多くコストがかかります。 例えば:</p>

<pre class="brush:js notranslate">var intervalID = setInterval(function() { myFunc('one', 'two', 'three'); }, 1000);</pre>

<p>さらに、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind">関数の <code>bind</code></a> を使用する方法もあります。例えば:</p>

<pre class="brush:js notranslate">var intervalID = setInterval(function(arg1) {}.bind(undefined, 10), 1000);</pre>

<p>{{h3_gecko_minversion("非アクティブなタブ", "5.0")}}</p>

<p>Gecko 5.0 {{geckoRelease("5.0")}} より非アクティブなタブでは、1 秒あたり 1 回を超えて実行しないようにインターバルを制限します。</p>

<h2 id="The_this_problem" name="The_this_problem">"<a href="/ja/docs/Web/JavaScript/Reference/Operators/this"><code>this</code></a>" 問題</h2>

<p><code>setInterval()</code> (もっと言うと他のどんな関数でも) にメソッドを渡すと、間違った <a href="/ja/docs/Web/JavaScript/Reference/Operators/this"><code>this</code></a> の値で呼び出されることがあります。この問題は <a href="/ja/docs/Web/JavaScript/Reference/Operators/this#As_an_object_method">JavaScript リファレンス</a> で詳しく説明されています。</p>

<h3 id="Explanation" name="Explanation">説明</h3>

<p><code>setInterval()</code> によって実行されるコードは、<code>setInterval</code> が呼び出された関数とは別の実行コンテキスト内で実行されます。その結果、呼び出された関数の <a href="/ja/docs/Web/JavaScript/Reference/Operators/this"><code>this</code></a> キーワードは <code>window</code> (または <code>global</code>) オブジェクトに設定されます。これは <code>setTimeout</code> を呼び出した関数の <code>this</code> の値とは異なります。以下の例をご覧ください (ここでは <code>setInterval()</code> ではなく <code>setTimeout()</code> を使用していますが、どちらのタイマーでも問題は同じです):</p>

<pre class="brush:js notranslate">myArray = ['zero', 'one', 'two'];

myArray.myMethod = function (sProperty) {
    alert(arguments.length &gt; 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"
setTimeout(myArray.myMethod, 1000); // prints "[object Window]" after 1 second
setTimeout(myArray.myMethod, 1500, "1"); // prints "undefined" after 1,5 seconds
// passing the 'this' object with .call won't work
// because this will change the value of this inside setTimeout itself
// while we want to change the value of this inside myArray.myMethod
// in fact, it will be an error because setTimeout code expects this to be the window object:
setTimeout.call(myArray, myArray.myMethod, 2000); // error: "NS_ERROR_XPC_BAD_OP_ON_WN_PROTO: Illegal operation on WrappedNative prototype object"
setTimeout.call(myArray, myArray.myMethod, 2500, 2); // same error
</pre>

<p>この例でわかるとおり、旧来の JavaScript でコールバック関数に <code>this</code> オブジェクトを渡す方法はありません。</p>

<h3 id="A_possible_solution" name="A_possible_solution">考えられる解決策</h3>

<p>"<code>this</code>" 問題の解決策としてネイティブな <code>setTimeout()</code> および <code>setInterval()</code> グローバル関数を、<a href="/ja/docs/JavaScript/Reference/Global_Objects/Function/call"><code>Function.prototype.call</code></a> メソッドを通して呼び出すことが可能な <em>非ネイティブ</em> メソッドに置き換える方法が考えられます。考えられる置き換え方法の例を以下に示します:</p>

<pre class="brush:js notranslate">// Enable the passage of the 'this' object through the JavaScript timers

var __nativeST__ = window.setTimeout, __nativeSI__ = window.setInterval;

window.setTimeout = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
  var oThis = this, aArgs = Array.prototype.slice.call(arguments, 2);
  return __nativeST__(vCallback instanceof Function ? function () {
    vCallback.apply(oThis, aArgs);
  } : vCallback, nDelay);
};

window.setInterval = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
  var oThis = this, aArgs = Array.prototype.slice.call(arguments, 2);
  return __nativeSI__(vCallback instanceof Function ? function () {
    vCallback.apply(oThis, aArgs);
  } : vCallback, nDelay);
};</pre>

<div class="note">これら 2 つの置き換えにより、IE のタイマーで HTML5 標準の、コールバック関数に任意の引数を渡すことも可能になります。よって、<em>標準仕様に準拠しない</em> ポリフィルとしても使用できます。<em>標準仕様に準拠する</em>ポリフィルについては、<a href="#Callback_arguments">コールバックの引数</a> をご覧ください。</div>

<p>新機能のテスト:</p>

<pre class="brush:js notranslate">myArray = ['zero', 'one', 'two'];

myArray.myMethod = function (sProperty) {
    alert(arguments.length &gt; 0 ? this[sProperty] : this);
};

setTimeout(alert, 1500, 'Hello world!'); // the standard use of setTimeout and setInterval is preserved, but...
setTimeout.call(myArray, myArray.myMethod, 2000); // prints "zero,one,two" after 2 seconds
setTimeout.call(myArray, myArray.myMethod, 2500, 2); // prints "two" after 2,5 seconds
</pre>

<p>この他に <a href="/ja/docs/Web/JavaScript/Reference/Operators/this"><code>this</code></a> 問題のより複雑な解決策として、<a href="#A_little_framework">後述するフレームワーク</a> もあります。</p>

<div class="note">JavaScript 1.8.5 で、関数のすべての呼び出しで <code>this</code> として使用する値を設定できる、<code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind">Function.prototype.bind()</a></code> メソッドを導入しました。これにより、関数を呼び出したコンテキストに応じて this がどのようになるかが明確にならない問題を簡単に回避できます。また、ES2015 では <a href="/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions">アロー関数</a> をサポートして、字句 this と組み合わせると myArray の内部では setInterval( () =&gt; this.myMethod) と記述できます。</div>

<h2 id="MiniDaemon_-_A_framework_for_managing_timers" name="MiniDaemon_-_A_framework_for_managing_timers">MiniDaemon: タイマー管理フレームワーク</h2>

<p>多くのタイマーが必要なページでは、実行中のタイマーのイベントをすべて追跡し続けることが困難な場合があります。この問題の解決策のひとつが、オブジェクト内のタイマーの状態に関する情報を保存することです。以下のコードは、そのような抽象化の最小限の例です。コンストラクターは、クロージャの使用を明示的に避けるアーキテクチャになっています。また、<a href="/ja/docs/Web/JavaScript/Reference/Operators/this"><code>this</code></a> オブジェクトをコールバック関数に渡す代替手段も提供します (詳しくは <a href="#The_.22this.22_problem">"this" 問題</a> をご覧ください)。以下のコードは <a href="https://github.com/madmurphy/minidaemon.js">GitHub でも入手できます</a>。</p>

<div class="note">より複雑ですがモジュール化したもの (<code><em>Daemon</em></code>) については、<a href="/ja/Add-ons/Code_snippets/Timers/Daemons">JavaScript Daemons Management</a> をご覧ください。このより複雑なバージョンは、<code><em>Daemon</em></code> コンストラクター用の大規模でスケーラブルなメソッドのコレクションに過ぎません。しかし <code><em>Daemon</em></code> コンストラクター自体は、<code><em>daemon</em></code> のインスタンス化の間に宣言可能な <em>init</em> および <em>onstart</em> 関数のサポートを追加した <code><em>MiniDaemon</em></code> のクローンに過ぎません。<strong>よって <code><em>MiniDaemon</em></code> フレームワークは、シンプルなアニメーションのために推奨する方法であり続けます。</strong>これは、メソッドのコレクションがない <code><em>Daemon</em></code> が本質的に <code><em>MiniDaemon</em></code> のクローンであるためです。</div>

<h3 id="minidaemon.js" name="minidaemon.js">minidaemon.js</h3>

<pre class="brush:js notranslate">/*\
|*|
|*|  :: MiniDaemon ::
|*|
|*|  Revision #2 - September 26, 2014
|*|
|*|  https://developer.mozilla.org/en-US/docs/Web/API/window.setInterval
|*|  https://developer.mozilla.org/User:fusionchess
|*|  https://github.com/madmurphy/minidaemon.js
|*|
|*|  This framework is released under the GNU Lesser General Public License, version 3 or later.
|*|  http://www.gnu.org/licenses/lgpl-3.0.html
|*|
\*/

function MiniDaemon (oOwner, fTask, nRate, nLen) {
  if (!(this &amp;&amp; this instanceof MiniDaemon)) { return; }
  if (arguments.length &lt; 2) { throw new TypeError('MiniDaemon - not enough arguments'); }
  if (oOwner) { this.owner = oOwner; }
  this.task = fTask;
  if (isFinite(nRate) &amp;&amp; nRate &gt; 0) { this.rate = Math.floor(nRate); }
  if (nLen &gt; 0) { this.length = Math.floor(nLen); }
}

MiniDaemon.prototype.owner = null;
MiniDaemon.prototype.task = null;
MiniDaemon.prototype.rate = 100;
MiniDaemon.prototype.length = Infinity;

  /* These properties should be read-only */

MiniDaemon.prototype.SESSION = -1;
MiniDaemon.prototype.INDEX = 0;
MiniDaemon.prototype.PAUSED = true;
MiniDaemon.prototype.BACKW = true;

  /* Global methods */

MiniDaemon.forceCall = function (oDmn) {
  oDmn.INDEX += oDmn.BACKW ? -1 : 1;
  if (oDmn.task.call(oDmn.owner, oDmn.INDEX, oDmn.length, oDmn.BACKW) === false || oDmn.isAtEnd()) { oDmn.pause(); return false; }
  return true;
};

  /* Instances methods */

MiniDaemon.prototype.isAtEnd = function () {
  return this.BACKW ? isFinite(this.length) &amp;&amp; this.INDEX &lt; 1 : this.INDEX + 1 &gt; this.length;
};

MiniDaemon.prototype.synchronize = function () {
  if (this.PAUSED) { return; }
  clearInterval(this.SESSION);
  this.SESSION = setInterval(MiniDaemon.forceCall, this.rate, this);
};

MiniDaemon.prototype.pause = function () {
  clearInterval(this.SESSION);
  this.PAUSED = true;
};

MiniDaemon.prototype.start = function (bReverse) {
  var bBackw = Boolean(bReverse);
  if (this.BACKW === bBackw &amp;&amp; (this.isAtEnd() || !this.PAUSED)) { return; }
  this.BACKW = bBackw;
  this.PAUSED = false;
  this.synchronize();
};
</pre>

<div class="note">MiniDaemon は、引数をコールバック関数に渡します。この機能をネイティブにサポートしないブラウザーで動作させたい場合は、ここで提案したメソッドのいずれかを使用してください。</div>

<h3 id="Syntax_2" name="Syntax_2">構文</h3>

<p><code>var myDaemon = new MiniDaemon(<em>thisObject</em>, <em>callback</em>[</code><code>, <em>rate</em></code><code>[, <em>length</em>]]);</code></p>

<h3 id="Description" name="Description">説明</h3>

<p>アニメーションで必要なすべての情報 (<a href="/ja/docs/Web/JavaScript/Reference/Operators/this"><code>this</code></a> オブジェクト、コールバック関数、長さ、フレームレート) を持つ JavaScript <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object"><code>Object</code></a> を返します。</p>

<h4 id="Parameters_2" name="Parameters_2">引数</h4>

<dl>
 <dt><code>thisObject</code></dt>
 <dd><em>コールバック</em>関数が呼び出された <a href="/ja/docs/Web/JavaScript/Reference/Operators/this"><code>this</code></a> オブジェクト。<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object"><code>object</code></a> または <code>null</code> を使用できます。</dd>
 <dt><code>callback</code></dt>
 <dd>繰り返し実行する関数。<strong>これは 3 個の引数を伴って呼び出されます</strong>。<em>index</em> (反復処理の、毎回の処理のインデックス)、<em>length</em> (<em>daemon</em> に割り当てられた総実行回数。有限の数値または <a href="/ja/docs/JavaScript/Reference/Global_Objects/Infinity"><code>Infinity</code></a> を指定できます)、<em>backwards</em> (<em>index</em> を加算するか減算するかを示す論理値)。これは <em>callback</em>.call(<em>thisObject</em>, <em>index</em>, <em>length</em>, <em>backwards</em>) のようなものです。<strong>コールバック関数が <code>false</code> 値を返す場合は、<em>daemon</em> が一時停止しています</strong>。</dd>
 <dt><code>rate (省略可能)</code></dt>
 <dd>毎回の実行の時間間隔 (ミリ秒単位の数値)。デフォルト値は 100 です。</dd>
 <dt><code>length (省略可能)</code></dt>
 <dd>総実行回数。正の整数または <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Infinity"><code>Infinity</code></a> を使用できます。デフォルト値は <code>Infinity</code> です。</dd>
</dl>

<h4 id="MiniDaemon_instances_properties" name="MiniDaemon_instances_properties"><code>MiniDaemon</code> インスタンスのプロパティ</h4>

<dl>
 <dt><code>myDaemon.owner</code></dt>
 <dd>daemon が実行される <a href="/ja/docs/Web/JavaScript/Reference/Operators/this"><code>this</code></a> オブジェクト (読み書き可能)。<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object"><code>object</code></a> または <code>null</code> を使用できます。</dd>
 <dt><code>myDaemon.task</code></dt>
 <dd>繰り返し実行する関数 (読み書き可能)。これは 3 個の引数を伴って呼び出されます。<em>index</em> (反復処理の、毎回の処理のインデックス)、<em>length</em> (daemon に割り当てられた総実行回数。有限の数値または <a href="/ja/docs/JavaScript/Reference/Global_Objects/Infinity"><code>Infinity</code></a> を指定できます)、<em>backwards</em> (<em>index</em> 減算するか否かを示す論理値)。<code>myDaemon.task</code> の関数が <code>false</code> 値を返す場合は、<em>daemon</em> が一時停止しています。</dd>
 <dt><code>myDaemon.rate</code></dt>
 <dd>毎回の実行の時間間隔 (ミリ秒単位の数値、読み書き可能)。</dd>
 <dt><code>myDaemon.length</code></dt>
 <dd>総実行回数。正の整数または <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Infinity"><code>Infinity</code></a> を使用できます (読み書き可能)。</dd>
</dl>

<h4 id="MiniDaemon_instances_methods" name="MiniDaemon_instances_methods"><code>MiniDaemon</code> インスタンスのメソッド</h4>

<dl>
 <dt><code>myDaemon.isAtEnd()</code></dt>
 <dd><em>daemon</em> が開始/終了状態であるか否かを示す論理値を返します。</dd>
 <dt><code>myDaemon.synchronize()</code></dt>
 <dd>開始した daemon のタイマーと、daemon の実行時間を同期します。</dd>
 <dt><code>myDaemon.pause()</code></dt>
 <dd>daemon を一時停止します。</dd>
 <dt><code>myDaemon.start([<em>reverse</em>])</code></dt>
 <dd>daemon を前方 (毎回実行するたびに <em>index</em> が増加) または後方 (<em>index</em> が減少) に開始します。</dd>
</dl>

<h4 id="MiniDaemon_global_object_methods" name="MiniDaemon_global_object_methods"><code>MiniDaemon</code> グローバルオブジェクトのメソッド</h4>

<dl>
 <dt><code>MiniDaemon.forceCall(<em>minidaemon</em>)</code></dt>
 <dd>終端に達しているか否かの事実にかかわらず、<code><em>minidaemon</em>.task</code> の関数へのひとつのコールバックを強制します。どの場合も、内部の <code>INDEX</code> プロパティは (実際の実行方向に応じて) 増加または減少します。</dd>
</dl>

<h3 id="Example_usage" name="Example_usage">使用例</h3>

<p>HTML ページ:</p>

<pre class="brush:html notranslate">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8" /&gt;
  &lt;title&gt;MiniDaemin Example - MDN&lt;/title&gt;
  &lt;script type="text/javascript" src="minidaemon.js"&gt;&lt;/script&gt;
  &lt;style type="text/css"&gt;
    #sample_div {
      visibility: hidden;
    }
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;p&gt;
    &lt;input type="button" onclick="fadeInOut.start(false /* optional */);" value="fade in" /&gt;
    &lt;input type="button" onclick="fadeInOut.start(true);" value="fade out"&gt;
    &lt;input type="button" onclick="fadeInOut.pause();" value="pause" /&gt;
  &lt;/p&gt;

  &lt;div id="sample_div"&gt;Some text here&lt;/div&gt;

  &lt;script type="text/javascript"&gt;
    function opacity (nIndex, nLength, bBackwards) {
      this.style.opacity = nIndex / nLength;
      if (bBackwards ? nIndex === 0 : nIndex === 1) {
        this.style.visibility = bBackwards ? 'hidden' : 'visible';
      }
    }

    var fadeInOut = new MiniDaemon(document.getElementById('sample_div'), opacity, 300, 8);
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p><a href="/files/3995/minidaemon_example.html" title="MiniDaemon Example">実際の動作例を見る</a></p>

<h2 id="Notes" name="Notes">注記</h2>

<p><code>setInterval()</code> 関数は一般に、アニメーションのように何度も実行される関数に遅延をセットするのに使われます。</p>

<p>{{domxref("WindowOrWorkerGlobalScope.clearInterval()")}} を使ってインターバルをキャンセルすることができます。</p>

<p>指定時間後に <em>一度</em> だけ関数を呼び出したい場合には、{{domxref("WindowOrWorkerGlobalScope.setTimeout()")}} を使います。</p>

<h3 id="Ensure_that_execution_duration_is_shorter_than_interval_frequency" name="Ensure_that_execution_duration_is_shorter_than_interval_frequency">実行時間をインターバルより確実に短くする</h3>

<p>ロジックの実行時間がインターバル時間より長くなる可能性がある場合は、{{domxref("WindowOrWorkerGlobalScope.setTimeout")}} を使用して名前付き関数を再帰的に呼び出すことを推奨します。例えば 5 秒おきにリモートサーバーへ接続するために <code>setInterval</code> を使用するとき、ネットワークの遅延やサーバーの不応答などさまざまな問題で、割り当てられた時間内にリクエストが完了しない可能性があります。そのため、必ずしも順番どおりには返らない XHR リクエストがキュー内にあることに気づくかもしれません。</p>

<p>この場合は、再帰的な <code>setTimeout()</code> のパターンを推奨します:</p>

<pre class="brush:js notranslate">(function loop(){
   setTimeout(function() {
      // Your logic here

      loop();
  }, delay);
})();
</pre>

<p>このコードスニペットでは、名前付き関数 <code>loop()</code> を宣言して直ちに実行します。<code>loop()</code> はロジックが完全に実行された後に、内部の <code>setTimeout()</code> によって再帰呼び出しされます。このパターンは一定の間隔で呼び出すことが保証されませんが、再帰呼び出しの前に前の実行が完了することが保証されます。</p>

<h3 id="Throttling_of_intervals" name="Throttling_of_intervals">インターバルを抑制する</h3>

<p>Firefox で <code>setInterval()</code> は、{{domxref("WindowOrWorkerGlobalScope.setTimeout","setTimeout()")}} と同様に、インターバルが制限されます。<a href="/ja/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#Reasons_for_delays_longer_than_specified">遅延が指定値より長い理由</a> をご覧ください。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th>仕様書</th>
   <th>策定状況</th>
   <th>コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'webappapis.html#dom-setinterval', 'WindowOrWorkerGlobalScope.setInterval()')}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td>最新の仕様で、メソッドを <code>WindowOrWorkerGlobalScope</code> ミックスインに移動。</td>
  </tr>
  <tr>
   <td>{{SpecName("HTML WHATWG", "webappapis.html#dom-setinterval", "WindowTimers.setInterval()")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td>最初期の定義 (DOM Level 0)</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<div>


<p>{{Compat("api.WindowOrWorkerGlobalScope.setInterval")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/Add-ons/Code_snippets/Timers">JavaScript timers</a></li>
 <li>{{domxref("WindowOrWorkerGlobalScope.setTimeout")}}</li>
 <li>{{domxref("WindowOrWorkerGlobalScope.clearTimeout")}}</li>
 <li>{{domxref("WindowOrWorkerGlobalScope.clearInterval")}}</li>
 <li>{{domxref("window.requestAnimationFrame")}}</li>
 <li><a href="/ja/Add-ons/Code_snippets/Timers/Daemons"><em>Daemons</em> management</a></li>
</ul>
