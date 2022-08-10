---
title: 原因：CORS 请求不是 HTTP
slug: Web/HTTP/CORS/Errors/CORSRequestNotHttp
tags:
  - CORS
  - 同源规则
  - 安全
  - 错误
translation_of: Web/HTTP/CORS/Errors/CORSRequestNotHttp
---
<p>{{HTTPSidebar}}</p>

<h2 id="原因">原因</h2>

<pre class="syntaxbox">原因: CORS 请求不是 HTTP</pre>

<h2 id="哪里出错了？">哪里出错了？</h2>

<p>{{Glossary("CORS")}} 请求只能使用 HTTPS URL 方案，但请求指定的 URL 可能是不同类型。这种情况经常发生在 URL 指定本地文件，例如使用了 <code>file:///</code> 的 URL。</p>

<p>要解决此问题，请确保在发出涉及 CORS 的请求时使用 HTTPS URL，例如 {{domxref("XMLHttpRequest")}}，<a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">Fetch</a> API，或 Web Fonts（<code>@font-face</code>），或 <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL">WebGL 纹理</a>, 或 XSL 样式表。</p>

<h3 id="自_Firefox_68_本地文件安全性的改变">自 Firefox 68 本地文件安全性的改变</h3>

<p>当用户在 Firefox 67 或更早版本中使用 <code>file:///</code> URI 打开页面时，页面来源被定义为打开页面的目录。同一目录及其子目录中的资源均被视为具有相同的来源，符合 CORS 同源规则。</p>

<p>为响应 <a href="https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730">CVE-2019-11730</a>，Firefox 68 及更高版本中定义，使用 <code>file:///</code> URL 打开页面的来源唯一。 因此，同一目录或其子目录中的其他资源不再满足 CORS 同源规则。这个新的表现通过 <code>privacy.file_unique_origin</code> 这一首选项控制，默认启用。</p>

<h2 id="参考">参考</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/HTTP/CORS/Errors">CORS 错误</a></li>
 <li>术语：{{Glossary("CORS")}}</li>
 <li><a href="/zh-CN/docs/Web/HTTP/CORS">CORS 介绍</a></li>
 <li><a href="/zh-CN/docs/Learn/Common_questions/What_is_a_URL">什么是 URL？</a></li>
</ul>
