---
title: PushManager.register()
slug: Web/API/PushManager/register
tags:
  - API
  - Deprecated
  - Method
  - Reference
  - Simple Push API
  - メソッド
translation_of: Web/API/PushManager/register
---
<div>{{deprecated_header}}{{ ApiRef("Push API")}}</div>

<p><strong><code>register</code></strong> メソッドは、システムにプッシュ通知の新しい端点をリクエストするために使用します。このメソッドは {{domxref("PushManager.subscribe()")}} に置き換えられました。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var request = navigator.push.register();</pre>

<h3 id="Return" name="Return">返値</h3>

<p>{{domxref("DOMRequest")}} オブジェクトで、このメソッド呼び出しの成功または失敗を扱います。</p>

<p>メソッドの呼び出しに成功したら、リクエストの <code>result</code> が端点の URL を表す文字列になります。</p>

<div class="note">
<p><strong>メモ:</strong> この URL が必要なくなったら、 {{domxref("Pushmanager.unregister()")}} を使用して自分自身を掃除してください。</p>
</div>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">var req = navigator.push.register();

req.onsuccess = function(e) {
  var endpoint = req.result;
  debug("New endpoint: " + endpoint );
}

req.onerror = function(e) {
  debug("Error getting a new endpoint: " + JSON.stringify(e));
}
</pre>

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
   <td>{{SpecName('Push API')}}</td>
   <td>{{Spec2('Push API')}}</td>
   <td><code>PushManager</code> インターフェイスを定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("api.PushManager.register")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("PushManager")}}</li>
 <li>{{domxref("DOMRequest")}}</li>
</ul>
