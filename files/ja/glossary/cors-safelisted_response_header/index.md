---
title: CORS-safelisted response header (CORS セーフリストレスポンスヘッダー)
slug: Glossary/CORS-safelisted_response_header
tags:
  - CORS
  - Fetch
  - Glossary
  - HTTP
  - 用語集
translation_of: Glossary/CORS-safelisted_response_header
---
<p><span class="seoSummary"><em>CORS セーフリストレスポンスヘッダー</em> は、セーフリストに掲載されている <a href="/ja/docs/Web/HTTP/Headers">HTTP ヘッダー</a>であり、レスポンスが CORS によって処理されたときに、 ({{HTTPHeader("Access-Control-Expose-Headers")}} に掲載された場合と同様に) <em>安全</em>であると見なされ、フィルタリングされないものです。</span> 既定でセーフリストには、以下のレスポンスヘッダーが含まれています。</p>

<ul>
 <li>{{HTTPHeader("Cache-Control")}}</li>
 <li>{{HTTPHeader("Content-Language")}}</li>
 <li>{{HTTPHeader("Content-Type")}}</li>
 <li>{{HTTPHeader("Expires")}}</li>
 <li>{{HTTPHeader("Last-Modified")}}</li>
 <li>{{HTTPHeader("Pragma")}}</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Extending_the_safelist" name="Extending_the_safelist">セーフリストの拡張</h3>

<p>{{HTTPHeader("Access-Control-Expose-Headers")}} ヘッダーを使用して、CORS セーフリストレスポンスヘッダーのリストを拡張することができます。</p>

<pre>Access-Control-Expose-Headers: X-Custom-Header, Content-Length</pre>

<section id="Quick_links">
<ol>
 <li>関連情報
  <ol>
   <li><a href="/ja/docs/Web/HTTP">HTTP</a></li>
   <li><a href="/ja/docs/Web/HTTP/Headers">HTTP headers</a></li>
   <li>{{HTTPHeader("Access-Control-Expose-Headers")}}</li>
  </ol>
 </li>
 <li><a href="/ja/docs/Glossary">用語集</a>
  <ol>
   <li>{{Glossary("CORS")}}</li>
   <li>{{Glossary("CORS-safelisted_request_header", "CORS セーフリストリクエストヘッダー")}}</li>
   <li>{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</li>
   <li>{{Glossary("Request header", "リクエストヘッダー")}}</li>
  </ol>
 </li>
</ol>
</section>
