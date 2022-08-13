---
title: 'ServiceWorkerGlobalScope: push イベント'
slug: Web/API/ServiceWorkerGlobalScope/push_event
tags:
  - API
  - Event
  - Notifications
  - Push
  - Push API
  - PushEvent
  - Reference
  - Service Workers
  - ServiceWorker
  - ServiceWorkerGlobalScope
  - events
  - messaging
  - イベント
translation_of: Web/API/ServiceWorkerGlobalScope/push_event
---
<div>{{APIRef("Push API")}}</div>

<p><span class="seoSummary"><code>push</code> イベントは、サービスワーカーがプッシュメッセージを受信したときにサービスワーカーのグローバルスコープ ({{domxref("ServiceWorkerGlobalScope")}} インターフェイスで表現されるもの) に送られます。</span></p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">バブリング</th>
   <td>なし</td>
  </tr>
  <tr>
   <th scope="row">キャンセル</th>
   <td>不可</td>
  </tr>
  <tr>
   <th scope="row">インターフェイス</th>
   <td>{{domxref("PushEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{domxref("ServiceWorkerGlobalScope.onpush", "onpush")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p>この例は <code>push</code> イベントのハンドラーを設定して、 {{Glossary("JSON")}} データを取り、解析し、メッセージ内に含まれる情報に基づいて扱うためにメッセージを仕分けします。</p>

<pre class="brush: js">self.addEventListener("push", event =&gt; {
  let message = event.data.json();

  switch(message.type) {
    case "init":
      doInit();
      break;
    case "shutdown":
      doShutdown();
      break;
  }
}, false);</pre>

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
   <td>{{SpecName('Push API', '#extensions-to-the-serviceworkerglobalscope-interface', 'push')}}</td>
   <td>{{Spec2('Push API')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.ServiceWorkerGlobalScope.push_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Push_API/Using_the_Push_API">Push API の使用</a></li>
 <li>{{domxref("ServiceWorkerGlobalScope.onpush", "onpush")}} イベントハンドラープロパティ</li>
 <li>{{domxref("ServiceWorkerGlobalScope/pushsubscriptionchange_event", "pushsubscriptionchange")}} イベント</li>
</ul>
