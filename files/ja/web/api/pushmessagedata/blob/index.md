---
title: PushMessageData.blob()
slug: Web/API/PushMessageData/blob
tags:
  - API
  - Blob
  - Experimental
  - Method
  - Push
  - PushMessageData
  - Reference
  - Service Workers
translation_of: Web/API/PushMessageData/blob
---
<p>{{APIRef("Push API")}}{{SeeCompatTable()}}</p>

<p>{{domxref("PushMessageData")}} インターフェースの <code><strong>blob()</strong></code> メソッドは、プッシュメッセージデータを {{domxref("Blob")}} オブジェクトとして抽出します。</p>

<h2 id="構文">構文</h2>

<pre class="brush: js">var myBlob = PushEvent.data.blob();</pre>

<h3 id="パラメーター">パラメーター</h3>

<p>なし。</p>

<h3 id="戻り値">戻り値</h3>

<p>{{domxref("Blob")}}。</p>

<h2 id="例">例</h2>

<pre class="brush: js">self.addEventListener('push', function(event) {
  var blob = event.data.blob();

  // Blob を使用して何かを実行する。
});</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Push API', '#widl-PushMessageData-blob-Blob', 'blob()')}}</td>
   <td>{{Spec2('Push API')}}</td>
   <td>初期定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("api.PushMessageData.blob")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Push_API/Using_the_Push_API">Using the Push API</a></li>
</ul>
