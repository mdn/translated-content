---
title: 431 Request Header Fields Too Large
slug: Web/HTTP/Status/431
tags:
  - 响应状态码
  - 响应码
  - 客户端错误
  - 状态码
translation_of: Web/HTTP/Status/431
---
<div>{{HTTPSidebar}}</div>

<p>响应码 <code><strong>431 Request Header Fields Too Large</strong></code> 表示由于请求中的首部字段的值过大，服务器拒绝接受客户端的请求。客户端可以在缩减首部字段的体积后再次发送请求。</p>

<p>该响应码可以用于首部总体体积过大的情况，也可以用于单个首部体积过大的情况。</p>

<p>这种错误不应该出现于经过良好测试的投入使用的系统当中，而是更多出现于测试新系统的时候</p>

<h2 id="状态">状态</h2>

<pre class="syntaxbox">431 Request Header Fields Too Large</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="相关内容">相关内容</h2>

<ul>
 <li>{{Glossary("Request header")}}</li>
</ul>
