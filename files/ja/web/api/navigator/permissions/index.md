---
title: Navigator.permissions
slug: Web/API/Navigator/permissions
tags:
  - API
  - Experimental
  - Navigator
  - Permissions
  - Property
  - Reference
translation_of: Web/API/Navigator/permissions
---
<p>{{APIRef("HTML DOM")}}{{SeeCompatTable}}</p>

<p><strong><code>Navigator.permissions</code></strong> 読み取り専用プロパティは、<a href="/ja/docs/Web/API/Permissions_API">Permissions API</a> の対象となる API のパーミッションの状態を照会および更新するために使用できる {{domxref("Permissions")}} オブジェクトを返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>permissionsObj</em> = <em>globalObj</em>.navigator.permissions
</pre>

<h2 id="Value" name="Value">値</h2>

<p>{{domxref("Permissions")}} オブジェクト。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">navigator.permissions.query({name:'geolocation'}).then(function(result) {
  if (result.state === 'granted') {
    showMap();
  } else if (result.state === 'prompt') {
    showButtonToEnableMap();
  }
  // パーミッションが拒否された場合は、何もしないでください。
});
</pre>

<h2 id="Specification" name="Specification">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Permissions API')}}</td>
   <td>{{Spec2('Permissions API')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.Navigator.permissions")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Permissions_API">Permissions API</a></li>
 <li>{{domxref("Navigator")}}</li>
</ul>
