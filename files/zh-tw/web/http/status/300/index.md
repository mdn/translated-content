---
title: 300 Multiple Choices
slug: Web/HTTP/Status/300
translation_of: Web/HTTP/Status/300
---
<div>{{HTTPSidebar}}</div>

<p>HTTP <code><strong>300 Multiple Choices</strong></code> 重定向回應碼代表該請求具有超過一種可能的回應。用戶代理或使用者應該從中挑選一個。由於不存在標準化的選擇回應方式，此回應碼非常少被使用。</p>

<p>若是伺服端有偏好的選擇，則應該產生 {{HTTPHeader("Location")}} 標頭。</p>

<h2 id="狀態">狀態</h2>

<pre class="syntaxbox">300 Multiple Choices
</pre>

<h2 id="規範">規範</h2>

{{Specifications}}

<h2 id="參見">參見</h2>

<ul>
 <li>{{HTTPStatus("301")}} <code>Moved Permanently</code></li>
 <li>{{HTTPStatus("302")}} <code>Found</code>, the temporary redirect</li>
 <li>{{HTTPStatus("308")}} <code>Permanent Redirect</code></li>
</ul>
