---
title: XMLHttpRequest.timeout
slug: Web/API/XMLHttpRequest/timeout
tags:
  - AJAX
  - Reference
  - XHR
  - XMLHttpRequest
  - timeout
  - プロパティ
  - 非同期 XHR
  - 非同期 XMLHttpRequest
translation_of: Web/API/XMLHttpRequest/timeout
---
<div>{{APIRef('XMLHttpRequest')}}</div>

<p><code><strong>XMLHttpRequest.timeout</strong></code> はリクエストが自動的に終了するまでの時間をミリ秒で示す <code>unsigned long</code> 型のプロパティです。既定値はタイムアウトが無いことを示す 0 に設定されています。 timeout は{{Glossary('document environment', '文書環境')}}で利用される同期型や <code>InvalidAccessError</code> の例外を投げる XMLHttpRequests に利用することはできません。タイムアウトとなった場合、 <a href="/ja/docs/Web/Events/timeout">timeout</a> イベントが発火します。 {{gecko_minversion_inline("12.0")}}</p>

<dl>
 <dd>
 <div class="note"><strong>メモ:</strong> timeout は自分のウィンドウを持つ場合に同期で利用することは認められていません。</div>
 </dd>
 <dd><a href="/ja/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests#Example_using_a_timeout">非同期リクエストでの timeout の使用</a></dd>
</dl>

<p>Internet Explorer においては、 timeout プロパティは <a href="/ja/docs/Web/API/XMLHttpRequest/open">open()</a> メソッドを呼んでから <a href="/ja/docs/Web/API/XMLHttpRequest/send">send()</a> メソッドを呼ぶまでの間しかセットすることはできません。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">var xhr = new XMLHttpRequest();
xhr.open('GET', '/server', true);

xhr.timeout = 2000; // time in milliseconds

xhr.onload = function () {
  // Request finished. Do processing here.
};

xhr.ontimeout = function (e) {
  // XMLHttpRequest timed out. Do something here.
};

xhr.send(null);</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('XMLHttpRequest', '#the-timeout-attribute')}}</td>
   <td>{{Spec2('XMLHttpRequest')}}</td>
   <td>WHATWG living standard</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.XMLHttpRequest.timeout")}}</p>
