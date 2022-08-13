---
title: FetchEvent.clientId
slug: Web/API/FetchEvent/clientId
tags:
  - API
  - FetchEvent
  - Property
  - Reference
  - Service Workers
  - clientId
translation_of: Web/API/FetchEvent/clientId
---
<p>{{APIRef("Service Workers API")}}</p>

<p><span class="seoSummary">{{domxref("FetchEvent")}}インターフェイスの <strong><code>clientId</code></strong> 読み取り専用プロパティは、現在のサービスワーカーが制御している {{domxref("Client")}} の id を返します。</span></p>

<p>次に、{{domxref("Clients.get()")}} メソッドに、この id を渡して、関連するクライアントを取得できます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>myClientId</em> = <em>fetchEvent</em>.clientId;</pre>

<h3 id="Value" name="Value">値</h3>

<p>クライアント id を表す {{domxref("DOMString")}}。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">self.addEventListener('fetch', function(event) {
  console.log(event.clientId);
​});</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#dom-fetchevent-clientid', 'clientId')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.FetchEvent.clientId")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li><a class="external external-icon" href="https://github.com/mdn/sw-test">サービスワーカーの基本的なコード例</a>（英語）</li>
 <li><a class="external external-icon" href="https://jakearchibald.github.io/isserviceworkerready/">ServiceWorker の準備はできていますか？</a>（英語）</li>
 <li>{{jsxref("Promise")}}</li>
 <li><a href="/ja/docs/Web/API/Web_Workers_API/Using_web_workers">Web worker の使用</a></li>
</ul>
