---
title: ServiceWorkerContainer.startMessages()
slug: Web/API/ServiceWorkerContainer/startMessages
tags:
  - API
  - Reference
  - Service Workers
  - ServiceWorkerContainer
  - startMessages
translation_of: Web/API/ServiceWorkerContainer/startMessages
---
<div>{{APIRef("Service Workers API")}}</div>

<p><span class="seoSummary">{{domxref("ServiceWorkerContainer")}} インターフェイスの <strong><code>startMessages()</code></strong> メソッドは、サービスワーカーからその制御下にあるページにディスパッチされるメッセージの流れを明示的に開始します（例えば、{{domxref("Client.postMessage()")}} を介して送信されます）。 これは、ページのコンテンツの読み込みが完了する前であっても、送信されたメッセージに早く反応するために使用できます。</span></p>

<h2 id="Explanation" name="Explanation">説明</h2>

<p>デフォルトでは、ページの読み込み中に、ページを制御するサービスワーカーから（{{domxref("Client.postMessage()")}} を使用して）ページに送信されたすべてのメッセージはキューに入れられ、ページの HTML 文書が読み込まれて解析されると（つまり、{{event("DOMContentLoaded")}} イベント発生の後に）ディスパッチされます。 例えば、ページの読み込みが完了する前に {{domxref("EventTarget.addEventListener()")}} を使用してメッセージハンドラーを呼び出したが、すぐにメッセージの処理を開始したい場合は、{{domxref("ServiceWorkerContainer.startMessages()")}} を呼び出すことで、これらのメッセージのディスパッチを開始できます。</p>

<div class="blockIndicator note">
<p><strong>注</strong>: {{domxref("ServiceWorkerContainer.onmessage")}} を使用してハンドラーを直接設定すると、メッセージの送信が自動的に開始されます。 この場合、<code>startMessages()</code> は必要ありません。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>serviceWorkerContainer</em>.startMessages();</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<p>なし。</p>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p><code>undefined</code>。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/sw.js')
           .then(function() { console.log('サービスワーカーが登録された'); });
}

// ...

navigator.serviceWorker.addEventListener('message', (e) =&gt; {
  // ...
});

navigator.serviceWorker.startMessages();
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#dom-serviceworkercontainer-startmessages', 'ServiceWorkerContainer: startMessages()')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.ServiceWorkerContainer.startMessages")}}</p>
</div>
