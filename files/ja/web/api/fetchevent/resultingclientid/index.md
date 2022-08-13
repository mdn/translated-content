---
title: FetchEvent.resultingClientId
slug: Web/API/FetchEvent/resultingClientId
tags:
  - API
  - DOM
  - FetchEvent
  - Property
  - Reference
  - Service Workers
  - Worker
  - resultingClientId
translation_of: Web/API/FetchEvent/resultingClientId
---
<div>{{APIRef("Service Workers API")}}</div>

<p><span class="seoSummary">{{domxref("FetchEvent")}} インターフェイスの <strong><code>resultingClientId</code></strong> 読み取り専用プロパティは、ページナビゲーション中に前のクライアントを置き換える{{domxref("Client", "クライアント")}}の {{domxref("Client.id", "id")}} です。</span></p>

<p>例えば、ページ A からページ B に移動する場合、<code>resultingClientId</code> はページ B に関連するクライアントの id です。</p>

<p>フェッチリクエストがサブリソースのリクエストであるか、リクエストの宛先（<code><a href="/ja/docs/Web/API/Request/destination">destination</a></code>）が <code>report</code> である場合、<code>resultingClientId</code> は空の文字列になります。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>myResultingClientId</em> = <em>fetchEvent</em>.resultingClientId;</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref("DOMString")}}。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">self.addEventListener('fetch', function(event) {
  console.log(event.resultingClientId);
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
   <td>{{SpecName('Service Workers', '#dom-fetchevent-resultingclientid', 'resultingClientId')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.FetchEvent.resultingClientId")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li><a class="external external-icon" href="https://github.com/mdn/sw-test">サービスワーカーの基本的なコード例</a>（英語）</li>
 <li><a class="external external-icon" href="https://jakearchibald.github.io/isserviceworkerready/">ServiceWorker の準備はできていますか？</a>（英語）</li>
 <li>{{jsxref("Promise")}}</li>
 <li><a href="/ja/docs/Web/API/Web_Workers_API/Using_web_workers">Web worker の使用</a></li>
</ul>
