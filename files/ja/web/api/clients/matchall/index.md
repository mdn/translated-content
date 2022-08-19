---
title: Clients.matchAll()
slug: Web/API/Clients/matchAll
tags:
  - API
  - Clients
  - Method
  - Reference
  - Service Workers
  - ServiceWorker
translation_of: Web/API/Clients/matchAll
---
<div>{{APIRef("Service Workers API")}}</div>

<p><span class="seoSummary">{{domxref("Clients")}} インターフェイスの <strong><code>matchAll()</code></strong> メソッドは、サービスワーカークライアント（{{domxref("Client")}}）オブジェクトのリストの {{jsxref("Promise")}} を返します。 関連するサービスワーカーのオリジンと同じオリジンを持つすべてのサービスワーカークライアントを返すには、<code>options</code> パラメーターを含めます。 オプションが含まれていない場合、メソッドは、サービスワーカーによって制御されるサービスワーカークライアントのみを返します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">self.clients.matchAll(<em>options</em>).then(function(<em>clients</em>) {
  // クライアントのリストで何かを行います
});</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt><code>options</code> {{optional_inline}}</dt>
 <dd>照合操作のオプションを設定できるオプションオブジェクト。 利用可能なオプションは次のとおりです。
 <ul>
  <li><code>includeUncontrolled</code>: {{jsxref("Boolean")}} — <code>true</code> に設定すると、照合操作は、現在のサービスワーカーと同じオリジンを共有するすべてのクライアントを返します。 それ以外の場合は、現在のサービスワーカーによって制御されているサービスワーカークライアントのみを返します。 デフォルトは <code>false</code> です。</li>
  <li><code>type</code>: 一致させるクライアントの種類を設定します。 使用可能な値は、<code>"window"</code>、<code>"worker"</code>、<code>"sharedworker"</code>、<code>"all"</code> です。 デフォルトは <code>"all"</code> です。</li>
 </ul>
 </dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<dl>
 <dd>{{domxref("Client")}} オブジェクトの配列に解決される {{jsxref("Promise")}}。 Chrome 46 / Firefox 54 以降では、このメソッドはクライアントを直近でフォーカスした順序で返し、仕様どおりに修正されます。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">clients.matchAll(options).then(function(clientList) {
  for (var i = 0 ; i &lt; clientList.length ; i++) {
    if (clientList[i].url === 'index.html') {
      clients.openWindow(clientList[i]);
      // または、一致するクライアントに関係する何かを行う
    }
  }
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
   <td>{{SpecName('Service Workers', '#clients-matchall', 'Clients: matchall')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.Clients.matchAll")}}</p>
</div>
