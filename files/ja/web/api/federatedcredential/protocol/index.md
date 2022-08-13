---
title: FederatedCredential.protocol
slug: Web/API/FederatedCredential/protocol
tags:
  - API
  - Credential Management API
  - Experimental
  - FederatedCredential
  - NeedsExample
  - Property
  - Reference
  - credential management
  - プロパティ
translation_of: Web/API/FederatedCredential/protocol
---
<div>{{SeeCompatTable}}{{APIRef("")}}{{securecontext_header}}</div>

<p><strong><code>protocol</code></strong> は {{domxref("FederatedCredential")}} インターフェイスのプロパティで、認証情報の連合アイデンティティプロトコルが入った読み取り専用の {{domxref("DOMString")}} を返します。このプロパティが {{jsxref("null")}} の場合、プロトコルは {{domxref("FederatedCredential.provider")}} プロパティから推測される可能性があります。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var protocol = FederatedCredential.protocol</pre>

<h3 id="Value" name="Value">値</h3>

<p>認証情報の連合アイデンティティプロトコルが入った {{domxref("DOMString")}} です (例えば <code>openidconnect</code>)。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">// TBD</pre>

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
   <td>{{SpecName('Credential Management','#dom-federatedcredential-protocol','protocol')}}</td>
   <td>{{Spec2('Credential Management')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.FederatedCredential.protocol")}}</p>
