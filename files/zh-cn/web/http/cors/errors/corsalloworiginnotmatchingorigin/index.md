---
title: 原因：CORS 头 'Access-Control-Allow-Origin'与'xyz'不匹配
slug: Web/HTTP/CORS/Errors/CORSAllowOriginNotMatchingOrigin
translation_of: Web/HTTP/CORS/Errors/CORSAllowOriginNotMatchingOrigin
---
<div>{{HTTPSidebar}}</div>

<h2 id="原因">原因</h2>

<pre class="syntaxbox">原因：CORS 头 'Access-Control-Allow-Origin'与'xyz'不匹配</pre>

<h2 id="出了什么问题">出了什么问题？</h2>

<p>简而言之，发出请求的原点与 {{HTTPHeader("Access-Control-Allow-Origin")}} 标题允许的任何来源都不匹配。</p>

<p>如果响应包含多个 <code>Access-Control-Allow-Origin</code> 标头，也会发生此错误。</p>

<p>如果您的代码使用 CORS 请求访问的服务在您的控制之下，请确保将其配置为将其来源包含在其 <code>Access-Control-Allow-Origin</code> 标头中，并且响应中仅包含一个此类标头。 标题本身接受逗号描述的起源列表，因此添加新的起源并不困难。</p>

<p>例如，在 Apache 中，将以下行添加到服务器的配置中（在相应的 <code>&lt;Directory&gt;</code>，<code>&lt;Location&gt;</code>，<code>&lt;Files&gt;</code> 或 <code>&lt;VirtualHost&gt;</code> 部分中）。 配置通常位于 <code>.conf</code> 文件中（<code>httpd.conf</code> 和 <code>apache.conf</code> 是这些文件的通用名称），或者位于 <code>.htaccess</code> 文件中。</p>

<pre>Header set Access-Control-Allow-Origin '<em>origin-list</em>'</pre>

<p>在 Nginx 中，对应的配置为：</p>

<pre>add_header 'Access-Control-Allow-Origin' '<em>origin-list</em>'</pre>

<h2 id="查看更多">查看更多</h2>

<ul>
 <li><a href="/en-US/docs/Web/HTTP/CORS/Errors">CORS 错误</a></li>
 <li>Glossary: {{Glossary("CORS")}}</li>
 <li><a href="/en-US/docs/Web/HTTP/CORS">CORS 介绍</a></li>
 <li><a href="https://enable-cors.org/server.html">开启 CORS: 我希望在自己的服务器上添加对 CORS 的支持</a></li>
</ul>
