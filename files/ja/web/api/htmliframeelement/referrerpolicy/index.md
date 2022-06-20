---
title: HTMLIFrameElement.referrerPolicy
slug: Web/API/HTMLIFrameElement/referrerPolicy
tags:
  - API
  - Experimental
  - HTMLIFrameElement
  - Property
  - Reference
  - Referrer Policy
translation_of: Web/API/HTMLIFrameElement/referrerPolicy
---
<div>{{APIRef}}{{SeeCompatTable}}</div>

<p><code><strong>HTMLIFrameElement</strong></code><strong><code>.referrerPolicy</code></strong> プロパティは、リソース取得時にリファラを送信するかを決める {{HTMLElement("iframe")}} 要素の {{htmlattrxref("referrerpolicy","iframe")}} 属性を反映します。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox"><var>refStr</var> = <var>iframeElt</var>.referrerPolicy;
<var>iframeElt</var>.referrerPolicy = <var>refStr</var>;</pre>

<h3 id="値">値</h3>

<dl>
 <dd>
 <ul>
  <li><code>"no-referrer"</code> は、<code>Referer:</code> HTTP ヘッダーがリファラを送信しないことを意味します。</li>
  <li><code>"origin"</code> は、リファラがページのオリジンになることを意味します。大まかにいえば、オリジンはスキーマとホスト、ポートです。</li>
  <li><code>"unsafe-url"</code> は、リファラにオリジンとパスが含まれることを意味します（フラグメントやパスワード、ユーザー名は含まれません）。このケースは、TLS を使用して 3rd パーティーから隠しているパス情報が漏洩する可能性があるため、安全ではありません。</li>
 </ul>
 </dd>
</dl>

<h2 id="例">例</h2>

<pre class="brush: js;highlight:[3]">var iframe = document.createElement("iframe");
iframe.src = "/";
iframe.referrerPolicy = "unsafe-url";
var body = document.getElementsByTagName("body")[0];
body.appendChild(iframe); // Fetch the image using the complete URL as the referrer
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Referrer Policy', '#referrer-policy-delivery-referrer-attribute', 'referrerpolicy attribute')}}</td>
   <td>{{Spec2('Referrer Policy')}}</td>
   <td><code>referrerPolicy</code> 属性の追加。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<p>{{Compat("api.HTMLIFrameElement.referrerPolicy")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li>{{domxref("HTMLAnchorElement.referrerPolicy")}} と {{domxref("HTMLAreaElement.referrerPolicy")}}、{{domxref("HTMLAreaElement.referrerPolicy")}}。</li>
</ul>
