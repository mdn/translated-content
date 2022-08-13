---
title: WindowClient.focused
slug: Web/API/WindowClient/focused
tags:
  - API
  - Property
  - Reference
  - Service Workers
  - ServiceWorker
  - WindowClient
  - focused
translation_of: Web/API/WindowClient/focused
---
<div>{{APIRef("Service Workers API")}}</div>

<p><span class="seoSummary">{{domxref("WindowClient")}} インターフェイスの <strong><code>focused</code></strong> 読み取り専用プロパティは、現在のクライアントにフォーカスがあるかどうかを示す {{jsxref("Boolean")}} です。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>myFocused</em> = <em>windowClient</em>.focused;</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{jsxref("Boolean")}}。</p>

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
        if(!client.focused)
          return client.focus();
        }
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
   <td>{{SpecName('Service Workers', '#dom-windowclient-focused', 'WindowClient: focused')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.WindowClient.focused")}}</p>
</div>
