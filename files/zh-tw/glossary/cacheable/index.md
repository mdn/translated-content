---
title: 可緩存
slug: Glossary/cacheable
tags:
  - 緩存
  - 術語表
translation_of: Glossary/cacheable
---
<p><strong>可緩存</strong>的響應是可被緩存的HTTP 響應，它被存儲以供稍後檢索和使用，從而將新的請求保存在伺服器。不是所有的 HTTP 響應都可以被緩存，可以被緩存的 HTTP 響應需滿足如下列條件:</p>

<ul>
 <li>請求中使用的方法本身是可以被緩存的，如 {{HTTPMethod("GET")}} 或 {{HTTPMethod("HEAD")}} 方法。如果下達了新的指示，響應 {{HTTPMethod("POST")}} 方法也可以被緩存，但這種實施方式極爲罕見。其他方法，如： {{HTTPMethod("PUT")}} 或 {{HTTPMethod("DELETE")}} 都不可以被緩存，同樣他們的處理結果也不可以。</li>
 <li>應用程式是會緩存已知的響應的狀態碼，并且被認爲是可緩存的。這些可緩存的狀態碼如下： {{HTTPStatus("200")}}, {{HTTPStatus("203")}}, {{HTTPStatus("204")}}, {{HTTPStatus("206")}}, {{HTTPStatus("300")}}, {{HTTPStatus("301")}}, {{HTTPStatus("404")}}, {{HTTPStatus("405")}}, {{HTTPStatus("410")}}, {{HTTPStatus("414")}}, 和 {{HTTPStatus("501")}}.</li>
 <li>響應中沒有指定的頭部，如 {{HTTPHeader("Cache-Control")}}，它可以阻止緩存。</li>
</ul>

<p>請注意一些不緩存請求/響應到指定的 URI 可能會導致相同 URI 上以前的緩存響應失效。例如，  {{HTTPMethod("PUT")}} 到 pageX.html 將使相同 URI 下所有的 {{HTTPMethod("GET")}} 或 {{HTTPMethod("HEAD")}} 請求緩存失效。</p>

<p>同樣的,如果請求的方法和響應的狀態都可以被緩存，那請求的響應也都將可以被緩存：</p>

<pre>GET /pageX.html HTTP/1.1
(…)

200 OK
(…)
</pre>

<p>{{HTTPMethod("PUT")}} 請求不能被緩存. 此外，它還將導致所有來源為 {{HTTPMethod("HEAD")}} or {{HTTPMethod("GET")}} 相同的 URI 緩存數據無效 :</p>

<pre>PUT /pageX.html HTTP/1.1
(…)

200 OK
(…)
</pre>

<p>指定的 {{HTTPHeader("Cache-Control")}} 頭部在響應中可以阻止緩存：</p>

<pre>GET /pageX.html HTTP/1.1
(…)

200 OK
Cache-Control: no-cache
(…)</pre>

<h2 id="了解更多">了解更多</h2>

<h3 id="基礎知識">基礎知識</h3>

<ul>
 <li>HTTP 規範中 <a href="https://tools.ietf.org/html/rfc7231#section-4.2.3">可緩存</a> 的定義.</li>
</ul>

<h3 id="技術資訊">技術資訊</h3>

<ul>
 <li>常見緩存方法描述: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}</li>
 <li>常見不可緩存方法描述: {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, often {{HTTPMethod("POST")}}</li>
</ul>
