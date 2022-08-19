---
title: Clients
slug: Web/API/Clients
tags:
  - API
  - Clients
  - Interface
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorker
  - Workers
translation_of: Web/API/Clients
---
<p>{{APIRef("Service Workers API")}}</p>

<p><span class="seoSummary"><strong><code>Clients</code></strong> インターフェイスは、{{domxref("Client")}} オブジェクトへのアクセスを提供します。 これは、<a href="/ja/docs/Web/API/ServiceWorker_API">サービスワーカー</a>内で {{domxref("ServiceWorkerGlobalScope", "self")}}<code>.clients</code> を介してアクセスします。</span></p>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{domxref("Clients.get()")}}</dt>
 <dd>指定された {{domxref("Client.id", "id")}} に一致する {{domxref("Client")}} の {{jsxref("Promise")}} を返します。</dd>
 <dt>{{domxref("Clients.matchAll()")}}</dt>
 <dd>{{domxref("Client")}} オブジェクトの配列の {{jsxref("Promise")}} を返します。 options 引数を使用すると、返されるクライアントの種類を制御できます。</dd>
 <dt>{{domxref("Clients.openWindow()")}}</dt>
 <dd>指定された URL の新しいブラウザーウィンドウを開き、新しい {{domxref("WindowClient")}} の {{jsxref("Promise")}} を返します。</dd>
 <dt>{{domxref("Clients.claim()")}}</dt>
 <dd>アクティブなサービスワーカーが自身の {{domxref("ServiceWorkerRegistration.scope", "scope")}} 内のすべてのクライアントの {{domxref("ServiceWorkerContainer.controller", "controller")}} として自分自身を設定できるようにします。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>次の例は、ユーザーが通知をクリックしたときに既存のチャットウィンドウを表示するか、新しいチャットウィンドウを作成します。</p>

<pre class="brush: js">addEventListener('notificationclick', event =&gt; {
  event.waitUntil(async function() {
    const allClients = await clients.matchAll({
      includeUncontrolled: true
    });

    let chatClient;

    // チャットウィンドウが既に開いているかどうかを確認します。
    for (const client of allClients) {
      const url = new URL(client.url);

      if (url.pathname == '/chat/') {
        // よし、使ってみよう！
        client.focus();
        chatClient = client;
        break;
      }
    }

    // 既存のチャットウィンドウが見つからなかった場合、
    // 新しいウィンドウを開きます。
    if (!chatClient) {
      chatClient = await clients.openWindow('/chat/');
    }

    // クライアントにメッセージを送ります。
    chatClient.postMessage("新しいチャットメッセージ！");
  }());
});
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
   <td>{{SpecName('Service Workers', '#clients', 'Clients')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.Clients")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li><a href="https://jakearchibald.github.io/isserviceworkerready/">ServiceWorker の準備はできていますか？</a>（英語）</li>
 <li>{{jsxref("Promise")}}</li>
</ul>
