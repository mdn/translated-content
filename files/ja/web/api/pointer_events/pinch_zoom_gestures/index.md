---
title: ピンチズームのジェスチャー
slug: Web/API/Pointer_events/Pinch_zoom_gestures
tags:
  - Guide
  - PointerEvent
  - touch
translation_of: Web/API/Pointer_events/Pinch_zoom_gestures
---
<div>{{DefaultAPISidebar("Pointer Events")}}</div>

<p><span class="seoSummary">アプリに<em>ジェスチャー</em>を追加すると、使い勝手が大幅に向上します。</span>単純なシングルタッチの<em>スワイプ</em>ジェスチャーから、タッチポイント（別名<em>ポインター</em>）が異なる方向に移動する、より複雑なマルチタッチの<em>ツイスト</em>ジェスチャーまで、さまざまな種類のジェスチャーがあります。</p>

<p>この例では、<em>ピンチ/ズーム</em>ジェスチャーを検出する方法を示します。 これは、{{domxref("Pointer_events","ポインターイベント")}}を使用して、ユーザーが2つのポインターを互いに近づけるか遠ざけるかを検出します。</p>

<p>このアプリの<em>ライブ</em>版は <a href="https://mdn.github.io/dom-examples/pointerevents/Pinch_zoom_gestures.html">Github</a> で利用できます。 <a href="https://github.com/mdn/dom-examples/blob/master/pointerevents/Pinch_zoom_gestures.html">ソースコードは GitHub で入手できます</a>。 プルリクエストや<a href="https://github.com/mdn/dom-examples/issues">バグレポート</a>は大歓迎です。</p>

<h2 id="Example" name="Example">例</h2>

<p>この例では、{{domxref("Pointer_events","ポインターイベント")}}を使用して、指、マウス、ペンなど、あらゆる種類の2つのポインティングデバイスを同時に検出します。 2つのポインターを互いに近づけるピンチイン（ズームアウト、縮小）ジェスチャーでは、ターゲット要素の背景色が水色（<code>lightblue</code>）に変わります。 2つのポインターを互いに遠ざけるピンチアウト（ズームイン、拡大）ジェスチャーでは、ターゲット要素の背景色がピンク（<code>pink</code>）に変わります。</p>

<h3 id="Define_touch_target" name="Define_touch_target">タッチターゲットの定義</h3>

<p>アプリは {{HTMLElement("div")}} を使用してポインターのターゲット領域を定義します。</p>

<pre class="brush: html">&lt;style&gt;
  div {
    margin: 0em;
    padding: 2em;
  }
  #target {
    background: white;
    border: 1px solid black;
  }
&lt;/style&gt;
</pre>

<h3 id="Global_state" name="Global_state">グローバルな状態</h3>

<p>2ポインターのジェスチャーをサポートするには、さまざまなイベントフェーズでポインターのイベント状態を保存する必要があります。このアプリは、イベント状態をキャッシュするために2つのグローバル変数を使用します。</p>

<pre class="brush: js">// イベント状態をキャッシュするグローバル変数
var evCache = new Array();
var prevDiff = -1;
</pre>

<h3 id="Register_event_handlers" name="Register_event_handlers">イベントハンドラーの登録</h3>

<p>イベントハンドラーは {{event("pointerdown")}}, {{event("pointermove")}}, {{event("pointerup")}} のポインターイベントに登録します。 {{event("pointerup")}} ハンドラーは {{event("pointercancel")}}, {{event("pointerout")}}, {{event("pointerleave")}} のイベントにも使用します。 これら4つのイベントは、このアプリでは同じ意味を持っているからです。</p>

<pre class="brush: js">function init() {
 // ポインターターゲット用のイベントハンドラーをインストールする
 var el=document.getElementById("target");
 el.onpointerdown = pointerdown_handler;
 el.onpointermove = pointermove_handler;

 // pointer{up,cancel,out,leave} イベントの意味は - このアプリでは -
 // 同じであるため、これらのイベントに同じハンドラーを使用する。
 el.onpointerup = pointerup_handler;
 el.onpointercancel = pointerup_handler;
 el.onpointerout = pointerup_handler;
 el.onpointerleave = pointerup_handler;
}
</pre>

<h3 id="Pointer_down" name="Pointer_down">ポインターダウン</h3>

<p>{{event("pointerdown")}} イベントは、ポインター (マウス、ペン/スタイラス、タッチ画面上のタッチポイント) が<em>接触面</em>に接触したときに発生します。 このアプリでは、このダウンイベントが2ポインターのピンチ/ズームジェスチャーの一部である場合に備えて、イベントの状態をキャッシュする必要があります。</p>

<pre class="brush: js">function pointerdown_handler(ev) {
 // pointerdown イベントは、タッチ操作の開始を知らせます。
 // このイベントは2本指ジェスチャーをサポートするためにキャッシュされます
 evCache.push(ev);
 log("pointerDown", ev);
}
</pre>

<h3 id="Pointer_move" name="Pointer_move">ポインター移動</h3>

<p>{{event("pointermove")}} イベントハンドラーは、ユーザーが2ポインターのピンチ/ズームジェスチャーを呼び出しているかどうかを検出します。 2つのポインターが下がっていてポインター間の距離が増加している場合（ピンチアウトまたはズームイン）、要素の背景色がピンク（<code>pink</code>）に変わり、ポインター間の距離が減少している場合（ピンチインまたはズームアウト） 背景色が水色（<code>lightblue</code>）に変わります。 より洗練されたアプリでは、ピンチインまたはピンチアウトの決定を使用してアプリ固有の意味論を適用できます。</p>

<p>このイベントが処理されると、ターゲットの境界線が破線（<code>dashed</code>）に設定され、要素が移動イベントを受け取ったことを明確に視覚的に示します。</p>

<pre class="brush: js">function pointermove_handler(ev) {
 // この関数は、2ポインターの水平ピンチ/ズームジェスチャーを実装しています。
 //
 // 2つのポインター間の距離が広がると（ズームイン）、
 // ターゲット要素の背景色は "pink" に変わり、
 // 縮まると（ズームアウト）、色は "lightblue" に変わります。
 //
 // この関数は、ポインターのターゲットが移動イベントを受け取ったことを
 // 視覚的に示すために、ターゲット要素の境界線を "dashed" に設定します。
 log("pointerMove", ev);
 ev.target.style.border = "dashed";

 // キャッシュ内でこのイベントを見つけ、このイベントの記録を更新します
 for (var i = 0; i &lt; evCache.length; i++) {
   if (ev.pointerId == evCache[i].pointerId) {
      evCache[i] = ev;
   break;
   }
 }

 // ポインターが2つダウンしている場合は、ピンチジェスチャーを確認します
 if (evCache.length == 2) {
   // 2つのポインター間の距離を計算
   var curDiff = Math.abs(evCache[0].clientX - evCache[1].clientX);

   if (prevDiff &gt; 0) {
     if (curDiff &gt; prevDiff) {
       // 2つのポインター間の距離が増えた
       log("Pinch moving OUT -&gt; Zoom in", ev);
       ev.target.style.background = "pink";
     }
     if (curDiff &lt; prevDiff) {
       // 2つのポインター間の距離が減った
       log("Pinch moving IN -&gt; Zoom out",ev);
       ev.target.style.background = "lightblue";
     }
   }

   // 次の移動イベントのために距離をキャッシュします
   prevDiff = curDiff;
 }
}
</pre>

<h3 id="Pointer_up" name="Pointer_up">ポインターアップ</h3>

<p>{{event("pointerup")}} イベントは、ポインターが<em>接触面</em>から上がると発生します。 これが発生すると、イベントはイベントキャッシュから削除され、ターゲット要素の背景色と境界線は元の値に戻ります。</p>

<p>このアプリでは、このハンドラーは {{event("pointercancel")}}, {{event("pointerleave")}}, {{event("pointerout")}} のイベントにも使用します。</p>

<pre class="brush: js">function pointerup_handler(ev) {
  log(ev.type, ev);
  // このポインターをキャッシュから削除し、
  // ターゲットの背景色と境界線をリセットします
  remove_event(ev);
  ev.target.style.background = "white";
  ev.target.style.border = "1px solid black";

  // ポインター数が2未満の場合は、以前の距離をリセットします
  if (evCache.length &lt; 2) {
    prevDiff = -1;
  }
}</pre>

<h3 id="Application_UI" name="Application_UI">アプリの UI</h3>

<p>アプリは、タッチ領域に {{HTMLElement("div")}} 要素を使用し、ログ記録を有効にするボタンとログを消去するためのボタンを提供します。</p>

<p class="note">ブラウザーのデフォルトのタッチの振る舞いが、このアプリのポインター処理をオーバーライドしないようにするために、{{cssxref("touch-action")}} プロパティを {{HTMLElement("body")}} 要素に適用しています。</p>

<pre class="brush: html">&lt;body onload="init();" style="touch-action:none"&gt;
 &lt;div id="target"&gt;2点に触れたままにして、ピンチインまたはピンチアウトしてください。&lt;br/&gt;
    ピンチが開いている場合（ズームイン）は背景色がピンクに変わり、
    ピンチが閉じている場合（ズームアウト）は背景色が水色に変わります。
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

<p>この関数はグローバルイベントキャッシュの <code>evCache</code> の管理に役立ちます。</p>

<pre class="brush: js">function remove_event(ev) {
 // このイベントをターゲットのキャッシュから削除する
 for (var i = 0; i &lt; evCache.length; i++) {
   if (evCache[i].pointerId == ev.pointerId) {
     evCache.splice(i, 1);
     break;
   }
 }
}
</pre>

<h4 id="Event_logging" name="Event_logging">イベントログ</h4>

<p>これらの関数は、イベント活動をアプリのウィンドウに送信するために使用します（デバッグとイベントの流れに関する学習をサポートするため）。</p>

<pre class="brush: js">// イベントをログ出力するフラグ
var logEvents = false;

// ログ/デバッグ関数
function enableLog(ev) {
  logEvents = logEvents ? false : true;
}

function log(prefix, ev) {
  if (!logEvents) return;
  var o = document.getElementsByTagName('output')[0];
  var s = prefix + ": pointerID = " + ev.pointerId +
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

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://hacks.mozilla.org/2015/08/pointer-events-now-in-firefox-nightly/">Firefox Nightly にポインターイベントが追加されました</a>。 Mozilla Hacks より、Matt Brubeck とJason Weathersby 著、2015年8月4日（英語）</li>
 <li><a href="https://github.com/jquery/PEP">jQuery によるポインターイベントのポリフィル</a>（英語）</li>
 <li><a href="http://www.google.com/design/spec/patterns/gestures.html">ジェスチャー</a>。 Google のデザインパターン（英語）</li>
</ul>
