---
title: SharedWorker.port
slug: Web/API/SharedWorker/port
tags:
  - API
  - Property
  - Reference
  - SharedWorker
  - Web Workers
  - port
translation_of: Web/API/SharedWorker/port
---
<div>{{APIRef("Web Workers API")}}</div>

<p>{{domxref("SharedWorker")}} インターフェースの <code><strong>port</strong></code> プロパティは、shared worker を制御したり通信したりするために使用する {{domxref("MessagePort")}} オブジェクトを返します。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox">myWorker.port;</pre>

<h3 id="値">値</h3>

<p>{{domxref("MessagePort")}} オブジェクト</p>

<h2 id="例">例</h2>

<p>次のコードスニペットでは、{{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} コンストラクターを使用して <code>SharedWorker</code> オブジェクトを生成しています。<code>SharedWorker.port</code> プロパティ経由で {{domxref("MessagePort")}} オブジェクトを使用して、複数のスクリプトから worker にアクセスできます — port は <code>start()</code> メソッドを使用して開始します:</p>

<pre class="brush: js">var myWorker = new SharedWorker('worker.js');
myWorker.port.start();</pre>

<p>完全なサンプルについては、<a class="external external-icon" href="https://github.com/mdn/simple-shared-worker">Basic shared worker example</a> (<a class="external external-icon" href="http://mdn.github.io/simple-shared-worker/">run shared worker</a>) を参照してください。</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "#dom-sharedworker-port", "AbstractWorker.onerror")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザー実装状況">ブラウザー実装状況</h2>



<p>{{Compat("api.SharedWorker.port")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li>{{domxref("SharedWorker")}} インターフェース</li>
</ul>
