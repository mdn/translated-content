---
title: EventTarget.addEventListener()
slug: Web/API/EventTarget/addEventListener
tags:
  - API
  - AccessOuterData
  - DOM
  - Detecting Events
  - Event Handlers
  - Event Listener
  - EventTarget
  - JavaScript
  - Method
  - PassingData
  - Receiving Events
  - Reference
  - addEventListener
  - attachEvent
  - events
  - mselementresize
translation_of: Web/API/EventTarget/addEventListener
---
<p>{{APIRef("DOM Events")}}</p>

<p><span class="seoSummary">{{domxref("EventTarget")}} の <strong><code>addEventListener()</code></strong> メソッドは、特定のイベントが対象に配信されるたびに呼び出される関数を設定します。</span> 対象としてよくあるものは {{domxref("Element")}}, {{domxref("Document")}}, {{domxref("Window")}} ですが、イベントに対応したあらゆるオブジェクトが対象になることができます ({{domxref("XMLHttpRequest")}} など)。</p>

<p><code>addEventListener()</code> は関数または {{domxref("EventListener")}} を実装したオブジェクトを、呼び出される {{domxref("EventTarget")}} における指定されたイベント種別のイベントリスナーのリストに加えることで動作します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>target</var>.addEventListener(<var>type</var>, <var>listener</var> [, <var>options</var>]);
<var>target</var>.addEventListener(<var>type</var>, <var>listener</var> [, <var>useCapture</var>]);
<var>target</var>.addEventListener(<var>type</var>, <var>listener</var> [, <var>useCapture</var>, <var>wantsUntrusted</var> {{Non-standard_inline}}]); // Gecko/Mozilla only</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>type</var></code></dt>
 <dd>対象とする<a href="/ja/docs/Web/Events">イベントの種類</a>を表す文字列</dd>
 <dt><code><var>listener</var></code></dt>
 <dd>指定された型のイベントが発生するときに通知 ({{domxref("Event")}} インターフェースを実装しているオブジェクト) を受け取るオブジェクト。これは、 {{domxref("EventListener")}} インタフェースを実装するオブジェクト、あるいは、単純に、JavaScript の<a href="/ja/docs/Web/JavaScript/Guide/Functions">関数</a>でなければなりません。コールバックについて詳しくは、{{anch("The event listener callback", "イベントリスナーのコールバック")}}を参照してください。</dd>
 <dt><code><var>options</var></code> {{optional_inline}}</dt>
 <dd>対象のイベントリスナーの特性を指定する、オプションのオブジェクトです。次のオプションが使用できます。
 <dl>
  <dt><code>capture</code></dt>
  <dd>{{jsxref("Boolean")}} 値で、この型のイベントが DOM ツリーで下に位置する <code>EventTarget</code> に<ruby>配信<rp> (</rp><rt>dispatch</rt><rp>) </rp></ruby>される前に、登録された <code><var>listener</var></code> に配信されることを示します。</dd>
  <dt><code>once</code></dt>
  <dd>{{jsxref("Boolean")}} 値で、 <code><var>listener</var></code> の呼び出しを一回のみのとしたいかどうかを値で指定します。 <code>true</code> を指定すると、 <code><var>listener</var></code> は一度実行された時に自動的に削除されます。</dd>
  <dt><code>passive</code></dt>
  <dd>{{jsxref("Boolean")}} 値で、 <code>true</code> ならば、 <code><var>listener</var></code> で指定された関数が {{domxref("Event.preventDefault", "preventDefault()")}} を呼び出さないことを示します。呼び出されたリスナーが <code>preventDefault()</code> を呼び出すと、ユーザーエージェントは何もせず、コンソールに警告を出力します。詳細は{{anch("Improving scrolling performance with passive listeners", "パッシブリスナーによるスクロール性能の改善")}}をご覧ください。</dd>
  <dt>{{non-standard_inline}} <code>mozSystemGroup</code></dt>
  <dd>{{jsxref("Boolean")}} 値で、リスナーをシステムグループに追加するべきであることを示します。コードが XBL または Firefox ブラウザーの {{glossary("chrome")}} で実行されている場合のみ利用できます。</dd>
 </dl>
 </dd>
 <dt><code><var>useCapture</var></code> {{optional_inline}}</dt>
 <dd>{{jsxref("Boolean")}} 値で、この型のイベントが、DOM ツリー内の下の <code>EventTarget</code> に配信される前に、登録された <code><var>listener</var></code> に配信されるかどうかを示します。ツリーを上方向にバブリングしているイベントは、キャプチャーを使用するように指定されたリスナーを起動しません。イベントのバブリングとキャプチャーは、両方の要素がそのイベントのハンドラーを登録している場合に、別の要素内に入れ子になっている要素で発生するイベントを伝播する 2 つの方法です。イベント伝播モードは、要素がイベントを受け取る順番を決定します。詳細な説明は <a href="http://www.w3.org/TR/DOM-Level-3-Events/#event-flow">DOM Level 3 Events</a> と <a href="http://www.quirksmode.org/js/events_order.html#link4">JavaScript Event order</a> を参照してください。指定されていない場合、 <code><var>useCapture</var></code> は既定で <code>false</code> となります。</dd>
 <dd>
 <div class="note"><strong>注:</strong> イベントターゲットに登録されたイベントリスナーは、捕捉フェーズやバブリングフェーズではなく、ターゲットフェーズのイベントになります。ターゲットフェーズのイベントは、<code><var>useCapture</var></code> 引数にかかわらず、すべてのリスナーを追加された順序で実行します。</div>

 <div class="note"><strong>注:</strong> <code><var>useCapture</var></code> はどんなブラウザーでもオプションになっているわけではありません。完全で最大限の互換性を得たいなら、引数を指定するようにしてください。</div>
 </dd>
 <dt><code><var>wantsUntrusted</var></code> {{Non-standard_inline}}</dt>
 <dd><code>true</code> の場合、このリスナーはウェブコンテンツによって発火された合成イベント (カスタムイベント) を受け取ります (ブラウザーの{{glossary("chrome", "クローム")}}では既定で <code>false</code> ですが、一般のウェブページでは <code>true</code> です)。この引数は Gecko でのみ利用可能であり、主にアドオンやブラウザー自身の役に立つものです。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><code>undefined</code></p>

<h2 id="Usage_notes" name="Usage_notes">使用方法のメモ</h2>

<h3 id="The_event_listener_callback" name="The_event_listener_callback">イベントリスナーのコールバック</h3>

<p>イベントリスナーには、コールバック関数を指定することもできますが、 {{domxref("EventListener")}} を実装したオブジェクトを指定することもでき、その場合は {{domxref("EventListener.handleEvent()", "handleEvent()")}} メソッドがコールバック関数として機能します。</p>

<p>コールバック関数自体は、 <code>handleEvent()</code> メソッドと同じ引数と返値を持ちます。つまり、コールバック関数は発生したイベントを説明する {{domxref("Event")}} に基づいたオブジェクトを唯一の引数として受け付け、何も返しません。</p>

<p>たとえば、次のイベントハンドラーコールバックは、 {{domxref("Element/fullscreenchange_event", "fullscreenchange")}} および {{domxref("Element/fullscreenerror_event", "fullscreenerror")}} の両方を処理するために使用することができます。</p>

<pre class="brush: js notranslate">function eventHandler(event) {
  if (event.type == 'fullscreenchange') {
    /* handle a full screen toggle */
  } else /* fullscreenerror */ {
    /* handle a full screen toggle error */
  }
}</pre>

<h3 id="Safely_detecting_option_support" name="Safely_detecting_option_support">オプションの対応の安全な検出</h3>

<p>DOM 仕様書の古い版では、 <code>addEventListener()</code> の第 3 引数はキャプチャーを使用するかどうかを示す論理値でした。時間の経過とともに、より多くのオプションが必要であることが明らかになりました。関数にさらに多くの引数を追加する (オプションの値を扱うときに非常に複雑になります) のではなく、第 3 引数は、イベントリスナーを削除する過程を設定するためのオプションの値を定義するさまざまなプロパティを含むことができるオブジェクトに変更されました。</p>

<p>古いブラウザーは (あまり古くないブラウザーも含めて) 第 3 引数がまだ論理であると仮定しているので、このシナリオをインテリジェントに処理できるようにコードを構築する必要があります。これを行うには、興味のあるオプションごとに機能検出を使用します。</p>

<p>例えば、 <code>passive</code> オプションをチェックしたい場合は次のようにします。</p>

<pre class="brush: js notranslate">let passiveSupported = false;

try {
  const options = {
    get passive() { // この関数はブラウザーが passive プロパティに
                    // アクセスしようとしたときに呼び出されます。
      passiveSupported = true;
      return false;
    }
  };

  window.addEventListener("test", null, options);
  window.removeEventListener("test", null, options);
} catch(err) {
  passiveSupported = false;
}
</pre>

<p>これは、 <code><var>options</var></code> オブジェクトを生成し、 <code>passive</code> プロパティのゲッター関数を持たせます。ゲッターは、呼ばれた場合に <code><var>passiveSupported</var></code> フラグを <code>true</code> に設定します。つまり、ブラウザーが <code>passive</code> プロパティの値を <code><var>options</var></code> オブジェクトでチェックした場合、 <code><var>passiveSupported</var></code> は <code>true</code> に設定され、そうでなければ <code>false</code> のままになります。次に <code>addEventListener()</code> を呼び出して、これらのオプションを指定して偽のイベント・ハンドラーをセットアップし、ブラウザーが第 3 引数としてオブジェクトを認識した場合にオプションがチェックされるようにします。その後、 <code>removeEventListener()</code> を呼び出して、自分たちで後始末をします。 (呼ばれていないイベントリスナーでは <code>handleEvent()</code> は無視されることに注意してください。)</p>

<p>この方法で、任意のオプションに対応しているかどうかを確認することができます。上に示したようなコードを使って、そのオプションのゲッターを追加するだけです。</p>

<p>そして、問題のオプションを使用する実際のイベントリスナーを作成したい場合は、次のようにします。</p>

<pre class="brush: js notranslate">someElement.addEventListener("mouseup", handleMouseUp, passiveSupported
                               ? { passive: true } : false);</pre>

<p>ここでは、 {{domxref("Element/mouseup_event", "mouseup")}} イベントのリスナーを <code><var>someElement</var></code> 要素に追加しています。第 3 引数の <code><var>passiveSupported</var></code> が <code>true</code> である場合、 <code><var>options</var></code> オブジェクトを <code>passive</code> を <code>true</code> に設定して指定しています。そうでない場合は、論理値を渡す必要があることがわかっているので、 <code><var>useCapture</var></code> 引数の値として <code>false</code> を渡しています。</p>

<p>ご希望であれば、 <a href="https://modernizr.com/docs">Modernizr</a> や <a href="https://github.com/rafrex/detect-it">Detect It</a> のようなサードパーティ製のライブラリを使用してこのテストを行うことができます。</p>

<p><a href="https://wicg.github.io/admin/charter.html">Web Incubator Community Group</a> の <code><a href="https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection">EventListenerOptions</a></code> の記事を参考にしてください。</p>

<h2 id="Example" name="Example">例</h2>

<h3 id="Add_a_simple_listener" name="Add_a_simple_listener">シンプルなリスナーの追加</h3>

<p>この例は、要素上でのマウスクリックを監視するための <code>addEventListener()</code> の使い方を紹介します。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;table id="outside"&gt;
  &lt;tr&gt;&lt;td id="t1"&gt;one&lt;/td&gt;&lt;/tr&gt;
  &lt;tr&gt;&lt;td id="t2"&gt;two&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;
</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js notranslate">// t2 のコンテンツを変更する関数
function modifyText() {
  const t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue == "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
  }
}

// イベントリスナーを table に追加
const el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);
</pre>

<p>このコードの中で、 <code>modifyText()</code> が <code>addEventListener()</code> を使用して登録された <code>click</code> イベントのリスナーです。表の中のどこかをクリックすると、ハンドラーに上がり、 <code>modifyText()</code> を実行します。</p>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample('Add_a_simple_listener')}}</p>

<h3 id="Event_listener_with_anonymous_function" name="Event_listener_with_anonymous_function">無名関数を使用したイベントリスナー</h3>

<p>ここで、無名関数を使用してイベントリスナーに引数を渡す方法を見てみましょう。</p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html notranslate">&lt;table id="outside"&gt;
  &lt;tr&gt;&lt;td id="t1"&gt;one&lt;/td&gt;&lt;/tr&gt;
  &lt;tr&gt;&lt;td id="t2"&gt;two&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;</pre>

<h4 id="JavaScript_2">JavaScript</h4>

<pre class="brush: js notranslate">// t2 のコンテンツを変更する関数
function modifyText(new_text) {
  const t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;
}

// イベントリスナーを table に追加する関数
const el = document.getElementById("outside");
el.addEventListener("click", function(){modifyText("four")}, false);
</pre>

<p>なお、リスナーは実際にイベントに応答する <code>modifyText()</code> 関数に引数を送信することができるコードをカプセル化している無名関数であることに注意してください。</p>

<h4 id="Result_2" name="Result_2">結果</h4>

<p>{{EmbedLiveSample('Event_listener_with_anonymous_function')}}</p>

<h3 id="Event_listener_with_an_arrow_function" name="Event_listener_with_an_arrow_function">アロー関数を使用したイベントリスナー</h3>

<p>この例はアロー関数表記を使用して実装された、簡単なイベントリスナーを紹介しています。</p>

<h4 id="HTML_3">HTML</h4>

<pre class="brush: html notranslate">&lt;table id="outside"&gt;
  &lt;tr&gt;&lt;td id="t1"&gt;one&lt;/td&gt;&lt;/tr&gt;
  &lt;tr&gt;&lt;td id="t2"&gt;two&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;
</pre>

<h4 id="JavaScript_3">JavaScript</h4>

<pre class="brush: js notranslate">// t2 の中身を変更するための関数
function modifyText(new_text) {
  const t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;
}

// アロー関数で table にイベントリスナーを追加
const el = document.getElementById("outside");
el.addEventListener("click", () =&gt; { modifyText("four"); }, false);
</pre>

<h4 id="Result_3" name="Result_3">結果</h4>

<p>{{EmbedLiveSample('Event_listener_with_an_arrow_function')}}</p>

<p>なお、無名関数とアロー関数は似ており、違いは <code>this</code> のバインドです。無名関数 (及び伝統的なすべての JavaScript 関数) は自身の <code>this</code> を作成するのに対し、アロー関数はそれを含む関数の <code>this</code> を継承します。</p>

<p>つまり、アロー関数を使用したときは、それを含む関数の変数や定数をイベントハンドラーで利用することができます。</p>

<h3 id="Example_of_options_usage">Example of options usage</h3>

<h4 id="HTML_4">HTML</h4>

<pre class="brush: html notranslate">&lt;div class="outer"&gt;
  outer, once &amp; none-once
  &lt;div class="middle" target="_blank"&gt;
    middle, capture &amp; none-capture
    &lt;a class="inner1" href="https://www.mozilla.org" target="_blank"&gt;
      inner1, passive &amp; preventDefault(which is not allowed)
    &lt;/a&gt;
    &lt;a class="inner2" href="/" target="_blank"&gt;
      inner2, none-passive &amp; preventDefault(not open new page)
    &lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">.outer, .middle, .inner1, .inner2 {
  display: block;
  width:   520px;
  padding: 15px;
  margin:  15px;
  text-decoration: none;
}
.outer {
  border: 1px solid red;
  color:  red;
}
.middle {
  border: 1px solid green;
  color:  green;
  width:  460px;
}
.inner1, .inner2 {
  border: 1px solid purple;
  color:  purple;
  width:  400px;
}
</pre>

<h4 id="JavaScript_4">JavaScript</h4>

<pre class="brush: js notranslate">const outer  = document.querySelector('.outer');
const middle = document.querySelector('.middle');
const inner1 = document.querySelector('.inner1');
const inner2 = document.querySelector('.inner2');

const capture = {
  capture : true
};
const noneCapture = {
  capture : false
};
const once = {
  once : true
};
const noneOnce = {
  once : false
};
const passive = {
  passive : true
};
const nonePassive = {
  passive : false
};

outer.addEventListener('click', onceHandler, once);
outer.addEventListener('click', noneOnceHandler, noneOnce);
middle.addEventListener('click', captureHandler, capture);
middle.addEventListener('click', noneCaptureHandler, noneCapture);
inner1.addEventListener('click', passiveHandler, passive);
inner2.addEventListener('click', nonePassiveHandler, nonePassive);

function onceHandler(event) {
  alert('outer, once');
}
function noneOnceHandler(event) {
  alert('outer, none-once, default');
}
function captureHandler(event) {
  //event.stopImmediatePropagation();
  alert('middle, capture');
}
function noneCaptureHandler(event) {
  alert('middle, none-capture, default');
}
function passiveHandler(event) {
  // Unable to preventDefault inside passive event listener invocation.
  event.preventDefault();
  alert('inner1, passive, open new page');
}
function nonePassiveHandler(event) {
  event.preventDefault();
  //event.stopPropagation();
  alert('inner2, none-passive, default, not open new page');
}
</pre>

<h4 id="Result_4" name="Result_4">結果</h4>

<p>外側、中央、内側のコンテナーをそれぞれクリックして、オプションがどのように動作するかを確認してください。</p>

<p>{{ EmbedLiveSample('Example_of_options_usage', 600, 310, '', 'Web/API/EventTarget/addEventListener') }}</p>

<p><code><var>options</var></code> オブジェクトで特定の値を使用する前に、ユーザーのブラウザーがそれに対応していることを確認するのが良いでしょう。詳細は{{anch("Safely detecting option support", "オプションの対応の安全な検出")}}を参照してください。</p>

<h2 id="Other_notes" name="Other_notes">その他の注</h2>

<h3 id="Why_use_addEventListener" name="Why_use_addEventListener">なぜ addEventListener() を使うのか</h3>

<p><code>addEventListener()</code> は、 W3C DOM で仕様化されている、イベントリスナーを登録するための方法です。その利点は以下の通りです。</p>

<ul>
 <li>イベントに複数のハンドラーを追加することができます。これは、特に、他のライブラリ/拡張で利用しても上手く動作する必要がある {{Glossary("AJAX")}} ライブラリや JavaScript モジュール、その他のライブラリや拡張機能と共に動作させる必要があるコードに役立ちます。</li>
 <li>リスナーがアクティブ化されたときに、その動きを細かく制御することを可能にします (キャプチャリング 対 バブリング)。</li>
 <li>HTML 要素だけでなく、任意の DOM 要素 で動作します。</li>
</ul>

<p>別の方法である、<a href="#Older_way_to_register_event_listeners">イベントリスナーを登録するための古い方法</a> は、後で説明します。</p>

<h3 id="Adding_a_listener_during_event_dispatch" name="Adding_a_listener_during_event_dispatch">イベント配信中のリスナーの追加</h3>

<p>{{domxref("EventListener")}} がイベント処理中に {{domxref("EventTarget")}} に追加された場合、それが現在のアクションによって実行されることはありませんが、バブリングフェーズのように、後の段階のイベントフローで実行されるかもしれません。</p>

<h3 id="Multiple_identical_event_listeners" name="Multiple_identical_event_listeners">複数の同一のイベントリスナー</h3>

<p>複数の同一の <code>EventListener</code> が、同じ <code>EventTarget</code> に同じ引数で登録された場合、重複するインスタンスは反映されません。 <code>EventListener</code> が 2 回呼び出されることはなく、重複するインスタンスは反映されないので、 {{domxref("EventTarget.removeEventListener()", "removeEventListener()")}} で手動で削除する必要はありません。</p>

<p>ただし、無名関数をハンドラーとして使用する場合、そのようなリスナーは同じにはならないことに注意してください。無名関数はループ内であっても繰り返し呼び出されるだけで、同じソースコードを使って定義されていても同じにはならないためです。</p>

<p>ただし、このような場合に同じ名前の関数を繰り返し定義することは、より問題になる可能性があります (後述の<a href="#Memory_issues">メモリの問題</a>を参照してください)。</p>

<h3 id="The_value_of_this_within_the_handler" name="The_value_of_this_within_the_handler">ハンドラー内での "this" の値</h3>

<p>一連の類似した要素に対して一般的なハンドラーを使いたい場合のように、イベントハンドラーが実行される要素を参照したいということがたびたびあります。</p>

<p><code>addEventListener()</code> を使って要素にハンドラー関数を設定したとき、ハンドラーの中の {{jsxref("Operators/this","this")}} の値は要素への参照となります。これはハンドラーに渡された event 引数の <code>currentTarget</code> プロパティの値と同じです。</p>

<pre class="brush: js notranslate">my_element.addEventListener('click', function (e) {
  console.log(this.className)           // logs the className of my_element
  console.log(e.currentTarget === this) // logs `true`
})
</pre>

<p><a href="/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_separate_this">アロー関数は独自の <code>this</code> コンテキストを持たない</a>ことをお忘れなく。</p>

<pre class="brush: js notranslate">my_element.addEventListener('click', (e) =&gt; {
  console.log(this.className)           // WARNING: `this` is not `my_element`
  console.log(e.currentTarget === this) // logs `false`
})</pre>

<p>イベントハンドラー (例えば {{domxref("GlobalEventHandlers.onclick", "onclick")}}) が HTML ソース内の要素に指定されていた場合、属性値の Javascirpt コードは、 <code>addEventListener()</code> を使用するような方法で <code>this</code> の値をバインドしたハンドラー関数に置き換えられます。コード内に <code>this</code> が現れた場合には、要素への参照を表します。</p>

<pre class="brush: html notranslate">&lt;table id="my_table" onclick="console.log(this.id);"&gt;&lt;!-- `this` refers to the table; logs 'my_table' --&gt;
  ...
&lt;/table&gt;
</pre>

<p><code>this</code> の値は、属性値の中のコード<em>によって呼び出される</em>関数内では、<a href="/ja/docs/Web/JavaScript/Reference/Operators/this">標準的な規則</a>に従って振る舞うことに注意してください。これは次の例で示されています。</p>

<pre class="brush: html notranslate">&lt;script&gt;
  function logID() { console.log(this.id); }
&lt;/script&gt;
&lt;table id="my_table" onclick="logID();"&gt;&lt;!-- when called, `this` will refer to the global object --&gt;
  ...
&lt;/table&gt;
</pre>

<p><code>this</code> は <code>logID()</code> 内においては、グローバルオブジェクト {{domxref("Window")}} (または<a href="/ja/docs/Web/JavaScript/Reference/Strict_mode">厳格モード</a>の場合は <code>undefined</code>になります。</p>

<h4 id="Specifying_this_using_bind" name="Specifying_this_using_bind">bind() を使用した this の指定</h4>

<p>{{jsxref("Function.prototype.bind()")}} メソッドで、その関数のすべての呼び出しにおいて <code>this</code> として使用される値を指定できます。これを使えば、関数がどこから呼び出されるかによって <code>this</code> の値が変わってしまうというややこしい問題を簡単に回避できます。ただし、リスナーを後で削除できるように、そのリスナーへの参照を残しておく必要があります。</p>

<p>以下は <code>bind()</code> を使った場合と使わない場合の例です。</p>

<pre class="brush: js notranslate">const Something = function(element) {
  // |this| is a newly created object
  this.name = 'Something Good';
  this.onclick1 = function(event) {
    console.log(this.name); // this は element なので undefined になります
  };
  this.onclick2 = function(event) {
    console.log(this.name); // this はバインドされた Something オブジェクトなので「Something Good」と出力されます
  };
  element.addEventListener('click', this.onclick1, false);
  element.addEventListener('click', this.onclick2.bind(this), false); // これが仕掛けです
}
const s = new Something(document.body);
</pre>

<p>上の例の問題は、 <code>bind()</code> の付いたリスナーを削除できないということです。もうひとつの解決策は、あらゆるイベントを捕捉する <code>handleEvent()</code> という特別な関数を使用することです。</p>

<pre class="brush: js notranslate">const Something = function(element) {
  // |this| is a newly created object
  this.name = 'Something Good';
  this.handleEvent = function(event) {
    console.log(this.name); // this は Something オブジェクトなので「Something Good」と出力されます
    switch(event.type) {
      case 'click':
        // 処理
        break;
      case 'dblclick':
        // 処理
        break;
    }
  };

  // この場合のリスナーは this であって this.handleEvent でないことに注意してください
  element.addEventListener('click', this, false);
  element.addEventListener('dblclick', this, false);

  // リスナーは適切に削除できます
  element.removeEventListener('click', this, false);
  element.removeEventListener('dblclick', this, false);
}
const s = new Something(document.body);
</pre>

<p><em>this</em> の参照を扱うためのもう一つの方法は、 <code>EventListener</code> にアクセスする必要のあるフィールドを含むオブジェクトのメソッドを呼び出す関数を渡すことです。</p>

<pre class="brush: js notranslate">class SomeClass {

  constructor() {
    this.name = 'Something Good';
  }

  register() {
    const that = this;
    window.addEventListener('keydown', function(e) { that.someMethod(e); });
  }

  someMethod(e) {
    console.log(this.name);
    switch(e.keyCode) {
      case 5:
        // some code here...
        break;
      case 6:
        // some code here...
        break;
    }
  }

}

const myObject = new SomeClass();
myObject.register();</pre>

<h3 id="Getting_Data_Into_and_Out_of_an_Event_Listener" name="Getting_Data_Into_and_Out_of_an_Event_Listener">イベントリスナーのデータの出し入れ</h3>

<p>イベントリスナーは島のようなもので、それらにデータを渡すのは非常に難しく、ましてや実行後にそれらからデータを取り出すのは非常に難しいと思われるかもしれません。イベントリスナーは、イベントオブジェクトという1つの引数を取るだけで、それは自動的にリスナーに渡され、返値が無視されるからです。では、どのようにしてデータを渡したり、取り出したりすることができるのでしょうか？これを行うための良い方法がいくつかあります。</p>

<h4 id="Getting_data_into_an_event_listener_using_this" name="Getting_data_into_an_event_listener_using_this">"this" を使用したイベントリスナーへのデータの入力</h4>

<p><a href="#Specifying_this_using_bind">前述</a>の通り、 <code>Function.prototype.bind()</code> を使用すると <code>this</code> 参照変数を通じてイベントリスナーに値を渡すことができます。</p>

<pre class="brush: js notranslate">const myButton = document.getElementById('my-button-id');
const someString = 'Data';

myButton.addEventListener('click', function () {
  console.log(this);  // Expected Value: 'Data'
}.bind(someString));
</pre>

<p>この方法は、イベントリスナーの中からプログラムでイベントリスナーがどの HTML 要素で発生したかを知る必要がない場合に適しています。これを行う主な利点は、実際に引数リストにデータを渡す場合とほぼ同じ方法でイベントリスナーがデータを受け取ることです。</p>

<h4 id="Getting_data_into_an_event_listener_using_the_outer_scope_property" name="Getting_data_into_an_event_listener_using_the_outer_scope_property">外部スコープのプロパティを使用したイベントリスナーへのデータの入力</h4>

<p>外部スコープに (<code>const</code>, <code>let</code> を付けた) 変数宣言が含まれている場合、そのスコープで宣言されたすべての内部関数はその変数にアクセスすることができます(外部関数/内部関数については<a href="/ja/docs/Glossary/Function#Different_types_of_functions">こちら</a>を、変数スコープについては<a href="/ja/docs/Web/JavaScript/Reference/Statements/var#Implicit_globals_and_outer_function_scope">こちら</a>を参照してください)。したがって、イベントリスナーの外部からデータにアクセスする最も簡単な方法の1つは、イベントリスナーが宣言されているスコープにアクセスできるようにすることです。</p>

<pre class="brush: js notranslate">const myButton = document.getElementById('my-button-id');
const someString = 'Data';

myButton.addEventListener('click', function() {
  console.log(someString);  // Expected Value: 'Data'

  someString = 'Data Again';
});

console.log(someString);  // Expected Value: 'Data' (will never output 'Data Again')
</pre>

<div class="note">
<p><strong>注:</strong> 内側のスコープは外側のスコープにある <code>const</code>, <code>let</code> 変数にアクセスすることができますが、イベントリスナーの定義後に、同じ外側のスコープ内でこれらの変数にアクセスできるようになることは期待できません。なぜでしょうか？単純に、イベントリスナーが実行される頃には、イベントリスナーが定義されたスコープは既に実行を終了しているからです。</p>
</div>

<h4 id="オブジェクトを用いたイベントリスナーのデータの出し入れ">オブジェクトを用いたイベントリスナーのデータの出し入れ</h4>

<p>JavaScript のほとんどの関数とは異なり、オブジェクトはそのオブジェクトを参照する変数がメモリ内に存在する限り、メモリ内に保持されます。それに加えて、オブジェクトはプロパティを持つことができ、参照によって渡すことができることから、スコープ間でデータを共有するための有力な候補となります。これについて調べてみましょう。</p>

<div class="note">
<p><strong>注:</strong> JavaScript の関数は厳密にはオブジェクトです。 (そのため、プロパティを持つことができ、メモリ内に永続的に存在する変数に代入されていれば、実行終了後もメモリ内に保持されます。)</p>
</div>

<p>オブジェクトを参照する変数がメモリに存在する限り、オブジェクトのプロパティを使用してメモリにデータを格納することができるので、実際にそれらを使用して、イベントリスナーにデータを渡し、イベントハンドラーが実行された後でデータに変更があった場合には、それを戻すことができます。この例を考えてみましょう。</p>

<pre class="brush: js notranslate">const myButton = document.getElementById('my-button-id');
const someObject = {aProperty: 'Data'};

myButton.addEventListener('click', function() {
  console.log(someObject.aProperty);  // Expected Value: 'Data'

  someObject.aProperty = 'Data Again';  // Change the value
});

window.setInterval(function() {
  if (someObject.aProperty === 'Data Again') {
    console.log('Data Again: True');
    someObject.aProperty = 'Data';  // Reset value to wait for next event execution
  }
}, 5000);
</pre>

<p>この例では、イベントリスナーとインターバル関数の両方が定義されているスコープは、 <code>someObject.aProperty</code> の元の値が変更される前に実行を終了していたとしても、イベントリスナーとインターバル関数の両方で <code>someObject</code> がメモリ内に (<em>参照</em>によって) 持続するため、両方とも同じデータにアクセスできます (つまり、一方がデータを変更したときに、もう一方がその変更に対応できます)。</p>

<div class="note">
<p><strong>注:</strong> オブジェクトは参照にで変数に格納されます。つまり、実際のデータのメモリの場所だけが変数に格納されます。とりわけ、これはオブジェクトを「格納」する変数が、実際に同じオブジェクト参照が代入 (「格納」) されている他の変数に影響を与えることができるということです。2つの変数が同じオブジェクトを参照している場合 (例えば、 <code>let a = b = {aProperty: 'Yeah'};</code>)、どちらかから変数のデータを変更すると、もう一方の変数に影響を与えます。</p>
</div>

<div class="note">
<p><strong>注:</strong> オブジェクトは参照によって変数に格納されているので、関数の実行を停止した後も、関数からオブジェクトを返す (データを失わないようにメモリに保存しておく) ことができます。</p>
</div>

<h3 id="Legacy_Internet_Explorer_and_attachEvent" name="Legacy_Internet_Explorer_and_attachEvent">古い Internet Explorer と attachEvent</h3>

<p>IE9 より前の Internet Explorer では、標準の <code>addEventListener</code> ではなく、 {{domxref("EventTarget.attachEvent", "attachEvent()")}} を使わなければなりません。 IE に対応するためには、上記の例を以下のように修正しなけれなりません。</p>

<pre class="brush: js notranslate">if (el.addEventListener) {
  el.addEventListener('click', modifyText, false);
} else if (el.attachEvent)  {
  el.attachEvent('onclick', modifyText);
}
</pre>

<p><code>attachEvent()</code> の欠点が 1 つあります。 <code>this</code> の値がイベントを起こした要素ではなく、 <code>window</code> オブジェクトへの参照になってしまうことです。</p>

<p><code>attachEvent()</code> メソッドは、ウェブページの特定の要素がサイズ変更されたことを検出するために <code>onresize</code> イベントを対応付けることができました。独自の <code>mselementresize</code> イベントは、イベントハンドラーを登録する <code>addEventListener</code> メソッドによって対応付けられた場合。 <code>onresize</code> と同様の機能を提供し、特定の HTML 要素の寸法が変更されたときに発行されます。</p>

<h3 id="Polyfill" name="Polyfill">ポリフィル</h3>

<p>次のコードをスクリプトの初めに書いておくと、 Internet Explorer 8 では対応していない <code>addEventListener()</code>, <code>removeEventListener()</code>, {{domxref("Event.preventDefault()")}}, {{domxref("Event.stopPropagation()")}} が動作するようになります。このコードは、 <code>handleEvent()</code> と <code>DOMContentLoaded</code> イベントにも対応します。</p>

<div class="note">
<p><strong>注: </strong><code>useCapture</code> に対応していないため、 IE 8 では代わりの方法はありません。以下のコードは IE 8 への対応を追加するだけです。また、 IE 8 用の代替モジュールは、標準モードのみで動作します。 doctype 宣言が必要です。</p>
</div>

<pre class="brush: js notranslate">(function() {
  if (!Event.prototype.preventDefault) {
    Event.prototype.preventDefault=function() {
      this.returnValue=false;
    };
  }
  if (!Event.prototype.stopPropagation) {
    Event.prototype.stopPropagation=function() {
      this.cancelBubble=true;
    };
  }
  if (!Element.prototype.addEventListener) {
    var eventListeners=[];

    var addEventListener=function(type,listener /*, useCapture (will be ignored) */) {
      var self=this;
      var wrapper=function(e) {
        e.target=e.srcElement;
        e.currentTarget=self;
        if (typeof listener.handleEvent != 'undefined') {
          listener.handleEvent(e);
        } else {
          listener.call(self,e);
        }
      };
      if (type=="DOMContentLoaded") {
        var wrapper2=function(e) {
          if (document.readyState=="complete") {
            wrapper(e);
          }
        };
        document.attachEvent("onreadystatechange",wrapper2);
        eventListeners.push({object:this,type:type,listener:listener,wrapper:wrapper2});

        if (document.readyState=="complete") {
          var e=new Event();
          e.srcElement=window;
          wrapper2(e);
        }
      } else {
        this.attachEvent("on"+type,wrapper);
        eventListeners.push({object:this,type:type,listener:listener,wrapper:wrapper});
      }
    };
    var removeEventListener=function(type,listener /*, useCapture (will be ignored) */) {
      var counter=0;
      while (counter&lt;eventListeners.length) {
        var eventListener=eventListeners[counter];
        if (eventListener.object==this &amp;&amp; eventListener.type==type &amp;&amp; eventListener.listener==listener) {
          if (type=="DOMContentLoaded") {
            this.detachEvent("onreadystatechange",eventListener.wrapper);
          } else {
            this.detachEvent("on"+type,eventListener.wrapper);
          }
          eventListeners.splice(counter, 1);
          break;
        }
        ++counter;
      }
    };
    Element.prototype.addEventListener=addEventListener;
    Element.prototype.removeEventListener=removeEventListener;
    if (HTMLDocument) {
      HTMLDocument.prototype.addEventListener=addEventListener;
      HTMLDocument.prototype.removeEventListener=removeEventListener;
    }
    if (Window) {
      Window.prototype.addEventListener=addEventListener;
      Window.prototype.removeEventListener=removeEventListener;
    }
  }
})();</pre>

<h3 id="Older_way_to_register_event_listeners" name="Older_way_to_register_event_listeners">イベントリスナーを登録するための古い方法</h3>

<p><code>addEventListener()</code> は、DOM 2 <a href="http://www.w3.org/TR/DOM-Level-2-Events">Events</a> 仕様で導入されました。それ以前は、以下のようにイベントリスナーを登録していました。</p>

<pre class="brush: js notranslate">// 関数へのリファレンスを利用する方法—'()' が無いことに注意してください
el.onclick = modifyText;

// 関数式を利用する方法
element.onclick = function() {
   /* ...文... */
};
</pre>

<p>このメソッドは、要素上に <code>click</code> イベントリスナーが既に存在する場合、置き換えてしまいます。 他のイベント、<code>blur</code> (<code>onblur</code>)、<code>keypress</code> (<code>onkeypress</code>)、などのような関連するイベントハンドラも同様です。</p>

<p>これは本質的に {{glossary("DOM", "DOM 0")}} の一部であるため、イベントリスナーを追加するためのこのテクニックは非常に広く対応されており、特別なブラウザー間の互換コードを必要としません。これは、 (IE 8 以前のような) 非常に古いブラウザーに対応しなければならない場合に、イベントリスナーを動的に登録するために使用されます。 <code>addEventListener</code> のブラウザー対応の詳細については、下記の表を参照してください。</p>

<h3 id="Memory_issues" name="Memory_issues">メモリに関する問題</h3>

<pre class="brush: js notranslate">const els = document.getElementsByTagName('*');

// ケース 1
for(let i=0 ; i &lt; els.length; i++){
  els[i].addEventListener("click", function(e){/*関数の処理*/}, false);
}

// ケース 2
function processEvent(e){
  /*関数の処理*/
}

for(let i=0 ; i &lt; els.length; i++){
  els[i].addEventListener("click", processEvent, false);
}
</pre>

<p>上記の最初のケースでは、ループが繰り返されるたびに新しい (無名の) ハンドラー関数が作成されます。 2 番目のケースでは、以前に宣言された同じ関数がイベントハンドラーとして使用され、作成されるハンドラー関数が 1 つしかないため、メモリ消費量が少なくなります。さらに、最初のケースでは、無名関数への参照が保持されないため (ここでは、ループが作成する可能性のある複数の無名関数のいずれも保持されないため)、 {{domxref("EventTarget.removeEventListener", "removeEventListener()")}} を呼び出すことができません。2つ目のケースでは、 <code>processEvent</code> が関数への参照なので、 <code><var>myElement</var>.removeEventListener("click", processEvent, false)</code> を実行することが可能です。</p>

<p>実際には、メモリ消費に関しては、関数への参照が保持されていないことが本当の問題ではなく、静的な関数への参照が保持されていないことが問題なのです。以下の問題ケースでは、どちらも関数への参照は保持されていますが、繰り返しのたびに再定義されているため、静的なものではありません。 3 つ目のケースでは、無名関数の参照が反復のたびに再割り当てされています。 4 番目のケースでは、関数の定義全体は不変ですが、 (コンパイラによって[[昇格]]されていない限り) 新しいものとして繰り返し定義されているので、静的ではありません。したがって、単純に[[複数の同一のイベントリスナー]]のように見えますが、どちらの場合も、各反復処理では、ハンドラー関数への独自の参照を持つ新しいリスナーが作成されます。しかし、関数の定義自体は変更されないので、重複するリスナーごとに同じ関数が呼び出される可能性があります (特にコードが最適化されている場合)。</p>

<p>また、どちらの場合も、関数への参照は保持されていたが、追加するごとに繰り返し再定義されていたので、上からの remove 文でリスナーを削除することができますが、最後に追加されたものだけが削除されるようになります。</p>

<pre class="brush: js notranslate">// For illustration only: Note "MISTAKE" of [j] for [i] thus causing desired events to all attach to SAME element

// ケース 3
for(let i=0, j=0 ; i&lt;els.length ; i++){
  /* do lots of stuff with j */
  els[j].addEventListener("click", processEvent = function(e){/*do something*/}, false);
}

// ケース 4
for(let i=0, j=0 ; i&lt;els.length ; i++){
  /* do lots of stuff with j */
  function processEvent(e){/*do something*/};
  els[j].addEventListener("click", processEvent, false);
}</pre>

<h3 id="Improving_scrolling_performance_with_passive_listeners" name="Improving_scrolling_performance_with_passive_listeners">パッシブリスナーを用いたスクロールの性能改善</h3>

<p>仕様書によれば、 <code>passive</code> オプションの既定値は常に <code>false</code> です。しかし、これは特定のタッチイベントを扱うイベントリスナーが (特に) スクロールを処理しようとしている間にブラウザーのメインスレッドをブロックする可能性をもたらしており、スクロール処理中の性能が大幅に低下する結果になる可能性があります。</p>

<p>この問題を防ぐために、一部のブラウザー (特に Chrome と Firefox) では、文書レベルノードである {{domxref("Window")}}, {{domxref("Document")}}, {{domxref("Document.body")}} の {{event("touchstart")}} および {{event("touchmove")}} イベントの <code>passive</code> オプションの既定値を <code>true</code> に変更しています。これにより、イベントリスナーが呼び出されなくなるため、ユーザーがスクロールしている間にページのレンダリングをブロックすることができなくなります。</p>

<div class="note">
<p><strong>Note:</strong> この変更された動作を実装しているブラウザー (およびそれらのブラウザーのバージョン) を知りたい場合は、下記の互換性一覧表を参照してください。</p>
</div>

<p>この動作は下記のように、明示的に <code>passive</code> の値を <code>false</code> に設定することで上書きできます。</p>

<pre class="brush: js notranslate">/* Feature detection */
let passiveIfSupported = false;

try {
  window.addEventListener("test", null,
    Object.defineProperty(
      {},
      "passive",
      {
        get: function() { passiveIfSupported = { passive: false }; }
      }
    )
  );
} catch(err) {}

window.addEventListener('scroll', function(event) {
  /* do something */
  // can't use event.preventDefault();
}, passiveIfSupported );
</pre>

<p><code>addEventListener()</code> の <code>options</code> 引数に対応していない古いブラウザーでは、これを使用しようとすると、<a href="#Safely_detecting_option_support">機能検出</a>を適切に使用せずに <code>useCapture</code> 引数の使用を防ぐことがあります。</p>

<p>基本的な {{event("scroll")}} イベントの <code>passive</code> の値を気にする必要はありません。キャンセルできないので、イベントリスナーはどのような場合でもページのレンダリングをブロックすることはできません。</p>

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
   <td>{{SpecName("DOM WHATWG", "#dom-eventtarget-addeventlistener", "EventTarget.addEventListener()")}}</td>
   <td>{{Spec2("DOM WHATWG")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("DOM4", "#dom-eventtarget-addeventlistener", "EventTarget.addEventListener()")}}</td>
   <td>{{Spec2("DOM4")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("DOM2 Events", "#Events-EventTarget-addEventListener", "EventTarget.addEventListener()")}}</td>
   <td>{{Spec2("DOM2 Events")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.EventTarget.addEventListener", 3)}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("EventTarget.removeEventListener()")}}</li>
 <li><a href="/ja/docs/Web/Guide/Events/Creating_and_triggering_events">イベントの作成と起動</a></li>
 <li><a href="http://www.quirksmode.org/js/this.html">イベントハンドラー内での <code>this</code> の使用方法のさらに詳細な解説</a></li>
</ul>
