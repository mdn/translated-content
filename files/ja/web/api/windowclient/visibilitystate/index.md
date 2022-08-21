---
title: WindowClient.visibilityState
slug: Web/API/WindowClient/visibilityState
tags:
  - API
  - Property
  - Reference
  - Service Workers
  - ServiceWorker
  - WindowClient
  - visibilityState
translation_of: Web/API/WindowClient/visibilityState
---
<div>{{APIRef("Service Workers API")}}</div>

<p><span class="seoSummary">{{domxref("WindowClient")}} インターフェイスの <strong><code>visibilityState</code></strong> 読み取り専用プロパティは、現在のクライアントの可視性を示します。 この値は、<code>"hidden"</code>、<code>"visible"</code>、<code>"prerender"</code> のいずれかです。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>myVisState</em> = <em>windowClient</em>.visibilityState;</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref("DOMString")}}（値については、{{domxref("Document.visibilityState")}} を参照）。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">event.waitUntil(clients.matchAll({
    type: "window"
  }).then(function(clientList) {
    for (let i = 0; i &lt; clientList.length; i++) {
      let client = clientList[i];
      if (client.url == '/' &amp;&amp; 'focus' in client) {
        if (client.visibilityState === 'hidden')
          return client.focus();
        }
      }
    }

    if (clients.openWindow) {
      return clients.openWindow('/');
    }
  }));
});</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table" style="line-height: 19.0909080505371px;">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#dom-windowclient-visibilitystate', 'visibilityState')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.WindowClient.visibilityState")}}</p>
</div>
