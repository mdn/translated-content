---
title: 'SharedWorkerGlobalScope: connect イベント'
slug: Web/API/SharedWorkerGlobalScope/connect_event
tags:
  - API
  - Event
  - Reference
  - SharedWorkerGlobalScope
  - connect
  - events
  - イベント
translation_of: Web/API/SharedWorkerGlobalScope/connect_event
---
<div>{{APIRef}}</div>

<p><strong><code>connect</code></strong> イベントは、新しいクライアントが接続したときに共有ワーカーの {{domxref("SharedWorkerGlobalScope")}} に発生します。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">バブリング</th>
   <td>なし</td>
  </tr>
  <tr>
   <th scope="row">キャンセル可能</th>
   <td>いいえ</td>
  </tr>
  <tr>
   <th scope="row">インターフェイス</th>
   <td>{{DOMxRef("MessageEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{domxref("SharedWorkerGlobalScope.onconnect")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p>この例は共有ワーカーファイルを示しています。メインスレッドから {{domxref("MessagePort")}} を通して Worker へのコネクションが発生したとき、 <code>onconnect</code> イベントハンドラーが呼び出されます。イベントオブジェクトは {{domxref("MessageEvent")}} です。</p>

<p>接続しようとしているポート番号は、イベントオブジェクトの <code>ports</code> 引数で参照することができます。この参照にはポートを通じて来るメッセージを扱うために割り当てられた <code>onmessage</code> ハンドラーがあり、その <code>postMessage()</code> メソッドに Worker を使用してメインスレッドにメッセージを送り返すために使用することができます。</p>

<pre class="brush: js">self.onconnect = function(e) {
    var port = e.ports[0];

    port.onmessage = function(e) {
      var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
      port.postMessage(workerResult);
    }

    port.start();
}</pre>

<p>実行している例を完成させるには、 <a class="external-icon external" href="https://github.com/mdn/simple-shared-worker">Basic shared worker example</a> (<a class="external-icon external" href="http://mdn.github.io/simple-shared-worker/">共有ワーカーを実行</a>) をご覧ください。</p>

<h3 id="addEventListener_equivalent" name="addEventListener_equivalent">addEventListener による同等の処理</h3>

<p>{{domxref("EventTarget/addEventListener", "addEventListener()")}} メソッドを使用してイベントハンドラーを設定することもできます。</p>

<pre class="brush: js">self.addEventListener('connect', function(e) {
  var port = e.ports[0];

  port.onmessage = function(e) {
    var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
    port.postMessage(workerResult);
  }

});</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', "indices.html#event-workerglobalscope-connect", "connect event")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.SharedWorkerGlobalScope.connect_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Web_Workers_API/Using_web_workers">Web Worker の使用</a></li>
 <li>{{domxref("SharedWorkerGlobalScope")}}</li>
</ul>
