---
title: Clients.openWindow()
slug: Web/API/Clients/openWindow
tags:
  - API
  - Clients
  - Method
  - Reference
  - Service Workers
  - ServiceWorker
  - openWindow
translation_of: Web/API/Clients/openWindow
---
<div>{{APIRef("Service Workers API")}}</div>

<p><span class="seoSummary">{{domxref("Clients")}} インターフェイスの <strong><code>openWindow()</code></strong> メソッドは、新しい最上位の閲覧コンテキストを作成し、所与の URL をロードします。 呼び出し元のスクリプトにポップアップを表示するパーミッションがない場合、<code>openWindow()</code> は <code>InvalidAccessError</code> をスローします。</span></p>

<p>Firefox では、このメソッドは、通知クリックイベントの結果として呼び出された場合にのみ、ポップアップを表示できます。</p>

<p>Android 版 Chrome では、メソッドは代わりに、以前にユーザーのホーム画面に追加された<a href="/ja/docs/Web/Progressive_web_apps">スタンドアロンのウェブアプリ</a>によって提供される既存の閲覧コンテキストで URL を開く場合があります。 最近では、これは Windows 版 Chrome でも機能します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">self.clients.openWindow(<em>url</em>).then(function(<em>windowClient</em>) {
  // WindowClient で何かをします
});</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt><code>url</code></dt>
 <dd>ウィンドウで開くクライアントの URL を表す {{domxref("USVString")}}。 通常、この値は呼び出し元のスクリプトと同じオリジンからの URL でなければなりません。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<dl>
 <dd>URL がサービスワーカーと同じオリジンからのものである場合は {{domxref("WindowClient")}} オブジェクトに解決され、それ以外の場合は {{Glossary("null", "null 値")}}に解決される {{jsxref("Promise")}}。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">// 適切な場合は OS に通知を送ります
if (self.Notification.permission === 'granted') {
  const notificationObject = {
    body: 'ここをクリックしてメッセージを表示してください。',
    data: { url: self.location.origin + '/some/path' },
    // data: { url: 'http://example.com' },
  };
  self.registration.showNotification('メッセージがあります！', notificationObject);
}

// 通知クリックイベントリスナー
self.addEventListener('notificationclick', e =&gt; {
  // 通知ポップアウトを閉じます
  e.notification.close();
  // すべての Window クライアントを取得します
  e.waitUntil(clients.matchAll({ type: 'window' }).then(clientsArr =&gt; {
    // 対象 URL に一致するウィンドウタブが既に存在する場合は、それにフォーカスします。
    const hadWindowToFocus = clientsArr.some(windowClient =&gt; windowClient.url === e.notification.data.url ? (windowClient.focus(), true) : false);
    // それ以外の場合は、適切な URL への新しいタブを開いてフォーカスします。
    if (!hadWindowToFocus) clients.openWindow(e.notification.data.url).then(windowClient =&gt; windowClient ? windowClient.focus() : null);
  }));
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
   <td>{{SpecName('Service Workers', '#dom-clients-openwindow', 'Clients: openWindow')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.Clients.openWindow")}}</p>
</div>
