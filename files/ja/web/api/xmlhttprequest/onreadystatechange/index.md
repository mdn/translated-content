---
title: XMLHttpRequest.onreadystatechange
slug: Web/API/XMLHttpRequest/onreadystatechange
tags:
  - API
  - Event
  - Reference
  - XHR
  - XMLHttpRequest
  - onreadystatechange
  - readyState
  - イベント
  - ハンドラー
  - プロパティ
translation_of: Web/API/XMLHttpRequest/onreadystatechange
---
<div>{{APIRef}}</div>

<p>{{event("Event_handlers", "event handler")}} で、 <code>readyState</code> 属性が変化するたびに呼び出されます。コールバックはユーザーインターフェイスのスレッドから呼び出されます。 <strong><code>XMLHttpRequest.onreadystatechange</code></strong> プロパティは、 {{domxref("Document/readystatechange_event", "readystatechange")}} イベントが発生するたびに、つまり {{domxref("XMLHttpRequest")}} の {{domxref("XMLHttpRequest.readyState", "readyState")}} が変化するたびに呼び出されるイベントハンドラーを保持します。</p>

<div class="warning">
<p><strong>警告:</strong> これは同期要求で使用してはいけません。また、ネイティブコードから使用してはいけません。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><em>XMLHttpRequest</em>.onreadystatechange = <em>callback</em>;</pre>

<h3 id="Values" name="Values">値</h3>

<ul>
 <li><code><em>callback</em></code> は <code>readyState</code> が変化したときに実行される関数です。</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js notranslate">const xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://developer.mozilla.org/";

xhr.open(<em>method</em>, <em>url</em>, true);
xhr.onreadystatechange = function () {
  // ローカルファイルでは、 Mozilla Firefox で成功するとステータスは0になります
  if(xhr.readyState === XMLHttpRequest.DONE) {
    var status = xhr.status;
    if (status === 0 || (status &gt;= 200 &amp;&amp; status &lt; 400)) {
      // リクエストが正常に終了した
      console.log(xhr.responseText);
    } else {
      // あらら! リクエストでエラーが発生しました!
    }
  }
};
xhr.send();</pre>

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
   <td>{{SpecName('XMLHttpRequest', '#handler-xhr-onreadystatechange')}}</td>
   <td>{{Spec2('XMLHttpRequest')}}</td>
   <td>WHATWG living standard</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.XMLHttpRequest.onreadystatechange")}}</p>
