---
title: WorkerGlobalScope.console
slug: Web/API/WorkerGlobalScope/console
tags:
  - API
  - ウェブワーカー
  - リファレンス
  - リファレンス(2)
  - ワーカーグローバルスコープ
  - 読み込み専用
translation_of: Web/API/WorkerGlobalScope/console
---
<p>{{APIRef("Web Workers API")}}{{Non-standard_header}}</p>

<p>{{domxref("Console")}} インターフェイスの読み取り専用 <code>console</code> プロパティは、ワーカーにブラウザコンソールへのアクセスを提供する {{domxref("Console")}} オブジェクトを返します。</p>

<h2 id="構文">構文</h2>

<pre class="brush: js">var consoleObj = self.console;</pre>

<h3 id="Specifications" name="Specifications">値</h3>

<p>{{domxref("Console")}} オブジェクト</p>

<h2 id="例">例</h2>

<p>このプロパティはワーカー内でデバッグのためにブラウザコンソールへアクセスすることを可能にします。よって、例えばこのようにコールできます</p>

<pre class="brush: js">console.log('test');</pre>

<p>inside a worker (which would basically be the equivalent of <code>self.console.log('test');</code>, as these are being called on the worker scope, which can be referenced with {{domxref("WorkerGlobalScope.self")}}), to return a test message out to the browser console.</p>

<p>If you are calling <code>console.log()</code> from a {{domxref("DedicatedWorkerGlobalScope")}} or other worker scope that acts on a single loaded window, that tab's web console will receive the logs. However, If you are calling <code>console.log()</code> from a {{domxref("SharedWorkerGlobalScope")}}, the global browser console will receive the logs.</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<p>仕様の一部ではありません。</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>



<p>{{Compat("api.WorkerGlobalScope.console")}}</p>

<h2 id="関連">関連</h2>

<ul>
 <li>{{domxref("Console")}}</li>
 <li>{{domxref("WorkerGlobalScope")}}</li>
</ul>
