---
title: Worker
slug: Web/API/Worker
tags:
  - API
  - DOM
  - Interface
  - JavaScript
  - Reference
  - Web Workers
  - Worker
  - Workers
browser-compat: api.Worker
translation_of: Web/API/Worker
---
<div>{{APIRef("Web Workers API")}}</div>

<p><span class="seoSummary"><strong><code>Worker</code></strong> は <a href="/ja/docs/Web/API/Web_Workers_API">Web Workers API</a> のインターフェイスです。スクリプトで生成することができるバックグラウンドタスクを表し、作成元にメッセージを送り返すことができます。</span>ワーカーは <code>Worker("path/to/worker/script")</code> コンストラクターを呼び出すことで生成することができます。</p>

<p>ワーカーは同じ親ページの同一 <a href="/ja/docs/Web/Security/Same-origin_policy">オリジン</a> 内でホストされている限り、他の新しいワーカーを生成することができます (注: 入れ子になったワーカーは <a href="https://bugs.webkit.org/show_bug.cgi?id=22723">WebKit では未実装です</a>)。</p>

<p><a href="/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers" title="Web Worker で利用可能な関数とクラス">利用可能なすべてのインターフェイスと関数</a> がすべて <code>Worker</code> の中で利用できるとは限りません。ワーカーはネットワーク通信のために {{domxref("XMLHttpRequest")}} を使うことができますが、 <code>responseXML</code> 属性と <code>channel</code> 属性は常に <code>null</code> になります。 (<code><a href="/ja/docs/Web/API/Fetch_API">fetch</a></code> も利用可能であり、このような制限はありません。)</p>

<h2 id="Constructors">コンストラクター</h2>

<dl>
 <dt>{{domxref("Worker.Worker", "Worker()")}}</dt>
 <dd>指定された URLにあるスクリプトを実行する専用ウェブワーカーのインスタンスを生成します。また、 <a href="/ja/docs/Web/API/Blob">Blob URL</a> を用いてワーカーを生成することもできます。</dd>
</dl>

<h2 id="Properties">プロパティ</h2>

<p><em>親インターフェイスである {{domxref("EventTarget")}} からプロパティを継承しています。</em></p>

<h3 id="Event_handlers">イベントハンドラー</h3>

<dl>
 <dt>{{domxref("Worker.onerror")}}</dt>
 <dd>{{ domxref("EventListener") }} であり、 {{domxref("ErrorEvent")}} の type が <code>error</code> であるイベントが発行されるたびに呼び出されます。</dd>
 <dt>{{domxref("Worker.onmessage")}}</dt>
 <dd>{{ domxref("EventListener") }} であり、 {{domxref("MessageEvent")}} の type が <code>message</code> であるイベントが発行されるたびに呼び出されます。すなわち、 {{domxref("DedicatedWorkerGlobalScope.postMessage")}} を経由して親文書にメッセージが送信されます。メッセージは {{domxref("MessageEvent.data", "data")}} プロパティに格納されます。</dd>
 <dt>{{domxref("Worker.onmessageerror")}}</dt>
 <dd><a href="/ja/docs/Web/Events/Event_handlers">イベントハンドラー</a>であり、 {{event("messageerror")}} イベントが発行されるたびに呼び出されるコードを表します。</dd>
</dl>

<h2 id="Methods">メソッド</h2>

<p><em>親である {{domxref("EventTarget")}} からメソッドを継承しています。</em></p>

<dl>
 <dt>{{domxref("Worker.postMessage()")}}</dt>
 <dd>ワーカーの内部スコープに、あらゆる JavaScript オブジェクトの形式のメッセージも送ることができます。</dd>
 <dt>{{domxref("Worker.terminate()")}}</dt>
 <dd>ワーカーを直ちに終了させます。ワーカーに終了処理を行わせず、直ちに終了させます。 <code><a href="/ja/docs/Web/API/ServiceWorker">ServiceWorker</a></code> インスタンスはこのメソッドを備えていません。</dd>
</dl>

<h2 id="Events">イベント</h2>

<dl>
 <dt><code><a href="/ja/docs/Web/API/Worker/message_event">message</a></code></dt>
 <dd>ワーカーの親が、そのワーカーからメッセージを受信したときに発行されます。<br>
 <code><a href="/ja/docs/Web/API/Worker/onmessage">onmessage</a></code> プロパティからも利用できます。</dd>
 <dt><code><a href="/ja/docs/Web/API/Worker/messageerror_event">messageerror</a></code></dt>
 <dd><code>Worker</code> オブジェクトが <a href="/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm">シリアライズ解除</a>できないというメッセージを受け取ったときに発行されます。<br>
 <code><a href="/ja/docs/Web/API/Worker/onmessageerror">onmessageerror</a></code> プロパティからも利用できます。</dd>
 <dt><code><a href="/ja/docs/Web/API/Window/rejectionhandled_event">rejectionhandled</a></code></dt>
 <dd>{{jsxref("Promise")}} が拒否されるたびに発行されます。拒否を処理するハンドラーがあるかどうかは問いません。<br>
 <code><a href="/ja/docs/Web/API/WindowEventHandlers/onrejectionhandled">onrejectionhandled</a></code> イベントハンドラープロパティからも利用できます。</dd>
 <dt><code><a href="/ja/docs/Web/API/Window/unhandledrejection_event">unhandledrejection</a></code></dt>
 <dd>拒否を処理するハンドラーのない {{jsxref("Promise")}} が拒否されたときに発行されます。<br>
 <code><a href="/ja/docs/Web/API/WindowEventHandlers/onunhandledrejection">onunhandledrejection</a></code> イベントハンドラープロパティからも利用できます。</dd>
</dl>

<h2 id="Example">例</h2>

<p>次のコード例では、 {{domxref("Worker")}} オブジェクトを、 {{domxref("Worker.Worker", "Worker()")}} コンストラクターを用いて生成しています。</p>

<pre class="brush: js">var myWorker = new Worker('/worker.js');
var first = document.querySelector('input#number1');
var second = document.querySelector('input#number2');

first.onchange = function() {
  myWorker.postMessage([first.value, second.value]);
  console.log('Message posted to worker');
}</pre>

<p>完全な例は、 <a class="external external-icon" href="https://github.com/mdn/simple-web-worker">Basic dedicated worker example</a> (<a class="external external-icon" href="http://mdn.github.io/simple-web-worker/">専用ワーカーを実行</a>) を参照してください。</p>

<h2 id="Specifications">仕様書</h2>

{{Specifications}}

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>ワーカーの種類に応じて対応状況が異なります。詳しくは、それぞれの種類のワーカーのページをご覧ください。</p>

<p>{{Compat}}</p>

<h3 id="Cross-origin_worker_error_behaviour">オリジンをまたいだワーカーのエラーの動作</h3>

<p>古いバージョンのブラウザーでオリジンをまたいでワーカーのスクリプトを読み込もうとすると、 <code>SecurityError</code> が発生していました。最近は、 {{event("error")}} イベントが発行されるようになりました。</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Web_Workers_API/Using_web_workers">ウェブワーカーの使用</a></li>
 <li><a href="/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers">ウェブワーカーで使用可能な関数一覧</a></li>
 <li>他の種類のワーカー: {{domxref("SharedWorker")}}、 <a href="/ja/docs/Web/API/ServiceWorker_API">ServiceWorker</a></li>
</ul>
