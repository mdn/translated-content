---
title: CORS
slug: Glossary/CORS
tags:
  - 安全
  - 術語表
translation_of: Glossary/CORS
---
<p><strong>CORS</strong>（跨來源資源共享）是瀏覽器技術規範，用來傳輸 <a href="/zh-TW/docs/Web/HTTP/Headers">HTTP 標頭</a>，判斷阻擋或允許不同來源網域的資源存取。</p>

<p><a href="/zh-TW/docs/Web/Security/Same-origin_policy">同源安全政策（same-origin security policy）</a>，預設會禁止跨網域的資源請求。CORS 賦予網站伺服器跨網域存取控制能力，使其能安全地跨網域傳輸資料。</p>

<h2 id="了解更多">了解更多</h2>

<h3 id="一般知識">一般知識</h3>

<ul>
 <li>MDN 上的 <a href="/zh-TW/docs/Web/HTTP/Access_control_CORS">HTTP 存取控制（CORS）</a></li>
 <li>維基百科上的 {{Interwiki("wikipedia", "Cross-origin resource sharing")}}</li>
</ul>

<h3 id="CORS_標頭">CORS 標頭</h3>

<dl>
 <dt>{{HTTPHeader("Access-Control-Allow-Origin")}}</dt>
 <dd>表示回傳資料能否共享（布林值）。</dd>
 <dt>{{HTTPHeader("Access-Control-Allow-Credentials")}}</dt>
 <dd>指定為 <code>true</code> 時，瀏覽器可以傳送或接收敏感資訊（HTTP Cookie）。</dd>
 <dt>{{HTTPHeader("Access-Control-Allow-Headers")}}</dt>
 <dd>指定可以出現在真實請求的 HTTP 標頭，用來回應預檢請求。</dd>
 <dt>{{HTTPHeader("Access-Control-Allow-Methods")}}</dt>
 <dd>指定存取資源所允許的 HTTP 方法，用來回應預檢請求。</dd>
 <dt>{{HTTPHeader("Access-Control-Expose-Headers")}}</dt>
 <dd>表示瀏覽器允許存取的標頭白名單，例如 <code>X-My-Header, X-My-Custom-Header</code>。</dd>
 <dt>{{HTTPHeader("Access-Control-Max-Age")}}</dt>
 <dd>表示預檢請求的回傳結果可以被快取多久（秒）。</dd>
 <dt>{{HTTPHeader("Access-Control-Request-Headers")}}</dt>
 <dd>用於預檢請求，讓伺服器知道後續真實請求夾帶的 HTTP 標頭。</dd>
 <dt>{{HTTPHeader("Access-Control-Request-Method")}}</dt>
 <dd>用於預檢請求，讓伺服器端知道後續真實請求使用的 <a href="/zh-TW/docs/Web/HTTP/Methods">HTTP 方法</a>。</dd>
 <dt>{{HTTPHeader("Origin")}}</dt>
 <dd>告訴伺服器請求來源之網域。</dd>
</dl>

<h3 id="技術參考">技術參考</h3>

<ul>
 <li><a href="https://fetch.spec.whatwg.org">Fetch specification</a></li>
</ul>
