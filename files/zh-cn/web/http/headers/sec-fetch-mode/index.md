---
title: Sec-Fetch-Mode
slug: Web/HTTP/Headers/Sec-Fetch-Mode
translation_of: Web/HTTP/Headers/Sec-Fetch-Mode
---
<p>{{HTTPSidebar}}</p>

<p><strong><code>Sec-Fetch-Mode</code></strong> 获取元数据标头表明了一个请求的模式。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Header type</th>
   <td>{{Glossary("Fetch Metadata Request Header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>只要包含前缀 <code>Sec-</code> 都属于应用程序禁止修改的 HTTP 消息头，用户代理保留全部对它们的控制权</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("CORS-safelisted request header")}}</th>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="语法">语法</h2>

<pre class="syntaxbox notranslate">Sec-Fetch-Mode: cors
Sec-Fetch-Mode: navigate
Sec-Fetch-Mode: nested-navigate
Sec-Fetch-Mode: no-cors
Sec-Fetch-Mode: same-origin
Sec-Fetch-Mode: websocket
</pre>

<h2 id="值">值</h2>

<dl>
 <dt><code>cors</code></dt>
 <dd>TBD</dd>
 <dt><code>navigate</code></dt>
 <dd>TBD</dd>
 <dt><code>nested-navigate</code></dt>
 <dd>TBD</dd>
 <dt><code>no-cors</code></dt>
 <dd>TBD</dd>
 <dt><code>same-origin</code></dt>
 <dd>TBD</dd>
 <dt><code>websocket</code></dt>
 <dd>TBD</dd>
</dl>

<h2 id="示例">示例</h2>

<p>暂时没有内容</p>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat}}</p>

<h2 id="另请参阅">另请参阅</h2>

<ul>
 <li>{{HTTPHeader("Sec-Fetch-Site")}}</li>
 <li>{{HTTPHeader("Sec-Fetch-User")}}</li>
 <li>{{HTTPHeader("Sec-Fetch-Dest")}}</li>
</ul>
