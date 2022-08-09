---
title: 301 Moved Permanently
slug: Web/HTTP/Status/301
translation_of: Web/HTTP/Status/301
---
<div>{{HTTPSidebar}}</div>

<p>HTTP <code><strong>301 Moved Permanently</strong></code> 重定向回應碼代表所請求的資源已經被明確移動到 {{HTTPHeader("Location")}} 標頭所指示的 URL。瀏覽器會重新導向到此頁面，而搜尋引擎則會更新該資源的連結。用 SEO 的話來說，就是連結養分（link-juice）把你送到了新的 URL 去。</p>

<p>儘管規範要求當執行重新導向時，請求方法 (以及主體) 不應該被更動，但並非所有的用戶代理皆遵循它 -- 你依然可以找到具有此類漏洞的軟體。因此，推薦只使用 <code>301</code> 回應碼作為 {{HTTPMethod("GET")}} 或 {{HTTPMethod("HEAD")}} 方法的回應， 另外使用 {{HTTPStatus("308", "308 Permanent Redirect")}} 作為 {{HTTPMethod("POST")}} 方法的替代，因為請求方法的更動在此狀態中是被明確禁止的。</p>

<h2 id="狀態">狀態</h2>

<pre class="syntaxbox">301 Moved Permanently</pre>

<h2 id="範例">範例</h2>

<h3 id="用戶端請求">用戶端請求</h3>

<pre>GET /index.php HTTP/1.1
Host: www.example.org</pre>

<h3 id="伺服端回應">伺服端回應</h3>

<pre>HTTP/1.1 301 Moved Permanently
Location: http://www.example.org/index.asp</pre>

<h2 id="規範">規範</h2>

{{Specifications}}

<h2 id="瀏覽器相容性">瀏覽器相容性</h2>



<p>{{Compat("http.status.301")}}</p>

<h2 id="參見">參見</h2>

<ul>
 <li>{{HTTPStatus("308", "308 Permanent Redirect")}}</li>
 <li>{{HTTPStatus("302", "302 Found")}}, 臨時重新導向</li>
</ul>
