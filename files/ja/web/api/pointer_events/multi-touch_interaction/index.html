---
title: マルチタッチ操作
slug: Web/API/Pointer_events/Multi-touch_interaction
tags:
  - Guide
  - Pointer Events
  - touch
translation_of: Web/API/Pointer_events/Multi-touch_interaction
---
<p>{{DefaultAPISidebar("Pointer Events")}}</p>

<p>ポインタイベントは DOM 入力イベントを拡張して、マウスだけでなくペン/スタイラスやタッチ画面などのさまざまなポインティング入力デバイスをサポートします。 <em>ポインタ</em>は、特定の画面座標セットをターゲットにできるハードウェアにとらわれないデバイスです。 ポインタに単一のイベントモデルを使用すると、ウェブサイト、ウェブアプリの作成が簡単になり、ユーザーのハードウェアに関係なく優れたユーザーエクスペリエンスを提供できます。</p>

<p>ポインタイベントはマウスイベントと多くの類似点がありますが、タッチ画面上の複数の指など、複数同時のポインタをサポートしています。 この追加機能は、より豊富なユーザー操作モデルを提供するために使用できますが、マルチタッチ操作（multi-touch interaction）の処理がさらに複雑になります。 このドキュメントは、異なるマルチタッチ操作を持つポインタイベントを使用して、コード例を介して説明します。</p>

<p>このアプリの<em>ライブ</em>版は <a href="https://mdn.github.io/dom-examples/pointerevents/Multi-touch_interaction.html">Github</a> で利用できます。 <a href="https://github.com/mdn/dom-examples/blob/master/pointerevents/Multi-touch_interaction.html">ソースコードは Github で入手できます</a>。 プルリクエストや<a href="https://github.com/mdn/dom-examples/issues">バグレポート</a>は大歓迎です。</p>

<h2 id="Example" name="Example">例</h2>

<p>この例では、さまざまなマルチタッチ操作にポインタイベントのさまざまなイベントタイプ（{{event("pointerdown")}}、{{event("pointermove")}}、{{event("pointerup")}}、{{event("pointercancel")}} など）を使用する方法を示します。</p>

<h3 id="Define_touch_targets" name="Define_touch_targets">タッチターゲットの定義</h3>

<p>アプリは {{HTMLElement("div")}} を使用して3つの異なるタッチターゲット領域を定義します。</p>

<pre class="brush: html">&lt;style&gt;
  div {
    margin: 0em;
    padding: 2em;
  }
  #target1 {
    background: white;
    border: 1px solid black;
  }
  #target2 {
    background: white;
    border: 1px solid black;
  }
  #target3 {
    background: white;
    border: 1px solid black;
  }
&lt;/style&gt;
</pre>

<h3 id="Global_state" name="Global_state">グローバルな状態</h3>

<p>マルチタッチ操作をサポートするには、さまざまなイベントフェーズの間にポインタのイベント状態を維持することが必要です。 このアプリは、イベント状態をキャッシュするために、ターゲット要素ごとに1つのキャッシュで、3つの配列を使用します。</p>

<pre class="brush: js">// Log events flag
// イベントログフラグ
var logEvents = false;

// Event caches, one per touch target
// タッチターゲットごとに1つのイベントキャッシュ
var evCache1 = new Array();
var evCache2 = new Array();
var evCache3 = new Array();
</pre>

<h3 id="Register_event_handlers" name="Register_event_handlers">イベントハンドラの登録</h3>

<p>イベントハンドラは {{event("pointerdown")}}、{{event("pointermove")}}、{{event("pointerup")}} のポインタイベントに登録します。 {{event("pointerup")}} ハンドラは {{event("pointercancel")}}、{{event("pointerout")}}、{{event("pointerleave")}} のイベントにも使用します。 これら4つのイベントは、このアプリでは同じ意味を持っているからです。</p>

<pre class="brush: js">function set_handlers(name) {
 // Install event handlers for the given element
 // 与えられた要素にイベントハンドラをインストールする
 var el=document.getElementById(name);
 el.onpointerdown = pointerdown_handler;
 el.onpointermove = pointermove_handler;

 // Use same handler for pointer{up,cancel,out,leave} events since
 // the semantics for these events - in this app - are the same.
 // pointer{up,cancel,out,leave} イベントの意味は - このアプリでは -
 // 同じであるため、これらのイベントに同じハンドラを使用する。
 el.onpointerup = pointerup_handler;
 el.onpointercancel = pointerup_handler;
 el.onpointerout = pointerup_handler;
 el.onpointerleave = pointerup_handler;
}

function init() {
 set_handlers("target1");
 set_handlers("target2");
 set_handlers("target3");
}
</pre>

<h3 id="Pointer_down" name="Pointer_down">ポインタダウン</h3>

<p>{{event("pointerdown")}} イベントは、ポインタ（マウス、ペン/スタイラス、タッチ画面上のタッチポイント）が<em>接触面</em>に接触したときに発生します。 このダウンイベントがマルチタッチ操作の一部である場合、イベントの状態をキャッシュしなければなりません。</p>

<p>このアプリでは、要素の上にポインタを置いてダウンすると、その要素が持つアクティブなタッチポイントの数に応じて、要素の背景色が変わります。 色の変更に関する詳細は <code><a href="#Update_background_color">update_background</a></code> 関数を参照してください。</p>

<pre class="brush: js">function pointerdown_handler(ev) {
 // The pointerdown event signals the start of a touch interaction.
 // Save this event for later processing (this could be part of a
 // multi-touch interaction) and update the background color
 // pointerdown イベントは、タッチ操作の開始を知らせます。
 // このイベントを後で処理するために保存し（これはマルチタッチ
 // 操作の一部になる可能性があります）、背景色を更新します
 push_event(ev);
 if (logEvents) log("pointerDown: name = " + ev.target.id, ev);
 update_background(ev);
}
</pre>

<h3 id="Pointer_move" name="Pointer_move">ポインタ移動</h3>

<p>{{event("pointermove")}} ハンドラは、ポインタが移動したときに呼び出されます。 別のイベントタイプが発生する前に（例えば、ユーザーがポインタを移動した場合など）複数回呼び出されることがあります。</p>

<p>このアプリでは、ポインタの移動は、要素がこのイベントを受け取ったことを明確に視覚的に示すために、ターゲットの境界線（<code>border</code>）を破線（<code>dashed</code>）にすることで表します。</p>

<pre class="brush: js">function pointermove_handler(ev) {
 // Note: if the user makes more than one "simultaneous" touch, most browsers
 // fire at least one pointermove event and some will fire several pointermoves.
 // 注: ユーザーが複数の「同時」タッチを行うと、ほとんどのブラウザーは少なくとも1つの
 // pointermove イベントを発生させ、一部はいくつかの pointermove イベントを発生させます。
 //
 // This function sets the target element's border to "dashed" to visually
 // indicate the target received a move event.
 // この関数は、ターゲットが移動イベントを受け取ったことを視覚的に示すために、
 // ターゲット要素の border を "dashed" に設定します。
 if (logEvents) log("pointerMove", ev);
 update_background(ev);
 ev.target.style.border = "dashed";
}
</pre>

<h3 id="Pointer_up" name="Pointer_up">ポインタアップ</h3>

<p>{{event("pointerup")}} イベントは、ポインタが<em>接触面</em>から上がると発生します。 これが発生すると、そのイベントは関連付けられているイベントキャッシュから削除されます。</p>

<p>このアプリでは、このハンドラは {{event("pointercancel")}}、{{event("pointerleave")}}、{{event("pointerout")}} のイベントにも使用します。</p>

<pre class="brush: js">function pointerup_handler(ev) {
  if (logEvents) log(ev.type, ev);
  // Remove this touch point from the cache and reset the target's
  // background and border
  // このタッチポイントをキャッシュから削除し、
  // ターゲットの背景色と境界線をリセットします
  remove_event(ev);
  update_background(ev);
  ev.target.style.border = "1px solid black";
}
</pre>

<h3 id="Application_UI" name="Application_UI">アプリの UI</h3>

<p>アプリは、タッチ領域に {{HTMLElement("div")}} 要素を使用し、ログ記録を有効にするボタンとログを消去するためのボタンを提供します。</p>

<p class="note">ブラウザーのデフォルトのタッチの振る舞いが、このアプリのポインタ処理をオーバーライドしないようにするために、{{cssxref("touch-action")}} プロパティを {{HTMLElement("body")}} 要素に適用しています。</p>

<pre class="brush: html">&lt;body onload="init();" style="touch-action:none"&gt;
 &lt;div id="target1"&gt; Tap, Hold or Swipe me 1&lt;/div&gt;
 &lt;div id="target2"&gt; Tap, Hold or Swipe me 2&lt;/div&gt;
 &lt;div id="target3"&gt; Tap, Hold or Swipe me 3&lt;/div&gt;

 &lt;!-- UI for logging/debugging --&gt;
 &lt;button id="log" onclick="enableLog(event);"&gt;Start/Stop event logging&lt;/button&gt;
 &lt;button id="clearlog" onclick="clearLog(event);"&gt;Clear the log&lt;/button&gt;
 &lt;p&gt;&lt;/p&gt;
 &lt;output&gt;&lt;/output&gt;
&lt;/body&gt;
</pre>

<h3 id="Miscellaneous_functions" name="Miscellaneous_functions">その他の関数</h3>

<p>これらの関数はアプリをサポートしますが、イベントの流れに直接は関係しません。</p>

<h4 id="Cache_management" name="Cache_management">キャッシュ管理</h4>

<p>これらの関数は、グローバルイベントキャッシュの <code>evCache1</code>、<code>evCache2</code>、<code>evCache3</code> を管理します。</p>

<pre class="brush: js">function get_cache(ev) {
 // Return the cache for this event's target element
 // このイベントのターゲット要素のキャッシュを返す
 switch(ev.target.id) {
   case "target1": return evCache1;
   case "target2": return evCache2;
   case "target3": return evCache3;
   default: log("Error with cache handling",ev);
 }
}

function push_event(ev) {
 // Save this event in the target's cache
 // このイベントをターゲットのキャッシュに保存する
 var cache = get_cache(ev);
 cache.push(ev);
}

function remove_event(ev) {
 // Remove this event from the target's cache
 // このイベントをターゲットのキャッシュから削除する
 var cache = get_cache(ev);
 for (var i = 0; i &lt; cache.length; i++) {
   if (cache[i].pointerId == ev.pointerId) {
     cache.splice(i, 1);
     break;
   }
 }
}
</pre>

<h4 id="Update_background_color" name="Update_background_color">背景色の更新</h4>

<p>タッチ領域の背景色は次のように変わります。 アクティブなタッチがない場合は白（<code>white</code>）です。 1つのアクティブなタッチは黄色（<code>yellow</code>）です。 2つ同時のタッチはピンク（<code>pink</code>）で、3つ以上同時のタッチは水色（<code>lightblue</code>）です。</p>

<pre class="brush: js">function update_background(ev) {
 // Change background color based on the number of simultaneous touches/pointers
 // currently down:
 // 現在ダウンしている同時タッチ/ポインタの数に基づいて
 // 次のように背景色を変更します
 //   white - target element has no touch points i.e. no pointers down
 //   white - ターゲット要素にタッチポイントがない。 つまり、ポインタのダウンがない。
 //   yellow - one pointer down
 //   yellow - 1つのポインタのダウン
 //   pink - two pointers down
 //   pink - 2つのポインタのダウン
 //   lightblue - three or more pointers down
 //   lightblue - 3つ以上のポインタのダウン
 var evCache = get_cache(ev);
 switch (evCache.length) {
   case 0:
     // Target element has no touch points
     // ターゲット要素にタッチポイントがない
     ev.target.style.background = "white";
     break;
   case 1:
     // Single touch point
     // 単独のタッチポイント
     ev.target.style.background = "yellow";
     break;
   case 2:
     // Two simultaneous touch points
     // 2つ同時のタッチポイント
     ev.target.style.background = "pink";
     break;
   default:
     // Three or more simultaneous touches
     // 3つ以上同時のタッチ
     ev.target.style.background = "lightblue";
 }
}
</pre>

<h4 id="Event_logging" name="Event_logging">イベントログ</h4>

<p>これらの関数は、アプリのウィンドウへのイベント活動の送信に使用されます（デバッグとイベントの流れに関する学習をサポートするため）。</p>

<pre class="brush: js">// Log events flag
// イベントログフラグ
var logEvents = false;

function enableLog(ev) {
  logEvents = logEvents ? false : true;
}

function log(name, ev) {
  var o = document.getElementsByTagName('output')[0];
  var s = name + ": pointerID = " + ev.pointerId +
                " ; pointerType = " + ev.pointerType +
                " ; isPrimary = " + ev.isPrimary;
  o.innerHTML += s + "
";
}

function clearLog(event) {
 var o = document.getElementsByTagName('output')[0];
 o.innerHTML = "";
}
</pre>
