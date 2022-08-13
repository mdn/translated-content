---
title: ServiceWorkerGlobalScope.registration
slug: Web/API/ServiceWorkerGlobalScope/registration
tags:
  - API
  - Property
  - Reference
  - Service Worker
  - ServiceWorker
  - ServiceWorkerGlobalScope
  - registration
translation_of: Web/API/ServiceWorkerGlobalScope/registration
---
<p>{{SeeCompatTable}}{{APIRef("Service Workers API")}}</p>

<p>{{domxref("ServiceWorkerGlobalScope")}} インターフェースの <strong><code>registration</code></strong> 読み取り専用プロパティは、Service Worker の登録を表す {{domxref("ServiceWorkerRegistration")}} オブジェクトの参照を返します。</p>

<h2 id="Syntax" name="Syntax" style="line-height: 30px; font-size: 2.14285714285714rem;">構文</h2>

<pre class="brush: js" style="font-size: 14px;">serviceWorkerRegistration = self.registration
</pre>

<h3 id="値">値</h3>

<p>{{domxref("ServiceWorkerRegistration")}} オブジェクト。</p>

<h2 id="仕様" style="line-height: 30px; font-size: 2.14285714285714rem;">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col"><font face="Open Sans, sans-serif"><span style="font-weight: normal;">仕様</span></font></th>
   <th scope="col"><font face="Open Sans, sans-serif"><span style="font-weight: normal;">ステータス</span></font></th>
   <th scope="col"><font face="Open Sans, sans-serif"><span style="font-weight: normal;">コメント</span></font></th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#service-worker-global-scope-registration', 'ServiceWorkerGlobalScope.registration')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザー実装状況">ブラウザー実装状況</h2>

<p>{{Compat("api.ServiceWorkerGlobalScope.registration")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers">Using Service Workers</a></li>
 <li><a href="https://github.com/mdn/sw-test">Service workers basic code example</a></li>
 <li><a href="https://jakearchibald.github.io/isserviceworkerready/">Is ServiceWorker ready?</a></li>
 <li>{{jsxref("Promise")}}</li>
 <li><a href="/ja/docs/Web/Guide/Performance/Using_web_workers">Using web workers</a></li>
</ul>
