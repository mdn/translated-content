---
title: ServiceWorkerRegistration.active
slug: Web/API/ServiceWorkerRegistration/active
tags:
  - API
  - Property
  - Reference
  - Service Workers
  - ServiceWorkerRegistration
  - active
translation_of: Web/API/ServiceWorkerRegistration/active
---
<div>{{APIRef("Service Workers API")}}</div>

<p><span class="seoSummary">{{domxref("ServiceWorkerRegistration")}} インターフェイスの <strong><code>active</code></strong> プロパティは、{{domxref("ServiceWorker.state")}} がアクティブ化中（<code>activating</code>）またはアクティブ化済み（<code>activated</code>）のサービスワーカーを返します。 このプロパティは、最初は <code>null</code> に設定されています。</span></p>

<p>クライアントの URL が登録のスコープ内にある場合、アクティブワーカーは {{domxref("ServiceWorkerClient")}} を制御します（{{domxref("ServiceWorkerContainer.register")}} が最初に呼び出されたときに設定された <code>scope</code> オプション）。</p>

<div class="note">
<p><strong>注</strong>: この機能は <a href="/ja/docs/Web/API/Web_Workers_API">Web Worker</a> で使用できます。</p>
</div>

<div class="note">
<p><strong>注</strong>: アクティブワーカーが <code>activating</code> になると、ランタイムスクリプトエラーもアクティブワーカーの強制終了もアクティブワーカーが <code>activated</code> になることを妨げません。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">var <em>serviceWorker</em> = <em>serviceWorkerRegistration</em>.active;
</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref("ServiceWorker")}} オブジェクトのプロパティ（現在アクティブ化中（<code>activating</code>）またはアクティブ化済み（<code>activated</code>）の状態の場合）。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>



<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#dom-serviceworkerregistration-active', 'ServiceWorkerRegistration.active')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義<br>
     </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.ServiceWorkerRegistration.active")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li><a href="https://github.com/mdn/sw-test">サービスワーカーの基本的なコード例</a>（英語）</li>
 <li><a href="https://jakearchibald.github.io/isserviceworkerready/">ServiceWorker の準備はできていますか？</a>（英語）</li>
 <li>{{jsxref("Promise")}}</li>
 <li><a href="/ja/docs/Web/API/Web_Workers_API/Using_web_workers">Web worker の使用</a></li>
</ul>
