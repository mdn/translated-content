---
title: ServiceWorkerRegistration.periodicSync
slug: Web/API/ServiceWorkerRegistration/periodicSync
tags:
  - API
  - Experimental
  - PeriodicSyncManager
  - Property
  - Reference
  - Service Workers
  - ServiceWorkerRegistration
  - periodicSync
translation_of: Web/API/ServiceWorkerRegistration/periodicSync
---
<div>{{APIRef("Service Workers API")}}</div>

<div class="blockIndicator note">
<p><strong>注</strong>: この機能は、ある時点でサービスワーカーの説明でアイデアとして言及されましたが、まだどこにも実装されていません。</p>
</div>

<p><span class="seoSummary">{{domxref("ServiceWorkerRegistration")}} インターフェイスの <strong><code>periodSync</code></strong> 読み取り専用プロパティは、定期的なバックグラウンド同期プロセスを管理する {{domxref("PeriodicSyncManager")}} インターフェイスへの参照を返します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>periodicSyncManager</em> = <em>serviceWorkerRegistration</em>.periodicSync;
</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref("PeriodicSyncManager")}} オブジェクト。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">// 未定</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<p>現在、どの仕様にも含まれていません。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.ServiceWorkerRegistration.periodicSync")}}</p>
