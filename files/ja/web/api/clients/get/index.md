---
title: Clients.get()
slug: Web/API/Clients/get
tags:
  - API
  - Clients
  - Method
  - Reference
  - Service Workers
  - get
translation_of: Web/API/Clients/get
---
<div>{{APIRef("Service Workers API")}}</div>

<p><span class="seoSummary">{{domxref("Clients")}} インターフェースの <strong><code>get()</code></strong> メソッドは、所与の <code>id</code> と一致するサービスワーカークライアントを取得し、{{jsxref("Promise")}} で返します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">self.clients.get(<em>id</em>).then(function(<em>client</em>) {
  // 返されたクライアントで何かをします
});</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt><code>id</code></dt>
 <dd>取得するクライアントの id を表す {{domxref("DOMString")}}。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<dl>
 <dd>{{domxref("Client")}} オブジェクトまたは <code>undefined</code> に解決される {{jsxref("Promise")}}。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">self.clients.get(id).then(function(client) {
  self.clients.openWindow(client.url);
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
   <td>{{SpecName('Service Workers', '#dom-clients-get', 'get()')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.Clients.get")}}</p>
</div>
