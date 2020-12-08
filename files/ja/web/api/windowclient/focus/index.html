---
title: WindowClient.focus()
slug: Web/API/WindowClient/focus
tags:
  - API
  - Focus
  - Method
  - Reference
  - Service Workers
  - WindowClient
translation_of: Web/API/WindowClient/focus
---
<p>{{APIRef("Service Workers API")}}</p>

<p><span class="seoSummary">{{domxref("WindowClient")}} インターフェイスの <strong><code>focus()</code></strong> メソッドは、現在のクライアントにユーザー入力フォーカスを与え、既存の {{domxref("WindowClient")}} に解決する {{jsxref("Promise")}} を返します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>windowClient</em>.focus().then(function(<em>windowClient</em>) {
  // WindowClient がフォーカスされたら、何かを行います
});</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<p>なし。</p>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>既存の {{domxref("WindowClient")}} に解決される {{jsxref("Promise")}}。</p>

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
      if (client.url == '/' &amp;&amp; 'focus' in client)
        return client.focus();
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
   <td>{{SpecName('Service Workers', '#dom-windowclient-focus', 'focus()')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.WindowClient.focus")}}</p>
</div>
