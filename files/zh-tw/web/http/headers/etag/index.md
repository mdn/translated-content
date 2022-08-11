---
title: ETag
slug: Web/HTTP/Headers/ETag
tags:
  - HTTP
  - Reference
  - Response
  - header
---
<div>{{HTTPSidebar}}</div>

<p><strong><code>ETag</code></strong> 是 HTTP 回應標頭，用來標誌資源的版本。它可以使快取機制更有效率並節省頻寬，
  畢竟資料沒有變動的話，伺服器就不需要再次傳回整份資料。
  而且，它還可以用來預防多人同步更新資料時覆蓋掉彼此的資料（<a href="#avoiding_mid-air_collisions">"mid-air collisions"</a>）。</p>

<p>如果一個網址的資源有更新，就<em>必須</em>重新產生它的 <code>Etag</code> 值。
  比較前後版本的 ETag 就能知道資源有沒有變化，所以 Etags 的作用就跟指紋一樣。有些伺服器便會把它用在追蹤用途上，而且可能會永久保存這些資訊。</p>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: html">ETag: W/"&lt;etag_value&gt;"
ETag: "&lt;etag_value&gt;"
</pre>

<h2 id="Directives">Directives</h2>

<dl>
  <dt><code>W/</code> {{optional_inline}}</dt>
  <dd><code>'W/'</code> （區分大小寫）表示資源使用 <a
      href="/en-US/docs/Web/HTTP/Conditional_requests#weak_validation">Weak etags</a>。
    Weak etags 很容易產生，但較不適合用在版本比對；Strong etags 很難有效率的產生，但很適合用在版本比對。
    同一資源的兩個 weak etags 一致時，可以視為是同個版本，但其內容並非分毫不差。
    比如說 weak etags 可以用在 <a
      href="/en-US/docs/Web/HTTP/Headers/Accept-Ranges">byte range requests</a> 上預防快取，不過帶有 strong etags 的請求仍然可能被快取住。</dd>
  <dt>"&lt;etag_value&gt;"</dt>
  <dd>代表資源的版本。它的格式是由雙引號包著的 ASCII 字元組成的，像是： <code>"675af34563dc-tr34"</code>。
    產生 <code>ETag</code> 值的方式沒有一定。不過通常會是資料的 hash 值、最後修改時間的 hash 值，或者是版本號。
    比如說，MDN 就是使用 wiki 文章的十六進位內文 hash 值。</dd>
</dl>

<h2 id="Examples">範例</h2>

<pre>ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"</pre>

<h3 id="Avoiding_mid-air_collisions">避免空中碰撞</h3>

<p>有了 <code>ETag</code> 以及 {{HTTPHeader("If-Match")}} 標頭，你可以偵測空中碰撞。</p>

<p>比如說，在進入 wiki 編輯頁時，當下可以把內文的 hash 值放到 HTTP 回應中的 <code>Etag</code> 標頭：</p>

<pre>ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"</pre>

<p>當儲存更新時， {{HTTPMethod("POST")}} 請求就會有一個 {{HTTPHeader("If-Match")}} 標頭，其值為 <code>ETag</code>
  的值，這樣便可以用來檢查資料新鮮度。</p>

<pre>If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"</pre>

<p>如果 hash 沒有對上，就代表文件已經在你的編輯過程中，被別人先修改了，便會回傳
  {{HTTPStatus("412")}} <code>Precondition Failed</code> 錯誤。</p>

<h3 id="Caching_of_unchanged_resources">快取沒更新過的資源</h3>

<p>另一個 <code>ETag</code> 標頭的好用處是用來快取沒更新過的資源。如果一位使用者再次造訪一個網址（而且前一次有設定 <code>ETag</code>），而資源已經<em>過期</em>了（舊到不能用），
  則客戶端會把 <code>ETag</code> 的值放在 {{HTTPHeader("If-None-Match")}} 標頭內傳送：</p>

<pre>If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"</pre>

<p>伺服器會比對客戶端傳來的 <code>ETag</code> （放在 <code>If-None-Match</code> 標頭中） 與該資源在伺服器上的現有版本的 <code>ETag</code> 值，如果兩者一樣（代表沒更新過），
  伺服器便會傳回 {{HTTPStatus("304")}} <code>Not Modified</code> 狀態且不帶資料，
  這就可以讓客戶端知道自己快取住的版本仍然可用（可視為是<em>新鮮的</em>）。</p>

<h2 id="Specifications">規格</h2>

{{Specifications}}

<h2 id="Browser_compatibility">瀏覽器相容性</h2>

<p>{{Compat("http.headers.ETag")}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{HTTPHeader("If-Match")}}</li>
  <li>{{HTTPHeader("If-None-Match")}}</li>
  <li>{{HTTPStatus("304")}}<code> Not Modified</code></li>
  <li>{{HTTPStatus("412")}}<code> Precondition Failed</code></li>
  <li>
    <p><a href="https://www.w3.org/1999/04/Editing/">W3C Note: Editing the Web – Detecting
        the Lost Update Problem Using Unreserved Checkout</a></p>
  </li>
</ul>
