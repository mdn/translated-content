---
title: CustomEvent()
slug: Web/API/CustomEvent/CustomEvent
translation_of: Web/API/CustomEvent/CustomEvent
---
<p>{{APIRef("DOM")}}</p>

<p><code><strong>CustomEvent()</strong></code> コンストラクターは新しい {{domxref("CustomEvent")}} を生成します。</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"> <var>event</var> = new CustomEvent(<var>typeArg</var>, <var>customEventInit</var>);</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><var>typeArg</var></dt>
 <dd>{{domxref("DOMString")}} で、イベントの名前を表します。</dd>
 <dt><var>customEventInit</var> {{optional_inline}}</dt>
 <dd><code>CustomEventInit</code> 辞書で、以下のフィールドを持ちます。
 <ul>
  <li><code>"detail"</code>: 省略可で既定値は <code>null</code> であり、任意の型であり、イベントに関連付けられたイベントに依存する値です。</li>
 </ul>

 <div class="note">
 <p><code>CustomEventInit</code> 辞書は、 {{domxref("Event.Event", "EventInit")}} 辞書のフィールドも受け付けます。</p>
 </div>
 </dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>A new <code>CustomEvent</code> object of the specified type, with any other properties configured according to the <code>CustomEventInit</code> dictionary (if one was provided).</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">// add an appropriate event listener
obj.addEventListener("cat", function(e) { process(e.detail) });

// create and dispatch the event
var event = new CustomEvent("cat", {
  detail: {
    hazcheeseburger: true
  }
});
obj.dispatchEvent(event);</pre>

<p>その他の例は、<a href="/ja/docs/Web/Guide/Events/Creating_and_triggering_events">イベントの作成とトリガ</a>にあります。</p>

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
   <td>{{SpecName('DOM WHATWG','#interface-customevent','CustomEvent()')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.CustomEvent.CustomEvent")}}</p>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p>Internet Explorer 9 以上では、 <code>CustomEvent()</code> の機能を以下のコードで代替することができます。</p>

<pre class="brush: js">(function () {

  if ( typeof window.CustomEvent === "function" ) return false;

  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
})();</pre>

<p>Internet Explorer 9 以上では CustomEvent オブジェクトを window に追加していますが、正しい実装では、これは関数です。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("CustomEvent")}}</li>
 <li><a href="/ja/docs/Web/Guide/Events/Creating_and_triggering_events">イベントの作成とトリガ</a></li>
</ul>
