---
title: 202 Accepted
slug: Web/HTTP/Status/202
tags:
  - 响应成功
  - 状态码
translation_of: Web/HTTP/Status/202
---
<div>{{HTTPSidebar}}</div>

<p>响应状态码<strong> 202 Accepted</strong> 表示服务器端已经收到请求消息，但是尚未进行处理。但是对于请求的处理确实无保证的，即稍后无法通过 HTTP 协议给客户端发送一个异步请求来告知其请求的处理结果。这个状态码被设计用来将请求交由另外一个进程或者服务器来进行处理，或者是对请求进行批处理的情形。</p>

<h2 id="状态">状态</h2>

<pre class="syntaxbox">202 Accepted</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="相关内容">相关内容</h2>

<ul>
 <li>{{HTTPHeader("Accept")}}</li>
</ul>
