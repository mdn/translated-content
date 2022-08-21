---
title: WindowClient
slug: Web/API/WindowClient
tags:
  - API
  - Client
  - Interface
  - Reference
  - Service Workers
  - ServiceWorker
  - WindowClient
translation_of: Web/API/WindowClient
---
<p>{{APIRef("Service Workers API")}}</p>

<p><a href="/ja/docs/Web/API/Service_Worker_API">Service Worker API</a> の <strong><code>WindowClient</code></strong> インターフェイスは、アクティブなワーカーによって制御される閲覧コンテキスト内のドキュメントであるサービスワーカークライアントのスコープを表します。 サービスワーカークライアントは、それ自身の読み込みとサブリソースに対してサービスワーカーを個別に選択して使用します。</p>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em><code>WindowClient</code> は、親インターフェースである {{domxref("Client")}} からメソッドを継承します。</em></p>

<dl>
 <dt>{{domxref("WindowClient.focus()")}}</dt>
 <dd>現在のクライアントにユーザー入力フォーカスを与えます。</dd>
 <dt>{{domxref("WindowClient.navigate()")}}</dt>
 <dd>指定された URL を制御されたクライアントのページに読み込みます。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em><code>WindowClient</code> は、親インターフェースである {{domxref("Client")}} からプロパティを継承します。</em></p>

<dl>
 <dt>{{domxref("WindowClient.focused")}} {{readonlyInline}}</dt>
 <dd>現在のクライアントにフォーカスがあるかどうかを示すブール値。</dd>
 <dt>{{domxref("WindowClient.visibilityState")}} {{readonlyInline}}</dt>
 <dd>現在のクライアントの可視性を示します。 この値は、<code>"hidden"</code>、<code>"visible"</code>、<code>"prerender"</code> のいずれかです。</dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">self.addEventListener('notificationclick', function(event) {
  console.log('On notification click: ', event.notification.tag);
  event.notification.close();

  // これは、クライアントが既に開いているかどうかを確認し、
  // 開いている場合にフォーカスを合わせます
  event.waitUntil(clients.matchAll({
    type: "window"
  }).then(function(clientList) {
    for (var i = 0; i &lt; clientList.length; i++) {
      var client = clientList[i];
      if (client.url == '/' &amp;&amp; 'focus' in client) {
        client.focus();
        break;
      }
    }
    if (clients.openWindow)
      return clients.openWindow('/');
  }));
});</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#windowclient', 'WindowClient')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.WindowClient")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li><a href="https://github.com/mdn/sw-test">サービスワーカーの基本的なコード例</a>（英語）</li>
 <li><a href="https://jakearchibald.github.io/isserviceworkerready/">ServiceWorker の準備はできていますか？</a>（英語）</li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promises</a></li>
 <li><a href="/ja/docs/Web/Guide/Performance/Using_web_workers">Web worker の使用</a></li>
 <li><a href="/ja/docs/Web/API/Channel_Messaging_API">Channel Messaging API</a></li>
</ul>
